'use client'

import { useState, useEffect, useRef } from 'react'
import { menuItemsData } from '@/static/menuitems_data'
import { ShowMenuToggle, HideMenuToggle } from './MobileMenuToggleIcons'
import MobileMenuItem from './MobileMenuItem'
import Link from 'next/link'

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

  const toggleHandler = () => {
    setShowMenu((prev) => !prev)
  }

  useEffect(() => {
    const handler = (event) => {
      console.log('target-', event.target)
      console.log('ref-', ref.current)
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
      className={`flex  md:hidden bg-[#800080] pb-1 ${
        hang ? 'fixed top-0 right-0 left-0' : 'relative'
      }`}
    >
      <div className='relative w-full py-1'>
        <div className='flex justify-end w-full px-2'>
          <button
            type='button'
            className='px-1 py-[2px] font-semibold text-gray-200 uppercase border border-white/60 rounded-[2px] text-sm'
            onClick={toggleHandler}
          >
            {showMenu ? <HideMenuToggle /> : <ShowMenuToggle />}
          </button>
        </div>
        <ul
          className={`flex-col absolute top-[39px] bg-[#800080] w-full text-white font-medium font-sairaNormal text-sm ${
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
          <Link
            href='/auth/login'
            className='inline-block w-full px-6 py-1 capitalize'
            onClick={() => setShowMenu(!showMenu)}
          >
            login
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default MobileNavBar
