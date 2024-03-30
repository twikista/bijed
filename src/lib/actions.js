'use server'

import {
  handleServerSideValidationError,
  hashPassword,
  signJWT,
  validatePassword,
  verifyJWT,
} from './util'
import uniqid from 'uniqid'
import { revalidatePath } from 'next/cache'
import { connectDB } from './mongoose/config'
import { Article, Issue, User } from './mongoose/models'
import { uploadPdfToStorage, removePdfFromStorage } from './firebase/services'
import { redirect } from 'next/navigation'
import { signIn, signOut } from '../../auth'
import { isRedirectError } from 'next/dist/client/components/redirect'
import {
  compileActivationTemplate,
  compileResetPasswordEmailTemplate,
  sendEmail,
} from './emailServices'
import {
  signinFormSchema,
  newUserSchema,
  activateAccountSchema,
  forgetPasswordSchema,
  passwordSchema,
} from './schema'

//create new issue
export const addIssue = async (formData) => {
  const { issueNumber, volume } = formData
  console.log(issueNumber, volume)
  const issueData = {
    issueNumber,
    volume,
    issueYear: new Date().getFullYear(),
    ref: `volume-${volume}-issue-${issueNumber}`,
    issueTitle: `Vol. ${volume} No. ${issueNumber} (${new Date().getFullYear()})`,
    published: false,
    publishDate: new Date(),
  }

  try {
    connectDB()
    const newIssue = new Issue(issueData)
    const savedIssue = await newIssue.save()
    console.log(issueData)
    console.log(savedIssue)
  } catch (error) {
    console.log(error)
  }
  revalidatePath('/archive')
  revalidatePath('/dashboard/issues')
}

//publish issue
export const publishIssue = async (issueRef) => {
  console.log(issueRef)
  console.log('i ran here')
  const date = new Date()
  try {
    connectDB()
    const publishedIssue = await Issue.findOneAndUpdate(
      { ref: issueRef },
      { $set: { published: true, publishDate: date } },
      { new: true }
    )
    console.log(publishIssue)
    if (publishedIssue.length) {
      throw new Error('Error publishing Journal issue')
    }

    const publishedArticles = await Article.updateMany(
      { ref: issueRef },
      { $set: { published: true, publishDate: date } }
    )
    console.log(publishedArticles.acknowledged)
    if (!publishedArticles.acknowledged) {
      throw new Error('Error publishing Journal Issue')
    }
    revalidatePath(`/dashboard/issues/${issueRef}`)
    revalidatePath(`/dashboard/archive/${issueRef}`)
    return { ok: true }
  } catch (error) {
    console.log(error)
  }
}

