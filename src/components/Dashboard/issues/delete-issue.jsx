'use client'

import { Tooltip } from 'react-tooltip'
import { TrashIcon } from '@heroicons/react/24/outline'

function DeleteButton({ action, id }) {
  return (
    <button
      type='button'
      onClick={() => action(id)}
      data-tooltip-id='delete'
      data-tooltip-content='Delete!'
      data-tooltip-place='top'
      className='text-[#800080] hover:text-red-600'
    >
      <TrashIcon className='w-6' />
      <Tooltip id='delete' />
    </button>
  )
}

export default DeleteButton
