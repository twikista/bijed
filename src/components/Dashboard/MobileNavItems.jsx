'use client'

import MobileNavItem from './MobileNavItem'

import {
  HomeIconFill,
  HomeIconOutline,
  UsersIconFill,
  UsersIconOutline,
} from '../Icons'
import { NewspaperIcon as NewspaperIconOutline } from '@heroicons/react/24/outline'
import { NewspaperIcon as NewspaperIconFill } from '@heroicons/react/24/solid'
import { Square3Stack3DIcon as Square3Stack3DIconOutline } from '@heroicons/react/24/outline'
import { Square3Stack3DIcon as Square3Stack3DIconFill } from '@heroicons/react/24/solid'
import { DocumentTextIcon as DocumentTextIconOutline } from '@heroicons/react/24/outline'
import { DocumentTextIcon as DocumentTextIconFill } from '@heroicons/react/24/solid'
import LogoutButton from './LogoutButton'

const sideNavMenuItems = [
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
    url: '/dashboard/editorial-board',
    outlineIcon: DocumentTextIconOutline,
    fillIcon: DocumentTextIconFill,
  },
]

function MobileNavItems({ session }) {
  return (
    <ul className='flex items-center justify-between w-full md:w-4/5 md:mx-auto'>
      {sideNavMenuItems.map(({ url, text, fillIcon, outlineIcon }) => (
        <MobileNavItem
          key={text}
          url={url}
          linkText={text}
          OutlineIcon={outlineIcon}
          FillIcon={fillIcon}
        />
      ))}
      {session?.user?.role === 'admin' && (
        <>
          <MobileNavItem
            url='/dashboard/manage-users'
            linkText='users'
            OutlineIcon={UsersIconOutline}
            FillIcon={UsersIconFill}
          />
        </>
      )}
      <LogoutButton variant='mobile' />
    </ul>
  )
}

export default MobileNavItems
