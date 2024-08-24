'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { signup } from '@/lib/actions'
import { newUserSchema } from '@/lib/schema'

import TextInput from '../TextInput'
import FormWrapper from '../Dashboard/FormWrapper'
import SubmitButton from '../SubmitButton'
import { CancelButton } from '../Dashboard/Buttons'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import Form from '../Dashboard/Form'

function NewUserForm() {
  const initialVlaue = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  }
  const userRoles = [
    { option: 'business manager', value: 'business manager' },
    { option: 'managing Editor', value: 'managing editor' },
    { option: 'Admin', value: 'admin' },
  ]
  const [errorFromServer, setErrorFromServer] = useState(null)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: initialVlaue,
    resolver: zodResolver(newUserSchema),
  })

  const handler = async (data) => {
    const response = await signup(data)

    if (response && response?.ok) {
      reset()
      router.push('/dashboard/manage-users')
    }

    if (response && !response?.ok) {
      if (response?.errorType === 'validationError') {
        const fieldErrorMapping = {
          firstName: 'firstName',
          lastName: 'lastName',
          email: 'email',
          role: '',
        }
        const fieldWithError = Object.keys(fieldErrorMapping).find(
          (field) => response?.error[field]
        )
        if (fieldWithError) {
          // Use the ValidFieldNames type to ensure the correct field names
          const errors = Object.keys(response.error)
          errors.forEach((error) =>
            setError(error, { type: 'server', message: response.error[error] })
          )
        }
      }

      if (response?.errorType === 'other') {
        setErrorFromServer(response.error)
      }
    }
  }
  return (
    <FormWrapper formHeading='Add New User'>
      {errorFromServer && (
        <div>
          <span>{errorFromServer}</span>
        </div>
      )}
      <Form handleSubmit={handleSubmit} handler={handler}>
        <TextInput
          label='First name'
          name='firstName'
          placeholder='Enter first Name'
          register={register}
          error={errors.firstName}
        />

        <TextInput
          label='Last name'
          name='lastName'
          placeholder='Enter last name'
          register={register}
          error={errors.lastName}
        />
        <TextInput
          label='E-mail'
          name='email'
          placeholder='Enter email'
          register={register}
          error={errors.email}
        />
        <div className='flex flex-col'>
          <label htmlFor='user-role' className='inline-block mb-2 '>
            Role
          </label>
          <div
            className={clsx(
              `flex border border-gray-300 rounded-md focus-within:border-2 overflow-hidden bg-white cursor-pointer`,
              { ['border-red-400']: errors.role }
            )}
          >
            <select
              id='user-role'
              name='role'
              {...register('role')}
              className='w-full py-2 pl-3 bg-transparent outline-none appearance-none cursor-pointer'
              defaultValue=''
            >
              <option value='' disabled className=''>
                select user role
              </option>
              {userRoles.map((role) => (
                <option key={role.value} value={role.value} className=''>
                  {role.option}
                </option>
              ))}
            </select>
            {errors?.role && (
              <ExclamationCircleIcon
                className={clsx('w-5 mr-3', { ['text-red-400']: errors?.role })}
              />
            )}
          </div>
          {errors.role && (
            <span className='text-red-500 '>{errors?.role?.message}</span>
          )}
        </div>
        <div className='flex items-center gap-2 pt-1'>
          <SubmitButton
            textColor='white'
            bgColor='901090'
            hoverBgColor='800080'
            mainText='Add User'
            altText='Creating user...'
            formSubmitState={isSubmitting}
          />
          <CancelButton
            href='/dashboard/manage-users'
            style='bg-red-400 hover:bg-red-500'
            text='Cancel'
          />
        </div>
      </Form>
    </FormWrapper>
  )
}

export default NewUserForm
