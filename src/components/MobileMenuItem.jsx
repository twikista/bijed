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
      className={`[&:not(:last-child)]:border-b border-b-white/[0.2] border-solid  py-1 ${
        currentRoute === menuItem.url
          ? ' text-secondary transition-all'
          : 'hover:text-secondary transition-colors'
      }`}
      onClick={closeMenu}
    >
      {menuItem.submenu && menuItem.url ? (
        <>
          <button
            type='button'
            className='flex items-center gap-1 px-6 capitalize'
            aria-haspopup='menu'
            aria-expanded={showSubMenu ? 'true' : 'false'}
          >
            <Link
              href={menuItem.url}
              className='capitalize'
              onClick={closeMenu}
            >
              {menuItem.name}
            </Link>
            <div onClick={toggleSubMenu} className=''>
              {showSubMenu ? (
                <UpArrow width='10px' height='10px' />
              ) : (
                <DownArrow fill='currentColor' width='10px' height='10px' />
              )}
            </div>
          </button>
          <MobileSubMenu
            subMenuItems={menuItem.submenu}
            showSubMenu={showSubMenu}
            setShowSubMenu={setShowSubMenu}
          />
        </>
      ) : (
        <Link href={menuItem.url} className='px-6 capitalize'>
          {menuItem.name}
        </Link>
      )}
    </li>
  )
}

export default MobileMenuItem
