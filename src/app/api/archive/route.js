import { Issue } from '@/lib/mongoose/models'
import { connectDB } from '@/lib/mongoose/config'

export async function GET(request) {
  try {
    connectDB()
    const issues = await Issue.find().populate('articles')
    // console.log(issues)
    return Response.json(issues)
  } catch (error) {
    console.log(error)
    throw new Error('failed to fetch issues!')
  }
}
