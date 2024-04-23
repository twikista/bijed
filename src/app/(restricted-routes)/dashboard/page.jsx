import { auth } from '../../../../auth'
import { sendEmail } from '@/lib/emailServices'

import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import JournalStats from '@/components/Dashboard/JournalStats'
import {
  AddIssuesIcon,
  AddToIssueIcon,
  AddUserIcon,
  ArrowRight,
  GlobeIcon,
  HomePageIcon,
  LinkIcon,
  TimePastIcon,
} from '@/components/Icons'
import Link from 'next/link'
import { GlobeAltIcon, DocumentPlusIcon } from '@heroicons/react/24/outline'
import QuickLinkItem from '@/components/Dashboard/QuickLnkItem'
import QuickLinks from '@/components/Dashboard/QuickLinks'
// import Link from 'next/link'

async function Dashboard() {
  // await sendEmail({
  //   to: 'aaron.anama@uniben.edu',
  //   subject: 'email activation',
  //   body: 'Hello World',
  // })
  const { user } = await auth()

  // console.log('auth in dashboard home: ', user)
  return (
    <DashboardContainer>
      <div className='space-y-12 '>
        <div className='p-10 rounded-xl bg-gray-50'>
          <JournalStats />
        </div>
        <section className='flex justify-between gap-5 p-10 bg-gray-50 rounded-xl'>
          <div className='flex-1 p-2 bg-gray-200 rounded-lg '>
            {/* <div className='bg-gray-50'> */}
            {/* <div className=''> */}
            <div className='flex items-center gap-1 py-3'>
              <TimePastIcon className='w-6 h-6 fill-gray-500' />
              <h4 className='text-xl '>Last Published</h4>
            </div>
            {/* <div className='h-[1px] w-full bg-gray-300' /> */}
            {/* </div> */}

            <div className='space-y-4 bg-gray-50'>
              <p className='py-2'>Year:2024</p>
              <p>Volume:4</p>
              <p>Issue Number:2</p>
              <p>Number of Articles:8</p>
              <p>Publish Date:12/4/2024</p>
            </div>
            {/* </div> */}
          </div>
          <QuickLinks />
        </section>
      </div>
    </DashboardContainer>
  )
}

export default Dashboard
