import {
  DeleteButton,
  EditButton,
  PublishButton,
  PublishIssueButton,
  RejectPublishButton,
  SendForAuthorizationButton,
} from '@/components/Dashboard/Buttons'
import CreateButton from '@/components/Dashboard/createButton'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import { deleteArticle } from '@/lib/actions'
import { connectDB } from '@/lib/mongoose/config'
import { Article, Issue } from '@/lib/mongoose/models'
import { auth } from '../../../../../../auth'
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
import {
  publishIssue,
  rejectRequestToPublishIssue,
  submitIssueForPublishing,
} from '@/lib/actions/issues'

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
  const { user } = await auth()

  const { issue: issueRef } = params
  console.log(issueRef)

  const [[issue], articlesInIssue] = await getArticlesInIssue(issueRef)

  const businessManagerPrivilege =
    issue?.status === 'draft' && user?.role === 'business manager'

  const managingEditorPrivilege =
    issue?.status === 'review' && user?.role === 'managing editor'
  console.log('issue===>>>>>>>>>>', issue)

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
              {user?.role === 'business manager' && (
                <CreateButton
                  label='Add Article'
                  href={`/dashboard/issues/${issue.ref}/new-article`}
                />
              )}
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
              {`Volume ${issue.volume} Issue ${issue.issueNumber} (${new Date(
                issue.publishDate
              ).getFullYear()})`}
            </h2>
            <div className='my-1'>
              <span className='inline-block px-2 text-base font-medium bg-gray-300 rounded-3xl'>{`status: ${issue?.status}`}</span>
            </div>
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
          <div className='flex justify-end '>
            {businessManagerPrivilege && (
              <CreateButton
                label='Add New Article'
                href={`/dashboard/issues/${issue.ref}/new-article`}
              />
            )}
          </div>
        </section>
        <section className='pb-6'>
          <div className='p-2 bg-[#e5d4ff] rounded-lg md:pt-0 overflow-x-auto'>
            <table className='min-w-full overflow-x-scroll'>
              <thead className='rounded-lg'>
                <tr className=''>
                  <th className='px-4 py-6 pb-1 font-medium w-20px]'>S/N</th>
                  <th className='px-4 pt-4 pb-1 table-fixed'>Article</th>
                  <th className='px-4 pt-4 pb-1 table-fixed'>Page</th>
                  <th className='px-4 pt-4 pb-1 font-medium w-14'>Status</th>
                  {businessManagerPrivilege && (
                    <>
                      <th className='sr-only'></th>
                      <th className='sr-only'></th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className='text-center bg-white divide-y-2 rounded-sm'>
                {articlesInIssue.map((article, index) => (
                  <tr className='py-5 text-sm' key={article._id}>
                    <td className='px-4 py-5 border border-solid'>{`${
                      index + 1
                    }.`}</td>
                    <td className='px-4 py-5 text-left border border-solid'>
                      <Link
                        className='text-left text-[#800080] hover:text-blue-600 font-medium'
                        href={`/dashboard/issues/${issue.ref}/${article.slug}`}
                      >
                        {article.title}
                      </Link>
                    </td>
                    <td className='px-4 py-4 text-center border border-solid'>
                      <span>{article.slug}</span>
                    </td>
                    <td className='px-4 py-4 text-center border border-solid'>
                      {article.published ? (
                        <span className='px-3 py-[5px] space-x-1 font-medium text-center text-white bg-green-500 rounded-[20px] '>
                          published
                        </span>
                      ) : (
                        <span className='flex items-center px-3 py-1 space-x-1 font-medium text-gray-500 bg-gray-200 rounded-[20px] w-fit'>
                          unpublished
                        </span>
                      )}
                    </td>
                    {businessManagerPrivilege && (
                      <>
                        <td className='px-4 py-4 text-center'>
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
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* {!issue.published && session?.user?.role === 'business manager' && (
            <PublishIssueButton issueRef={issue.ref} />
          )} */}
        </section>
        {businessManagerPrivilege && (
          <div className='flex justify-center gap-6 pt-8 pb-6 border-t-2 border-gray-200'>
            <SendForAuthorizationButton
              // redirectUrl={`/dashboard/editorial-board?mode=${mode}`}
              // resource='editorial-board'
              resourceRef={issueRef}
              // slug={mode}
              action={submitIssueForPublishing}
              label={{
                main: 'Submit for Authorization',
                alt: 'submitting Issue...',
              }}
              notificationMessage={{
                success: 'Issue submitted for authorization',
                error: 'Something went wrong',
              }}
            />
          </div>
        )}
        {managingEditorPrivilege && (
          <div className='flex justify-center gap-6 pt-8 pb-6 border-t-2 border-gray-200'>
            <RejectPublishButton
              // resource='editorial-board'
              resourceRef={issue?.ref}
              label={{ main: 'Reject Publish Request', alt: 'Processing...' }}
              action={rejectRequestToPublishIssue}
              notificationMessage={{
                success: 'Publish request rejected successfully',
                error: 'Something went wrong',
              }}
            />
            <PublishButton
              // data={JSON.stringify(editorialBoardData)}
              // resource='editorial-board'
              resourceRef={issue?.ref}
              // slug={issue?.slug}
              user={user}
              action={publishIssue}
              notificationMessage={{
                success: 'Issue published',
                error: 'Error publishing issue',
              }}
              label={{
                main: 'Publish issue',
                alt: 'Publishing issue',
              }}
            />
          </div>
        )}
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default IssuePage
