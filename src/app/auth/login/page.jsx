import LoginForm from '@/components/auth/LoginForm'
import SignInForm from '@/components/auth/SignInForm'
import Link from 'next/link'

function Login() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-3 bg-white'>
      {/* <LoginForm /> */}
      <SignInForm />
    </div>
  )
}

export default Login
