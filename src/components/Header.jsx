import Navbar from './Navbar'
import unibenLogo from '../../public/uniben_logo.png'
import Image from 'next/image'

function Header() {
  return (
    <header>
      <div>
        <div className='flex items-center justify-center gap-5 pt-2 pb-1'>
          <Image
            src={unibenLogo}
            alt='logo of univrsity of benin'
            width={100}
            height='auto'
          />
          <div className=''>
            <h1 className='uppercase text-[#993264] text-5xl font-extrabold text-center'>
              benin international journal of entrepreneurship developemnt
              {/* &#40;BIJED&#41; */}
            </h1>
            <h3 className='text-xl font-semibold text-center text-[#cdad4e]'>
              A publication of the Department of Entrepreneurship, Faculty of
              management Sciences, University of Benin, Benin city
            </h3>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
