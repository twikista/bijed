'use client'
import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { UsersIconOutline } from '../Icons'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/solid'

function SideNavItem({
  link,
  linkText,
  OutlineIcon,
  FillIcon,
  hasSubMenu,
  subMenu,
  user,
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(false)
  const handleSubMenu = () => {
    setShowSubMenu(!showSubMenu)
    console.log('subMenu-', showSubMenu)
  }
  if (subMenu?.length) {
    return (
      <li className=''>
        <div
          className='flex items-center justify-between text-gray-50 hover:rounded-2xl hover:bg-black/30 hover:text-[#ffebb2] w-full px-3 py-4 text-lg'
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          <div className='flex gap-3'>
            <OutlineIcon
              className={clsx('w-5', { hidden: isHovered === true })}
            />
            <FillIcon
              className={clsx('w-5', {
                hidden: isHovered === false,
                block: isHovered === true,
              })}
            />
            <span className='items-center'>{linkText}</span>
          </div>
          <span
            onClick={() => {
              setToggle((prev) => !prev)
            }}
            className='flex items-center w-5 h-5 p-[2px] text-black bg-white rounded-full'
          >
            {toggle ? (
              <ChevronUpIcon className='cursor-pointer ' />
            ) : (
              <ChevronDownIcon className='cursor-pointer ' />
            )}
          </span>
        </div>
        {toggle && (
          <ul className='mt-1 ml-5 space-y-[10px] border-l'>
            {subMenu.map((subMenuItem) =>
              user.role !== 'business manager' &&
              subMenuItem.name === 'New Issue' ? null : (
                <li
                  key={subMenuItem.name}
                  className=' flex text-gray-50 hover:rounded-2xl  hover:text-[#ffebb2] ml-8 hover:font-semibold'
                >
                  <Link
                    href={subMenuItem.url}
                    className='inline-block py-1 capitalize'
                  >
                    {subMenuItem.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        )}
      </li>
    )
  } else {
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
  }
}

export default SideNavItem
