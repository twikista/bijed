import { NextRequest, NextResponse } from 'next/server'
import { Article, Issue } from '@/lib/mongoose/models'
import { connectDB } from '@/lib/mongoose/config'

export async function POST(request) {
  connectDB()
  const res = await request.json()
  console.log(res)
  const newArticle = new Article(res)
  const savedArticle = await newArticle.save()
  console.log(savedArticle)
  const currentIssue = await Issue.findOne({
    volume: `${savedArticle.volume}`,
    issueNumber: `${savedArticle.issue}`,
  })
  console.log(currentIssue)
  currentIssue.articles = currentIssue.articles.concat(savedArticle._id)
  await currentIssue.save()
  console.log(savedArticle)
  return Response.json(savedArticle)
}
