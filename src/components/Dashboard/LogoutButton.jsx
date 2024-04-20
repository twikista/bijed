'use client'

import { ArrowLeftStartOnRectangleIcon as ArrowLeftStartOnRectangleIconOutline } from '@heroicons/react/24/outline'
import { ArrowLeftStartOnRectangleIcon as ArrowLeftStartOnRectangleIconFill } from '@heroicons/react/24/solid'
import SideNavItem from './SideNavItem'

function LogoutButton() {
  return (
    <SideNavItem
      type='button'
      linkText='Log out'
      OutlineIcon={ArrowLeftStartOnRectangleIconOutline}
      FillIcon={ArrowLeftStartOnRectangleIconFill}
    />
  )
}

export default LogoutButton
