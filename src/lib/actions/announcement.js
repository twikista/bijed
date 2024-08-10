'use server'

import { revalidatePath } from 'next/cache'
import { connectDB } from '../mongoose/config'
import { Announcement } from '../mongoose/models'
import { announcementSchema } from '../schema'
import { handleServerSideValidationError } from '../util'

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
    // console.log(error)
  }
}

//publish announcement
export const publishAnnouncement = async (ref, user) => {
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

    if (publishedAnnouncement._id) {
      revalidatePath(`/dashboard/announcements/${publishedAnnouncement.slug}`)
      return { ok: true, slug: publishedAnnouncement?.slug }
    } else {
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  } catch (error) {
    // console.log(error)
  }
}

export const updateAnnouncement = async (initialState, formData) => {
  const parsedData = announcementSchema.safeParse(formData)
  if (!parsedData.success) {
    const validationError = handleServerSideValidationError(parsedData)
    return { ok: false, error: validationError, errorType: 'validationError' }
  }

  const data = { ...initialState, ...parsedData.data }
  data.slug = data.title.replace(/ /g, '-')
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

    if (updatedAnnouncement?._id !== undefined) {
      revalidatePath('/dashboard/announcements')
      return { ok: true, slug: updatedAnnouncement?.slug }
    } else {
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  } catch (error) {
    return { ok: false, error: 'something went wrong', errorType: 'other' }
  }
}
