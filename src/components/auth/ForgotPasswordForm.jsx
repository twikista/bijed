'use client'
import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { forgetPassword } from '@/lib/actions'
import Link from 'next/link'
import TextInput from '@/components/TextInput'
import { handleValidationErrorFromServer } from '@/lib/util'
import { forgetPasswordSchema } from '@/lib/schema'
import Spinner from '../Spinner'
import Image from 'next/image'
import emailSentIcon from '../../../public/email_sent.svg'
import ReCAPTCHA from 'react-google-recaptcha'
import clsx from 'clsx'

function ForgetPasswordForm() {
  const [isCaptchaSolved, setIsCaptchaSolved] = useState(false)
  const captchaRef = useRef()
  const [errorFromServer, setErrorFromServer] = useState(null)
  const [emailSent, setEmailSent] = useState(false)
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { email: '' },
    resolver: zodResolver(forgetPasswordSchema),
  })
  const handler = async (data) => {
    const response = await forgetPassword(data)
    if (response && response.ok) {
      captchaRef.current.reset()
      reset()
      setIsCaptchaSolved(false)
      setEmailSent(true)
    }

    if (response && !response?.ok) {
      if (response?.errorType === 'validationError') {
        handleValidationErrorFromServer(response, { email: 'email' }, setError)
      }

      if (response?.errorType === 'other') {
        setErrorFromServer(response.error)
      }
    }
  }

  const onChange = (value) => {
    value ? setIsCaptchaSolved(true) : setIsCaptchaSolved(false)
  }

  if (emailSent) {
    return (
      <div className='space-y-6 w-full max-w-[400px] flex flex-col items-center'>
        <Image src={emailSentIcon} alt='sent email icon' width={140} priority />
        <h2 className='text-2xl font-medium text-center text-gray-600'>
          Check your e-mail!
        </h2>
        <p className='w-full max-w-[400px] mx-auto text-center text-gray-600'>
          We&#39;ve sent a message containing the instructions to restet your
          password to your e-mail
        </p>
      </div>
    )
  }

  return (
    <div className=' w-full max-w-[320px] h-full justify-center flex flex-col'>
      <div className='mb-10 space-y-3'>
        <h2 className='text-2xl font-medium text-center text-gray-600'>
          Forgot your Password?
        </h2>
        <p className='w-full max-w-[300px] mx-auto text-center text-gray-600'>
          Enter your registered e-mail to receive a link to reset your password
        </p>
      </div>
      <form onSubmit={handleSubmit(handler)} className='space-y-3'>
        {errorFromServer && (
          <div>
            <span>{errorFromServer}</span>
          </div>
        )}
        <TextInput
          label='E-mail'
          name='email'
          placeholder='Enter your registered e-mail'
          register={register}
          error={errors?.email}
        />
        <div>
          <button
            type='submit'
            disabled={!isCaptchaSolved}
            className={clsx(
              'bg-[#901090] w-full flex items-center text-center text-white rounded-md py-2 cursor-pointer hover:bg-lightPrimary justify-center',
              {
                ['bg-[#dedede] hover:bg-[#d9d9d9] cursor-default']:
                  !isCaptchaSolved,
              }
            )}
          >
            {isSubmitting ? <Spinner text='Processing...' /> : 'Reset password'}
          </button>
          <p className='flex justify-center mt-1'>
            <Link href='/auth/login' className='text-[#800080] hover:underline'>
              Back to sign in
            </Link>
          </p>
        </div>
        <div className='flex justify-center'>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_DEV_SITE_KEY}
            onChange={onChange}
            ref={captchaRef}
          />
        </div>
      </form>
    </div>
  )
}

export default ForgetPasswordForm