export async function deleteIssue(id) {
  try {
    connectDB()
    const deletedIssue = await Issue.findByIdAndDelete(JSON.parse(id))
    if (deletedIssue._id !== undefined) {
      revalidatePath('/archive')
      revalidatePath('/dashboard/issues')
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log(error)
  }
}

export async function updateIssue(id, initialValue, formData) {
  const { issueNumber, volume } = formData
  console.log(issueNumber, volume)
  const issueData = {
    ...initialValue,
    issueNumber,
    volume,
    ref: `volume-${volume}-issue-${issueNumber}`,
    issueTitle: `Vol. ${volume} No. ${issueNumber} (${new Date().getFullYear()})`,
  }
  console.log(issueData)
  console.log('got called')

  try {
    connectDB()
    const updatedIssue = await Issue.findByIdAndUpdate({ _id: id }, issueData, {
      new: true,
    })
    console.log(updatedIssue)
    if (updatedIssue._id !== undefined) {
      revalidatePath('/dashboard/issues')
      revalidatePath('/archive')
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log(error)
  }
}

export async function deleteArticle(id) {
  connectDB()
  let ref = null
  try {
    const deletedArticle = await Article.findByIdAndDelete(id)

    if (deletedArticle._id !== undefined) {
      await Issue.updateOne(
        { ref: deletedArticle.ref },
        { $pull: { articles: deletedArticle._id } }
      )
      await removePdfFromStorage(deletedArticle.pdfUrl)

      revalidatePath(`/dashboard/issues/${deletedArticle.ref}`)
      // revalidatePath('/dashboard/articles')
      revalidatePath(`/archive/${deletedArticle.ref}`)
      ref = deletedArticle.ref

      return { ok: true }
    }
    return { ok: false }
  } catch (error) {
    console.log(error)
  } finally {
    console.log(`ref:${ref}`)
    console.log(`ref:${ref}`)
    redirect(`/dashboard/issues/${ref}`)
  }
}

export async function updateArticle(initialValue, formData, url) {
  //update article fields to reflect changes by user
  const articleData = {
    ...initialValue,
    slug: `${formData.startPage}-${formData.endPage}`,
    ref: `volume-${formData.volume}-issue-${formData.issue}`,
    keywords: formData.keywords,
    pdfUrl: url !== null ? url : initialValue.pdfUrl,
  }

  try {
    connectDB()
    //update article in database
    const updatedArticle = await Article.findByIdAndUpdate(
      { _id: initialValue._id },
      articleData,
      {
        new: true,
      }
    )

    //revalidate all routes to reflect updated data
    if (updatedArticle._id !== undefined) {
      revalidatePath(`/archive/${updatedArticle.ref}`)
      revalidatePath(`/dashboard/issues/${updatedArticle.ref}`)
      // revalidatePath('dashboard/articles')
      return { ok: true }
    } else {
      return { ok: false }
    }
  } catch (error) {
    console.log(error)
  }
}

export async function createArticle(formData, url, params) {
  const { pdfFile, ...articleData } = formData

  //add computed fields to article object
  articleData.pdfUrl = url
  articleData.slug = `${formData.startPage}-${formData.endPage}`
  articleData.ref = `volume-${formData.volume}-issue-${formData.issue}`
  articleData.published = params.published ? true : false
  articleData.publishDate = new Date()

  try {
    connectDB()
    //add new article to database
    const newArticle = new Article(articleData)
    const savedArticle = await newArticle.save()
    console.log(savedArticle)

    //get issue
    // const articleIssue = await Issue.updateOne({
    //   volume: `${savedArticle.volume}`,
    //   issueNumber: `${savedArticle.issue}`,
    // },{$push:{articles:savedArticle._id}} )

    //add article to issue
    // articleIssue.articles = articleIssue.articles.concat(savedArticle._id)
    // await articleIssue.save()
    await Issue.updateOne(
      {
        volume: `${savedArticle.volume}`,
        issueNumber: `${savedArticle.issue}`,
      },
      { $push: { articles: savedArticle._id } }
    )

    if (savedArticle._id !== undefined) {
      //revalidate affected routes to reflect changes
      revalidatePath(`/archive/${savedArticle.ref}`)
      revalidatePath(`/dashboard/issues/${savedArticle.ref}`)
      // revalidatePath('dashboard/articles')
      return { ok: true }
    } else {
      return { ok: false }
    }
  } catch (error) {
    console.log(error)
  }
}

export async function signup(formData) {
  const parsedData = newUserSchema.safeParse(formData)
  if (!parsedData.success) {
    const validationError = Object.fromEntries(
      parsedData.error?.issues?.map((issue) => [
        issue.path[0],
        issue.message,
      ]) || []
    )
    return { error: validationError, errorType: 'validationError' }
  }

  try {
    connectDB()
    const modifiedFormData = {
      ...parsedData.data,
      isAdmin: false,
      password: uniqid.time(),
    }
    const user = await User.findOne({ email: modifiedFormData.email })
    if (user) {
      console.log(`${user.email} already exist`)
      return { ok: false, error: 'User already exist', errorType: 'other' }
    }
    console.log('formdata.paddword: ', modifiedFormData.password)
    const hashedPassword = await hashPassword(modifiedFormData.password)

    const userObjectWithHashedPassword = {
      ...modifiedFormData,
      password: hashedPassword,
    }
    const newUser = new User(userObjectWithHashedPassword)
    const savedUser = await newUser.save()
    const parsedSavedUser = JSON.parse(JSON.stringify(savedUser))
    const { password, ...savedUserWithoutPassword } = parsedSavedUser
    console.log(savedUser)

    const encryptedUserId = signJWT({ id: savedUser._id })
    const activationUrl = `${process.env.NEXT_URL}/auth/account-activation/${encryptedUserId}`
    const body = compileActivationTemplate({
      name: modifiedFormData.firstName,
      email: modifiedFormData.email,
      password: modifiedFormData.password,
      url: activationUrl,
      link: `${process.env.NEXT_URL}/auth/login`,
    })

    const sendEmailResult = await sendEmail({
      to: modifiedFormData.email,
      subject: 'BIJED - Activate Your Account',
      body,
      // from: `BIJED Admin <${process.env.SMTP_EMAIL}>`,
    })
    // console.log('sent', sent)

    if (sendEmailResult.successful) {
      return { ok: true }
    } else {
      return {
        ok: false,
        error: 'Something went wrong. Please ensure email is valid',
        errorType: 'other',
      }
    }
  } catch (error) {
    console.log(error)
    return { ok: false, error: 'Something went wrong', errorType: 'other' }
  }
}

export async function activateUser(id, formData) {
  const parsedData = activateAccountSchema.safeParse(formData)
  if (!parsedData.success) {
    const validationError = handleServerSideValidationError(parsedData)
    return { ok: false, error: validationError, errorType: 'validationError' }
  }
  // const data = Object.fromEntries(formData)
  const verifiedToken = verifyJWT(id)
  console.log('decoded Id: ', verifiedToken.id)
  console.log('formData: ', formData.defaultPassword)
  console.log('id: ', id)
  try {
    connectDB()
    const user = await User.findById(verifiedToken.id)

    if (!user) {
      console.log('Account does not exist')
      return { ok: false, error: 'Account does not exist', errorType: 'other' }
    }

    if (user.isActivated) {
      console.log('Account already activated')
      return {
        ok: false,
        error: 'Account already activated',
        errorType: 'other',
      }
    }
    console.log('user password: ', user.password)

    const isPasswordValid = await validatePassword(
      formData.defaultPassword,
      user.password
    )

    if (!isPasswordValid) {
      console.log('Invalid credentials')
      return { ok: false, error: 'Invalid password', errorType: 'other' }
    }

    const hashedPassword = await hashPassword(formData.newPassword)
    const updatedUser = await User.findByIdAndUpdate(
      verifiedToken.id,
      {
        $set: { password: hashedPassword, isActivated: true },
      },
      { new: true }
    )
    console.log('updated:', updatedUser)

    console.log('isValid: ', isPasswordValid)
    console.log('iser', user)
    if (updatedUser) return { ok: true }
  } catch (error) {
    console.log(error)
    return { ok: true, error: 'Something went wrong!', errorType: 'other' }
  }
}

export async function authenticate(formData) {
  console.log('from server', formData)
  // const formData = Object.fromEntries(data)
  const parsedData = signinFormSchema.safeParse(formData)
  // If validation errors, map them into an object

  console.log('parsed data', parsedData?.error?.issues[0])
  try {
    if (parsedData.success) {
      await signIn('credentials', parsedData.data)
    }

    const validationError = Object.fromEntries(
      parsedData.error?.issues?.map((issue) => [
        issue.path[0],
        issue.message,
      ]) || []
    )
    return { ok: false, errors: validationError, errorType: 'validationError' }
  } catch (error) {
    if (error && error?.type?.includes('CredentialsSignin')) {
      return { ok: false, error: 'Invalid credentials', errorType: 'authError' }
    }

    throw error
  }
}

export async function forgetPassword(formData) {
  // const data = Object.fromEntries(formData)
  // const email = formData.email
  const parsedData = forgetPasswordSchema.safeParse(formData)
  if (!parsedData.success) {
    const validationError = handleServerSideValidationError(parsedData)
    return { ok: false, error: validationError, errorType: 'validationError' }
  }
  // console.log(email)
  try {
    connectDB()
    const user = await User.findOne({ email: formData.email })
    if (!user) {
      console.log('user does not exist')
      return { ok: false, error: 'user does not exist', errorType: 'other' }
    }

    const encryptedUserId = signJWT({ id: user._id }, { expiresIn: '900000ms' })
    const resetPasswordUrl = `${process.env.NEXT_URL}/auth/password-reset/${encryptedUserId}`
    const body = compileResetPasswordEmailTemplate({
      name: user.firstName,
      url: resetPasswordUrl,
      link: `${process.env.NEXT_URL}/auth/login`,
    })

    const sendEmailResult = await sendEmail({
      to: user.email,
      subject: 'BIJED - Reset your Password',
      body,
    })
    if (sendEmailResult.successful) {
      return { ok: true }
    } else {
      return {
        ok: false,
        error: 'Something went wrong. Please ensure email is valid',
        errorType: 'other',
      }
    }
  } catch (error) {
    console.log(error)
    return { ok: false, error: 'Something went wrong', errorType: 'other' }
  }
}

export async function resetPassword(authToken, formData) {
  const parsedData = passwordSchema.safeParse(formData)
  if (!parsedData.success) {
    const validationError = handleServerSideValidationError(parsedData)
    return { ok: false, error: validationError, errorType: 'validationError' }
  }
  // console.log(formData)
  try {
    const newpassword = formData.password
    const { id, expired } = verifyJWT(authToken)
    console.log('id is: ', id, 'token has expired: ', expired)
    if (!id) {
      console.log('token does not exist')
      return { ok: false, error: 'user does not exist', errorType: 'other' }
    }
    // const userId = verfiedToken.id

    connectDB()
    const user = await User.findById(id)

    if (!user) {
      console.log('user does not exist')
      return { ok: false, error: 'user does not exist', errorType: 'other' }
    }

    const hashedPassword = await hashPassword(newpassword)
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: { password: hashedPassword } },
      { new: true }
    )
    if (updatedUser) {
      const { password, ...updatedUserWithoutPassword } = updatedUser
      console.log(updatedUserWithoutPassword)
      return {
        ok: true,
        data: JSON.parse(JSON.stringify(updatedUserWithoutPassword)),
      }
    }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      error: 'Something went wrong. please try again',
      errorType: 'other',
    }
  }
}

export async function logOut() {
  console.log('called from logOut')
  await signOut()
}
