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
import { Issue, Article, JobQueue } from '../mongoose/models'
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
      revalidatePath('/dashboard/job-queue')
      revalidatePath('/dashboard/job-queue/approved-jobs')
      revalidatePath('/dashboard/job-queue/pending-jobs')
      return { ok: true }
    }
  } catch (error) {
    console.log(error)
    return { ok: false, error: 'Something went wrong', errorType: 'other' }
  }
}
