'use client'

import uniqid from 'uniqid'
import { signup } from '@/lib/actions'
import { useState } from 'react'

function SignupForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handler = async (e) => {
    e.preventDefault()
    const formData = {
      firstName,
      lastName,
      email,
      isAdmin: false,
      password: uniqid.time(),
    }

    const user = await signup(formData)
  }
  return (
    <form onSubmit={handler}>
      <input
        type='text'
        placeholder='First Name'
        name='firstName'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Last Name'
        name='lastName'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type='submit' value='submit' />
    </form>
  )
}

export default SignupForm
