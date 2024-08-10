'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import MobileSubMenu from './MobileSubMenu'
import DownArrow from './DownArrow'
import UpArrow from './UpArrow'

function MobileMenuItem({ menuItem, showMenu, setShowMenu }) {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const currentRoute = usePathname()
  const closeMenu = () => {
    showSubMenu && setShowSubMenu(false)
    showMenu && setShowMenu(false)
  }
  const toggleSubMenu = (e) => {
    e.stopPropagation()
    setShowSubMenu((prev) => !prev)
  }
  return (
    <li
      key={menuItem.name}
      className='[&:not(:last-child)]:border-b border-b-white/[0.2] border-solid w-full '
      // onClick={closeMenu}
    >
      {menuItem.submenu && menuItem.url ? (
        <>
          <button
            type='button'
            className='flex items-center justify-between w-full gap-1 px-6 py-1 capitalize'
            aria-haspopup='menu'
            aria-expanded={showSubMenu ? 'true' : 'false'}
            onClick={toggleSubMenu}
          >
            <span>{menuItem.name}</span>
            <span className='inline-block ml-1'>
              {showSubMenu ? (
                <UpArrow width='10px' height='10px' />
              ) : (
                <DownArrow fill='currentColor' width='10px' height='10px' />
              )}
            </span>
          </button>

          <MobileSubMenu
            subMenuItems={menuItem.submenu}
            showSubMenu={showSubMenu}
            setShowSubMenu={setShowSubMenu}
            closeMenu={closeMenu}
          />
        </>
      ) : (
        <Link
          href={menuItem.url}
          className='inline-block w-full px-6 py-1 capitalize'
          onClick={closeMenu}
        >
          {menuItem.name}
        </Link>
      )}
    </li>
  )
}

export default MobileMenuItem
