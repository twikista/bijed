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
