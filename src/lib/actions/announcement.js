'use server'

import uniqid from 'uniqid'
import { revalidatePath } from 'next/cache'
import { connectDB } from '../mongoose/config'
import { Announcement } from '../mongoose/models'
import { announcementSchema } from '../schema'

//publish announcement
export const submitAnnouncementForPublishing = async (ref) => {
  try {
    connectDB()
    const submittedAnnouncement = await Announcement.findOneAndUpdate(
      { ref: ref, status: 'draft' },
      {
        $set: {
          status: 'review',
        },
      },
      { new: true }
    )

    if (submittedAnnouncement._id) {
      revalidatePath(`/dashboard/announcements/${submittedAnnouncement.slug}`)
      return { ok: true, slug: submittedAnnouncement?.slug }
    } else {
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  } catch (error) {
    console.log(error)
  }
}

//publish announcement
export const publishAnnouncement = async (ref, user) => {
  console.log('user--------------', user)
  // console.log(issueRef)
  console.log('i ran here')
  const date = new Date()
  try {
    connectDB()
    const publishedAnnouncement = await Announcement.findOneAndUpdate(
      { ref: ref, status: 'review' },
      {
        $set: {
          status: 'published',
          mode: 'final',
          approvedBy: `${user.firstName} ${user.lastName}`,
          dateApproved: date,
        },
      },
      { new: true }
    )

    // if (!job.length) {
    //   throw new Error('Error publishing Journal issue')
    // }

    // console.log(publishIssue)
    // if (publishedIssue.length) {
    //   throw new Error('Error publishing Journal issue')
    // }

    // console.log(publishedArticles.acknowledged)
    // if (!publishedArticles.acknowledged) {
    //   throw new Error('Error publishing Journal Issue')
    // }
    if (publishedAnnouncement._id) {
      revalidatePath(`/dashboard/announcements/${publishedAnnouncement.slug}`)
      // revalidatePath(`/dashboard/issues/published${issueRef}`)
      // revalidatePath(`/dashboard/archive/${issueRef}`)
      // revalidatePath(`/dashboard/job-queue/pending-jobs`)
      // revalidatePath(`/dashboard/job-queue/approved-jobs`)
      return { ok: true, slug: publishedAnnouncement?.slug }
    } else {
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  } catch (error) {
    console.log(error)
  }
}

// export const updateAnnouncement = async (initialState, formData) => {
//   console.log('announcemnt formDat-', formData)
//   const parsedData = announcementSchema.safeParse(formData)
//   if (!parsedData.success) {
//     const validationError = handleServerSideValidationError(parsedData)
//     return { ok: false, error: validationError, errorType: 'validationError' }
//   }

//   const data = { ...initialState, ...parsedData.data }
//   console.log('data', data)
//   data.slug = data.title.replace(/ /g, '-')
//   data.mode = 'draft'
//   console.log('edited-Announcent-', data)
//   const { _id, dataWithoutId } = data
//   console.log('data with out ID----', dataWithoutId)
//   try {
//     connectDB()
//     const announcementEixst = await Announcement.findById(_id)
//     if (!announcementEixst._id)
//       return { ok: false, error: 'Announcement not found!', errorType: 'other' }

//     const draftAnnouncement = new Announcement(dataWithoutId)
//     const savedDraftAnnouncemet = draftAnnouncement.save()

//     // const newAnnouncement = new Announcement(data)
//     // const updatedAnnouncement = await Announcement.findByIdAndUpdate(
//     //   initialState._id,
//     //   data,
//     //   { new: true }
//     // )
//     console.log('savedDraftAnnouncemet', savedDraftAnnouncemet)

//     if (savedDraftAnnouncemet?._id !== undefined) {
//       revalidatePath('/dashboard/announcements')
//       // revalidatePath(`/dashbard/announcements/${updateAnnouncement?.slug}`)
//       return { ok: true, slug: savedDraftAnnouncemet?.slug }
//     } else {
//       return { ok: false, error: 'something went wrong', errorType: 'other' }
//     }
//   } catch (error) {
//     console.log(error)
//     return { ok: false, error: 'something went wrong', errorType: 'other' }
//   }
// }

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
    console.log('updatedAnnouncement-----', updatedAnnouncement?.slug)
    x = updateAnnouncement

    if (updatedAnnouncement?._id !== undefined) {
      revalidatePath('/dashboard/announcements')
      // revalidatePath(`/dashbard/announcements/${updateAnnouncement?.slug}`)
      console.log('xxxxxxxxxxxxxxxxxx-', updatedAnnouncement)
      return { ok: true, slug: updatedAnnouncement?.slug }
    } else {
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  } catch (error) {
    console.log(error)
    return { ok: false, error: 'something went wrong', errorType: 'other' }
  }
}
