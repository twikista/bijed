import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import SubMenu from './SubMenu'
import DownArrow from './DownArrow'

function MenuItem({ menuItem }) {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const currentRoute = usePathname()
  return (
    <li
      key={menuItem.name}
      className={`${
        currentRoute === menuItem.url
          ? 'border-b-2 border-secondary text-[#e4c97a] transition-all'
          : 'hover:text-secondary transition-colors'
      }`}
      onMouseEnter={() => setShowSubMenu(true)}
      onMouseLeave={() => setShowSubMenu(false)}
    >
      {menuItem.submenu ? (
        <>
          <button
            type='button'
            className='flex items-center gap-1 capitalize'
            aria-haspopup='menu'
            aria-expanded={showSubMenu ? 'true' : 'false'}
            onClick={() => setShowSubMenu((current) => !current)}
          >
            <Link href={menuItem.url} className='capitalize'>
              {menuItem.name}
            </Link>
            <DownArrow fill='currentColor' width='12px' height='12px' />
          </button>
          <SubMenu
            subMenuItems={menuItem.submenu}
            showSubMenu={showSubMenu}
            setShowSubMenu={setShowSubMenu}
          />
        </>
      ) : (
        <Link href={menuItem.url} className='capitalize'>
          {menuItem.name}
        </Link>
      )}
    </li>
  )
}

export default MenuItem
