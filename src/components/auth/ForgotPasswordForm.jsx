'use client'
import React, { useState } from 'react'
// import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { forgetPassword } from '@/lib/actions'
import Link from 'next/link'
import TextInput from '@/components/TextInput'
import { handleValidationErrorFromServer } from '@/lib/util'
import { forgetPasswordSchema } from '@/lib/schema'
import Spinner from '../Spinner'
import Image from 'next/image'
import emailSentIcon from '../../../public/email_sent.png'
import forgotPassword from '@/../public/forgot_password.png'

function ForgetPasswordForm() {
  const [errorFromServer, setErrorFromServer] = useState(null)
  const [emailSent, setEmailSent] = useState(false)
  // const router = useRouter()
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
      reset()
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
      <Image
        src={forgotPassword}
        alt='forgot password image'
        width={300}
        priority
      />
      <div className='mb-10 space-y-3'>
        <h2 className='text-2xl font-medium text-center text-gray-600 font-cairo'>
          Forgot your Password?
        </h2>
        {/* {emailSent && (
        <div>
          <span>{emailSent}</span>
        </div>
      )} */}
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
          {/* <input
            type='submit'
            value={isSubmitting ? 'submitting...' : 'Reset password'}
            className='bg-[#901090] w-full text-center text-white rounded-md py-2 cursor-pointer hover:bg-[#800080]'
          /> */}
          <button
            type='submit'
            className='bg-[#901090] w-full flex items-center text-center text-white rounded-md py-2 cursor-pointer hover:bg-[#800080] justify-center'
          >
            {isSubmitting ? <Spinner text='Processing...' /> : 'Reset password'}
          </button>
          <p className='flex justify-center mt-1'>
            <Link href='/auth/login' className='text-[#800080] hover:underline'>
              Back to sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default ForgetPasswordForm
