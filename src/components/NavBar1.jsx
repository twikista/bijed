'use client'

import { menuItemsData } from '../static/menuitems_data'
import MenuItem from './MenuItem'
import { useEffect, useState } from 'react'

function NavBar() {
  const [hang, setHang] = useState(false)

  const scrollCon = () => {
    if (window.scrollY < 97) {
      setHang(false)
    } else {
      setHang(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollCon)
    return () => window.removeEventListener('scroll', scrollCon)
  }, [])

  return (
    <nav
      className={`bg-[#993264] justify-center hidden md:flex px-2 ${
        hang ? 'fixed top-0 right-0 left-0' : null
      }`}
    >
      <ul className='relative flex justify-between w-full max-w-md gap-4 py-2 text-xl font-semibold text-white'>
        {menuItemsData.map((menuItem) => (
          <MenuItem key={menuItem.name} menuItem={menuItem} />
        ))}
      </ul>
    </nav>
  )
}

export default NavBar

// ? ' fixed w-full bg-[#993264] py-2 justify-center flex top-0'
// ' w-full bg-[#993264] py-2 justify-center flex sticky top-0'
