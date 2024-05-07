'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { addIssue, updateIssue } from '@/lib/actions'

import TextInput from '@/components/TextInput'
import { CancelButton } from '../Buttons'
import YearSelectInput from '../YearSelectInput'
import { issueFormSchema } from '@/lib/schema'
import SubmitButton from '@/components/SubmitButton'
import FormWrapper from '../FormWrapper'
import Form from '../Form'

function IssueForm({ initialFormState, initialValue }) {
  console.log('initialFState-', initialFormState)
  const [errorFromServer, setErrorFromServer] = useState('')
  const router = useRouter()
  // const [formData, setformData] = useState(initialValue)
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({
    defaultValues: initialFormState,
    resolver: zodResolver(issueFormSchema),
  })
  console.log(errors)
  const handler = async (data) => {
    console.log('got called')
    console.log(data)
    console.log(data.issueYear)
    const response =
      initialValue.issueNumber === ''
        ? await addIssue(data)
        : await updateIssue(initialValue._id, initialValue, data)

    if (response.ok) {
      reset()
      router.push('/dashboard/issues')
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
        {/* <Controller
        control={control}
        name='IssueYear'
        render={({ field: { value, onChange } }) => (
          <YearSelectInput
            error={errors?.issueYear}
            value={value}
            onChange={onChange}
          />
        )}
      /> */}
        {/* <YearSelectInput
        control={control}
        error={errors?.issueYear}
        name='issueYear'
        defaultIssueYear={initialFormState.issueYear}
      /> */}
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
        <div className='flex items-center gap-2 pt-1'>
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
