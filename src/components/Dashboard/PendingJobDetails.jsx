import DashboardContainer from './DashboardContainer'
import DashboardWrapper from './DashboardWrapper'
import { getIssue } from '@/lib/data'
import { Issue, JobQueue, Article } from '@/lib/mongoose/models'
import { auth } from '../../../auth'
import { connectDB } from '@/lib/mongoose/config'
import Link from 'next/link'

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

async function PendingJobDetails({ searchParams }) {
  //   const jobRefFromParams = params.slug.slice(4)
  //   console.log('derived ref-----', jobRefFromParams)
  const data = await Promise.all([
    getJobInQueue(searchParams),
    // getIssue(params.slug),
    getIssueWithpopulatedArticles(searchParams),
  ])
  const [jobInQueue, [issue]] = data
  console.log('JIQ-----', issue)
  const session = await auth()
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <h2 className='text-2xl font-medium border-b border-b-gray-300 border-spacing-2'>{`Job Title: ${jobInQueue.jobTitle}`}</h2>
        <div>
          <p>Volume Number: {issue.volume}</p>
          <p>Issue Number: {issue.issueNumber}</p>
          <p>Issue Year: {new Date(issue.issueYear).getFullYear()}</p>
          <p>Number of Articles in Issue: {jobInQueue.numberOfArticles}</p>
          <p>Number of Pages: {jobInQueue.pages}</p>
          <p>Request Initiated By: {jobInQueue.initiatedBy}</p>
          <p>
            Request Date:{' '}
            {new Intl.DateTimeFormat('en-GB').format(jobInQueue.createdAtnew)}
          </p>

          <div>
            <Link
              href={`/dashboard/issues/unpublished/${issue.ref}/`}
              className='block'
            >
              View Issue
            </Link>
            {session?.user?.role === 'managing editor' &&
              issue.published !== true &&
              jobInQueue.status !== 'approved' && (
                <button className='bg-green-500'>
                  Approve Issue and Publish
                </button>
              )}
          </div>
        </div>
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default PendingJobDetails
