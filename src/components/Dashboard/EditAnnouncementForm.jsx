'use client'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import Button from '@/components/Button'
import RichTextEditor from '@/components/Dashboard/RichTextEditor'
import { updateAnnouncement } from '@/lib/actions'
import { announcementSchema } from '@/lib/schema'
import TextInput from '../TextInput'
import { useState } from 'react'

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
  // console.log(formData)
  const handler = async (data) => {
    const response = await updateAnnouncement(initialState, data)
    if (response.ok) {
      reset()
      router.push('/dashboard/announcements')
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
    <section>
      {errorFromServer && (
        <div>
          <span>{errorFromServer}</span>
        </div>
      )}
      <form onSubmit={handleSubmit(handler)}>
        <TextInput
          label='title'
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
        <Button type='submit' label={isSubmitting ? 'Submitting' : 'Submit'} />
        <Button
          type='button'
          label='cancel'
          onClick={() => router.push('/dashboard/announcements')}
        />
      </form>
    </section>
  )
}

export default EditAnnouncementForm
