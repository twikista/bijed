'use client'

import { useState } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import clsx from 'clsx'

function ResourceFilter({ m }) {
  // const [mode, setMode] = useState('')
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()

  console.log('params===', m)
  const handler = (term) => {
    const params = new URLSearchParams(searchParams)
    params.set('mode', term)
    replace(`${pathName}?${params.toString()}`)
    // setMode(params.toString())
  }

  return (
    <div className='flex justify-around mt-10 overflow-hidden border border-gray-300 rounded-md w-96 '>
      <button
        onClick={() => {
          handler('final')
        }}
        className={clsx('flex-1 inline-block py-2', {
          [`bg-gray-300`]: m === undefined || m === 'final',
        })}
      >
        published
      </button>
      <button
        onClick={() => {
          handler('draft')
        }}
        className={clsx('flex-1 inline-block py-2', {
          [`bg-gray-300`]: m === 'draft',
        })}
      >
        Draft
      </button>
    </div>
  )
}

export default ResourceFilter
