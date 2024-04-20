'use client'

import { usePathname } from 'next/navigation'

function Breadcrumb() {
  const path = usePathname()

  return (
    <div>
      {path === '/dashboard' ? null : <div className='py-4'>{path}</div>}
    </div>
  )
}

export default Breadcrumb
