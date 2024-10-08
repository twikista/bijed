import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { PageHeading, Paragraph } from '@/components/Headings'
import ListOfArticlesInIssue from '@/components/ListOfArticlesInIssue'
import MainContainer from '@/components/MainContainer'
import { getIssue, getIssues } from '@/lib/data'
import { connectDB } from '@/lib/mongoose/config'
import { Article, Issue } from '@/lib/mongoose/models'
import { dateHelperFunction } from '@/lib/util'
import Link from 'next/link'

const getArticlesInIssue = async (issue) => {
  connectDB()
  const articlesInIssue = await Article.find({
    ref: `${issue}`,
    published: true,
  }).sort({
    startPage: 1,
  })
  return articlesInIssue
}

export async function generateStaticParams() {
  const publishedIssues = await getIssues('final')
  return publishedIssues?.map((issue) => issue.ref)
}

export async function generateMetadata({ params }) {
  const issue = await getIssue(params.issue)
  return {
    title: `BIJED ${issue.issueTitle}`,
  }
}

async function IssuePage({ params }) {
  const { issue } = params

  // const articlesInIssue = await getArticlesInIssue(issue)
  const [articlesInIssue, currentIssue] = await Promise.all([
    getArticlesInIssue(issue),
    getIssue(issue),
  ])

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center flex-grow w-full h-full'>
        <MainContainer>
          <div>
            <PageHeading>{`BIJED - ${currentIssue.issueTitle}`}</PageHeading>
            <p className='text-center '>{`Publish Date: ${dateHelperFunction(
              currentIssue.publishDate,
              'long'
            )}`}</p>
          </div>
          <section className='space-y-5'>
            <ListOfArticlesInIssue articlesInIssue={articlesInIssue} />
          </section>
        </MainContainer>
      </div>
      <Footer />
    </div>
  )
}

export default IssuePage
