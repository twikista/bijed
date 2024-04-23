import { unstable_noStore as nostore } from 'next/cache'

import { connectDB } from './mongoose/config'
import { Article, Announcement, Issue, User } from './mongoose/models'

export const fetchAnnouncement = async (slug) => {
  connectDB()
  const announcement = await Announcement.findOne({ slug: slug })
  return announcement
}

export const getAnnouncements = async () => {
  connectDB()
  const announcements = await Announcement.find().sort({ createdAt: 1 })
  return announcements
}

export const getIssues = async () => {
  // nostore()
  try {
    connectDB()
    const issues = await Issue.find().sort({ volume: -1, issueNumber: -1 })
    console.log(issues)
    return issues
  } catch (error) {
    console.log(error)
  }
}

export const getIssue = async (issueRef) => {
  try {
    connectDB()
    const issue = await Issue.findOne({ ref: issueRef }).lean()

    const json = JSON.stringify(issue)
    const issueObject = JSON.parse(json)
    console.log(issueObject)
    return issueObject
  } catch (error) {
    console.log(error)
  }
}

export const getArticle = async (slug) => {
  connectDB()
  const article = await Article.findOne({
    ref: `${slug.issue}`,
    slug: `${slug.article}`,
  })
  console.log(article)
  return article
}

export const fetchUnpublishedIssue = async ({ issueRef }) => {
  try {
    connectDB()
    const unpublishedIssue = await Issue.find({
      published: false,
      ref: issueRef,
    }).populate('articles')
    console.log(unpublishedIssue)
    return unpublishedIssue
  } catch (error) {
    console.log(error)
  }
}

export const getUser = async (email) => {
  console.log('i ran')
  connectDB()

  const user = await User.findOne({ email })
  return user
}

export const getUsers = async () => {
  connectDB()

  try {
    const user = await User.find()
    const parsedUsers = JSON.parse(JSON.stringify(user))
    if (!!user) {
      return { ok: true, users: parsedUsers }
    } else {
      return { ok: false, users: null }
    }
  } catch (error) {
    console.log(error)
  }
}
