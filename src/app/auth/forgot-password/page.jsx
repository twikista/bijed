import ForgetPasswordForm from '@/components/auth/ForgotPasswordForm'

function ForgetPassword() {
  return (
    <div className='flex items-center justify-center w-full bg-white border'>
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
