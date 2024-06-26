'use server'

import { revalidatePath } from 'next/cache'
import { EditorialBoard } from '../mongoose/models'
import { editorialBoardSchema } from '../schema'
import { handleServerSideValidationError } from '../util'
import { connectDB } from '../mongoose/config'
import { auth } from '../../../auth'

export const updateEditorialBoard = async (initialState, formData) => {
  console.log('i ran')
  console.log('editorialBoard formData-', formData)
  const currentSession = await auth()
  const parsedData = editorialBoardSchema.safeParse(formData)
  if (!parsedData.success) {
    const validationError = handleServerSideValidationError(parsedData)
    return { ok: false, error: validationError, errorType: 'validationError' }
  }

  const data = { ...initialState, ...parsedData.data }
  data.mode = 'draft'
  data.status = 'draft'
  data.updatedBy = `${currentSession?.user?.firstName} ${currentSession?.user?.lastName}`
  console.log('data', data)

  connectDB()
  const draft = await EditorialBoard.findOne({ mode: draft })
  // const x = data.content.replace(/<h3>/g, '<h3 className="flex">')
  if (initialState.mode === 'final' && !draft?._id) {
    console.log('edited-Announcent-', data)
    const { _id, ...dataWithoutId } = data
    console.log('data with out ID----', dataWithoutId)

    try {
      const draftEditorialBoard = new EditorialBoard(dataWithoutId)
      const savedDraftEditorialBoard = await draftEditorialBoard.save()

      console.log('savedDraftEditorialBoard', savedDraftEditorialBoard)

      if (savedDraftEditorialBoard?._id) {
        revalidatePath('/dashboard/editorial-board')
        // revalidatePath(`/dashbard/announcements/${updateAnnouncement?.slug}`)
        return { ok: true, slug: savedDraftEditorialBoard?.slug }
      } else {
        return { ok: false, error: 'something went wrong', errorType: 'other' }
      }
    } catch (error) {
      console.log(error)
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  }

  //   console.log('edited-Announcent-', x)
  try {
    // connectDB()
    // const newAnnouncement = new Announcement(data)
    const updatedEditorialBoard = await EditorialBoard.findByIdAndUpdate(
      initialState._id,
      data,
      { new: true }
    )
    console.log(updatedEditorialBoard)

    if (updatedEditorialBoard._id) {
      revalidatePath('/dashbard/editorial-board')
      revalidatePath('/editorial-board')
      return { ok: true }
    } else {
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  } catch (error) {
    console.log(error)
    return { ok: false, error: 'something went wrong', errorType: 'other' }
  }
}

export const submitEditorialBoardForPublishing = async (ref) => {
  try {
    connectDB()
    const submittedEditorialBoard = await EditorialBoard.findOneAndUpdate(
      { ref: ref, status: 'draft' },
      {
        $set: {
          status: 'review',
        },
      },
      { new: true }
    )

    if (submittedEditorialBoard._id) {
      revalidatePath(
        `/dashboard/editorial-board/${submittedEditorialBoard?.slug}`
      )
      return { ok: true, slug: submittedEditorialBoard?.slug }
    } else {
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  } catch (error) {
    console.log(error)
  }
}

//publish
export const publishEditorialBoard = async (
  ref,
  user,
  draftEditorialBoardData
) => {
  console.log('user--------------', user)
  // console.log(issueRef)
  const parsedEditorialBoardData = JSON.parse(draftEditorialBoardData)
  console.log('draftEditorialBoardData----xxxxxxx', parsedEditorialBoardData)
  // const date = new Date()
  const { _id, createdAt, updatedAt, ...x } = parsedEditorialBoardData

  console.log('draftEditorialBoardDataWithoutId----xxxxxxx', x)
  try {
    connectDB()
    const publishedEditorialBoard = await EditorialBoard.findOneAndUpdate(
      { ref: ref, status: 'published', mode: 'final' },
      {
        $set: {
          content: parsedEditorialBoardData.content,
          updatedBy: parsedEditorialBoardData.updatedBy,
          approvedBy: `${user.firstName} ${user.lastName}`,
          // dateApproved: date,
        },
      },
      { new: true }
    )

    console.log('old----------------', publishedEditorialBoard)

    if (publishedEditorialBoard?._id) {
      const deletedDraft = await EditorialBoard.findOneAndDelete({
        ref: ref,
        status: 'review',
        mode: 'draft',
      })
      console.log('deletedDraft........>>>>', deletedDraft)
      if (deletedDraft?._id) {
        revalidatePath(
          `/dashboard/editorial-board/${publishedEditorialBoard.slug}`
        )
        return { ok: true, slug: publishedEditorialBoard?.slug }
      } else {
        return { ok: false, error: 'something went wrong', errorType: 'other' }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const rejectRequestToPublishEditorialBoard = async (ref) => {
  // console.log('user--------------', user)
  // console.log(issueRef)
  console.log('i ran here')
  // const date = new Date()
  try {
    connectDB()
    const rejectedEditorialBoard = await EditorialBoard.findOneAndUpdate(
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
    if (rejectedEditorialBoard._id) {
      revalidatePath(
        `/dashboard/editorial-board/${rejectedEditorialBoard?.slug}`
      )
      // revalidatePath(`/dashboard/issues/published${issueRef}`)
      // revalidatePath(`/dashboard/archive/${issueRef}`)
      // revalidatePath(`/dashboard/job-queue/pending-jobs`)
      // revalidatePath(`/dashboard/job-queue/approved-jobs`)
      return { ok: true, slug: rejectedEditorialBoard?.slug }
    } else {
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  } catch (error) {
    console.log(error)
  }
}
