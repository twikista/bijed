'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { authenticate } from '@/lib/actions'
import Link from 'next/link'

import TextInput from '../TextInput'
import PasswordInput from '../PasswordInput'
import { signinFormSchema as schema } from '@/lib/schema'
import DisplayServerValidationError from '../Dashboard/DisplayServerValidationErrors'
import { toast } from 'react-toastify'
import Spinner from '../Spinner'
import SubmitButton from '../SubmitButton'
import FormWrapper from '../Dashboard/FormWrapper'
import Form from '../Dashboard/Form'

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
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
    <FormWrapper maxWidth='max-w-[480px] ' bgColor='bg-gray-200'>
      <Form handleSubmit={handleSubmit} handler={handler}>
        <h2 className='text-[#800080] font-medium text-3xl'>SIGN IN</h2>
        {authError && (
          <DisplayServerValidationError
            error={authError}
            setError={setAuthError}
          />
        )}
        <TextInput
          label='E-mail'
          name='email'
          placeholder='Enter e-mail address'
          register={register}
          error={errors.email}
        />
        <PasswordInput
          label='Password'
          name='password'
          register={register}
          error={errors.password}
        />

        {/* <input
          type='submit'
          value='Sign in'
          className='bg-[#901090] w-full text-center text-white rounded-md py-2 cursor-pointer hover:bg-[#800080]'
        /> */}
        <SubmitButton
          textColor='white'
          bgColor='901090'
          hoverBgColor='800080'
          mainText='Sign in'
          altText='processing'
          formSubmitState={isSubmitting}
        />
        {/* <button
          type='submit'
          className='bg-[#901090] w-full flex items-center text-center text-white rounded-md py-2 cursor-pointer hover:bg-[#800080] justify-center'
        >
          {isSubmitting ? <Spinner text='Processing...' /> : 'Sign in'}
        </button> */}
      </Form>
      <div className='flex gap-2 mt-2'>
        <p className='text-gray-500'> Forgot password?</p>
        <Link
          href='/auth/forgot-password'
          className='hover:underline text-[#901090] hover:text-[#800080]'
        >
          Reset password
        </Link>
      </div>
    </FormWrapper>
  )
}

export default SignInForm
