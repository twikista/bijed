import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import { getIssue } from '@/lib/data'
import { Issue, JobQueue, Article } from '@/lib/mongoose/models'
import { auth } from '../../../../../../../auth'
import { connectDB } from '@/lib/mongoose/config'
import Link from 'next/link'
import SubmitButton from '@/components/SubmitButton'
import { PublishIssueButton } from '@/components/Dashboard/Buttons'

const getJobInQueue = async (jobRef) => {
  connectDB()
  const jobInQueue = await JobQueue.findOne({ jobRef: jobRef })
  console.log(jobInQueue)
  return jobInQueue
}

const getIssueWithpopulatedArticles = async (jobRef) => {
  connectDB()
  const issueWithPopulatedArticles = await Issue.find({
    ref: jobRef,
  })
    .populate('articles')
    .lean()
  console.log('iwa---------------', issueWithPopulatedArticles[0]?.articles)
  return issueWithPopulatedArticles
}

async function page({ params }) {
  const jobRefFromParams = params.slug.slice(4)
  console.log('derived ref-----', jobRefFromParams)
  const data = await Promise.all([
    getJobInQueue(jobRefFromParams),
    // getIssue(params.slug),
    getIssueWithpopulatedArticles(jobRefFromParams),
  ])
  const [jobInQueue, [issue]] = data
  console.log('JIQ-----', issue)
  const session = await auth()
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <span className='inline-block px-2 mt-2 text-base font-medium bg-gray-300 rounded-3xl'>{`Job ID: ${jobInQueue.jobTicketId}`}</span>
        <div className='flex justify-between border-b border-b-gray-300 border-spacing-2'>
          <h2 className='text-2xl font-medium '>{`${jobInQueue.jobTitle}`}</h2>
        </div>

        <div className='pt-5 mx-auto md:max-w-3xl'>
          {/* <p>Volume Number: {issue.volume}</p>
          <p>Issue Number: {issue.issueNumber}</p>
          <p>Issue Year: {new Date(issue.issueYear).getFullYear()}</p>
          <p>Number of Articles in Issue: {jobInQueue.numberOfArticles}</p>
          <p>Number of Pages: {jobInQueue.pages}</p>
          <p>Request Initiated By: {jobInQueue.initiatedBy}</p>
          <p>
            Request Date:{' '}
            {new Intl.DateTimeFormat('en-GB').format(jobInQueue.createdAtnew)}
          </p> */}

          <div className='p-0 bg-[#e5d4ff] rounded-lg overflow-x-auto border md:max-w-3xl'>
            <table className='w-full overflow-x-scroll '>
              <caption className='py-2 font-medium'>Job Summary</caption>
              <tbody className='text-center bg-white divide-y-[1px] rounded-sm'>
                <tr className=''>
                  <th className='px-4 font-medium text-left border-r w-60'>
                    Issue to Publish
                  </th>
                  <td className='py-3 pl-5 text-left capitalize'>{`${
                    jobInQueue.jobRef
                  } (${new Date(issue.issueYear).getFullYear()})`}</td>
                </tr>
                <tr className=''>
                  <th className='px-4 font-medium text-left border-r w-60'>
                    Number of Articles in issue
                  </th>
                  <td className='py-3 pl-5 text-left capitalize'>
                    {jobInQueue.numberOfArticles}
                  </td>
                </tr>
                <tr className=''>
                  <th className='px-4 font-medium text-left border-r w-60'>
                    Number of Pages in Issue
                  </th>
                  <td className='py-3 pl-5 text-left capitalize'>
                    {jobInQueue.pages}
                  </td>
                </tr>
                <tr className=''>
                  <th className='px-4 font-medium text-left border-r w-60'>
                    Job Initiated By
                  </th>
                  <td className='py-3 pl-5 text-left capitalize'>
                    {`${jobInQueue.initiatedBy} ${new Intl.DateTimeFormat(
                      'en-GB'
                    ).format(jobInQueue.createdAt)}`}
                  </td>
                </tr>
                {jobInQueue.status === 'approved' && (
                  <tr className=''>
                    <th className='px-4 font-medium text-left border-r w-60'>
                      Job Approved By
                    </th>
                    <td className='py-3 pl-5 text-left capitalize'>
                      {`${jobInQueue.approvedBy} ${new Intl.DateTimeFormat(
                        'en-GB'
                      ).format(jobInQueue.dateApproved)}`}
                    </td>
                  </tr>
                )}
                <tr>
                  <td
                    colSpan={2}
                    className='col-span-2 py-3 pl-5 text-left capitalize'
                  >
                    <Link
                      href={`/dashboard/issues/unpublished/${issue.ref}/`}
                      className='block font-medium text-center underline text-blue-600 hover:text-[#800080]'
                    >
                      View Articles in Issue
                    </Link>
                  </td>
                </tr>
              </tbody>

              {/* <tbody className='text-center bg-white divide-y-2 rounded-sm'>
                {jobsInQue.map((jobInQueue) => (
                  <tr className='py-5 text-sm' key={jobInQueue._id}>
                    <td className='px-4 py-4 border border-solid'>
                      {jobInQueue.jobRef}
                    </td>
                    <td className='px-4 py-4 text-center border border-solid'>
                      <Link
                        className='text-center text-[#800080] hover:text-blue-600 font-medium'
                        href={`/dashboard/job-queue/pending-jobs`}
                      >{`BIJED ${jobInQueue.jobTitle}`}</Link>
                    </td>
                    <td className='px-4 py-4 text-center border border-solid'>
                      <span
                        className={clsx(
                          `flex items-center px-3 py-1 space-x-1 font-medium rounded-lg w-fit`,
                          {
                            [' text-white bg-green-500']:
                              jobInQueue.status === 'approved',
                            [' text-gray-500 bg-gray-200']:
                              jobInQueue.status === 'pending',

                            [' text-gray-500 bg-blue-300']:
                              jobInQueue.status === 'require modification',
                          }
                        )}
                      >
                        {jobInQueue.status}
                      </span>
                    </td>
                    <td className='px-4 py-4 text-center border border-solid'>
                      <div className='flex flex-col'>
                        <span>{jobInQueue.initiatedBy}</span>
                        <span className='text-gray-300'>{`(${new Intl.DateTimeFormat(
                          'en-GB'
                        ).format(jobInQueue.createdAt)})`}</span>
                      </div>
                    </td>
                    <td className='px-4 py-4 text-center'>
                      <span>
                        {jobInQueue.staus === 'approved'
                          ? jobInQueue?.approvedBy
                          : null}
                      </span>
                      <span className='text-gray-300'>{`(${
                        jobInQueue?.status === 'approved'
                          ? new Intl.DateTimeFormat('en-GB').format(
                              jobInQueue?.dateApproved
                            )
                          : 'N/A'
                      })`}</span>
                    </td>
                  </tr>
                ))}
              </tbody> */}
            </table>
          </div>

          <div className='flex justify-center mt-3 md:max-w-3xl'>
            {/* <Link
              href={`/dashboard/issues/unpublished/${issue.ref}/`}
              className='block'
            >
              View Issue
            </Link> */}
            {issue.published !== true &&
              jobInQueue.status === 'pending' &&
              session?.user?.role === 'managing editor' && (
                // <button className='max-w-[380px] w-full inline-block mx-auto py-2 text-center hover:bg-[#800080] text-white bg-[#ac3dba] rounded-lg font-medium'>
                //   Approve Issue and Publish
                // </button>
                <PublishIssueButton
                  issueRef={jobInQueue.jobRef}
                  jobTicketId={jobInQueue.jobTicketId}
                  user={session?.user}
                />
              )}
          </div>
        </div>
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default page
