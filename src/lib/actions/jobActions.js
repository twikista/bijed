'use server'

// import {
//   handleServerSideValidationError,
//   hashPassword,
//   replaceSpaceInTitleWithHyphen,
//   signJWT,
//   validatePassword,
//   verifyJWT,
// } from './util'
import uniqid from 'uniqid'
import { revalidatePath } from 'next/cache'
import { connectDB } from '../mongoose/config'
import { Issue, Article, JobQueue, Announcement } from '../mongoose/models'
import { redirect } from 'next/navigation'
import { signIn, signOut, auth } from '../../../auth'
import { newJobFormSchema } from '../schema'
import { handleServerSideValidationError } from '../util'

export const addJob = async (formData) => {
  const session = await auth()
  const parsedData = newJobFormSchema.safeParse(formData)
  if (!parsedData.success) {
    const validationError = handleServerSideValidationError(parsedData)
    return { ok: false, error: validationError, errorType: 'validationError' }
  }

  const newJobObject = {
    ...parsedData.data,
    slug: `job-${parsedData.data.jobRef}`,
    jobTicketId: `JB-ISS-${uniqid.time()}`,
    status: 'pending',
    initiatedBy: `${session?.user?.firstName} ${session?.user?.lastName}`,
    dateApproved: new Date(),
  }
  console.log('parsedData', newJobObject)
  try {
    connectDB()
    const newJob = new JobQueue(newJobObject)
    const savedJob = await newJob.save()

    if (savedJob?._id !== undefined) {
      revalidatePath('/dashboard/authorization-queue')
      revalidatePath('/dashboard/authorization-queue/approved-jobs')
      revalidatePath('/dashboard/authorization-queue/pending-jobs')
      return { ok: true }
    }
  } catch (error) {
    console.log(error)
    return { ok: false, error: 'Something went wrong', errorType: 'other' }
  }
}

export const addNewItemToAuthorizationQueue = async (
  formData,
  resourceData
) => {
  console.log('resource data-xxxx-', resourceData)
  const currentSession = await auth()
  console.log(resourceData)
  console.log('super user---', currentSession?.user)
  const parsedData = newJobFormSchema.safeParse(formData)
  if (!parsedData.success) {
    const validationError = handleServerSideValidationError(parsedData)
    return { ok: false, error: validationError, errorType: 'validationError' }
  }

  const newJobObject = {
    resource: resourceData.resource,
    resourceDescription: resourceData.title,
    jobDescription: formData.jobDescription,
    slug: `job-${resourceData.slug}`,
    jobRef: resourceData.ref,
    jobTicketId:
      resourceData.resource === 'announcements'
        ? `JB-ANN-${uniqid.time()}`
        : resourceData.resource === 'issues'
        ? `JB-ISS-${uniqid.time()}`
        : `JB-ETB-${uniqid.time()}`,
    status: 'pending',
    initiatedBy: `${currentSession?.user.firstName} ${currentSession?.user.lastName}`,
    dateApproved: new Date(),
    linkToResource: `/dashboard/${resourceData.resource}/${resourceData?.slug}`,
  }
  console.log('new job object------', newJobObject)
  try {
    connectDB()
    //start session
    const session = await JobQueue.startSession()
    await session.withTransaction(async () => {
      const newJob = new JobQueue(newJobObject)
      const savedJob = await newJob.save(session)

      console.log('saved job --', savedJob)

      if (savedJob?._id !== undefined) {
        await Announcement.findOneAndUpdate(
          { ref: resourceData.ref },
          { $set: { status: 'review' } },
          { new: true },
          { session }
        )
      }
    })
    //end session
    await session.endSession()
    revalidatePath('/dashboard/authorization-queue')
    revalidatePath('/dashboard/authorization-queue/approved-jobs')
    revalidatePath('/dashboard/authorization-queue/pending-jobs')
    return { ok: true }
  } catch (error) {
    console.log(error)
    return { ok: false, error: 'Something went wrong', errorType: 'other' }
  }
}
