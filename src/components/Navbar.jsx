'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Navbar() {
  const routes = [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/policy', name: 'policy' },
    { path: '/journal', name: 'journal' },
    { path: '/contact', name: 'contact' },
  ]
  const currentRoute = usePathname()

  return (
    <nav className='w-full bg-[#993264] py-2 justify-center flex mt-1'>
      <ul className='flex justify-between w-full max-w-md gap-4 text-xl font-semibold text-white'>
        {routes.map((route) => (
          <li
            key={route.name}
            className={
              currentRoute === route.path
                ? 'border-b-2 border-[#e4c97a] text-[#e4c97a] transition-all'
                : null
            }
          >
            <Link href={route.path} className='capitalize'>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
