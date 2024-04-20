import { auth } from '../../../../auth'
import { sendEmail } from '@/lib/emailServices'

import DashboardContainer from '@/components/Dashboard/DashboardContainer'
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
      <section className='flex justify-around gap-10'>
        <div className='flex-1 px-5 py-5 border border-gray-400 rounded-lg'>
          <p className='text-6xl'>3</p>
          <span>Total volumes</span>
        </div>
        <div className='flex-1 px-5 py-5 border border-gray-400 rounded-lg'>
          <p className='text-6xl'>3</p>
          <span>Total issues</span>
        </div>
        <div className='flex-1 px-5 py-5 border border-gray-400 rounded-lg'>
          <p className='text-6xl'>3</p>
          <span>Total articles</span>
        </div>
      </section>
      <section>
        <h4 className='border-b border-spacing-6'>Quick links</h4>
        <div>
          <p>Add issue</p>
          <p>Add news</p>
          <p>Add user</p>
        </div>
      </section>
      <p>This is dahsboard</p>
      <div>
        {user && (
          <div>
            <button>logout</button>
            <p>{`welcome ${user?.email}`}</p>
          </div>
        )}
      </div>
    </DashboardContainer>
  )
}

export default Dashboard
