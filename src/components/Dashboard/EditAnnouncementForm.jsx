'use client'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import RichTextEditor from '@/components/Dashboard/RichTextEditor'
import { updateAnnouncement } from '@/lib/actions'
import { announcementSchema } from '@/lib/schema'
import TextInput from '../TextInput'
import { useState } from 'react'
import FormWrapper from './FormWrapper'
import SubmitButton from '../SubmitButton'
import { CancelButton } from './Buttons'

function EditAnnouncementForm({ initialState }) {
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
    const response = await updateAnnouncement(initialState, data)
    if (response.ok) {
      reset()
      router.push(`/dashboard/announcements/${response?.slug}`)
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
    <FormWrapper formHeading='Edit Announcement'>
      {errorFromServer && (
        <div>
          <span className=''>{errorFromServer}</span>
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
          label='description'
          name='description'
          placeholder='Enter announcement description'
          register={register}
          error={errors?.description}
        />
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
            mainText='Save Changes'
            altText='Saving Changes...'
            formSubmitState={isSubmitting}
          />
          <CancelButton
            href={`/dashboard/announcements/${initialState.slug}`}
            style='bg-red-400 hover:bg-red-500'
            text='Cancel'
          />
        </div>
      </form>
    </FormWrapper>
  )
}

export default EditAnnouncementForm
