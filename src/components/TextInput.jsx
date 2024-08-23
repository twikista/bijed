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
  return (
    <div className='flex flex-col'>
      <label htmlFor={name} className='inline-block mb-[2px] '>
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
            `w-full text-gray-600 pl-3 inline-block py-2  outline-none appearance-none bg-transparent`,
            {
              ['[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none']:
                type === 'number',
              ['pr-2']: type === 'date',
            }
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

      {error && (
        <span className='text-sm text-red-500 lg:text-base'>
          {error?.message}
        </span>
      )}
    </div>
  )
}

export default TextInput
