'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

function Breadcrumb({
  homeElement,
  homeUrl,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
  isProtectedRoute,
}) {
  const paths = usePathname()
  const pathNames = paths.split('/').filter((path) => path)
  console.log('paths:', paths)
  console.log('pathnames:', pathNames)

  //render 'Home' link condtionally if not currently on website home or dashboard route
  const renderHome = () => {
    if (pathNames.length === 0 || isProtectedRoute) {
      return null
    }
    return (
      <React.Fragment>
        <li className='flex items-center'>
          <Link
            href={homeUrl}
            className='flex items-center text-[#800080] hover:text-blue-600 '
          >
            <span>{homeElement}</span>
          </Link>
          <ChevronRightIcon className='w-4' />
        </li>
      </React.Fragment>
    )
  }

  return (
    <nav className='pt-2'>
      <ul className='flex flex-wrap items-center capitalize'>
        {renderHome()}

        {pathNames.map((link, index) => {
          let href =
            //not render link if on home of dashboard
            isProtectedRoute && pathNames.length === 1
              ? ''
              : `/${pathNames.slice(0, index + 1).join('/')}`
          console.log(`href ${index}`, href)
          const lastItem = index === pathNames.length - 1
          if (!lastItem) {
            //disable second to last link on breadcrumb if on current issue path
            if (
              pathNames.includes('current') &&
              index + 1 === pathNames.length - 1
            )
              return (
                <React.Fragment key={index}>
                  <li className='text-gray-400'>
                    <span>{link}</span>
                  </li>
                  <ChevronRightIcon className='w-4' />
                  {/* {pathNames.length !== index + 1 && separator} */}
                </React.Fragment>
              )

            return (
              <React.Fragment key={index}>
                <li className='flex'>
                  <Link
                    href={href}
                    className='text-[#800080] hover:text-blue-600 '
                  >
                    <span>{`${link}`}</span>
                  </Link>
                  <ChevronRightIcon className='w-4' />
                </li>
              </React.Fragment>
            )
          } else {
            return (
              <React.Fragment key={index}>
                {paths === href && (
                  <li className='text-gray-400'>
                    <span>{link}</span>
                  </li>
                )}
                {/* {pathNames.length !== index + 1 && separator} */}
              </React.Fragment>
            )
          }
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumb
