'use client'

import { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

function PasswordInput({ label, name, register, error }) {
  console.log('from password:', error)
  const [isPassowrdVisible, setIsPasswordVisible] = useState(false)
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPassowrdVisible)
  return (
    <div className='flex flex-col'>
      <div>
        <label htmlFor={name} className=''>
          {label}
        </label>
        <div className='flex gap-2'>
          <input
            type={isPassowrdVisible ? 'text' : 'password'}
            {...register(name)}
            id={name}
          />
          {isPassowrdVisible ? (
            <EyeSlashIcon onClick={togglePasswordVisibility} className='w-6' />
          ) : (
            <EyeIcon onClick={togglePasswordVisibility} className='w-6' />
          )}
        </div>
      </div>
      {error && <span>{error?.message}</span>}
    </div>
  )
}

export default PasswordInput
