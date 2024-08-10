'use client'

import Link from 'next/link'
import {
  HomeIconFill,
  HomeIconOutline,
  UsersIconFill,
  UsersIconOutline,
} from '../Icons'
import SideNavItem from './SideNavItem'
import { NewspaperIcon as NewspaperIconOutline } from '@heroicons/react/24/outline'
import { NewspaperIcon as NewspaperIconFill } from '@heroicons/react/24/solid'
import { Square3Stack3DIcon as Square3Stack3DIconOutline } from '@heroicons/react/24/outline'
import { Square3Stack3DIcon as Square3Stack3DIconFill } from '@heroicons/react/24/solid'
import { DocumentTextIcon as DocumentTextIconOutline } from '@heroicons/react/24/outline'
import { DocumentTextIcon as DocumentTextIconFill } from '@heroicons/react/24/solid'

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
    url: '/dashboard/editorial-board',
    outlineIcon: DocumentTextIconOutline,
    fillIcon: DocumentTextIconFill,
  },
]
function SideNavItems({ session }) {
  return (
    <ul className='space-y-4'>
      {sideNavItems.map((navItem) => (
        <SideNavItem
          key={navItem.url}
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
      {session?.user?.role === 'admin' && (
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
