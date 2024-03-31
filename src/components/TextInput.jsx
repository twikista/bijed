'use client'

function TextInput({
  label,
  placeholder,
  name,
  register,
  error,
  readOnly,
  valueAsNumber,
}) {
  console.log('from email field:', error)
  return (
    <div className='flex flex-col'>
      <label htmlFor={name} className=''>
        {label}
      </label>
      <input
        type='text'
        {...register(name, {
          valueAsNumber: valueAsNumber ? valueAsNumber : false,
        })}
        id={name}
        placeholder={placeholder}
        readOnly={readOnly ? readOnly : null}
      />
      {error && <span>{error?.message}</span>}
    </div>
  )
}

export default TextInput
