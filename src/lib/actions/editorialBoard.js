'use server'
import { revalidatePath } from 'next/cache'
import { EditorialBoard } from '../mongoose/models'
import { editorialBoardSchema } from '../schema'
import { handleServerSideValidationError } from '../util'
import { connectDB } from '../mongoose/config'
import { auth } from '../../../auth'

export const updateEditorialBoard = async (initialState, formData) => {
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

  connectDB()
  const draft = await EditorialBoard.findOne({ mode: 'draft' })
  // const x = data.content.replace(/<h3>/g, '<h3 className="flex">')
  if (initialState.mode === 'final' && !draft?._id) {
    const { _id, ...dataWithoutId } = data
    try {
      const draftEditorialBoard = new EditorialBoard(dataWithoutId)
      const savedDraftEditorialBoard = await draftEditorialBoard.save()
      if (savedDraftEditorialBoard?._id) {
        revalidatePath('/dashboard/editorial-board')
        return { ok: true, slug: savedDraftEditorialBoard?.slug }
      } else {
        return { ok: false, error: 'something went wrong', errorType: 'other' }
      }
    } catch (error) {
      // console.log(error)
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  }

  try {
    const updatedEditorialBoard = await EditorialBoard.findByIdAndUpdate(
      initialState._id,
      data,
      { new: true }
    )

    if (updatedEditorialBoard._id) {
      revalidatePath('/dashbard/editorial-board')
      revalidatePath('/editorial-board')
      return { ok: true }
    } else {
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  } catch (error) {
    return { ok: false, error: 'something went wrong', errorType: 'other' }
  }
}

//send draft editorial board for authorization
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
    return { ok: false, error: 'something went wrong', errorType: 'other' }
  }
}

//cancel authorization request
export const discardEditorialBoardDraft = async (ref) => {
  try {
    connectDB()
    const deletedEditorialBoard = await EditorialBoard.findOneAndDelete({
      ref: ref,
      status: 'draft',
      mode: 'draft',
    })

    if (deletedEditorialBoard._id) {
      revalidatePath(
        `/dashboard/editorial-board?mode=${deletedEditorialBoard?.mode}`
      )
      return { ok: true, slug: deletedEditorialBoard?.mode }
    } else {
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  } catch (error) {
    return { ok: false, error: 'something went wrong', errorType: 'other' }
  }
}

//publish
export const publishEditorialBoard = async (
  ref,
  user,
  draftEditorialBoardData
) => {
  const parsedEditorialBoardData = JSON.parse(draftEditorialBoardData)
  const { _id, createdAt, updatedAt, ...x } = parsedEditorialBoardData
  try {
    connectDB()
    const publishedEditorialBoard = await EditorialBoard.findOneAndUpdate(
      { ref: ref, status: 'published', mode: 'final' },
      {
        $set: {
          content: parsedEditorialBoardData.content,
          updatedBy: parsedEditorialBoardData.updatedBy,
          approvedBy: `${user.firstName} ${user.lastName}`,
        },
      },
      { new: true }
    )

    if (publishedEditorialBoard?._id) {
      const deletedDraft = await EditorialBoard.findOneAndDelete({
        ref: ref,
        status: 'review',
        mode: 'draft',
      })
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
    // console.log(error)
    return { ok: false, error: 'something went wrong', errorType: 'other' }
  }
}

export const rejectRequestToPublishEditorialBoard = async (ref) => {
  try {
    connectDB()
    const rejectedEditorialBoard = await EditorialBoard.findOneAndUpdate(
      { ref: ref, status: 'review' },
      {
        $set: {
          status: 'draft',
        },
      },
      { new: true }
    )
    if (rejectedEditorialBoard._id) {
      revalidatePath(
        `/dashboard/editorial-board/${rejectedEditorialBoard?.slug}`
      )
      return { ok: true, slug: rejectedEditorialBoard?.slug }
    } else {
      return { ok: false, error: 'something went wrong', errorType: 'other' }
    }
  } catch (error) {
    // console.log(error)
    return { ok: false, error: 'something went wrong', errorType: 'other' }
  }
}
