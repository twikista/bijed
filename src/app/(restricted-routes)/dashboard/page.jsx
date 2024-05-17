import { auth } from '../../../../auth'

import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import JournalStats from '@/components/Dashboard/JournalStats'
import { TimePastIcon } from '@/components/Icons'
import QuickLinks from '@/components/Dashboard/QuickLinks'
import { getIssues } from '@/lib/data'
import { Issue } from '@/lib/mongoose/models'
// import Link from 'next/link'

const getLatestIssue = async () => {
  const latestIssue = await Issue.find().sort({ publishDate: -1 }).limit(1)
  console.log(latestIssue)
  return latestIssue[0]
}
async function Dashboard() {
  const { user } = await auth()
  const lastIssue = await getLatestIssue()

  const formatedDate = (date) => new Intl.DateTimeFormat('en-GB').format(date)

  // console.log('auth in dashboard home: ', user)
  return (
    <DashboardContainer>
      <div className='space-y-12 '>
        <div className='p-10 rounded-xl bg-gray-50'>
          <JournalStats />
        </div>
        <section className='flex justify-between gap-5 p-10 bg-gray-50 rounded-xl'>
          <div className='flex-1 p-2 bg-gray-200 rounded-lg '>
            <div className='flex items-center gap-1 px-1 py-3 font-medium'>
              <TimePastIcon className='w-5 h-5 fill-gray-500' />
              <h4 className='text-xl '>Last Published Issue</h4>
            </div>
            <div className='px-4 py-5 space-y-2 rounded-md bg-gray-50'>
              <p className='flex items-center gap-1 py-2'>
                <span>Volume:</span>
                <span>{lastIssue?.volume}</span>
              </p>
              <p className='flex items-center gap-1 py-2'>
                <span>Issue Number:</span>
                <span>{lastIssue?.issueNumber}</span>
              </p>
              <p className='flex items-center gap-1 py-2'>
                <span>Number of Articles:</span>
                <span>{lastIssue?.articles.length}</span>
              </p>
              <p className='flex items-center gap-1 py-2'>
                <span>Publish Date:</span>
                <span>{formatedDate(lastIssue?.publishDate)}</span>
              </p>
            </div>
            {/* </div> */}
          </div>
          <QuickLinks userRole={user?.role} />
        </section>
      </div>
    </DashboardContainer>
  )
}

export default Dashboard
