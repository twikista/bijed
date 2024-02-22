'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { addIssue, updateIssue } from '@/lib/actions'
import CancelButton from './cancel-button'

function IssueForm({ initialValue }) {
  const router = useRouter()
  const [formData, setformData] = useState(initialValue)

  const handleSubmit = async (e) => {
    e.preventDefault()
    initialValue.issueNumber === ''
      ? await addIssue(formData)
      : await updateIssue(initialValue._id, initialValue, formData)
    setformData({ issueNumber: '', volume: '' })
    router.push('/dashboard/issues')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='issue number'
        name='issueNumber'
        value={formData.issueNumber}
        onChange={(e) =>
          setformData({ ...formData, issueNumber: e.target.value })
        }
      />
      <input
        type='text'
        placeholder='volume'
        name='volume'
        value={formData.volume}
        onChange={(e) => setformData({ ...formData, volume: e.target.value })}
      />
      <input type='submit' value='submit' />
      <CancelButton href='/dashboard/issues' />
    </form>
  )
}

export default IssueForm
