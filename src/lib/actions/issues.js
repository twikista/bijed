'use server'

import { revalidatePath } from 'next/cache'
import { connectDB } from '../mongoose/config'
import { Article, Issue } from '../mongoose/models'
import { auth } from '../../../auth'
import { issueFormSchema } from '../schema'

//create new issue
export const addIssue = async (formData) => {
  const user = await auth()
  const {
    user: { firstName, lastName },
  } = user

  const parsedData = issueFormSchema.safeParse(formData)
  if (!parsedData.success) {
    const validationError = handleServerSideValidationError(parsedData)
    return { ok: false, error: validationError, errorType: 'validationError' }
  }
  const { issueNumber, issueYear, volume } = parsedData.data
  const issueData = {
    issueNumber,
    volume,
    issueYear,
    ref: `volume-${volume}-issue-${issueNumber}`,
    issueTitle: `Vol. ${volume} No. ${issueNumber} (${new Date(
      issueYear
    ).getFullYear()})`,
    published: false,
    publishDate: new Date(issueYear),
    initiatedBy: `${firstName} ${lastName}`,
  }

  try {
    connectDB()
    const newIssue = new Issue(issueData)
    const savedIssue = await newIssue.save()
    if (savedIssue?._id !== null) {
      revalidatePath('/archive')
      revalidatePath('/dashboard/issues')
      return { ok: true }
    }
  } catch (error) {
    return { ok: false, error: 'Something went wrong', errorType: 'other' }
  }
}

//send draft editorial board for authorization
export const submitIssueForPublishing = async (ref) => {
  try {
    connectDB()
    const issueSubmittedForPublishing = await Issue.findOneAndUpdate(
      { ref: ref, status: 'draft' },
      {
        $set: {
          status: 'review',
        },
      },
      { new: true }
    )

    if (issueSubmittedForPublishing?._id) {
      revalidatePath(`/dashboard/issues/${issueSubmittedForPublishing?.ref}`)
      return { ok: true }
    } else {
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  } catch (error) {
    // console.log(error)
  }
}

export const rejectRequestToPublishIssue = async (ref) => {
  // const date = new Date()
  try {
    connectDB()
    const publishedIssue = await Issue.findOneAndUpdate(
      { ref: ref, status: 'review' },
      {
        $set: {
          status: 'draft',
        },
      },
      { new: true }
    )

    if (publishedIssue._id) {
      revalidatePath(`/dashboard/issues/${publishedIssue.ref}`)
      return { ok: true }
    } else {
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  } catch (error) {
    console.log(error)
  }
}

//publish issue
export const publishIssue = async (issueRef, user) => {
  const date = new Date()
  try {
    connectDB()
    const publishedIssue = await Issue.findOneAndUpdate(
      { ref: issueRef, status: 'review' },
      {
        $set: {
          published: true,
          // publishDate: issue?.publishDate,
          status: 'published',
          mode: 'final',
          approvedBy: `${user.firstName} ${user.lastName}`,
        },
      },
      { new: true }
    )
    if (publishedIssue?._id) {
      const publishedArticles = await Article.updateMany(
        { ref: issueRef },
        { $set: { published: true, publishDate: date } }
      )
      if (publishedArticles.acknowledged) {
        revalidatePath(`/dashboard/issues/${publishedIssue.ref}`)
        revalidatePath(`/dashboard/issues`)
        revalidatePath(`/archive`)
        return { ok: true }
      } else {
        return { ok: false, error: 'something went wrong', errorType: 'other' }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const getPublishedIssues = async () => {
  try {
    connectDB()
    const publishedIssues = await Issue.find({ published: true }).sort({
      volume: -1,
      issueNumber: -1,
    })
    return publishedIssues
  } catch (error) {
    console.log(error)
  }
}

export async function deleteIssue(id) {
  console.log(id)
  try {
    connectDB()
    const deletedIssue = await Issue.findByIdAndDelete(id)
    if (!!deletedIssue) {
      const deleteOutcome = await Article.deleteMany({ ref: deletedIssue.ref })
      if (!deletedIssue.articles.length || !!deleteOutcome.deletedCount) {
        revalidatePath('/archive')
        revalidatePath('/dashboard/issues')
        return { ok: true }
      }
    } else {
      return false
    }
  } catch (error) {
    console.log(error)
  }
}
