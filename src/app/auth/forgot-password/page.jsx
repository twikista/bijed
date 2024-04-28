import ForgetPasswordForm from '@/components/auth/ForgotPasswordForm'

function ForgetPassword() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-3 bg-white '>
      {/* <Image
        src={forgotPassword}
        alt='forgot password image'
        width={380}
        priority
      /> */}
      <ForgetPasswordForm />
    </div>
  )
}

export default ForgetPassword
