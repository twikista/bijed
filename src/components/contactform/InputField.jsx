function InputField({ type, label, required, error }) {
  return (
    <div className='max-w-lg'>
      <label className='capitalize'>{label}</label>
      {required && <span className='text-red-600'>&#42;</span>}
      <div
        className={`border border-neutral-300 focus-within:border-2 focus-within:bg-[#fcfaf3] px-3`}
      >
        <input
          type={type}
          className='w-full py-2 bg-transparent border-0 outline-none appearance-none'
        />
      </div>
    </div>
  )
}

export default InputField
