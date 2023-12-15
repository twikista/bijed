import Navbar from './Navbar'
import unibenLogo from '../../public/uniben_logo.png'
import Image from 'next/image'
import MobileNavBar from './MobileNavBar'

function Header() {
  return (
    <header className='h-fit font-saira'>
      <div className=''>
        <div className='flex items-center justify-center gap-1 pt-2 pb-1 sm:gap-2 md:gap-[10px] lg:gap-5'>
          <div className='w-7 ms:w-10 md:w-14 lg:w-20 2xl:w-24 h-fit '>
            <Image
              src={unibenLogo}
              alt='logo of univrsity of benin'
              width={100}
              height='auto'
            />
          </div>

          <div className=''>
            <h1 className='font-extrabold text-center uppercase text-primary text-xs ms:text-base sm:text-xl md:text-[26px] lg:text-[34px] xl:text-[44px]'>
              benin international journal of entrepreneurship developement
              {/* &#40;BIJED&#41; */}
            </h1>
            <h3 className='text-[7px] ms:text-[9px] sm:text-xs md:text-sm lg:text-lg 2xl:text-xl font-semibold text-center text-[#cdad4e]'>
              A publication of the Department of Entrepreneurship, Faculty of
              management Sciences, University of Benin, Benin city
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
