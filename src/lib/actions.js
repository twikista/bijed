'use server'

import { revalidatePath } from 'next/cache'
import { connectDB } from './mongoose/config'
import { Issue } from './mongoose/models'

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
