import React from 'react'

function FormWrapper({
  children,
  formHeading,
  maxWidth = 'max-w-[620px]',
  bgColor = 'bg-gray-50',
  border = 'border-0',
}) {
  return (
    <div className='flex justify-center w-full'>
      <section
        className={`w-full ${maxWidth} mx-auto my-5 overflow-hidden rounded-md ${bgColor} ${border} pt-5 pb-8 px-7 `}
      >
        <h2 className=' text-[#800080] py-1 px-5 pt-6 text-center text-3xl '>
          {formHeading}
        </h2>
        <React.Fragment>{children}</React.Fragment>
      </section>
    </div>
  )
}

export default FormWrapper
