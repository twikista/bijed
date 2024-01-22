import { menuItemsData } from '@/static/menuitems_data'
import Link from 'next/link'
import { CreativeCommonBy, CreativeCommonGeneral } from './Icons'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-[#993264] text-white text-[13px] sm:text-base'>
      <div className='w-full max-w-5xl px-4 py-8 mx-auto space-y-5'>
        <div className='grid justify-between grid-cols-2 gap-5 mx-auto md:grid-cols-3 font-saira'>
          {menuItemsData.map((menuItem) =>
            menuItem.submenu ? (
              <div key={menuItem.name}>
                <h3 className='text-base font-bold capitalize md:text-lg'>
                  {menuItem.name}
                </h3>
                <ul>
                  {menuItem.submenu.map(({ name, url }) => (
                    <li key={name} className='hover:text-secondary'>
                      <Link href={`/${url}`}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null
          )}
          <div>
            <h3 className='text-base font-bold capitalize md:text-lg'>
              Contact
            </h3>
            <ul>
              <li>
                <span>Email:bejid@uniben.edu</span>
              </li>
              <li>
                <span>Tel:+2349011990518</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='h-[1px] bg-secondary/50' />
        <div className='flex flex-col items-center'>
          <div className='text-center '>
            <div className='flex items-center '>
              <span className='uppercase'>&copy;bijed</span>
              <span>&nbsp;</span>
              <span>{currentYear}</span>
              <span>&nbsp;&#124;&nbsp;</span>
              <span className='text-left'>
                Licensed under a{' '}
                <a
                  href='https://creativecommons.org/licenses/by/4.0/'
                  className='inline-block font-semibold underline'
                >
                  CC BY 4.0
                </a>
              </span>
              <span className='flex ml-1 border border-white p-[2px] rounded-[4px]'>
                <CreativeCommonGeneral className='w-5 h-5' />
                <CreativeCommonBy className='w-5 h-5' />
              </span>
            </div>
            {/* <div className='flex'>
              <span>
                Content on this site is licensed under a{' '}
                <a
                  href='https://creativecommons.org/licenses/by/4.0/'
                  className='underline'
                >
                  Creative Commons Attribution 4.0 International license
                </a>
              </span>
              <span className='flex border border-white'>
                <CreativeCommonGeneral className='w-5 h-5' />
                <CreativeCommonBy className='w-5 h-5' />
              </span>
            </div> */}
            <div>
              <span className=''>Powered by e-Novative technologies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
