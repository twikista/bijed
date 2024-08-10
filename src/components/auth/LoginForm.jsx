'use client'

import { authenticate } from '@/lib/actions'
import Link from 'next/link'
import { useState } from 'react'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handler = async (e) => {
    e.preventDefault()
    const formData = { email, password }
    await authenticate(formData)
  }
  return (
    <>
      <form onSubmit={handler}>
        <input
          type='text'
          placeholder='enter email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          name='passowrd'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type='submit' value='submit' />
      </form>
      <div>
        <Link href='/auth/forgot-password'>forgot password?</Link>
      </div>
    </>
  )
}

export default LoginForm
