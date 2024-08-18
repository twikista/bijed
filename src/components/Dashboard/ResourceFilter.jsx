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
    <div className='flex items-center self-end'>
      {/* <div>Filter:</div> */}
      <div className='flex w-[160px] text-xs  items-center overflow-hidden border-2 justify-evenly border-primary rounded-xl md:w-[160px]'>
        <button
          onClick={() => {
            handler('final')
          }}
          className={clsx(
            'flex-1 flex justify-center w-6/12 py-1 px-1 text-primary',
            {
              [`text-white bg-primary`]: mode === undefined || mode === 'final',
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
            'flex-1 flex py-1 px-1 w-6/12 justify-center text-primary',
            {
              [`text-white bg-primary`]: mode === 'draft',
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
