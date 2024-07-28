import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { PageHeading, Paragraph, SectionHeading } from '@/components/Headings'
import { ChevronLeft, CogIcon } from '@/components/Icons'
import MainContainer from '@/components/MainContainer'
import { connectDB } from '@/lib/mongoose/config'
import { Issue, Article } from '@/lib/mongoose/models'
import { replaceSpaceInTitleWithHyphen } from '@/lib/util'
import Link from 'next/link'

export const metadata = {
  title:
    'Current Issue - Benin International Journal for Entrepreneurship Development',
  description:
    'This page contains the articles in the current issue the Benin International Journal for Entrepreneurship Development.',
}

const getArticlesInCurrentIssue = async () => {
  connectDB()
  const currentIssue = await Issue.find({ published: true })
    .sort({ volume: -1 })
    .limit(1)
  if (currentIssue) {
    const articlesInCurrentIssue = await Article.find({
      ref: currentIssue[0].ref,
    })
    console.log(currentIssue[0].issueTitle)
    return { currentIssue, articlesInCurrentIssue }
  }
}

async function Currentissue() {
  const { currentIssue, articlesInCurrentIssue } =
    await getArticlesInCurrentIssue()

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center flex-grow w-full h-full'>
        <MainContainer>
          <div>
            <PageHeading
              align='text-left'
              mb='mb-0'
            >{`BIJED - ${currentIssue[0].issueTitle}`}</PageHeading>
            {/*move to a seperate client component and context to supply issue details*/}
            {/* <h2 className='text-2xl font-bold uppercase font-saira'>
          Current Issue
        </h2> */}
            <Paragraph first={true}>{`Publish Date: ${new Date(
              articlesInCurrentIssue[0].publishDate
            ).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}`}</Paragraph>
          </div>

          <section className='space-y-5'>
            <p className='text-lg border-b border-neutral-300'>
              Articles in Issue
              <span className='text-primary'>{` (${articlesInCurrentIssue.length})`}</span>
            </p>
            <div className='space-y-3'>
              {articlesInCurrentIssue.map((article) => (
                <div
                  key={`${article._id}`}
                  className='px-4 py-2 border border-l-8 border-neutral-300'
                >
                  <h4 className='text-lg text-primary hover:text-blue-600 hover:underline'>
                    <Link href={`/current/${article.ref}/${article.slug}`}>
                      {article.title}
                    </Link>
                    {/* <Link
                  href={`/current/${replaceSpaceInTitleWithHyphen(
                    article.title
                  )}`}
                >
                  {article.title}
                </Link> */}
                  </h4>
                  {article.authors.map((author, index) => (
                    <span
                      key={author._id}
                      className='text-base text-neutral-600'
                    >{`${author.name}${
                      index !== article.authors.length - 1 ? ', ' : ''
                    }`}</span>
                  ))}
                  <p className='font-medium'>{`pp. ${article.slug}`}</p>
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

export default Currentissue
