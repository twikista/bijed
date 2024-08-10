'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import clsx from 'clsx'

function ResourceFilter({ mode }) {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()

  const handler = (term) => {
    const params = new URLSearchParams(searchParams)
    params.set('mode', term)
    replace(`${pathName}?${params.toString()}`)
  }

  return (
    <div className='flex items-center self-end gap-1'>
      <div>Filter Resource:</div>
      <div className='flex items-center justify-around gap-2'>
        <button
          onClick={() => {
            handler('final')
          }}
          className={clsx(
            'flex-1 inline-block rounded-md border border-gray-400 px-2 min-w-[109px] ',
            {
              [`text-white bg-gray-400`]:
                mode === undefined || mode === 'final',
            }
          )}
        >
          Published
        </button>
        {/* <div className='mx-[3px] '>|</div> */}
        <button
          onClick={() => {
            handler('draft')
          }}
          className={clsx(
            'flex-1 inline-block rounded-md border border-gray-400 px-2',
            {
              [`text-white bg-gray-400`]: mode === 'draft',
            }
          )}
        >
          Unpublished
        </button>
      </div>
    </div>
  )
}

export default ResourceFilter
