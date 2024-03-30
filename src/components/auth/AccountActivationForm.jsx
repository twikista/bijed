'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { activateUser } from '@/lib/actions'
import { activateAccountSchema } from '@/lib/schema'

import PasswordInput from '../PasswordInput'

function AccountActivationForm({ id }) {
  const router = useRouter()
  const [errorFromServer, setErrorFromServer] = useState(null)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      defaultPassword: '',
      newPassword: '',
    },
    resolver: zodResolver(activateAccountSchema),
  })
  const handler = async (data) => {
    const response = await activateUser(id, data)
    if (response && response.ok) {
      router.push('/auth/login')
    }

    if (response && !response?.ok) {
      if (response?.errorType === 'validationError') {
        const fieldErrorMapping = {
          firstName: 'firstName',
          lastName: 'lastName',
          email: 'email',
        }
        const fieldWithError = Object.keys(fieldErrorMapping).find(
          (field) => response?.error[field]
        )
        console.log(response.error[fieldWithError])
        if (fieldWithError) {
          console.log('errors', response.error)
          // Use the ValidFieldNames type to ensure the correct field names
          const errors = Object.keys(response.error)
          console.log('array:', errors)
          errors.forEach((error) =>
            setError(error, { type: 'server', message: response.error[error] })
          )
        }
      }
    }

    if (response?.errorType === 'other') {
      setErrorFromServer(response.error)
    }
  }
  return (
    <div>
      {errorFromServer && (
        <div>
          <span>{errorFromServer}</span>
        </div>
      )}
      <h1>Complete Account Activation</h1>
      <form onSubmit={handleSubmit(handler)}>
        <PasswordInput
          label='password'
          name='defaultPassword'
          register={register}
          error={errors.defaultPassword}
        />
        <PasswordInput
          name='newPassword'
          register={register}
          error={errors.newPassword}
        />
        <input
          type='submit'
          value={isSubmitting ? 'submitting...' : 'submit'}
        />
      </form>
    </div>
  )
}

export default AccountActivationForm
