import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainContainer from '@/components/MainContainer'
import tokenExpiredIcon from '@/../public/system_expired.svg'
import Link from 'next/link'
import Image from 'next/image'
function NotFound() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-col items-center justify-center flex-grow w-full h-full px-3 md:my-10'>
        {/* <Image
          src={tokenExpiredIcon}
          alt='forgot password image'
          width={80}
          className='mx-auto'
          priority
        /> */}
        <div className='flex flex-col items-center mt-3 mb-8 space-y-5 text-gray-500'>
          <h2 className='text-base text-center md:text-2xl lg:text-4xl'>
            Oops!
          </h2>
          <p className='text-sm text-center uppercase md:text-lg lg:text-3xl'>
            page not found
          </p>
          <Link
            href='/'
            className='md:px-4 px-2 py-1 text-white rounded-[45px] hover:bg-blue-600 bg-primary text-xs md:text-sm'
          >
            Back to Hompage
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
