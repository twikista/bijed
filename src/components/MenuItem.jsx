'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import SubMenu from './SubMenu'
import DownArrow from './DownArrow'

function MenuItem({ menuItem }) {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const currentRoute = usePathname()
  const handler = () => {
    setShowSubMenu(!showSubMenu)
  }
  return (
    <li
      key={menuItem.name}
      className={`flex items-center${
        currentRoute === menuItem.url
          ? 'border-b-2 border-secondary text-secondary transition-all'
          : 'hover:text-secondary transition-colors'
      }`}
      onMouseEnter={() => setShowSubMenu(true)}
      onMouseLeave={() => setShowSubMenu(false)}
    >
      {menuItem.submenu && menuItem.url ? (
        <>
          <button
            type='button'
            className='flex items-center gap-1 capitalize'
            aria-haspopup='menu'
            aria-expanded={showSubMenu ? 'true' : 'false'}
            onClick={handler}
          >
            {menuItem.name}
            {/* </Link> */}
            <DownArrow fill='currentColor' width='10px' height='10px' />
          </button>
          <SubMenu
            subMenuItems={menuItem.submenu}
            showSubMenu={showSubMenu}
            setShowSubMenu={setShowSubMenu}
          />
        </>
      ) : (
        <Link href={`${menuItem.url}`} className='text-base capitalize'>
          {menuItem.name}
        </Link>
      )}
    </li>
  )
}

export default MenuItem
