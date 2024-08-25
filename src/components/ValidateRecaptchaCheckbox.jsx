function ValidateRecaptchaCheckbox({ register, name, error }) {
  return (
    <div>
      <input
        type='checkbox'
        {...register(name, { required: 'please complete captcha' })}
        className='opacity-0 absolute top-[-1000px]'
      />
      <div>
        {error && (
          <span className='text-sm text-red-500 lg:text-base'>
            {error?.message}
          </span>
        )}
      </div>
    </div>
  )
}

export default ValidateRecaptchaCheckbox
