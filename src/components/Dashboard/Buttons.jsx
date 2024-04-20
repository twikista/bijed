'use client'
import { publishIssue } from '@/lib/actions'

import {
  DocumentArrowUpIcon,
  PencilIcon,
  RectangleStackIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export function EditButton({ href, variant = 'primary' }) {
  if (variant === 'primary') {
    return (
      <Link
        href={href}
        className=' rounded-[8px] text-gray-50 flex bg-[#008dcb] w-28 font-medium items-center justify-center gap-2 px-2 capitalize py-0'
      >
        {variant === 'primary' && <span className=''>Edit</span>}
        <PencilIcon className='w-4 ' />
      </Link>
    )
  } else {
    return (
      <Link href={href} className='text-primary borser'>
        <PencilIcon className='w-4 ' />
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
        className='inline-flex bg-[#ff6347] text-white w-28 items-center rounded-[8px] justify-center font-medium px-4'
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
        className='inline-block text-[#ff6347] hover:text-white hover:bg-[#ff6347] p-[2px] rounded-[3px] border border-[#ff6347]'
      >
        <TrashIcon className='w-5' />
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
