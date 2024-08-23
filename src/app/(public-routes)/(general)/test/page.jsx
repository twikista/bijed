'use client'

import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { useState, useRef } from 'react'

function RecatptchaTest() {
  const captchaRef = useRef()
  const [isCaptchaSolved, setIsCaptchaSolved] = useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: { userName: '', isHumann: false } })

  const handler = (data) => {
    console.log(data)
  }

  function onChange(value) {
    // const x =(captchaRef.current.getValue())

    value ? setIsCaptchaSolved(true) : setIsCaptchaSolved(false)
    // setValue('isHumann', true)

    console.log('Captcha value:', value)
  }

  const onExpired = () => setIsCaptchaSolved(false)
  return (
    <div>
      <form onSubmit={handleSubmit(handler)}>
        <div>
          <div>
            <input
              type='text'
              placeholder='enter username'
              {...register('userName', {
                required: 'username is required',
                minLength: 1,
              })}
            />
            <div>
              {errors.userName && <span>{errors.userName.message}</span>}
            </div>
          </div>
          {/* <div>
            <input
              type='checkbox'
              {...register('isHumann', { required: 'captcha not solved' })}
              className='opacity-0 absolute top-[-1000px]'
            />
            <div>
              {errors.isHumann && <span>{errors.isHumann.message}</span>}
            </div>
          </div> */}

          <button type='submit' disabled={!isCaptchaSolved}>
            submit
          </button>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_DEV_SITE_KEY}
            ref={captchaRef}
            onChange={onChange}
            // onExpired={onExpired}
          />
        </div>
      </form>
    </div>
  )
}

export default RecatptchaTest
