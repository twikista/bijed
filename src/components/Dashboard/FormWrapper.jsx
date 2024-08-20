import React from 'react'

function FormWrapper({
  children,
  formHeading,
  maxWidth = 'max-w-[620px]',
  bgColor = 'bg-gray-50',
  border = 'border-0',
  overrideStyles,
}) {
  return (
    <div className='flex justify-center w-full'>
      <section
        className={`w-full ${maxWidth} mx-auto my-5 overflow-hidden rounded-md ${bgColor} ${border} pt-5 pb-5 md:pb-8 md:px-7 ${overrideStyles}`}
      >
        <h2 className=' text-[#800080] py-5 px-5 pt-2 text-center text-3xl  font-medium'>
          {formHeading}
        </h2>
        <React.Fragment>{children}</React.Fragment>
      </section>
    </div>
  )
}

export default FormWrapper
