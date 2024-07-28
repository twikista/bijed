'use client'

import { useState } from 'react'
import Navbar from './Navbar'
import unibenLogo from '../../public/uniben_logo.png'
import Image from 'next/image'
import Link from 'next/link'
import MobileNavBar from './MobileNavBar1'
import { IdeasIcon } from './Icons'
import { HideMenuToggle, ShowMenuToggle } from './MobileMenuToggleIcons'

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const toggleHandler = () => {
    setShowMenu((prev) => !prev)
  }
  return (
    <header className='bg-[#800080] h-fit'>
      {/* <div className='px-2 pt-2'>
        <div className='flex flex-col items-center justify-center gap-1 pt-2 pb-1 sm:gap-2 md:flex-row md:gap-[10px] lg:gap-5'>
          <div className='w-8 ms:w-10 md:w-14 lg:w-20 2xl:w-24 h-fit '>
            <Link href='/'>
              <Image
                src={unibenLogo}
                alt='logo of univrsity of benin'
                width={100}
                height='auto'
              />
            </Link>
          </div>
          <div className='lg:space-y-2'>
            <h1 className='font-extrabold text-center uppercase text-primary text-lg sm:text-2xl md:text-[26px] lg:text-[34px] xl:text-[44px]'>
              benin international journal of entrepreneurship developement
            </h1>
            <h3 className='text-base leading-relaxed lg:text-lg 2xl:text-xl font-bold text-center text-[#cdad4e]'>
              (ISSN:1890-2345)
            </h3>
          </div>
        </div>
      </div> */}
      <div className='flex flex-col lg:flex-row items-center px-1 lg:px-10 h-[100px] sm:h-[120px] md:h-[90px] lg:h-[90px] text-white justify-center gap-0 relative'>
        <div className='flex flex-col items-center py-3 md:flex-row'>
          <Link href='/' className='mb-1 md:mb-0'>
            <Image
              src={unibenLogo}
              alt='logo of univrsity of benin'
              width={60}
              height='auto'
              className='hidden mr-3 rounded-full lg:block'
            />
            <Image
              src={unibenLogo}
              alt='logo of univrsity of benin'
              width={50}
              height='auto'
              className='hidden rounded-full sm:block md:mr-3 lg:hidden'
            />
            <Image
              src={unibenLogo}
              alt='logo of univrsity of benin'
              width={40}
              height='auto'
              className='block rounded-full sm:hidden'
            />
          </Link>

          <div className='flex flex-col'>
            {/* <IdeasIcon className='w-5 h-5 text-white lg:w-8 md:h-8' /> */}

            <div className='flex items-center text-sm font-bold text-white ms:text-lg md:text-xl sm:text-xl lg:text-3xl font-saira'>
              <h1 className='hidden sm:flex'>BIJED</h1>
              <span className='sm:h-4 md:h-5 lg:h-6 w-[1px] bg-white lg:inline-block mx-1 hidden sm:block' />
              <span className='font-saira'>
                Benin International Journal of Entrepreneurship Development
              </span>
            </div>
            <div className='flex justify-center md:justify-start '>
              <span className='mb-1 text-xs text-white lg:mb-0 lg:text-sm lg:font-medium '>{`ISSN:1890-2345`}</span>
            </div>
          </div>
          <div className='absolute flex justify-end w-full px-2 right-5 top-4 md:hidden'>
            <button
              type='button'
              className='px-[1px] py-[1px] font-semibold text-white uppercase hover:border border-white rounded-[2px] text-sm'
              onClick={() => setShowMenu((prev) => !prev)}
            >
              {showMenu ? <HideMenuToggle /> : <ShowMenuToggle />}
            </button>
          </div>

          {/* <Image
            src={unibenLogo}
            alt='logo of univrsity of benin'
            width={40}
            height={40}
            className='ml-3 rounded-full'
          /> */}
        </div>
        {/* <Link
          href={`${process.env.AUTH}/login`}
          className='px-4 py-[2px] text-lg border border-white rounded-lg font-barlow'
        >
          Login
        </Link> */}
        {/* <span className='mb-1 text-xs text-white lg:mb-0 lg:text-base lg:font-medium'>{`ISSN:1890-2345`}</span> */}
      </div>
      <div className='bg-white/30 md:h-[1px] mx-auto' />
      <div className=''>
        <Navbar />
        <MobileNavBar
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          toggleHandler={toggleHandler}
        />
      </div>
    </header>
  )
}

export default Header
