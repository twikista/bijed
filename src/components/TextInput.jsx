'use client'

import clsx from 'clsx'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

function TextInput({
  label,
  placeholder,
  name,
  register,
  error,
  readOnly,
  valueAsNumber,
  valueAsDate,
  type,
}) {
  console.log('from email field:', error)
  return (
    <div className='flex flex-col'>
      <label htmlFor={name} className='inline-block mb-2 '>
        {label}
      </label>
      <div
        className={clsx(
          `flex border border-gray-300 rounded-md focus-within:border-2 overflow-hidden bg-white`,
          { ['border-red-400']: error }
        )}
      >
        <input
          className={clsx(
            `w-full text-gray-600 pl-3 inline-block py-2  outline-none appearance-none`
          )}
          type={type || 'text'}
          {...register(name, {
            valueAsNumber: valueAsNumber ? valueAsNumber : false,
            valueAsDate: valueAsDate ? valueAsDate : false,
          })}
          id={name}
          placeholder={placeholder}
          readOnly={readOnly ? readOnly : null}
        />
        {error && (
          <ExclamationCircleIcon
            className={clsx('w-5 mr-3', { ['text-red-400']: error })}
          />
        )}
      </div>

      {error && <span className='text-red-500 '>{error?.message}</span>}
    </div>
  )
}

export default TextInput
