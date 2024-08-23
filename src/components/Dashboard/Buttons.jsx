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
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import Spinner from '../Spinner'
import { toast } from 'react-toastify'

export function EdiButton({
  href,
  variant = 'primary',
  disabled = false,
  label = 'Edit',
}) {
  const pathname = usePathname()
  if (variant === 'primary') {
    return (
      <Link
        disabled={disabled}
        // href={href}
        onClick={() => router.push(href)}
        href={`${pathname}/edit`}
        className={clsx(
          `rounded-[8px] text-gray-50 flex bg-[#008dcb] hover:bg-blue-600 min-w-[220px] font-medium items-center justify-center gap-2 px-4 capitalize py-2 shadow-md ${
            disabled && 'pointer-events-none'
          }`,
          { [' text-gray-500 bg-gray-200']: disabled === true }
        )}
      >
        {variant === 'primary' && <span className=''>{label}</span>}
        <PencilSquareIcon className='w-5 ' />
      </Link>
    )
  } else {
    return (
      <Link
        href={`${pathname}/edit`}
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
      </Link>
    )
  }
}

export function EditButton({
  href,
  variant = 'primary',
  disabled = false,
  label = 'Edit',
}) {
  const router = useRouter()

  if (variant === 'primary') {
    return (
      <button
        disabled={disabled}
        // href={href}
        onClick={() => router.push(href)}
        className={clsx(
          `rounded-md px-2 py-2 gap-1 text-gray-50 flex bg-[#008dcb] hover:bg-blue-600 min-w-[120px] md:min-w-[136px] font-medium items-center justify-center md:gap-2 capitalize md:py-2 w-full shadow-md md:max-w-[400px] md:mx-auto ${
            disabled && 'pointer-events-none'
          }`,
          { [' text-gray-500 bg-gray-200']: disabled === true }
        )}
      >
        {variant === 'primary' && <span className=''>{label}</span>}
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
  const handler = async (id) => {
    console.log('ref', id)
    const response = await action(id)
    if (response?.ok) {
      toast.success('deleted successfully!')
    }
  }

  if (variant === 'primary') {
    return (
      <button
        type='button'
        disabled={disabled}
        onClick={() => handler(id)}
        className={clsx(
          `w-full shadow-md flex gap-1 md:gap-2 px-2 py-2 bg-[#ff6347] hover:bg-red-500 text-white items-center md:mx-auto rounded-md justify-center font-medium md:px-3 md:py-2 min-w-[120px] md:max-w-[400px] ${
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
        onClick={() => handler(id)}
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
      router.push(`/dashboard/issues`)
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
    className={`${style} py-3 flex-1 flex items-center justify-center text-white rounded-md w-full`}
  >
    {text}
  </Link>
)

export const LinkButton = ({ text, href, style }) => (
  <Link
    href={href}
    className={`${style} py-3 flex-1 flex items-center justify-center text-white rounded-md`}
  >
    {text}
  </Link>
)

export function PublishButton({
  data,
  resourceRef,
  resource,
  slug,
  user,
  action,
  notificationMessage,
  label,
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [published, setPublished] = useState(false)
  const handler = async () => {
    setIsSubmitting(true)
    const response = await action(resourceRef, user, data)
    if (response.ok) {
      setPublished(true)
      // router.push(`/dashboard/${resource}`)
      toast.success(notificationMessage.success)
      // setIsSubmitting(false)
    } else {
      setPublished(false)
      setIsSubmitting(false)
      toast.error(notificationMessage.error)
    }
  }
  return (
    <button
      type='button'
      className={clsx(
        `max-w-[380px] flex w-full justify-center items-center py-3 text-center bg-[#008dcb]  hover:bg-blue-500  text-white  rounded-lg font-medium`,
        {
          ['hidden']: published === true,
          //   ['flex']: published === false,
        }
      )}
      onClick={handler}
    >
      {isSubmitting ? (
        <Spinner text={`${label.alt}`} textColor='white' />
      ) : (
        <span className='w-fit'>{label.main}</span>
      )}
      {/* <PublishIcon className='w-6 h-6' /> */}
    </button>
  )
}

export const RejectPublishButton = ({
  label,
  resource,
  resourceRef,
  action,
  notificationMessage,
}) => {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handler = async () => {
    setIsSubmitting(true)
    const response = await action(resourceRef)
    if (response.ok) {
      // router.push(`/dashboard/${resource}`)
      toast.success(notificationMessage.success)
      // setIsSubmitting(false)
    } else {
      toast.error(notificationMessage.error)
    }
  }
  return (
    <button
      type='button'
      className='bg-[#ff6347] hover:bg-red-500 max-w-[380px] flex w-full justify-center items-center py-3 text-center text-white  rounded-lg font-medium'
      onClick={handler}
    >
      {isSubmitting ? (
        <Spinner text={`${label.alt}`} textColor='white' />
      ) : (
        <span className='w-fit'>{label.main}</span>
      )}
    </button>
  )
}

export function SendForAuthorizationButton({
  redirectUrl,
  resource,
  resourceRef,
  slug,
  action,
  notificationMessage,
  label,
}) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  // const [published, setPublished] = useState(false)
  const handler = async () => {
    setIsSubmitting(true)
    const response = await action(resourceRef)
    if (response.ok) {
      toast.success(notificationMessage.success)

      // setIsSubmitting(false)
    } else {
      setIsSubmitting(false)
      toast.error(notificationMessage.error)
    }
  }
  return (
    <button
      type='button'
      className={clsx(
        `md:max-w-[400px] md:mx-auto flex w-full justify-center items-center py-2 text-center bg-primary  hover:bg-[#ac3dba]  text-white  rounded-lg font-medium`
      )}
      onClick={handler}
    >
      {isSubmitting ? (
        <Spinner text={`${label.alt}`} textColor='white' />
      ) : (
        <span className='w-fit'>{label.main}</span>
      )}
      {/* <PublishIcon className='w-6 h-6' /> */}
    </button>
  )
}
