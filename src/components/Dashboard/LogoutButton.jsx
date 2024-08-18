'use client'
import { useState } from 'react'
import clsx from 'clsx'
import { ArrowLeftStartOnRectangleIcon as ArrowLeftStartOnRectangleIconOutline } from '@heroicons/react/24/outline'
import { ArrowLeftStartOnRectangleIcon as ArrowLeftStartOnRectangleIconFill } from '@heroicons/react/24/solid'
import { logOut } from '@/lib/actions'

function LogoutButton({ variant }) {
  const [isHovered, setIsHovered] = useState(false)
  if (variant === 'mobile') {
    return (
      <form action={logOut} className='flex lg:hidden '>
        <button
          type='submit'
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          className='flex flex-col items-center justify-center text-gray-50'
        >
          <ArrowLeftStartOnRectangleIconOutline
            className={clsx('w-5', { hidden: isHovered === true })}
          />
          <ArrowLeftStartOnRectangleIconFill
            className={clsx('w-5', {
              hidden: isHovered === false,
              block: isHovered === true,
            })}
          />

          <span className='text-xs'>Log out</span>
        </button>
      </form>
    )
  }

  return (
    <form action={logOut} className='flex items-center flex-1 w-full px-7'>
      <div className='flex items-center justify-center w-full text-gray-100 hover:rounded-2xl hover:bg-red-400 hover:text-gray-50'>
        <button
          type='submit'
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          className='flex items-center gap-3 px-3 py-3 text-lg'
        >
          <ArrowLeftStartOnRectangleIconOutline
            className={clsx('w-5', { hidden: isHovered === true })}
          />
          <ArrowLeftStartOnRectangleIconFill
            className={clsx('w-5', {
              hidden: isHovered === false,
              block: isHovered === true,
            })}
          />

          <span>Log out</span>
        </button>
      </div>
    </form>
  )
}

export default LogoutButton
