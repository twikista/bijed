import { connectDB } from './mongoose/config'
import { Announcement, Issue } from './mongoose/models'

export const fetchAnnouncement = async (slug) => {
  connectDB()
  const announcement = await Announcement.findOne({ slug: slug })
  return announcement
}

export const getIssues = async () => {
  try {
    connectDB()
    const issues = await Issue.find()
    console.log(issues)
    return issues
  } catch (error) {
    console.log(error)
  }
}

export const getIssue = async (ref) => {
  try {
    connectDB()
    const issue = await Issue.findOne({ ref: ref }).lean()
    const json = JSON.stringify(issue)
    const issueObject = JSON.parse(json)
    console.log(issueObject)
    return issueObject
  } catch (error) {
    console.log(error)
  }
}
