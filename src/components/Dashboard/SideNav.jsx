import { auth } from '../../../auth'
import { logOut } from '@/lib/actions'

import Link from 'next/link'
import { HomeIconFill, HomeIconOutline } from '../Icons'
import SideNavItem from './SideNavItem'
import SideNavItems from './SideNavItems'
import LogoutButton from './LogoutButton'
import {
  AdjustmentsHorizontalIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline'

import {
  AdjustmentsHorizontalIcon as AdjustmentsHorizontalIconFill,
  CommandLineIcon as CommandLineIconFill,
  ComputerDesktopIcon as ComputerDesktopIconFill,
} from '@heroicons/react/24/solid'

//box-shadow: 0px 1px 4px rgba(0 0, 0 0.16)

async function SideNav() {
  const session = await auth()
  console.log('from side nav: ', session?.user)
  return (
    <aside className='flex flex-col h-screen overflow-y-hidden border-r text-white border-gray-300 border-solid w-60 bg-[#ac3dba] shadow-[0px_1px_4px_rgba(0 0 0 0.16)] sticky top-0 bottom-0 left-0'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-1 gap-2 pt-5 pb-3 text-white'>
          <ComputerDesktopIcon className='w-8' />
          <span className='text-xl font-bold uppercase '>Admin Panel</span>
        </div>

        <div className='h-[1px] bg-[#d1cbde] w-4/5 mx-auto' />
      </div>
      <nav className='flex-1 pt-6 px-7'>
        <SideNavItems session={session} />
        {/* <SideNavItem
            linkText='Home'
            link='/dashboard'
            Outlineicon={HomeIconOutline}
            FillIcon={HomeIconFill}
          />
          <li className='text-gray-500'>
            <Link href='/dashboard' className='flex gap-2 py-2'>
              <HomeIconOutline className='w-5 hover:hidden' />
              <HomeIconFill />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href='/dashboard/issues'>issues</Link>
          </li>
          <li>
            <Link href='/dashboard/articles'>View articles</Link>
          </li>
          <li>
            <Link href='/dashboard/add-issue'>new issue</Link>
          </li>
          <li>
            <Link href='/dashboard/add-article'>new article</Link>
          </li>
          <li>
            <Link href='/dashboard/publish-issue'>publish issue</Link>
          </li>
          <li>
            <Link href='/dashboard/announcements'>Announcements</Link>
          </li>
          <li>
            <Link href='/dashboard/profile'>Profile</Link>
          </li>
          {session?.user?.isAdmin && (
            <li>
              <Link href='/dashboard/admin'>Admin</Link>
            </li>
          )} */}
      </nav>
      <div className='flex flex-col items-center h-20'>
        <div className='h-[1px] bg-[#d1cbde] w-4/5' />
        <form action={logOut} className='flex items-center flex-1 w-full px-7'>
          <LogoutButton />
        </form>
      </div>
    </aside>
  )
}

export default SideNav
