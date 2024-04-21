import { auth } from '../../../../auth'
import { sendEmail } from '@/lib/emailServices'

import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import JournalStats from '@/components/Dashboard/JournalStats'
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
      <JournalStats />
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
