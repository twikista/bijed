import clsx from 'clsx'

function Textarea({ label, placeholder, name, register, error }) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name} className='inline-block mb-1'>
        {label}
      </label>
      <div
        className={clsx(
          `flex border border-gray-300 rounded-md focus-within:border-2 overflow-hidden bg-white h-[300px]`,
          { ['border-red-400']: error }
        )}
      >
        <textarea
          className={clsx(
            `w-full text-gray-600 px-3 inline-block py-2  outline-none appearance-none resize-none max-h-full`
          )}
          name={name}
          placeholder={placeholder}
          id={name}
          {...register(name)}
        />
      </div>
      {error && <span className='text-red-500 '>{error?.message}</span>}
    </div>
  )
}

export default Textarea
