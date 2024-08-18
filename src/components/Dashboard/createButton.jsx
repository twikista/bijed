import { PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function CreateButton({ label, href }) {
  return (
    <Link
      href={href}
      className=' rounded-xl px-2 py-1 text-gray-50 flex bg-[#008dcb] hover:bg-blue-500 md:w-60 font-medium items-center justify-center gap-1 md:gap-2 md:px-2 md:py-3 shadow-md capitalize'
    >
      <span>{label}</span>
      <PlusIcon className=' w-4 md:w-5 md:stroke-[] ' />
    </Link>
  )
}

export default CreateButton
