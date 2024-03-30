'use server'
import { Issue, Article, Announcement } from '@/lib/mongoose/models'
import { connectDB } from '@/lib/mongoose/config'
import { revalidatePath } from 'next/cache'

// export const addIssue = async (formData) => {
//   const { issueNumber, volume, date } = Object.fromEntries(formData)
//   console.log(issueNumber, volume)
//   const issueData = {
//     issueNumber,
//     volume,
//     issueYear: new Date().getFullYear(),
//     ref: `volume-${volume}-issue-${issueNumber}`,
//     issueTitle: `Vol. ${volume} No. ${issueNumber} (${new Date().getFullYear()})`,
//     published: false,
//     publishDate: new Date(),
//   }

//   try {
//     connectDB()
//     const newIssue = new Issue(issueData)
//     const savedIssue = await newIssue.save()
//     console.log(issueData)
//     console.log(savedIssue)
//   } catch (error) {
//     console.log(error)
//   }
//   revalidatePath('/archive')
//   revalidatePath('/dashboard/issues')
// }

export const createArticle = async (formData) => {
  console.log('called')
  console.log(formData)
  try {
    connectDB()
    const newArticle = new Article(formData)
    const savedArticle = await newArticle.save()
    console.log(savedArticle)

    const currentIssue = await Issue.findOne({
      volume: `${savedArticle.volume}`,
      issueNumber: `${savedArticle.issue}`,
    })
    console.log(currentIssue)
    currentIssue.articles = currentIssue.articles.concat(savedArticle._id)
    await currentIssue.save()
    return savedArticle
  } catch (error) {
    console.log(error)
  }
}

export const createAnnouncement = async (formData) => {
  formData.slug = formData.title.replace(/ /g, '-')
  try {
    connectDB()
    const newAnnouncement = new Announcement(formData)
    const savedAnnouncement = await newAnnouncement.save()
    console.log(savedAnnouncement)
    revalidatePath('/dashbard/announcements')
    if (savedAnnouncement.title !== undefined) {
      return { success: true }
    } else {
      return { succcess: false }
    }
  } catch (error) {
    console.log(error)
  }
}

export const deleteAnnouncement = async (id) => {
  try {
    connectDB()
    const deletedAnnouncement = await Announcement.findByIdAndDelete(id)
    if (deletedAnnouncement) {
      revalidatePath('/dashboard/announcements')
      return { success: true }
    } else {
      return { succcess: false }
    }
  } catch (error) {
    console.log(error)
  }
}
