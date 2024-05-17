'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { addIssue, updateIssue } from '@/lib/actions'

import TextInput from '@/components/TextInput'
import { CancelButton } from './Buttons'
import { issueFormSchema, newJobFormSchema } from '@/lib/schema'
import SubmitButton from '@/components/SubmitButton'

import React from 'react'
import FormWrapper from './FormWrapper'
import Form from './Form'
import { addJob } from '@/lib/actions/jobActions'
import { handleValidationErrorFromServer } from '@/lib/util'

function NewJobForm() {
  const [errorFromServer, setErrorFromServer] = useState('')
  const router = useRouter()
  const searchParam = useSearchParams()
  const jobRef = searchParam.get('jobRef')
  console.log('jobRef:', jobRef)
  // const [formData, setformData] = useState(initialValue)
  const {
    control,
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({
    defaultValues: {
      jobRef: jobRef,
      jobTitle: `Request to publish issue: ${jobRef}`,
      pages: '',
      numberOfArticles: '',
    },
    resolver: zodResolver(newJobFormSchema),
  })

  //   jobRef: { type: String, required: true },
  //     slug: { type: String, required: true },
  //     initatedBy: { type: String, required: true },
  //     approvedBy: { type: String, required: true, default: 'N/A' },
  //     status: {
  //       type: String,
  //       required: true,
  //       enum: ['awaiting approval', 'require modification', 'approved'],
  //     },
  //     dateApproved: { type: Date },
  //     description: {
  //       type: String,
  //       default: 'request to approve job',
  //       required: true,
  //     },
  //   },

  const handler = async (data) => {
    console.log('from new job!!!')
    console.log('job-data: ', data)
    const response = await addJob(data)
    console.log(response)
    if (response.ok) {
      reset()
      router.push('/dashboard/job-queue')
    } else {
      if (response?.errorType === 'validationError') {
        const formfields = {
          jobRef: 'jobRef',
          jobTitle: 'jobTitle',
          pages: 'pages',
          numberOfArticles: 'numberOfArticles',
        }
        handleValidationErrorFromServer(response, formfields, setError)
      }
      if (response?.errorType === 'other') {
        setErrorFromServer(response.error)
      }
    }
  }
  return (
    <FormWrapper formHeading='Add New Job'>
      {errorFromServer && (
        <div>
          <span>{errorFromServer}</span>
        </div>
      )}
      <Form handleSubmit={handleSubmit} handler={handler}>
        <TextInput
          label='Job Reference'
          name='jobRef'
          //   placeholder='Enter Article issue'
          register={register}
          error={errors?.jobRefissue}
          readOnly={true}
          //   valueAsNumber={true}
        />
        <TextInput
          label='Job Title'
          name='jobTitle'
          //   placeholder='Enter Article issue'
          register={register}
          error={errors?.jobRefissue}
          //   readOnly={true}
          //   valueAsNumber={true}
        />
        <TextInput
          label='Number of Pages'
          name='pages'
          //   placeholder='Enter Article issue'
          register={register}
          error={errors?.pages}
          valueAsNumber={true}
        />
        <TextInput
          label='Number of Articles'
          name='numberOfArticles'
          //   placeholder='Enter Article issue'
          register={register}
          error={errors?.numberOfArticles}
          valueAsNumber={true}
        />
        <div className='flex items-center gap-2 pt-1'>
          <SubmitButton
            textColor='white'
            bgColor='901090'
            hoverBgColor='800080'
            mainText='Add Job'
            altText='Adding job...'
            formSubmitState={isSubmitting}
          />
          <CancelButton
            href={`/dashboard/issues/${jobRef}`}
            style='bg-red-400 hover:bg-red-500'
            text='Cancel'
          />
        </div>
      </Form>
    </FormWrapper>
  )
}

export default NewJobForm
