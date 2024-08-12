import React from 'react'

function TextArea({ label, required }) {
  return (
    <div className='max-w-lg'>
      <label className='capitalize'>{label}</label>
      {required && <span className='text-red-600'>&#42;</span>}
      <div
        className={`border border-neutral-300 focus-within:border-2 focus-within:bg-[#fcfaf3] px-3 rounded overflow-hidden`}
      >
        <textarea className='w-full py-3 bg-transparent border-0 outline-none appearance-none min-h-[200px]' />
      </div>
    </div>
  )
}

export default TextArea
