'use server'

import {
  handleServerSideValidationError,
  hashPassword,
  replaceSpaceInTitleWithHyphen,
  signJWT,
  validatePassword,
  verifyJWT,
} from './util'
import uniqid from 'uniqid'
import { revalidatePath } from 'next/cache'
import { connectDB } from './mongoose/config'
import { Announcement, Article, Issue, User } from './mongoose/models'
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
  articleFormSchema,
  issueFormSchema,
  editArticleFormSchema,
  newArticleFormSchema,
  articleSchemaForServer,
  announcementSchema,
} from './schema'

//create new issue
export const addIssue = async (formData) => {
  const parsedData = issueFormSchema.safeParse(formData)
  if (!parsedData.success) {
    const validationError = handleServerSideValidationError(parsedData)
    return { ok: false, error: validationError, errorType: 'validationError' }
  }
  const { issueNumber, issueYear, volume } = parsedData.data
  console.log(issueNumber, issueYear, volume)
  const issueData = {
    issueNumber,
    volume,
    issueYear,
    ref: `volume-${volume}-issue-${issueNumber}`,
    issueTitle: `Vol. ${volume} No. ${issueNumber} (${new Date(
      issueYear
    ).getFullYear()})`,
    published: false,
    publishDate: new Date(),
  }

  try {
    connectDB()
    const newIssue = new Issue(issueData)
    const savedIssue = await newIssue.save()
    if (savedIssue._id !== null) {
      revalidatePath('/archive')
      revalidatePath('/dashboard/issues')
      return { ok: true }
    }
    console.log(issueData)
    console.log(savedIssue)
  } catch (error) {
    console.log(error)
    return { ok: false, error: 'Something went wrong', errorType: 'other' }
  }
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
  console.log('formdata-', formData)
  const parsedData = issueFormSchema.safeParse(formData)
  if (!parsedData.success) {
    const validationError = handleServerSideValidationError(parsedData)
    return { ok: false, error: validationError, errorType: 'validationError' }
  }
  const { issueNumber, issueYear, volume } = parsedData.data
  console.log('issueNumber-', issueNumber, ' volume-', volume)
  const issueData = {
    ...initialValue,
    ...parsedData.data,
    ref: `volume-${volume}-issue-${issueNumber}`,
    issueTitle: `Vol. ${volume} No. ${issueNumber} (${new Date(
      issueYear
    ).getFullYear()})`,
  }
  console.log('issueData-', issueData)
  console.log('got called')

  try {
    connectDB()
    const updatedIssue = await Issue.findByIdAndUpdate({ _id: id }, issueData, {
      new: true,
    })
    console.log(updatedIssue)
    if (updatedIssue._id === undefined)
      return { ok: false, error: 'Something went wrong', errorType: 'other' }
    //update all articles associated wtih an issue

    revalidatePath('/dashboard/issues')
    revalidatePath('/archive')
    return { ok: true }
  } catch (error) {
    console.log(error)
    return { ok: false, error: 'Something went wrong', errorType: 'other' }
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
    return { ok: false, error: 'Something went wrong', errorType: 'other' }
  } finally {
    console.log(`ref:${ref}`)
    console.log(`ref:${ref}`)
    redirect(`/dashboard/issues/${ref}`)
  }
}

export async function updateArticle(initialValue, formData, url) {
  console.log('URL-', formData)
  //validate form dtata from frontend
  const parsedData = articleSchemaForServer.safeParse(formData)
  if (!parsedData.success) {
    const validationError = handleServerSideValidationError(parsedData)
    return { ok: false, error: validationError, errorType: 'validationError' }
  }
  //update article fields to reflect changes by user
  const { data } = parsedData
  console.log('edit data-', data)
  const articleData = {
    ...initialValue,
    ...data,
    slug: `${data.startPage}-${data.endPage}`,
    ref: `volume-${data.volume}-issue-${data.issue}`,
    keywords: data.keywords
      .filter((i) => i.keyword !== '')
      .map((i) => i.keyword),
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

    if (updatedArticle._id === undefined) {
      return { ok: false, error: 'Something went wrong', errorType: 'other' }
    }
    //revalidate all routes to reflect updated data
    revalidatePath(`/archive/${updatedArticle.ref}`)
    revalidatePath(`/dashboard/issues/${updatedArticle.ref}`)
    // revalidatePath('dashboard/articles')
    return { ok: true }
  } catch (error) {
    console.log(error)
    return { ok: false, error: 'Something went wrong', errorType: 'other' }
  }
}

