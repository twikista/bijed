// import { menuItemsData } from '@/static/menuitems_data'
import { footerItemsData } from '@/static/footeritems_data'
import Link from 'next/link'
import { CreativeCommonBy, CreativeCommonGeneral } from './Icons'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-[#993264] text-white text-sm sm:text-base md:px-10 px-5'>
      <div className='w-full py-8 mx-auto space-y-5 max-w-7xl'>
        <div className='grid justify-between grid-cols-2 gap-5 mx-auto md:grid-cols-4 font-saira'>
          {footerItemsData.map((menuItem) =>
            menuItem.submenu ? (
              <ul key={menuItem.name}>
                {menuItem.submenu.map(({ name, url }) => (
                  <li key={name} className=' hover:text-secondary w-fit'>
                    <Link href={`/${url}`}>{name}</Link>
                  </li>
                ))}
              </ul>
            ) : null
          )}
          <div>
            <h3 className='text-base font-bold capitalize md:text-lg'>
              Contact
            </h3>
            <div>
              <p>Tel:+2348037236527</p>
              <p>Email:bijed@uniben.edu</p>
            </div>
          </div>
        </div>
        <div className='h-[1px] bg-secondary/50' />
        <div className='flex flex-col items-center'>
          <div className='text-[11px] text-center ms:text-sm sm:text-base'>
            <div className='flex items-center text-'>
              <span className='uppercase'>&copy;bijed</span>
              <span>&nbsp;</span>
              <span>{currentYear}</span>
              <span>&nbsp;&#124;&nbsp;</span>
              <span className='text-left'>
                Licensed under a{' '}
                <a
                  href='https://creativecommons.org/licenses/by/4.0/'
                  className='inline-block font-semibold underline hover:text-blue-300'
                >
                  CC BY 4.0
                </a>
              </span>
              <span className='flex ml-1 border border-white p-[2px] rounded-[4px]'>
                <CreativeCommonGeneral className='w-5 h-5' />
                <CreativeCommonBy className='w-5 h-5' />
              </span>
            </div>
            <div className='mt-2'>
              <span className=''>Powered by e-Novative technologies</span>
              {/* <span className=''>
                Designed & maintained by{' '}
                <a
                  href='https://aaronanama.netlify.app/'
                  target='_blank'
                  className='font-semibold underline hover:text-blue-300'
                >
                  Aaron Anama
                </a>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
