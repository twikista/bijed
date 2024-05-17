'use client'
import { Tooltip } from 'react-tooltip'
import { publishIssue } from '@/lib/actions'

import {
  DocumentArrowUpIcon,
  PencilIcon,
  PencilSquareIcon,
  RectangleStackIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { PublishIcon } from '../Icons'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Spinner from '../Spinner'
import { toast } from 'react-toastify'

export function EditButton({ href, variant = 'primary', disabled = false }) {
  const router = useRouter()
  console.log('readOnly-', disabled)
  if (variant === 'primary') {
    return (
      <button
        disabled={disabled}
        href={href}
        onClick={() => router.push(href)}
        className={clsx(
          `rounded-[8px] text-gray-50 flex bg-[#008dcb] hover:bg-blue-600 w-28 font-medium items-center justify-center gap-2 px-2 capitalize py-2 shadow-md ${
            disabled && 'pointer-events-none'
          }`,
          { [' text-gray-500 bg-gray-200']: disabled === true }
        )}
      >
        {variant === 'primary' && <span className=''>Edit</span>}
        <PencilSquareIcon className='w-5 ' />
      </button>
    )
  } else {
    return (
      <button
        href={href}
        disabled={disabled}
        onClick={() => router.push(href)}
        data-tooltip-id='edit'
        data-tooltip-content='Edit'
        data-tooltip-place='top'
        className={clsx(
          `flex justify-center text-[#800080] hover:text-blue-600 ${
            disabled && 'pointer-events-none'
          }`,
          { [' text-gray-400']: disabled === true }
        )}
      >
        <PencilSquareIcon className='w-6 ' />
        <Tooltip id='edit' />
      </button>
    )
  }
}

export function DeleteButton({
  action,
  id,
  variant = 'primary',
  label = 'Delete',
  icon = true,
  disabled = false,
}) {
  if (variant === 'primary') {
    return (
      <button
        type='button'
        disabled={disabled}
        onClick={() => action(id)}
        className={clsx(
          `shadow-md inline-flex bg-[#ff6347] hover:bg-red-500 text-white w-28 items-center rounded-lg justify-center font-medium px-4 py-2  ${
            disabled && 'pointer-events-none'
          } `,
          { [' text-gray-500 bg-gray-200']: disabled === true }
        )}
      >
        {variant === 'primary' && <span className='capitalize'>{label}</span>}
        {icon && <TrashIcon className='w-5' />}
      </button>
    )
  } else {
    return (
      <button
        type='button'
        disabled={disabled}
        onClick={() => action(id)}
        className={clsx(
          `text-[#800080] hover:text-red-600 ${
            disabled && 'pointer-events-none'
          }`,
          { [' text-gray-400']: disabled === true }
        )}
        data-tooltip-id='delete'
        data-tooltip-content='Delete!'
        data-tooltip-place='top'
      >
        <TrashIcon className='w-6' />
        <Tooltip id='delete' />
      </button>
    )
  }
}

export function PublishIssueButton({ issueRef, jobTicketId, user }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handler = async () => {
    setIsSubmitting(true)
    const response = await publishIssue(issueRef, jobTicketId, user)
    if (response.ok) {
      toast.success('Issue published successfully!!!')
      router.push(`/dashboard/job-queue/pending-jobs`)
      // setIsSubmitting(false)
    }
  }
  return (
    // <div className='mt-10 w-full max-w-[560px] flex justify-center mx-auto'>
    <button
      type='button'
      className='max-w-[380px] w-full flex justify-center items-center mx-auto py-2 text-center hover:bg-[#800080] text-white bg-[#ac3dba] rounded-lg font-medium'
      onClick={handler}
    >
      {isSubmitting ? (
        <Spinner text='Publishing Issue...' textColor='white' />
      ) : (
        'Approve Issue and Publish'
      )}
      {/* <PublishIcon className='w-6 h-6' /> */}
    </button>
    // </div>
  )
}

export const CancelButton = ({ text, href, style }) => (
  <Link
    href={href}
    className={`${style} py-3 flex-1 flex items-center justify-center text-white rounded-md`}
  >
    {text}
  </Link>
)