export async function createArticle(formData, url, params) {
  //validate form dtata from frontend
  const parsedData = articleSchemaForServer.safeParse(formData)
  if (!parsedData.success) {
    const validationError = handleServerSideValidationError(parsedData)
    return { ok: false, error: validationError, errorType: 'validationError' }
  }

  const { pdfFile, ...articleData } = parsedData.data

  //add computed fields to article object
  articleData.keywords = articleData.keywords
    .filter((i) => i.keyword !== '')
    .map((i) => i.keyword)
  articleData.pdfUrl = url
  articleData.slug = `${articleData.startPage}-${articleData.endPage}`
  articleData.ref = `volume-${articleData.volume}-issue-${articleData.issue}`
  articleData.published = params.published ? true : false
  articleData.publishDate = new Date()

  try {
    connectDB()
    //add new article to database
    const newArticle = new Article(articleData)
    const savedArticle = await newArticle.save()
    console.log(savedArticle)
    //return if article wasn't created due to error
    if (savedArticle._id === undefined) {
      return { ok: false, error: 'Something went wrong', errorType: 'other' }
    }

    //update issues with newly created article
    await Issue.updateOne(
      {
        volume: `${savedArticle.volume}`,
        issueNumber: `${savedArticle.issue}`,
      },
      { $push: { articles: savedArticle._id } }
    )

    //revalidate routes affected by artice creation to reflect changes
    revalidatePath(`/archive/${savedArticle.ref}`)
    revalidatePath(`/dashboard/issues/${savedArticle.ref}`)
    // send success response back to client
    return { ok: true }
  } catch (error) {
    return { ok: false, error: 'Something went wrong', errorType: 'other' }
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
  if (!parsedData.success) {
    console.log('parsed data', parsedData)
    const validationError = Object.fromEntries(
      parsedData.error?.issues?.map((issue) => [
        issue.path[0],
        issue.message,
      ]) || []
    )
    return { ok: false, errors: validationError, errorType: 'validationError' }
  }

  try {
    if (parsedData.success) {
      await signIn('credentials', parsedData.data)
    }
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

export const createAnnouncement = async (formData) => {
  const parsedData = announcementSchema.safeParse(formData)
  if (!parsedData.success) {
    const validationError = handleServerSideValidationError(parsedData)
    return { ok: false, error: validationError, errorType: 'validationError' }
  }

  const { data } = parsedData
  console.log('data', data)
  data.slug = replaceSpaceInTitleWithHyphen(data.title)
  try {
    connectDB()
    const newAnnouncement = new Announcement(data)
    const savedAnnouncement = await newAnnouncement.save()
    console.log(savedAnnouncement)

    if (savedAnnouncement) {
      revalidatePath('/dashbard/announcements')
      return { ok: true }
    } else {
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  } catch (error) {
    console.log(error)
    return { ok: false, error: 'something went wrong', errorType: 'other' }
  }
}

export const updateAnnouncement = async (initialState, formData) => {
  console.log('announcemnt formDat-', formData)
  const parsedData = announcementSchema.safeParse(formData)
  if (!parsedData.success) {
    const validationError = handleServerSideValidationError(parsedData)
    return { ok: false, error: validationError, errorType: 'validationError' }
  }

  const data = { ...initialState, ...parsedData.data }
  console.log('data', data)
  data.slug = data.title.replace(/ /g, '-')
  console.log('edited-Announcent-', data)
  try {
    connectDB()
    const announcementEixst = await Announcement.findById(initialState._id)
    if (!announcementEixst._id)
      return { ok: false, error: 'Announcement not found!', errorType: 'other' }

    // const newAnnouncement = new Announcement(data)
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      initialState._id,
      data,
      { new: true }
    )
    console.log(updatedAnnouncement)

    if (updatedAnnouncement._id) {
      revalidatePath('/dashbard/announcements')
      return { ok: true }
    } else {
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  } catch (error) {
    console.log(error)
    return { ok: false, error: 'something went wrong', errorType: 'other' }
  }
}

export const deleteAnnouncement = async (id) => {
  let successful = null
  try {
    connectDB()
    const deletedAnnouncement = await Announcement.findByIdAndDelete(id)
    if (deletedAnnouncement) {
      revalidatePath('/dashboard/announcements')
      successful = true
      return { ok: true }
    } else {
      successful = false
      return { ok: false, error: 'something went wrong' }
    }
  } catch (error) {
    console.log(error)
    successful = false
    return { ok: false, error: 'something went wrong' }
  } finally {
    if (successful) redirect('/dashboard/announcements')
  }
}
