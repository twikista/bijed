import {
  DeleteButton,
  EditButton,
  PublishIssueButton,
} from '@/components/Dashboard/Buttons'
import CreateButton from '@/components/Dashboard/createButton'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import { deleteArticle } from '@/lib/actions'
import { connectDB } from '@/lib/mongoose/config'
import { Article, Issue } from '@/lib/mongoose/models'
import {
  ClockIcon,
  CheckIcon,
  PencilIcon,
  TrashIcon,
  RectangleStackIcon,
  DocumentArrowUpIcon,
  DocumentCheckIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const getArticlesInIssue = async (issue) => {
  connectDB()
  const articlesInIssue = await Promise.all([
    Issue.find({
      ref: `${issue}`,
    }),
    Article.find({
      ref: `${issue}`,
    }).sort({
      startPage: 1,
    }),
  ])
  // console.log(articlesInIssue)
  return articlesInIssue
}

async function IssuePage({ params }) {
  const { issue: issueRef } = params
  console.log(issueRef)
  const [[issue], articlesInIssue] = await getArticlesInIssue(issueRef)
  console.log(articlesInIssue)
  if (!articlesInIssue.length) {
    console.log(params)
    return (
      <DashboardContainer>
        <section>
          <div>
            <h2 className='text-2xl font-bold capitalize font-cairo'>
              {`Volume ${issue.volume} Issue ${issue.issueNumber} (${new Date(
                issue.publishDate
              ).getFullYear()})`}
            </h2>
            <p className='font-cairo'>{`Publish Date: ${new Date(
              issue.publishDate
            ).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}`}</p>
          </div>
          <div>
            <CreateButton
              label='New Article'
              href={`/dashboard/issues/${issue.ref}/new-article`}
            />
            {/* <PublishIssueButton issueRef={issueRef}/> */}
          </div>
        </section>

        <p>There are currently no aticles in this issue</p>
      </DashboardContainer>
    )
  }

  return (
    <DashboardContainer>
      <section>
        <div>
          {/*move to a seperate client component and context to supply issue details*/}
          <h2 className='text-2xl font-bold capitalize font-cairo'>
            {`Volume ${articlesInIssue[0].volume} Issue ${
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
        <div className='flex gap-3'>
          <CreateButton
            label='New Article'
            href={`/dashboard/issues/${issue.ref}/new-article`}
          />
          {!issue.published && <PublishIssueButton issueRef={issue.ref} />}
        </div>
      </section>

      <div className='bg-[#f0dce3] rounded-lg p-2 md:pt-0'>
        <table className='min-w-full '>
          <thead className='rounded-lg'>
            <tr className=''>
              <th className='px-4 pt-4 pb-1 font-medium w-[20px]'>No.</th>
              <th className='px-4 pt-4 pb-1 font-medium'>Article</th>
              <th className='px-4 pt-4 pb-1 font-medium w-14'>page</th>
              <th className='px-4 pt-4 pb-1 font-medium'>status</th>
              <th className='sr-only'></th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y-2'>
            {articlesInIssue.map((article, index) => (
              <tr className='text-sm' key={article._id}>
                <td className='px-4'>{`${index + 1}.`}</td>
                <td className='px-4'>
                  <Link href={`/dashboard/issues/${issue.ref}/${article.slug}`}>
                    {article.title}
                  </Link>
                </td>
                <td className='px-4 text-left whitespace-nowrap'>
                  {article.slug}
                </td>
                <td className='w-[150px]'>
                  {article.published ? (
                    <div className='px-3 py-1 space-x-1 font-medium text-white bg-[#008dcb] rounded-2xl w-fit'>
                      <span>published</span>
                      <CheckIcon className='inline-block w-4' />
                    </div>
                  ) : (
                    <div className='px-3 py-1 space-x-1 bg-gray-200 rounded-2xl w-fit'>
                      <span>pending</span>
                      <ClockIcon className='inline-block w-4' />
                    </div>
                  )}
                </td>
                <td>
                  <Link
                    href={`/dashboard/issues/${issue.ref}/${article.slug}/edit`}
                  >
                    <PencilIcon className='inline-block w-4' />
                  </Link>
                  <DeleteButton
                    action={deleteArticle}
                    id={String(article._id)}
                    variant='secondary'
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <section className='space-y-5'>
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
                <Link href={`/dashboard/issues/${issue.ref}/${article.slug}`}>
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
      </section> */}
    </DashboardContainer>
  )
}

export default IssuePage
