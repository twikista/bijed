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

export function EditButton({ href, variant = 'primary' }) {
  if (variant === 'primary') {
    return (
      <Link
        href={href}
        className=' rounded-[8px] text-gray-50 flex bg-[#008dcb] hover:bg-blue-600 w-28 font-medium items-center justify-center gap-2 px-2 capitalize py-2 shadow-md'
      >
        {variant === 'primary' && <span className=''>Edit</span>}
        <PencilSquareIcon className='w-5 ' />
      </Link>
    )
  } else {
    return (
      <Link
        href={href}
        data-tooltip-id='edit'
        data-tooltip-content='Edit'
        data-tooltip-place='top'
        className='flex justify-center text-[#800080] hover:text-blue-600'
      >
        <PencilSquareIcon className='w-6 ' />
        <Tooltip id='edit' />
      </Link>
    )
  }
}

export function DeleteButton({ action, id, variant = 'primary' }) {
  if (variant === 'primary') {
    return (
      <button
        type='button'
        onClick={() => action(id)}
        className='shadow-md inline-flex bg-[#ff6347] hover:bg-red-500 text-white w-28 items-center rounded-lg justify-center font-medium px-4 py-2'
      >
        {variant === 'primary' && <span className='capitalize'>delete</span>}
        <TrashIcon className='w-5' />
      </button>
    )
  } else {
    return (
      <button
        type='button'
        onClick={() => action(id)}
        className='text-[#800080] hover:text-red-600'
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

export function PublishIssueButton({ issueRef }) {
  return (
    <div>
      <button
        type='button'
        className=' rounded-[8px] text-gray-50 flex bg-[#24a73f] w-60 font-medium items-center justify-center gap-2 px-2 py-2 capitalize'
        onClick={() => publishIssue(issueRef)}
      >
        Publish Issue
        <DocumentArrowUpIcon className='w-5' />
      </button>
    </div>
  )
}
