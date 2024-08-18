'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

function SideNavItem({ link, linkText, OutlineIcon, FillIcon }) {
  const pathname = usePathname()
  const [isHovered, setIsHovered] = useState(false)

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
        className='flex w-full gap-3 px-3 py-4 text-lg'
      >
        <OutlineIcon className={clsx('w-5', { hidden: isHovered === true })} />
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

export default SideNavItem
