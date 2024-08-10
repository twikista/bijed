'use client'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

import RichTextEditor from '@/components/Dashboard/RichTextEditor'
import { createAnnouncement } from '@/lib/actions'
import { announcementSchema } from '@/lib/schema'
import TextInput from '../TextInput'
import { useState } from 'react'
import FormWrapper from './FormWrapper'
import { CancelButton } from './Buttons'
import SubmitButton from '../SubmitButton'

function NewAnnouncementForm({ initialState }) {
  const router = useRouter()
  const [errorFromServer, setErrorFromServer] = useState('')

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: initialState,
    resolver: zodResolver(announcementSchema),
  })

  const handler = async (data) => {
    const response = await createAnnouncement(data)

    if (response.ok) {
      reset()
      router.push(`/dashboard/announcements/${response?.announcementSlug}`)
    } else {
      if (response?.errorType === 'validationError') {
        const formfields = {
          title: 'title',
          description: 'description',
          content: 'content',
          dueDate: 'dueDate',
        }
        handleValidationErrorFromServer(response, formfields, setError)
      }
      if (response?.errorType === 'other') {
        setErrorFromServer(response.error)
      }
    }
  }
  return (
    <FormWrapper formHeading='Add Announcement' border='border-gray-300 border'>
      {errorFromServer && (
        <div>
          <span>{errorFromServer}</span>
        </div>
      )}
      <form
        onSubmit={handleSubmit(handler)}
        className='px-5 pt-8 pb-5 space-y-5 rounded-b-md'
      >
        <TextInput
          label='Title'
          name='title'
          placeholder='Enter announcement title'
          register={register}
          error={errors?.title}
        />
        <TextInput
          label='Description'
          name='description'
          placeholder='Enter announcement description'
          register={register}
          error={errors?.description}
        />
        {/* <Input type='date' name='publishDate' value={formData.publishDate} /> */}
        <TextInput
          label='Announcement due date'
          name='dueDate'
          type='date'
          placeholder='Enter announcement due date'
          register={register}
          error={errors?.dueDate}
          valueAsDate={true}
        />
        <Controller
          control={control}
          name='content'
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <RichTextEditor onChange={onChange} onBlur={onBlur} value={value} />
          )}
        />
        <div className='flex items-center gap-2 pt-5'>
          <SubmitButton
            textColor='white'
            bgColor='901090'
            hoverBgColor='800080'
            mainText='Add Announcement'
            altText='Saving Anouncement'
            formSubmitState={isSubmitting}
          />
          <CancelButton
            href={`/dashboard/announcements`}
            style='bg-red-400 hover:bg-red-500'
            text='Cancel'
          />
        </div>
      </form>
    </FormWrapper>
  )
}

export default NewAnnouncementForm
