'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { activateUser } from '@/lib/actions'
import { activateAccountSchema } from '@/lib/schema'

import PasswordInput from '../PasswordInput'
import { handleValidationErrorFromServer } from '@/lib/util'
import FormWrapper from '../Dashboard/FormWrapper'
import Form from '../Dashboard/Form'
import SubmitButton from '../SubmitButton'

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
        const formfields = {
          firstName: 'firstName',
          lastName: 'lastName',
          email: 'email',
        }

        handleValidationErrorFromServer(response, formfields, setError)
      }
    }

    if (response?.errorType === 'other') {
      setErrorFromServer(response.error)
    }
  }
  return (
    <FormWrapper formHeading='Account Activation'>
      {errorFromServer && (
        <div>
          <span>{errorFromServer}</span>
        </div>
      )}
      <Form handleSubmit={handleSubmit} handler={handler}>
        <PasswordInput
          label='Curent Password'
          name='defaultPassword'
          register={register}
          error={errors.defaultPassword}
        />
        <PasswordInput
          label='New Password'
          name='newPassword'
          register={register}
          error={errors.newPassword}
        />
        <SubmitButton
          textColor='white'
          bgColor='901090'
          hoverBgColor='800080'
          mainText='Activate Account'
          altText='Activating Account...'
          formSubmitState={isSubmitting}
        />
      </Form>
    </FormWrapper>
  )
}

export default AccountActivationForm
