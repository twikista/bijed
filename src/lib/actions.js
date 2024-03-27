'use server'

import { hashPassword, signJWT, validatePassword, verifyJWT } from './util'

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
import { signinFormSchema } from './schema'

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
  try {
    connectDB()

    const user = await User.findOne({ email: formData.email })
    if (user) {
      console.log(`${user.email} already exist`)
      return { error: 'user already exist' }
    }
    console.log('formdata.paddword: ', formData.password)
    const hashedPassword = await hashPassword(formData.password)

    const userObjectWithHashedPassword = {
      ...formData,
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
      name: formData.firstName,
      email: formData.email,
      password: formData.password,
      url: activationUrl,
      link: `${process.env.NEXT_URL}/auth/login`,
    })

    await sendEmail({
      to: formData.email,
      subject: 'BIJED - Activate Your Account',
      body,
      // from: `BIJED Admin <${process.env.SMTP_EMAIL}>`,
    })

    return {
      ok: true,
      data: savedUserWithoutPassword,
    }
  } catch (error) {
    console.log(error)
    return { ok: false, data: null }
  }
}

export async function activateUser(id, formData) {
  const data = Object.fromEntries(formData)
  const verifiedToken = verifyJWT(id)
  console.log('decoded Id: ', verifiedToken.id)
  console.log('formData: ', data.defaultPassword)
  console.log('id: ', id)
  try {
    connectDB()
    const user = await User.findById(verifiedToken.id)

    if (!user) {
      console.log('Account does not exist')
      return 'Account does not exist'
    }

    if (user.isActivated) {
      console.log('Account already activated')
      return 'Account already activated'
    }
    console.log('user password: ', user.password)

    const isPasswordValid = await validatePassword(
      data.defaultPassword,
      user.password
    )

    if (!isPasswordValid) {
      console.log('Invalid credentials')
      return 'Invalid password'
    }

    const hashedPassword = await hashPassword(data.newPassword)
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
  } catch (error) {
    console.log(error)
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

    const serverErrors = Object.fromEntries(
      parsedData.error?.issues?.map((issue) => [
        issue.path[0],
        issue.message,
      ]) || []
    )
    console.log(serverErrors)
    return { ok: false, errors: serverErrors, errorType: 'validationError' }

    // console.log('auth: ', isAuthenticated)
  } catch (error) {
    console.log('error', error.type)
    console.error(error)
    console.log('wiki wiki')
    if (error && error?.type?.includes('CredentialsSignin')) {
      return { ok: false, error: 'Invalid credentials', errorType: 'authError' }
    }

    // if (error.message.includes('CallbackRouteError')) {
    //   return cause?.error?.toString()
    // }

    throw error

    // if (isRedirectError(error)) {
    //   throw error
    // }
  }
}

export async function forgetPassword(formData) {
  const data = Object.fromEntries(formData)
  const email = data.email
  console.log(email)
  try {
    connectDB()
    const user = await User.findOne({ email })
    if (!user) {
      console.log('user does not exist')
      return { error: 'user does not exist' }
    }

    const encryptedUserId = signJWT({ id: user._id }, { expiresIn: '900000ms' })
    const resetPasswordUrl = `${process.env.NEXT_URL}/auth/password-reset/${encryptedUserId}`
    const body = compileResetPasswordEmailTemplate({
      name: user.firstName,
      url: resetPasswordUrl,
      link: `${process.env.NEXT_URL}/auth/login`,
    })

    const isEmailSent = await sendEmail({
      to: user.email,
      subject: 'BIJED - Reset your Password',
      body,
    })
    console.log(isEmailSent)
  } catch (error) {
    console.log(error)
  }
}

export async function resetPassword(idToken, formData) {
  // console.log(formData)
  try {
    const newpassword = formData.get('password')
    const { id, expired } = verifyJWT(idToken)
    console.log('id is: ', id, 'token has expired: ', expired)
    if (!id) {
      console.log('token does not exist')
      return { error: 'user does not exist' }
    }
    // const userId = verfiedToken.id

    connectDB()
    const user = await User.findById(id)

    if (!user) {
      console.log('user does not exist')
      return { error: 'user does not exist' }
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
  }
}

export async function logOut() {
  console.log('called from logOut')
  await signOut()
}
