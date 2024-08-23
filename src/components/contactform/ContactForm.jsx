'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Form from '../Dashboard/Form'
import TextInput from '../TextInput'
import Textarea from '../Textarea'
import { contactFormSchema } from '@/lib/schema'
import { toast } from 'react-toastify'
import FormWrapper from '../Dashboard/FormWrapper'
import SubmitButton from '../SubmitButton'
import { sendContactFormMessage } from '@/lib/actions'
// import { sendEmail } from '@/lib/emailServices'

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: { name: '', email: '', subject: '', body: '' },
    resolver: zodResolver(contactFormSchema),
  })

  const handler = async (data) => {
    console.log(data)
    const response = await sendContactFormMessage(data)
    if (response?.ok) {
      reset()
      toast.success('Message sent.')
    } else {
      toast.error('Something went wrong. Please try again')
    }
  }

  return (
    <FormWrapper formHeading='Send us a message'>
      <Form handleSubmit={handleSubmit} handler={handler}>
        {/* <div className='w-full sm:w-[512px] mx-auto'> */}
        <TextInput
          type='text'
          label='Name'
          name='name'
          placeholder='Enter your name'
          register={register}
          error={errors?.name}
        />

        <TextInput
          type='email'
          label='Email'
          name='email'
          placeholder='Enter your email'
          register={register}
          error={errors?.email}
        />
        {/* <InputField type='text' label='name' required={true} />
        <InputField type='email' label='email' required={true} /> */}
        {/* <TextArea label='message' required={true} /> */}
        <TextInput
          type='text'
          label='Subject'
          name='subject'
          placeholder='Enter subject'
          register={register}
          error={errors?.subject}
        />
        <Textarea
          name='body'
          label='Message'
          placeholder='Enter your message'
          register={register}
          error={errors?.body}
        />
        {/* <div className=''>
          <button
            type='submit'
            className='w-full px-4 py-[10px] rounded font-medium  outline-none  bg-primary hover:bg-transparent text-white transition-colors hover:text-primary border hover:border-primary '
          >
            Submit
          </button>
        </div> */}
        <SubmitButton
          textColor='white'
          mainText='Send Message'
          altText='Sending Message...'
          formSubmitState={isSubmitting}
        />
        {/* </div> */}
      </Form>
    </FormWrapper>
  )
}

export default ContactForm
