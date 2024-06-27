'use client'

import Link from 'next/link'
import {
  HomeIconFill,
  HomeIconOutline,
  UsersIconFill,
  UsersIconOutline,
} from '../Icons'
import SideNavItem from './SideNavItem'
// import { MicrophoneIcon } from '@heroicons/react/24/outline'
import { NewspaperIcon as NewspaperIconOutline } from '@heroicons/react/24/outline'
import { NewspaperIcon as NewspaperIconFill } from '@heroicons/react/24/solid'
import { MicrophoneIcon as MicrophoneiconOutline } from '@heroicons/react/24/outline'
import { MicrophoneIcon as MicrophoneiconFill } from '@heroicons/react/24/solid'
import { Cog6ToothIcon as CogIconOutline } from '@heroicons/react/24/outline'
import { Cog6ToothIcon as CogIconFill } from '@heroicons/react/24/solid'
import { Square3Stack3DIcon as Square3Stack3DIconOutline } from '@heroicons/react/24/outline'
import { Square3Stack3DIcon as Square3Stack3DIconFill } from '@heroicons/react/24/solid'
import { ArrowPathRoundedSquareIcon as ArrowPathIconOutline } from '@heroicons/react/24/outline'
import { ArrowPathRoundedSquareIcon as ArrowPathIconFill } from '@heroicons/react/24/solid'
import { DocumentTextIcon as DocumentTextIconOutline } from '@heroicons/react/24/outline'
import { DocumentTextIcon as DocumentTextIconFill } from '@heroicons/react/24/solid'
import { WindowIcon as WindowIconOutline } from '@heroicons/react/24/outline'
import { WindowIcon as WindowIconFill } from '@heroicons/react/24/solid'

const sideNavItems = [
  {
    text: 'Home',
    url: '/dashboard',
    outlineIcon: HomeIconOutline,
    fillIcon: HomeIconFill,
  },
  {
    text: 'Issues',
    url: '/dashboard/issues',
    outlineIcon: Square3Stack3DIconOutline,
    fillIcon: Square3Stack3DIconFill,
    // subMenu: [
    //   { name: 'New Issue', url: '/dashboard/issues/new-issue' },
    //   { name: 'Published', url: '/dashboard/issues/published' },
    //   { name: 'Unpublished', url: '/dashboard/issues/unpublished' },
    // ],
  },
  {
    text: 'Announcements',
    url: '/dashboard/announcements',
    outlineIcon: NewspaperIconOutline,
    fillIcon: NewspaperIconFill,
  },
  {
    text: 'Editors',
    url: '/dashboard/editorial-board',
    outlineIcon: DocumentTextIconOutline,
    fillIcon: DocumentTextIconFill,
  },
  // {
  //   text: 'Auth Queue',
  //   url: '/dashboard/authorization-queue',
  //   outlineIcon: ArrowPathIconOutline,
  //   fillIcon: ArrowPathIconFill,
  //   subMenu: [
  //     { name: 'pending', url: '/dashboard/authorization-queue/pending-jobs' },
  //     { name: 'approved', url: '/dashboard/authorization-queue/approved-jobs' },
  //   ],
  // },
]
function SideNavItems({ session }) {
  return (
    <ul className='space-y-4'>
      {sideNavItems.map((navItem) => (
        <SideNavItem
          key={navItem.url}
          // type='link'
          subMenu={navItem.subMenu}
          linkText={navItem.text}
          link={navItem.url}
          navItem={navItem}
          OutlineIcon={navItem.outlineIcon}
          FillIcon={navItem.fillIcon}
          hasSubMenu={!!navItem.subMenu}
          user={session?.user}
        />
      ))}
      {/* <SideNavItem
        type='link'
        linkText='Home'
        link='/dashboard'
        OutlineIcon={HomeIconOutline}
        FillIcon={HomeIconFill}
      /> */}
      {/* <li className='text-gray-500'>
            <Link href='/dashboard' className='flex gap-2 py-2'>
              <HomeIconOutline className='w-5 hover:hidden' />
              <HomeIconFill />
              <span>Home</span>
            </Link>
          </li> */}
      {/* <li>
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
      </li> */}
      {session?.user?.role === 'admin' && (
        // <li>
        //   <Link href='/dashboard/admin'>Admin</Link>
        // </li>
        <>
          <SideNavItem
            type='link'
            linkText='Manage users'
            link='/dashboard/manage-users'
            OutlineIcon={UsersIconOutline}
            FillIcon={UsersIconFill}
          />
        </>
      )}
    </ul>
  )
}

export default SideNavItems
