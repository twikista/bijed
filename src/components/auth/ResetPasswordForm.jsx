'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetPassword } from '@/lib/actions'
import PasswordInput from '../PasswordInput'
import { handleValidationErrorFromServer } from '@/lib/util'
import { passwordSchema } from '@/lib/schema'
import Spinner from '../Spinner'
import passwordResetIcon from '@/../public/password_reset.svg'
import Image from 'next/image'

function ResetPasswordForm({ authToken }) {
  const [errorFromServer, setErrorFromServer] = useState(null)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { password: '' },
    resolver: zodResolver(passwordSchema),
  })
  const handler = async (data) => {
    const response = await resetPassword(authToken, data)
    if (response && response.ok) {
      router.push('/auth/login')
    }

    if (response && !response?.ok) {
      if (response?.errorType === 'validationError') {
        handleValidationErrorFromServer(
          response,
          { password: 'password' },
          setError
        )
      }

      if (response?.errorType === 'other') {
        setErrorFromServer(response.error)
      }
    }
  }
  return (
    <div className=' w-full max-w-[320px] h-full justify-center flex flex-col text-gray-500'>
      <Image
        src={passwordResetIcon}
        alt='forgot password image'
        width={60}
        className='mx-auto'
        priority
      />
      <div className='mt-3 mb-8 space-y-5'>
        <h2 className='text-2xl font-medium text-center text-gray-600 font-cairo'>
          Set a New Password
        </h2>

        <p className='w-full max-w-[300px] mx-auto text-center text-gray-600'>
          Enter your new password below
        </p>
      </div>
      <form onSubmit={handleSubmit(handler)} className='space-y-3'>
        {errorFromServer && (
          <div>
            <span>{errorFromServer}</span>
          </div>
        )}
        <PasswordInput
          label='New password'
          name='password'
          register={register}
          error={errors?.password}
        />
        <button
          type='submit'
          className='bg-[#901090] w-full flex items-center text-center text-white rounded-md py-2 cursor-pointer hover:bg-[#800080] justify-center'
        >
          {isSubmitting ? (
            <Spinner text='Processing...' />
          ) : (
            'Confirm New password'
          )}
        </button>
      </form>
    </div>
  )
}

export default ResetPasswordForm
