'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetPassword } from '@/lib/actions'
import PasswordInput from '../PasswordInput'
import { handleValidationErrorFromServer } from '@/lib/util'
import { passwordSchema } from '@/lib/schema'

function ResetPasswordForm({ authToken }) {
  const [errorFromServer, setErrorFromServer] = useState(null)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { password: '' },
    resolver: zodResolver(passwordSchema),
  })
  const handler = async (data) => {
    const response = await resetPassword(authToken, data)
    if (response && response.ok) {
      router.push('/auth/login')
    }

    if (response && !response?.ok) {
      if (response?.errorType === 'validationError') {
        handleValidationErrorFromServer(
          response,
          { password: 'password' },
          setError
        )
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
      <p>Please enter your new password</p>
      <form onSubmit={handleSubmit(handler)}>
        <PasswordInput
          label='password'
          name='password'
          register={register}
          error={errors?.password}
        />
        <input
          type='submit'
          value={isSubmitting ? 'submitting...' : 'submit'}
        />
      </form>
    </div>
  )
}

export default ResetPasswordForm
