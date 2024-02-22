'use client'

function Button({ label, type, ...props }) {
  return (
    <button
      type={type}
      {...props}
      className='block font-bold text-primary px-3 py-2 border border-primary sm:w-[160px] rounded-md hover:bg-primary hover:text-white transition-colors  text-center'
    >
      {label}
    </button>
  )
}

export default Button
