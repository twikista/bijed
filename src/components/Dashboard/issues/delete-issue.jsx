'use client'

import { TrashIcon } from '@heroicons/react/24/outline'

function DeleteButton({ action, id }) {
  return (
    <button type='button' onClick={() => action(id)} className='text-primary'>
      <TrashIcon className='w-5' />
    </button>
  )
}

export default DeleteButton
