import { ChevronLeft, CogIcon } from '@/components/Icons'
import MainContainer from '@/components/MainContainer'
import { connectDB } from '@/lib/mongoose/config'
import { Issue, Article } from '@/lib/mongoose/models'
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
    <MainContainer>
      <div>
        <h2 className='text-2xl font-bold uppercase font-cairo'>
          {`BIJED - ${currentIssue[0].issueTitle}`}
        </h2>
        {/*move to a seperate client component and context to supply issue details*/}
        {/* <h2 className='text-2xl font-bold uppercase font-saira'>
          Current Issue
        </h2> */}
        <p className='font-cairo'>{`Publish Date: ${new Date(
          articlesInCurrentIssue[0].publishDate
        ).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}`}</p>
      </div>
      {/* <section className='flex flex-col items-center space-y-8'>
        <CogIcon className='w-16 h-16 md:w-20 md:h-20 text-neutral-400 animate-spin-slow' />
        <h3 className='text-base md:text-2xl xl:text-3xl text-neutral-400'>
          This page is under construction
        </h3>
        <Link
          href={'/'}
          className='flex items-center text-xs font-medium transition-all text-primary hover:underline hover:font-semibold md:text-base '
        >
          <ChevronLeft className='inline-block w-3 h-3 md:w-4 md:h-4' />
          <span>Back to Homepage</span>
        </Link>
      </section> */}
      <section className='space-y-5'>
        <h3 className='text-xl font-bold border-b-2 border-neutral-300'>
          Articles
          <span className='text-[#cdad4e]'>{` (${articlesInCurrentIssue.length})`}</span>
        </h3>
        <div className='space-y-3'>
          {articlesInCurrentIssue.map((article) => (
            <div
              key={`${article._id}`}
              className='px-4 py-2 border border-l-8 border-neutral-300'
            >
              <h4 className='text-lg font-bold text-primary'>
                <Link href={`/current/${article.ref}/${article.slug}`}>
                  {article.title}
                </Link>
              </h4>
              {article.authors.map((author, index) => (
                <span
                  key={author._id}
                  className='text-base font-medium text-neutral-600'
                >{`${author.name}${
                  index !== article.authors.length - 1 ? ', ' : ''
                }`}</span>
              ))}
              <p className='font-semibold'>{`pp. ${article.slug}`}</p>
            </div>
          ))}
        </div>
      </section>
    </MainContainer>
  )
}

export default Currentissue
