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
import { QuestionMarkCircleIcon as QuestionMarkCircleIconOutline } from '@heroicons/react/24/outline'
import { QuestionMarkCircleIcon as QuestionMarkCircleIconFill } from '@heroicons/react/24/solid'
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
  },
  {
    text: 'News',
    url: '/dashboard/announcements',
    outlineIcon: NewspaperIconOutline,
    fillIcon: NewspaperIconFill,
  },
  {
    text: 'Editors',
    url: '/dashboard/editors',
    outlineIcon: DocumentTextIconOutline,
    fillIcon: DocumentTextIconFill,
  },
  {
    text: 'Help',
    url: '/dashboard/help',
    outlineIcon: QuestionMarkCircleIconOutline,
    fillIcon: QuestionMarkCircleIconFill,
  },
]
function SideNavItems({ session }) {
  return (
    <ul className='space-y-4'>
      {sideNavItems.map((i) => (
        <SideNavItem
          key={i.url}
          type='link'
          linkText={i.text}
          link={i.url}
          OutlineIcon={i.outlineIcon}
          FillIcon={i.fillIcon}
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
      {session?.user?.isAdmin && (
        // <li>
        //   <Link href='/dashboard/admin'>Admin</Link>
        // </li>
        <>
          <SideNavItem
            type='link'
            linkText='Manage user'
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
