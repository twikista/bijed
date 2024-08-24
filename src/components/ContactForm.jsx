'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Form from './Dashboard/Form'
import TextInput from './TextInput'
import Textarea from './Textarea'
import { contactFormSchema } from '@/lib/schema'
import { toast } from 'react-toastify'
import FormWrapper from './Dashboard/FormWrapper'
import SubmitButton from './SubmitButton'
import { sendContactFormMessage } from '@/lib/actions'
import ReCAPTCHA from 'react-google-recaptcha'
import { useState, useRef } from 'react'
import { config } from '@/lib/config'
// import { sendEmail } from '@/lib/emailServices'

function ContactForm() {
  const [isCaptchaSolved, setIsCaptchaSolved] = useState(false)
  const captchaRef = useRef()
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
    const response = await sendContactFormMessage(data)
    if (response?.ok) {
      captchaRef.current.reset()
      reset()
      setIsCaptchaSolved(false)

      toast.success('Message sent.')
    } else {
      toast.error('Something went wrong. Please try again')
    }
  }

  const onChange = (value) =>
    value ? setIsCaptchaSolved(true) : setIsCaptchaSolved(false)

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
          disabled={!isCaptchaSolved}
        />
        <div className='flex justify-center'>
          <ReCAPTCHA
            sitekey={config.sitekey}
            onChange={onChange}
            ref={captchaRef}
          />
        </div>
      </Form>
    </FormWrapper>
  )
}

export default ContactForm
