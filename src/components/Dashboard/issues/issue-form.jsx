'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { updateIssue } from '@/lib/actions'
import { addIssue } from '@/lib/actions/issues'

import TextInput from '@/components/TextInput'
import { CancelButton } from '../Buttons'
import { issueFormSchema } from '@/lib/schema'
import SubmitButton from '@/components/SubmitButton'
import FormWrapper from '../FormWrapper'
import Form from '../Form'

function IssueForm({ initialFormState, initialValue }) {
  const [errorFromServer, setErrorFromServer] = useState('')
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: initialFormState,
    resolver: zodResolver(issueFormSchema),
  })
  const handler = async (data) => {
    const response =
      initialFormState?.issueNumber === ''
        ? await addIssue(data)
        : await updateIssue(initialValue?._id, initialValue, data)

    if (response.ok) {
      router.push('/dashboard/issues?mode=draft')
      reset()
    } else {
      if (response?.errorType === 'validationError') {
        const formfields = {
          volume: 'volume',
          issueNumber: 'issueNumber',
          issueYear: 'issueYear',
        }
        handleValidationErrorFromServer(response, formfields, setError)
      }
      if (response?.errorType === 'other') {
        setErrorFromServer(response.error)
      }
    }
  }
  return (
    <FormWrapper
      formHeading={
        !initialFormState?.issueNumber ? 'Add New Issue' : 'Update Issue'
      }
      overrideStyles='px-2 pb-3'
      border='border border-gray-300'
    >
      {errorFromServer && (
        <div>
          <span>{errorFromServer}</span>
        </div>
      )}
      <Form handleSubmit={handleSubmit} handler={handler}>
        {/* <div className='px-3'> */}

        <TextInput
          type='number'
          label='Issue Number'
          name='issueNumber'
          placeholder='Enter issue Number'
          register={register}
          error={errors?.issueNumber}
          valueAsNumber={true}
        />
        <TextInput
          type='number'
          label='Volume Number'
          name='volume'
          placeholder='Enter volume number'
          register={register}
          error={errors?.issueNumber}
          valueAsNumber={true}
        />

        <TextInput
          type='date'
          label='Issue Date'
          name='issueYear'
          placeholder='Enter issue year'
          register={register}
          error={errors?.issueYear}
          valueAsDate={true}
        />
        {/* <input type='submit' value={isSubmitting ? 'Submitting' : 'submit'} /> */}
        <div className='flex flex-col items-center gap-2 pt-1 md:flex-row'>
          <SubmitButton
            textColor='white'
            bgColor='901090'
            hoverBgColor='800080'
            mainText='Submit'
            altText='processing'
            formSubmitState={isSubmitting}
          />
          <CancelButton
            href='/dashboard/issues'
            style='bg-red-400 hover:bg-red-500'
            text='Cancel'
          />
        </div>

        {/* </div> */}
      </Form>
    </FormWrapper>
  )
}

export default IssueForm
