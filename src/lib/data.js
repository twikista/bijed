import { unstable_noStore as nostore } from 'next/cache'

import { connectDB } from './mongoose/config'
import {
  Article,
  Announcement,
  Issue,
  User,
  EditorialBoard,
} from './mongoose/models'

export const fetchAnnouncement = async (fetchBy, item) => {
  connectDB()
  if (fetchBy === 'slug') {
    const announcement = await Announcement.findOne({ slug: item })
    return announcement
  }
  const announcement = await Announcement.findOne({ ref: item })
  return announcement
}

export const getAnnouncements = async () => {
  connectDB()
  const announcements = await Announcement.find()
    .sort({ createdAt: 1 })
    .limit(2)
  return announcements
}

export const getIssues = async (mode) => {
  const currrentMode = mode === undefined || mode == 'final' ? 'final' : mode
  // nostore()
  try {
    connectDB()
    const issues = await Issue.find({ mode: currrentMode }).sort({
      volume: -1,
      issueNumber: -1,
    })
    return issues
  } catch (error) {
    // console.log(error)
  }
}

export const getIssue = async (issueRef) => {
  try {
    connectDB()
    const issue = await Issue.findOne({ ref: issueRef }).lean()

    // const json = JSON.stringify(issue)
    // const issueObject = JSON.parse(json)
    return issue
  } catch (error) {
    // console.log(error)
  }
}

export const getArticle = async (slug) => {
  connectDB()
  const article = await Article.findOne({
    ref: `${slug.issue}`,
    slug: `${slug.article}`,
  })
  return article
}

export const getArticlesInIssue = async (issue, sorted = true) => {
  connectDB()
  if (sorted) {
    const articlesInIssue = await Article.find({
      ref: `${issue}`,
      published: true,
    }).sort({
      startPage: 1,
    })
    return articlesInIssue
  }
  const articlesInIssue = await Article.find({
    ref: `${issue}`,
    published: true,
  })
  return articlesInIssue
}

export const fetchUnpublishedIssue = async ({ issueRef }) => {
  try {
    connectDB()
    const unpublishedIssue = await Issue.find({
      published: false,
      ref: issueRef,
    }).populate('articles')
    return unpublishedIssue
  } catch (error) {
    // console.log(error)
  }
}

export const getUser = async (email) => {
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
    // console.log(error)
  }
}

export const fetchEditorialBoard = async (mode) => {
  const currrentMode = mode === undefined || mode == 'final' ? 'final' : mode
  connectDB()
  try {
    const editorialBoard = await EditorialBoard.find({ mode: currrentMode })
    return editorialBoard
  } catch (error) {
    // console.log(error)
  }
}

export const fetchAllEditorialBoardData = async () => {
  connectDB()
  try {
    const editorialBoard = await EditorialBoard.find()
    return editorialBoard
  } catch (error) {
    // console.log(error)
  }
}
