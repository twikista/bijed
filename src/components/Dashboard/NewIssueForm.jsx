'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { issueFormSchema } from '@/lib/schema'
import { addIssue, updateIssue } from '@/lib/actions'
import CancelButton from './issues/cancel-button'
import TextInput from '../TextInput'
import { handleValidationErrorFromServer } from '@/lib/util'

function NewIssueForm({ initialValue }) {
  const router = useRouter()
  const [errorFromServer, setErrorFromServer] = useState(initialValue)
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: initialValue,
    resolver: zodResolver(issueFormSchema),
  })

  const handler = async (data) => {
    const response =
      initialValue.issueNumber === ''
        ? await addIssue(data)
        : await updateIssue(initialValue._id, initialValue, data)

    if (response.ok) {
      router.push('/dashboard/issues')
      reset()
    } else {
      if (response?.errorType === 'validationError') {
        const formfields = {
          volume: 'volume',
          issueNumber: 'issueNumber',
        }
        handleValidationErrorFromServer(response, formfields, setError)
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
      <form onSubmit={handleSubmit(handler)}>
        <TextInput
          label='volume number'
          name='volume'
          placeholder='Enter Volume number'
          register={register}
          error={errors?.volume}
          valueAsNumber={true}
        />
        <TextInput
          label='issue number'
          name='issueNumber'
          placeholder='Enter issue number'
          register={register}
          error={errors?.issue}
          valueAsNumber={true}
        />
        <input type='submit' value={isSubmitting ? 'submiting...' : 'submit'} />
        <CancelButton href='/dashboard/issues' />
      </form>
    </div>
  )
}

export default NewIssueForm
