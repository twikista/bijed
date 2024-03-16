import { forgetPassword } from '@/lib/actions'
import React from 'react'

function ForgetPassword() {
  return (
    <div>
      <h1>Reset Your Password</h1>
      <p>Please enter your email below to rest your password </p>
      <form action={forgetPassword}>
        <input type='email' placeholder='enter email' name='email' />
        <input type='submit' value='reset password' />
      </form>
    </div>
  )
}

export default ForgetPassword
