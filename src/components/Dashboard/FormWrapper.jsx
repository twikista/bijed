import React from 'react'

function FormWrapper({ children, formHeading }) {
  return (
    <div className='flex justify-center'>
      <section className='w-full max-w-[520px] mx-auto mt-10 overflow-hidden rounded-md'>
        <h2 className='bg-[#901090] text-white py-4 border-[#901090] border px-5 text-2xl'>
          {formHeading}
        </h2>
        <React.Fragment>{children}</React.Fragment>
      </section>
    </div>
  )
}

export default FormWrapper
