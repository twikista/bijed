import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { PageHeading } from '@/components/Headings'
import MainContainer from '@/components/MainContainer'
import { getIssue, getIssues } from '@/lib/data'
import { connectDB } from '@/lib/mongoose/config'
import { Article, Issue } from '@/lib/mongoose/models'
import Link from 'next/link'

const getArticlesInIssue = async (issue) => {
  connectDB()
  const articlesInIssue = await Article.find({
    ref: `${issue}`,
    published: true,
  }).sort({
    startPage: 1,
  })
  console.log(articlesInIssue)
  return articlesInIssue
}

export async function generateStaticParams() {
  // const issues = await getPublish
  // return issues.map((issue) => issue.ref)
  connectDB()
  const publishedIssues = await Issue.find({ status: 'published' })
  return publishedIssues.map((issue) => issue.ref)
}

export async function generateMetadata({ params }) {
  connectDB()
  const issue = await Issue.findOne({ ref: params.issue })
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
  console.log('===========++++', currentIssue)

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center flex-grow w-full h-full'>
        <MainContainer>
          <div>
            {/*move to a seperate client component and context to supply issue details*/}
            {/* <h2 className='text-2xl font-bold uppercase font-cairo'> */}
            <PageHeading>
              {`BIJED - Volume ${currentIssue.volume} Issue ${
                currentIssue.issueNumber
              } (${new Date(currentIssue.issueYear).getFullYear()})`}
            </PageHeading>
            {/* </h2> */}
            <p className='text-center font-cairo'>{`Publish Date: ${new Date(
              articlesInIssue[0].publishDate
            ).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}`}</p>
          </div>
          <section className='space-y-5'>
            <h3 className='text-xl font-bold border-b-2 border-neutral-300'>
              Articles
              <span className='text-[#cdad4e]'>{` (${articlesInIssue.length})`}</span>
            </h3>
            <div className='space-y-3'>
              {articlesInIssue.map((article) => (
                <div
                  key={`${article._id}`}
                  className='px-4 py-2 space-y-1 border border-l-8 border-neutral-300'
                >
                  <h4 className='text-base font-medium md:text-lg text-primary'>
                    <Link href={`${issue}/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h4>
                  {article.authors.map((author, index) => (
                    <span
                      key={author._id}
                      className='text-xs font-medium sm:text-sm text-neutral-600'
                    >{`${author.name}${
                      index !== article.authors.length - 1 ? ', ' : ''
                    }`}</span>
                  ))}
                  <p className='flex items-start text-xs font-semibold sm:text-sm'>
                    <span>{'pp. '}</span>
                    <span>{article.slug}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>
        </MainContainer>
      </div>
      <Footer />
    </div>
  )
}

export default IssuePage
