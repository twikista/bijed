'use client'

import { usePathname } from 'next/navigation'

function ShowActivePath() {
  const path = usePathname()
  const pathArray = path.split('/')

  return (
    <div>
      <h1 className='text-xl font-bold capitalize sm:text-2xl lg:text-3xl'>
        {pathArray.length > 2 ? pathArray[2] : pathArray[1]}
      </h1>
    </div>
  )
}

export default ShowActivePath
