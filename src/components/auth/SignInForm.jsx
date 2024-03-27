'use client'

import { useState } from 'react'
// import { useFormState } from 'react-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { authenticate } from '@/lib/actions'
import Link from 'next/link'

import TextInput from '../TextInput'
import PasswordInput from '../PasswordInput'
import { signinFormSchema as schema } from '@/lib/schema'

function SignInForm() {
  // const { state, formAction } = useFormState(authenticate, { message: '' })
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
  // const formRef = useRef(null)

  const handler = async (data) => {
    // e.preventDefault()
    console.log(data)
    const formData = new FormData()
    formData.append('email', data.email)
    formData.append('password', data.password)
    console.log(formData)
    // const formData = { email, password }
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
        // setError(fieldErrorMapping[fieldWithError], {
        //   type: 'server',
        //   message: response.errors[fieldWithError],
        // })
      }
    } else if (response?.errorType === 'authError') {
      console.log('auth error')
      setAuthError(response.error)
    }

    // console.log(user.data)
  }
  return (
    <>
      {authError && <span>{authError}</span>}
      <form
        noValidate
        // ref={formRef}
        // action={formAction}
        onSubmit={handleSubmit(handler)}
      >
        <TextInput
          label='email'
          placeholder='Enter email'
          register={register}
          error={errors.email}
        />
        <PasswordInput
          label='password'
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
