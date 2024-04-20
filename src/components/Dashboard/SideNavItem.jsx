'use client'
import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

function SideNavItem({ link, linkText, OutlineIcon, FillIcon, type }) {
  const [isHovered, setIsHovered] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(false)
  const handleSubMenu = () => {
    setShowSubMenu(!showSubMenu)
    console.log('subMenu-', showSubMenu)
  }
  if (type === 'link') {
    return (
      <li className='flex items-center text-gray-50 hover:rounded-2xl hover:bg-black/30 hover:text-[#ffebb2]'>
        <Link
          href={link}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          onClick={() => setShowSubMenu(!showSubMenu)}
          className='flex w-full gap-3 px-3 py-4 text-lg'
        >
          <OutlineIcon
            className={clsx('w-5', { hidden: isHovered === true })}
          />
          <FillIcon
            className={clsx('w-5', {
              hidden: isHovered === false,
              block: isHovered === true,
            })}
          />

          <span>{linkText}</span>
        </Link>
      </li>
    )
  } else {
    return (
      <div className='flex items-center justify-center w-full text-gray-100 hover:rounded-2xl hover:bg-red-400 hover:text-gray-50'>
        <button
          type='submit'
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          className='flex items-center gap-3 px-3 py-3 text-lg'
        >
          <OutlineIcon
            className={clsx('w-5', { hidden: isHovered === true })}
          />
          <FillIcon
            className={clsx('w-5', {
              hidden: isHovered === false,
              block: isHovered === true,
            })}
          />

          <span>{linkText}</span>
          {/* {showSubMenu && <div>bla</div>} */}
        </button>
      </div>
    )
  }
}

export default SideNavItem
