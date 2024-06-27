'use server'

import { revalidatePath } from 'next/cache'
import { connectDB } from '../mongoose/config'
import { Article, Issue } from '../mongoose/models'

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
      console.log('>>>>>>>>>I was called>>>>>>>>>>>>')
      revalidatePath(`/dashboard/issues/${issueSubmittedForPublishing?.ref}`)
      return { ok: true }
    } else {
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  } catch (error) {
    console.log(error)
  }
}

export const rejectRequestToPublishIssue = async (ref) => {
  // console.log('user--------------', user)
  // console.log(issueRef)
  console.log('i ran here')
  // const date = new Date()
  try {
    connectDB()
    const publishedIssue = await Issue.findOneAndUpdate(
      { ref: ref, status: 'review' },
      {
        $set: {
          status: 'draft',
          // approvedBy: `${user.firstName} ${user.lastName}`,
          // dateApproved: date,
        },
      },
      { new: true }
    )

    if (publishedIssue._id) {
      revalidatePath(`/dashboard/issues/${publishedIssue.ref}`)
      // revalidatePath(`/dashboard/issues/published${issueRef}`)
      // revalidatePath(`/dashboard/archive/${issueRef}`)
      // revalidatePath(`/dashboard/job-queue/pending-jobs`)
      // revalidatePath(`/dashboard/job-queue/approved-jobs`)
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
  console.log('user--------------', user)
  console.log(issueRef)
  console.log('i ran here')
  const date = new Date()
  try {
    connectDB()

    const publishedIssue = await Issue.findOneAndUpdate(
      { ref: issueRef, status: 'review' },
      {
        $set: {
          published: true,
          publishDate: date,
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
      console.log(publishedArticles)
      if (publishedArticles.acknowledged) {
        revalidatePath(`/dashboard/issues/${publishedIssue.ref}`)
        revalidatePath(`/dashboard/issues`)
        revalidatePath(`/dashboard/archive/${issueRef}`)
        return { ok: true }
      } else {
        return { ok: false, error: 'something went wrong', errorType: 'other' }
      }
    }
  } catch (error) {
    console.log(error)
  }
}
