import MainContainer from '@/components/MainContainer'
import { connectDB } from '@/lib/mongoose/config'
import { Article } from '@/lib/mongoose/models'
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

async function IssuePage({ params }) {
  const { issue } = params
  console.log(issue)
  const articlesInIssue = await getArticlesInIssue(issue)

  return (
    <MainContainer>
      <div>
        {/*move to a seperate client component and context to supply issue details*/}
        <h2 className='text-2xl font-bold uppercase font-cairo'>
          {`BIJED - Volume ${articlesInIssue[0].volume} Issue ${
            articlesInIssue[0].issue
          } (${new Date(articlesInIssue[0].publishDate).getFullYear()})`}
        </h2>
        <p className='font-cairo'>{`Publish Date: ${new Date(
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
              className='px-4 py-2 border border-l-8 border-neutral-300'
            >
              <h4 className='text-lg font-bold text-primary'>
                <Link href={`${issue}/${article.slug}`}>{article.title}</Link>
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

export default IssuePage
