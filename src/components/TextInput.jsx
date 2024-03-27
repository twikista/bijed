'use client'

function TextInput({ label, placeholder, register, error }) {
  console.log('from email field:', error)
  return (
    <div className='flex flex-col'>
      <label htmlFor={label} className=''>
        {label}
      </label>
      <input
        type='text'
        {...register(label)}
        id={label}
        placeholder={placeholder}
      />
      {error && <span>{error?.message}</span>}
    </div>
  )
}

export default TextInput
