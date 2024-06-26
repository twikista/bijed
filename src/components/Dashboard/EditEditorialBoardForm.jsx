'use client'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import Button from '@/components/Button'
import RichTextEditor from '@/components/Dashboard/RichTextEditor'
import { updateAnnouncement } from '@/lib/actions'
import { updateEditorialBoard } from '@/lib/actions/editorialBoard'
import { announcementSchema, editorialBoardSchema } from '@/lib/schema'
import TextInput from '../TextInput'
import { useState } from 'react'
import FormWrapper from './FormWrapper'
import SubmitButton from '../SubmitButton'
import { CancelButton } from './Buttons'
import Form from './Form'
import { toast } from 'react-toastify'
import { useSearchParams } from 'next/navigation'

function EditEditorialBoardForm({ initialState }) {
  console.log('edit-state:- ', initialState)
  const router = useRouter()
  const [errorFromServer, setErrorFromServer] = useState('')
  const searchParams = useSearchParams().get('mode')
  // const params = new URLSearchParams
  console.log('searchParams=====', searchParams)

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { content: initialState.content },
    resolver: zodResolver(editorialBoardSchema),
  })
  // console.log(formData)
  const handler = async (data) => {
    console.log(data)
    const response = await updateEditorialBoard(initialState, data)
    if (response.ok) {
      reset()
      router.push(`/dashboard/editorial-board/?mode=draft`)
      toast.success('Editorial board updated successfully')
    } else {
      toast.error('Editorial board updated failed!')
      if (response?.errorType === 'validationError') {
        const formfields = {
          content: 'content',
          // issueNumber: 'issueNumber',
        }
        handleValidationErrorFromServer(response, formfields, setError)
      }
      if (response?.errorType === 'other') {
        setErrorFromServer(response.error)
      }
    }
  }
  return (
    <FormWrapper formHeading='Update Editorial Board'>
      {errorFromServer && (
        <div>
          <span className=''>{errorFromServer}</span>
        </div>
      )}
      <Form handleSubmit={handleSubmit} handler={handler}>
        {/* <TextInput
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
        /> */}
        {/* <Input type='date' name='publishDate' value={formData.publishDate} /> */}
        {/* <TextInput
          label='Announcement due date'
          name='dueDate'
          type='date'
          placeholder='Enter announcement due date'
          register={register}
          error={errors?.dueDate}
          valueAsDate={true}
        /> */}
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
            href={`/dashboard/editorial-board?mode=${searchParams}`}
            style='bg-red-400 hover:bg-red-500'
            text='Cancel'
          />
        </div>
        {/* <Button type='submit' label={isSubmitting ? 'Submitting' : 'Submit'} />
        <Button
          type='button'
          label='cancel'
          onClick={() => router.push('/dashboard/announcements')}
        /> */}
      </Form>
    </FormWrapper>
  )
}

export default EditEditorialBoardForm
