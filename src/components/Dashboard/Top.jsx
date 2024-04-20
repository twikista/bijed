import ShowActivePath from './ShowCurrentPath'
import { auth } from '../../../auth'

async function Top() {
  const { user } = await auth()
  const currentDate = new Date()
  const formatedDate = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(currentDate)
  return (
    <div className='fixed left-[240px] right-0 flex items-center justify-between px-6 border-b border-gray-300 border-solid bg-gray-50'>
      <ShowActivePath />
      <div className=''>
        <div className='py-5'>{`Hi, ${user.firstName} ${
          user.lastName ? user.lastName : ''
        }!`}</div>
        {/* <div className='text-sm text-gray-400'>{formatedDate}</div> */}
        {/* <div></di> */}
      </div>
    </div>
  )
}

export default Top
