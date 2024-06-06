import ResetPasswordForm from '@/components/auth/ResetPasswordForm'
import { verifyJWT } from '@/lib/util'
import Image from 'next/image'
import Link from 'next/link'
import tokenExpiredIcon from '@/../public/system_expired.svg'

function page({ params }) {
  const idToken = params.id
  const { expired: isTokenExpired } = verifyJWT(idToken)

  if (isTokenExpired) {
    return (
      <div className='flex items-center justify-center h-screen bg-white'>
        <div className=' w-full max-w-[400px] h-full justify-center flex flex-col text-gray-500'>
          <Image
            src={tokenExpiredIcon}
            alt='forgot password image'
            width={80}
            className='mx-auto'
            priority
          />
          <div className='mt-3 mb-8 space-y-5'>
            <h2 className='text-2xl font-medium text-center text-gray-600 font-cairo'>
              Reset link expired!
            </h2>
            {/* {emailSent && (
        <div>
          <span>{emailSent}</span>
        </div>
      )} */}
            {/* <p className='w-full max-w-[320px] mx-auto text-center text-gray-600'>
              Your passsword reset link has expired. Follow the link below to
              request a new reset link
            </p> */}
            <p className='w-full mx-auto text-center text-gray-600'>
              {'Click '}
              <Link
                href='/auth/forgot-password'
                className='text-blue-500 hover:underline'
              >
                here
              </Link>
              {' to request a new password reset link'}
            </p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen px-3 bg-white '>
      <ResetPasswordForm authToken={idToken} />
    </div>
  )
}

export default page
