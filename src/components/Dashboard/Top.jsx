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
    <header className='fixed left-0 lg:left-[240px] right-0  top-0 flex items-center justify-between px-2 lg:px-6 border-b border-gray-300 border-solid bg-gray-50'>
      <ShowActivePath />
      <span className='py-5'>{`Hi, ${user.firstName} ${user.lastName}!`}</span>
    </header>
  )
}

export default Top
