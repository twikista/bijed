'use client'
import { useState } from 'react'
import clsx from 'clsx'
import { ArrowLeftStartOnRectangleIcon as ArrowLeftStartOnRectangleIconOutline } from '@heroicons/react/24/outline'
import { ArrowLeftStartOnRectangleIcon as ArrowLeftStartOnRectangleIconFill } from '@heroicons/react/24/solid'

function LogoutButton() {
  const [isHovered, setIsHovered] = useState(false)
  return (
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
  )
}

export default LogoutButton
