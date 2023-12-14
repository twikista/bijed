'use client'

import { useState, useEffect, useRef } from 'react'
import { menuItemsData } from '@/static/menuitems_data'
import { ShowMenuToggle, HideMenuToggle } from './MobileMenuToggleIcons'
import MobileMenuItem from './MobileMenuItem'

function MobileNavBar() {
  const [showMenu, setShowMenu] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const handler = (event) => {
      if (showMenu && ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false)
      }
    }
    document.addEventListener('mousedown', handler)
    // document.addEventListener('touchstart', handler)
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler)
      // document.removeEventListener('touchstart', handler)
    }
  }, [showMenu])

  return (
    <nav className='relative flex py-1 md:hidden bg-primary'>
      <div className='flex justify-end w-full px-2'>
        <button
          type='button'
          className='px-1 py-[2px] font-semibold text-white uppercase border border-white rounded-[4px] text-sm hover:text-secondary hover:border-secondary'
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {showMenu ? <HideMenuToggle /> : <ShowMenuToggle />}
        </button>
      </div>
      <ul
        className={`flex-col absolute top-[39px] bg-primary w-full text-white font-bold text-lg ${
          showMenu ? 'h-fit flex py-[6px]' : 'h-0 hidden py-0'
        }`}
        ref={ref}
      >
        {menuItemsData.map((menuItem) => (
          <MobileMenuItem
            key={menuItem.name}
            menuItem={menuItem}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        ))}
      </ul>
    </nav>
  )
}

export default MobileNavBar
