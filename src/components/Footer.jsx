import { menuItemsData } from '@/static/menuitems_data'
import Link from 'next/link'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-[#993264] text-white  '>
      <div className='w-full max-w-5xl px-4 py-8 mx-auto space-y-5'>
        <div className='grid justify-between grid-cols-2 gap-5 mx-auto md:grid-cols-4 font-saira'>
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
          <div className='w-[320px] text-center'>
            <div className=''>
              <span>&copy;{currentYear}</span>
              <span>&nbsp;</span>
              <span className='font-bold uppercase'>bijed</span>
            </div>
            <div>
              <span>Powered by e-Novative technologies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
