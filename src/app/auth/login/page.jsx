import LoginForm from '@/components/auth/LoginForm'
import SignInForm from '@/components/auth/SignInForm'
import Link from 'next/link'

function Login() {
  return (
    <div className='flex items-center justify-center w-full mb-14 mt-14'>
      <SignInForm />
    </div>
  )
}

export default Login
