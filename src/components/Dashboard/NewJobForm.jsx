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
import {
  addJob,
  addNewItemToAuthorizationQueue,
} from '@/lib/actions/jobActions'
import { handleValidationErrorFromServer } from '@/lib/util'

function NewJobForm({ resourceData }) {
  const [errorFromServer, setErrorFromServer] = useState('')
  const router = useRouter()
  // const searchParam = useSearchParams()
  // let params = {}
  // for (let [key, value] of searchParam.entries()) {
  //   console.log(key, value)
  //   params[key] = value
  // }
  // console.log('res:', params)
  // console.log('ref:', ref)
  // const [formData, setformData] = useState(initialValue)
  console.log('data----', resourceData)
  const {
    control,
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({
    defaultValues: {
      // jobRef: jobRef,
      // jobTitle: `Request to publish issue: ${jobRef}`,
      // pages: '',
      // numberOfArticles: '',
      jobDescription: '',
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
    const response = await addNewItemToAuthorizationQueue(data, resourceData)
    console.log(response)
    if (response.ok) {
      reset()
      router.push('/dashboard/authorization-queue')
    } else {
      if (response?.errorType === 'validationError') {
        const formfields = {
          // jobRef: 'jobRef',
          jobDescription: 'jobDescription',
          // pages: 'pages',
          // numberOfArticles: 'numberOfArticles',
        }
        handleValidationErrorFromServer(response, formfields, setError)
      }
      if (response?.errorType === 'other') {
        setErrorFromServer(response.error)
      }
    }
  }
  return (
    <FormWrapper formHeading='Authorization Request'>
      {errorFromServer && (
        <div>
          <span>{errorFromServer}</span>
        </div>
      )}
      <Form handleSubmit={handleSubmit} handler={handler}>
        {/* <TextInput
          label='Job Reference'
          name='jobRef'
          //   placeholder='Enter Article issue'
          register={register}
          error={errors?.jobRefissue}
          readOnly={true}
          //   valueAsNumber={true}
        /> */}
        <TextInput
          label='Request Description'
          name='jobDescription'
          placeholder='Enter request description'
          register={register}
          error={errors?.jobDescription}
          //   readOnly={true}
          //   valueAsNumber={true}
        />
        {/* <TextInput
          label='Number of Pages'
          name='pages'
          //   placeholder='Enter Article issue'
          register={register}
          error={errors?.pages}
          valueAsNumber={true}
        /> */}
        {/* <TextInput
          label='Number of Articles'
          name='numberOfArticles'
          //   placeholder='Enter Article issue'
          register={register}
          error={errors?.numberOfArticles}
          valueAsNumber={true}
        /> */}
        <div className='flex items-center gap-2 pt-1'>
          <SubmitButton
            textColor='white'
            bgColor='901090'
            hoverBgColor='800080'
            mainText='Submit Request'
            altText='processing...'
            formSubmitState={isSubmitting}
          />
          <CancelButton
            // href={
            //   params.resource === 'announcement'
            //     ? `/dashboard/announcements/${params.ref}`
            //     : params.resource === 'editorialTeam'
            //     ? `/dashboard/editorial-board/${params.ref}`
            //     : `/dashboard/issues/${params.ref}`
            // }
            href={`/dashboard/${resourceData.resource}/${resourceData.slug}`}
            style='bg-red-400 hover:bg-red-500'
            text='Cancel'
          />
        </div>
      </Form>
    </FormWrapper>
  )
}

export default NewJobForm
