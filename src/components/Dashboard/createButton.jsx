import { PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function CreateButton({ label, href }) {
  return (
    <Link
      href={href}
      className=' rounded-[8px] text-gray-50 flex bg-[#c24481] w-60 font-medium items-center justify-center gap-2 px-2 py-2 capitalize'
    >
      <span>{label}</span>
      <PlusIcon className='w-5 stroke-[4px] ' />
    </Link>
  )
}

export default CreateButton
