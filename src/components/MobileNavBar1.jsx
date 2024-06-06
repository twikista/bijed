'use client'

import { useState, useEffect, useRef } from 'react'
import { menuItemsData } from '@/static/menuitems_data'
import { ShowMenuToggle, HideMenuToggle } from './MobileMenuToggleIcons'
import MobileMenuItem from './MobileMenuItem'

function MobileNavBar() {
  const [showMenu, setShowMenu] = useState(false)
  const [hang, setHang] = useState(false)
  const ref = useRef()

  const scrollCon = () => {
    if (window.scrollY < 97) {
      setHang(false)
    } else {
      setHang(true)
    }
  }

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

  useEffect(() => {
    window.addEventListener('scroll', scrollCon)
    return () => window.removeEventListener('scroll', scrollCon)
  }, [])

  return (
    <nav
      className={`flex  md:hidden bg-primary ${
        hang ? 'fixed top-0 right-0 left-0' : 'relative'
      }`}
    >
      <div className='relative w-full py-1'>
        <div className='flex justify-end w-full px-2'>
          <button
            type='button'
            className='px-1 py-[2px] font-semibold text-white uppercase border border-white rounded-[4px] text-sm'
            onClick={() => setShowMenu((prev) => !prev)}
          >
            {showMenu ? <HideMenuToggle /> : <ShowMenuToggle />}
          </button>
        </div>
        <ul
          className={`flex-col absolute top-[39px] bg-primary w-full text-white font-bold text-lg ${
            showMenu ? 'h-fit flex' : 'h-0 hidden py-0'
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
      </div>
    </nav>
  )
}

export default MobileNavBar
