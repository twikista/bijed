import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import { connectDB } from '@/lib/mongoose/config'
import { JobQueue } from '@/lib/mongoose/models'
import Link from 'next/link'
import clsx from 'clsx'
import uniqid from 'uniqid'

const getPendingJobsInQueues = async () => {
  connectDB()
  const pendingJobsInQueue = await JobQueue.find({
    // status: ['draft', 'review'],
    status: 'pending',
  })
  return pendingJobsInQueue
}
async function PendingJobQueue() {
  const jobsInQueue = await getPendingJobsInQueues()

  if (jobsInQueue.length === 0) {
    return (
      <DashboardContainer>
        <DashboardWrapper>
          <section className='flex flex-col'>
            <h3 className='text-2xl font-medium '>Pending Jobs</h3>
            <div className='flex items-center justify-center flex-1 my-24'>
              <p className='text-2xl text-gray-400 '>
                There curently no pending jobs
              </p>
            </div>
          </section>
        </DashboardWrapper>
      </DashboardContainer>
    )
  }
  // console.log(x)
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <h3 className='text-2xl font-medium '>Pending Jobs</h3>
        <div className='p-2 bg-[#e5d4ff] rounded-lg md:pt-0 overflow-x-auto'>
          <table className='min-w-full overflow-x-scroll'>
            <thead className='rounded-lg'>
              <tr className=''>
                <th className='px-4 py-6 pb-1 font-medium w-fit'>Ticket Id</th>
                <th className='px-4 pt-4 pb-1 table-fixed'>Job Title</th>
                <th className='px-4 pt-4 pb-1 font-medium w-14'>Status</th>
                <th className='px-4 pt-4 pb-1 font-medium'>Initiated By</th>
                <th className='px-4 pt-4 pb-1 font-medium'>Approved By</th>
              </tr>
            </thead>
            <tbody className='text-center bg-white divide-y-2 rounded-sm'>
              {jobsInQueue.map((jobInQueue) => (
                <tr className='py-5 text-sm' key={jobInQueue._id}>
                  <td className='px-4 py-4 border border-solid'>
                    {jobInQueue.jobTicketId}
                  </td>
                  <td className='px-4 py-4 text-center border border-solid'>
                    <Link
                      className='text-center text-[#800080] hover:text-blue-600 font-medium'
                      href={`/dashboard/authorization-queue/pending-jobs/${jobInQueue.jobTicketId}?ref=${jobInQueue.jobRef}`}
                    >{`${jobInQueue.jobDescription}`}</Link>
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
            </tbody>
          </table>
        </div>
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default PendingJobQueue
