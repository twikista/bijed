'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signup } from '@/lib/actions'
import { newUserSchema } from '@/lib/schema'

import TextInput from '../TextInput'

function NewUserForm() {
  const [errorFromServer, setErrorFromServer] = useState(null)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { firstName: '', lastName: '', email: '' },
    resolver: zodResolver(newUserSchema),
  })

  const handler = async (data) => {
    const response = await signup(data)

    if (response && response?.ok) {
      reset()
      router.push('/dashboard/admin/users')
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

      if (response?.errorType === 'other') {
        setErrorFromServer(response.error)
      }
    }
  }
  return (
    <>
      {errorFromServer && (
        <div>
          <span>{errorFromServer}</span>
        </div>
      )}
      <form onSubmit={handleSubmit(handler)} noValidate>
        <TextInput
          label='first name'
          name='firstName'
          placeholder='Enter first Name'
          register={register}
          error={errors.firstName}
        />

        <TextInput
          label='last name'
          name='lastName'
          placeholder='Enter last name'
          register={register}
          error={errors.lastName}
        />
        <TextInput
          label='email'
          name='email'
          placeholder='Enter email'
          register={register}
          error={errors.email}
        />
        <input
          type='submit'
          value={isSubmitting ? 'submitting...' : 'submit'}
        />
      </form>
    </>
  )
}

export default NewUserForm
