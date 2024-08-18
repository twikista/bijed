import { auth } from '../../../auth'
import { logOut } from '@/lib/actions'
import SideNavItems from './SideNavItems'
import LogoutButton from './LogoutButton'
import { ComputerDesktopIcon } from '@heroicons/react/24/outline'

async function SideNav() {
  const session = await auth()
  return (
    <nav className='hidden lg:flex flex-col h-screen overflow-y-hidden border-r text-white border-gray-300 border-solid w-60 bg-[#ac3dba] shadow-[0px_1px_4px_rgba(0 0 0 0.16)] sticky top-0 bottom-0 left-0 font-barlow'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-1 gap-2 pt-5 pb-3 text-white'>
          <ComputerDesktopIcon className='w-8' />
          <span className='text-xl font-bold uppercase '>Admin Panel</span>
        </div>

        <div className='h-[1px] bg-[#d1cbde] w-4/5 mx-auto' />
      </div>
      <nav className='flex-1 pt-6 px-7'>
        <SideNavItems session={session} />
      </nav>
      <div className='flex flex-col items-center h-20'>
        <div className='h-[1px] bg-[#d1cbde] w-4/5' />
        <LogoutButton />
      </div>
    </nav>
  )
}

export default SideNav
