'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Input from '@/components/Input'
import 'react-quill/dist/quill.snow.css'
import Button from '@/components/Button'
import RichTextEditor from '@/components/Dashboard/RichTextEditor'
import { createAnnouncement } from '@/app/api/actions/actions'

function AddAnnouncement() {
  const router = useRouter()
  const initialState = {
    title: '',
    description: '',
    publishDate: '',
    content: '',
    dueDate: '',
  }

  const [formData, setFormData] = useState(initialState)
  // console.log(formData)
  const submitHandler = async (e) => {
    e.preventDefault()
    const newAnnouncement = await createAnnouncement(formData)
    if (newAnnouncement.success) {
      setFormData(initialState)
      router.push('/dashboard/announcements')
    }
    console.log(newAnnouncement)
  }
  return (
    <section>
      <form onSubmit={submitHandler}>
        <Input
          type='text'
          placeholder='Announcement Title'
          name='title'
          value={formData.title}
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type='text'
          placeholder='Announcement Description'
          name='description'
          value={formData.description}
          formData={formData}
          setFormData={setFormData}
          maxLength='100'
        />
        {/* <Input type='date' name='publishDate' value={formData.publishDate} /> */}
        <Input
          type='date'
          name='dueDate'
          value={formData.dueDate}
          formData={formData}
          setFormData={setFormData}
        />
        <RichTextEditor
          formData={formData}
          setFormData={setFormData}
          fieldName='content'
        />
        <Button type='submit' label='Submit' />
        <Button
          type='button'
          label='cancel'
          onClick={() => router.push('/dashboard/announcements')}
        />
      </form>
    </section>
  )
}

export default AddAnnouncement
