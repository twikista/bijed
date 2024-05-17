import {
  DeleteButton,
  EditButton,
  PublishIssueButton,
} from '@/components/Dashboard/Buttons'
import CreateButton from '@/components/Dashboard/createButton'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import { deleteArticle } from '@/lib/actions'
import { connectDB } from '@/lib/mongoose/config'
import { Article, Issue } from '@/lib/mongoose/models'
import { auth } from '../../../../../../../auth'
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

const getArticlesInIssue = async (issueRef) => {
  connectDB()
  const articlesInIssue = await Promise.all([
    Issue.find({
      ref: `${issueRef}`,
    }),
    Article.find({
      ref: `${issueRef}`,
    }).sort({
      startPage: 1,
    }),
  ])
  // console.log(articlesInIssue)
  return articlesInIssue
}

async function IssuePage({ params }) {
  const session = await auth()
  const { issue: issueRef } = params
  console.log(issueRef)
  const [[issue], articlesInIssue] = await getArticlesInIssue(issueRef)
  console.log(articlesInIssue)
  const makeNameWithInitials = (name) => {
    const fullNamesArray = name.split(' ')
    const nameWithInitialsArray = fullNamesArray.map((name, index) =>
      index === 0 ? name : `${name.slice(0, 1)}.`
    )
    const nameWithInitials = nameWithInitialsArray.join(' ')
    return nameWithInitials
  }

  if (!articlesInIssue.length) {
    console.log(params)
    return (
      <DashboardContainer>
        <DashboardWrapper>
          <section className='flex flex-col'>
            <div className='h-14'>
              <h2 className='text-2xl font-bold capitalize font-cairo'>
                {`Volume ${issue.volume} Issue ${issue.issueNumber} (${new Date(
                  issue.publishDate
                ).getFullYear()})`}
              </h2>
              <p className='text-sm text-gray-400 font-cairo'>
                {issue.published
                  ? `Publish Date: ${new Date(
                      issue.publishDate
                    ).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}`
                  : 'Publish Date: N/A'}
              </p>
            </div>
            <div className='flex flex-col items-center justify-center flex-1 my-24 space-y-8'>
              <p className='text-2xl text-gray-400 '>
                There are currently no articles in this issue
              </p>
              <CreateButton
                label='Add Article'
                href={`/dashboard/issues/${issue.ref}/new-article`}
              />
              {/* <PublishIssueButton issueRef={issueRef}/> */}
            </div>
          </section>
        </DashboardWrapper>
      </DashboardContainer>
    )
  }

  return (
    <DashboardContainer>
      <DashboardWrapper>
        <section>
          <div>
            {/*move to a seperate client component and context to supply issue details*/}
            <h2 className='text-2xl font-bold capitalize font-cairo'>
              {`Volume ${articlesInIssue[0].volume} Issue ${
                articlesInIssue[0].issue
              } (${new Date(articlesInIssue[0].publishDate).getFullYear()})`}
            </h2>
            {articlesInIssue[0].published && (
              <span className='flex items-center px-2 my-1 text-sm font-medium bg-gray-300 w-fit rounded-3xl'>
                Published Issue
              </span>
            )}
            <p className='text-sm text-gray-400 font-cairo'>{`Publish Date: ${new Date(
              articlesInIssue[0].publishDate
            ).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}`}</p>
          </div>
          {/* <div className='flex justify-end '>
            <CreateButton
              label='New Article'
              href={`/dashboard/issues/${issue.ref}/new-article`}
            />
          </div> */}
        </section>
        <section>
          <div className='p-2 bg-[#e5d4ff] rounded-lg md:pt-0 overflow-x-auto'>
            <table className='min-w-full overflow-x-scroll'>
              <thead className='rounded-lg'>
                <tr className=''>
                  <th className='px-4 py-6 pb-1 font-medium w-[20px]'>S/N</th>
                  <th className='px-4 pt-4 pb-1 table-fixed'>Article</th>
                  <th className='px-4 pt-4 pb-1 table-fixed'>Author(s)</th>
                  <th className='px-4 pt-4 pb-1 table-fixed'>Page</th>
                  <th className='px-4 pt-4 pb-1 font-medium w-14'>Status</th>
                  {/* <th className='sr-only'></th>
                  <th className='sr-only'></th> */}
                </tr>
              </thead>
              <tbody className='text-center bg-white divide-y-2 rounded-sm'>
                {articlesInIssue.map((article, index) => (
                  <tr className='py-5' key={article._id}>
                    <td className='px-4 py-5 border border-solid'>{`${
                      index + 1
                    }.`}</td>
                    <td className='px-4 py-5 text-left border border-solid'>
                      <Link
                        className='text-left text-[#800080] hover:text-blue-600 font-medium'
                        href={`/dashboard/issues/published/${issue.ref}/${article.slug}`}
                      >
                        {article.title}
                      </Link>
                    </td>
                    <td className='px-4 py-4 border border-solid text-letf'>
                      <div className='flex flex-wrap gap-1'>
                        {article.authors.map((author, index) => (
                          <span
                            className='block text-left'
                            key={author.name}
                          >{`${makeNameWithInitials(author.name)}${
                            index === article.authors.length - 1 ? '' : ','
                          } `}</span>
                        ))}
                      </div>
                    </td>
                    <td className='px-4 py-4 text-center border border-solid'>
                      <span>{article.slug}</span>
                    </td>

                    <td className='px-4 py-4 text-center border border-solid'>
                      {article.published ? (
                        <span className='flex items-center px-3 py-1 space-x-1 font-medium text-white bg-green-500 rounded-lg w-fit'>
                          published
                        </span>
                      ) : (
                        <span className='px-3 py-1 space-x-1 bg-gray-200 rounded-2xl w-fit'>
                          pending
                        </span>
                      )}
                    </td>
                    {/* <td className='px-4 py-4 text-center'>
                      <EditButton
                        href={`/dashboard/issues/${issue.ref}/${article.slug}/edit`}
                        variant='secondary'
                      />
                    </td>
                    <td className='px-4 py-4 text-center'>
                      <DeleteButton
                        action={deleteArticle}
                        id={String(article._id)}
                        variant='secondary'
                      />
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* {!issue.published && session?.user?.role === 'business manager' && (
            <PublishIssueButton issueRef={issue.ref} />
          )} */}
          {!issue.published && session?.user?.role === 'business manager' && (
            <Link href={`/dashboard/job-queue/new-job?jobRef=${issueRef}`}>
              Send Issue for Publishing
            </Link>
          )}
        </section>
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default IssuePage
