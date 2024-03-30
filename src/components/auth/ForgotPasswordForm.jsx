'use client'
import { useState } from 'react'
// import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { forgetPassword } from '@/lib/actions'
import Link from 'next/link'
import TextInput from '@/components/TextInput'
import { handleValidationErrorFromServer } from '@/lib/util'
import { forgetPasswordSchema } from '@/lib/schema'

function ForgetPasswordForm() {
  const [errorFromServer, setErrorFromServer] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  // const router = useRouter()
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { email: '' },
    resolver: zodResolver(forgetPasswordSchema),
  })
  const handler = async (data) => {
    const response = await forgetPassword(data)
    if (response && response.ok) {
      reset()
      setSuccessMessage('Password reset link sent. Please check your email')
    }

    if (response && !response?.ok) {
      if (response?.errorType === 'validationError') {
        handleValidationErrorFromServer(response, { email: 'email' }, setError)
      }

      if (response?.errorType === 'other') {
        setErrorFromServer(response.error)
      }
    }
  }
  return (
    <div>
      {errorFromServer && (
        <div>
          <span>{errorFromServer}</span>
        </div>
      )}
      <h1>Reset Your Password</h1>
      {successMessage && (
        <div>
          <span>{successMessage}</span>
          {/* <p>
            Click{' '}
            <Link href='/auth/login' className='font-semibold text-blue-600'>
              here
            </Link>{' '}
            to sign in to yo
          </p> */}
        </div>
      )}
      <p>Please enter your email below to rest your password </p>
      <form onSubmit={handleSubmit(handler)}>
        <TextInput
          label='email'
          name='email'
          placeholder='Enter your email'
          register={register}
          error={errors?.email}
        />
        <input
          type='submit'
          value={isSubmitting ? 'submitting...' : 'reset Password'}
        />
      </form>
    </div>
  )
}

export default ForgetPasswordForm
