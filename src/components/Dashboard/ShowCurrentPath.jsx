'use client'

import { usePathname } from 'next/navigation'

function ShowActivePath() {
  const path = usePathname()
  const pathArray = path.split('/')

  return (
    <div>
      <div className='text-3xl font-bold capitalize'>
        {pathArray.length > 2 ? pathArray[2] : pathArray[1]}
      </div>
    </div>
  )
}

export default ShowActivePath
