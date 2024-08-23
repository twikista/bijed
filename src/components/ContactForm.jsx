'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import InputField from './InputField'
import TextArea from './TextArea'
import TextInput from '../TextInput'
import { contactFormSchema } from '@/lib/schema'

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: { name: '', email: '', message: '' },
    resolver: zodResolver(contactFormSchema),
  })
  return (
    <form className='flex flex-col self-center space-y-3'>
      <div className='w-full sm:w-[512px] mx-auto'>
        <TextInput
          type='text'
          label='Name'
          name='name'
          placeholder='Enter name'
          register={register}
          error={errors?.name}
        />
        <InputField type='text' label='name' required={true} />
        <InputField type='email' label='email' required={true} />
        <TextArea label='message' required={true} />
        <div className='mt-2'>
          <button
            type='submit'
            className='w-full px-4 py-[10px] rounded font-medium  outline-none  bg-primary hover:bg-transparent text-white transition-colors hover:text-primary border hover:border-primary '
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
