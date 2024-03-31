'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { authenticate } from '@/lib/actions'
import Link from 'next/link'

import TextInput from '../TextInput'
import PasswordInput from '../PasswordInput'
import { signinFormSchema as schema } from '@/lib/schema'

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(schema),
  })

  const [authError, setAuthError] = useState(null)

  const handler = async (data) => {
    console.log(data)
    const response = await authenticate(data)
    console.log('response', response)
    if (response && response?.errorType === 'validationError') {
      const fieldErrorMapping = {
        email: 'email',
        password: 'password',
      }
      const fieldWithError = Object.keys(fieldErrorMapping).find(
        (field) => response?.errors[field]
      )
      console.log(response.errors[fieldWithError])
      if (fieldWithError) {
        console.log('errors', response.errors)
        // Use the ValidFieldNames type to ensure the correct field names
        const errors = Object.keys(response.errors)
        console.log('array:', errors)
        errors.forEach((error) =>
          setError(error, { type: 'server', message: response.errors[error] })
        )
      }
    } else if (response?.errorType === 'authError') {
      console.log('auth error')
      setAuthError(response.error)
    }
  }
  return (
    <>
      {authError && <span>{authError}</span>}
      <form noValidate onSubmit={handleSubmit(handler)}>
        <TextInput
          label='email'
          name='email'
          placeholder='Enter email'
          register={register}
          error={errors.email}
        />
        <PasswordInput
          label='password'
          name='password'
          register={register}
          error={errors.password}
        />

        <input type='submit' value='submit' />
      </form>
      <div>
        <Link href='/auth/forgot-password'>forgot password?</Link>
      </div>
    </>
  )
}

export default SignInForm
