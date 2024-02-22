import Navbar from './Navbar'
import unibenLogo from '../../public/uniben_logo.png'
import Image from 'next/image'
import Link from 'next/link'
import MobileNavBar from './MobileNavBar'

function Header() {
  return (
    <header className='h-fit font-saira'>
      <div className='px-2 pt-2'>
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
              {/* &#40;BIJED&#41; */}
            </h1>
            <h3 className='text-base leading-relaxed lg:text-lg 2xl:text-xl font-bold text-center text-[#cdad4e]'>
              {/* A publication of the Department of Entrepreneurship, Faculty of
              management Sciences, University of Benin, Benin city */}
              (ISSN:1890-2345)
            </h3>
          </div>
        </div>
      </div>
      <Navbar />
      <MobileNavBar />
    </header>
  )
}

export default Header
