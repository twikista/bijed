'use client'

import { useState } from 'react'
import clsx from 'clsx'
import {
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline'
import { EyeIcon as Iicon } from './Icons'

function PasswordInput({ label, name, register, error }) {
  console.log('from password:', error)
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)
  const togglePasswordVisibility = () =>
    setPasswordIsVisible(!passwordIsVisible)
  return (
    <div className='flex flex-col justify-center'>
      <div>
        <label htmlFor={name} className='inline-block mb-2'>
          {label}
        </label>
        <div
          className={clsx(
            `flex border border-gray-300 rounded-md focus-within:border-2 overflow-hidden bg-white`,
            { ['border-red-400']: error }
          )}
        >
          <div className='flex w-full gap-2 ml-3 text-gray-500'>
            <input
              className={clsx(
                `w-full  py-2 outline-none appearance-none text-gray-600`
              )}
              type={passwordIsVisible ? 'text' : 'password'}
              {...register(name)}
              id={name}
              placeholder='Enter password'
            />
            <div className='flex items-center gap-1 text-gray-400'>
              {passwordIsVisible ? (
                <EyeSlashIcon
                  onClick={togglePasswordVisibility}
                  className={clsx(`w-[22px] cursor-pointer`, {
                    ['mr-3']: !error,
                  })}
                />
              ) : (
                <EyeIcon
                  onClick={togglePasswordVisibility}
                  className={clsx(`w-[22px] cursor-pointer`, {
                    ['mr-3']: !error,
                  })}
                />
              )}
              {error && (
                <ExclamationCircleIcon
                  className={clsx('w-5 mr-3', { ['text-red-400']: error })}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {error && <span className='text-red-500'>{error?.message}</span>}
    </div>
  )
}

export default PasswordInput
