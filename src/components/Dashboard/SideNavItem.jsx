'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

function SideNavItem({ link, linkText, OutlineIcon, FillIcon, subMenu }) {
  const pathname = usePathname()
  const [isHovered, setIsHovered] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(false)

  if (subMenu?.length) {
    return (
      <li className='bg-red-600'>
        <div
          className={clsx(
            'flex items-center justify-between bg-green-400 text-gray-50 hover:rounded-2xl hover:bg-black/30 hover:text-[#ffebb2] w-full px-3 py-4 text-lg'
            // { ['bg-black/30 text-[#ffebb2]']: pathname === `${link}` }
          )}
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
      </li>
    )
  } else {
    return (
      <li
        className={clsx(
          'flex items-center text-gray-50 rounded-2xl hover:bg-black/30 hover:text-[#ffebb2]',
          {
            ['bg-black/30 text-[#ffebb2]']: pathname === link,
          }
        )}
      >
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
