'use client'

function TextInput({ label, placeholder, name, register, error }) {
  console.log('from email field:', error)
  return (
    <div className='flex flex-col'>
      <label htmlFor={name} className=''>
        {label}
      </label>
      <input
        type='text'
        {...register(name)}
        id={name}
        placeholder={placeholder}
      />
      {error && <span>{error?.message}</span>}
    </div>
  )
}

export default TextInput
