import InputField from './InputField'
import TextArea from './TextArea'

function ContactForm() {
  return (
    <form className='space-y-3'>
      <InputField type='text' label='name' required={true} />
      <InputField type='email' label='email' required={true} />
      <TextArea label='message' required={true} />
      <div className='sm:w-[180px]'>
        <button
          type='submit'
          className='w-full px-4 py-4 font-medium border-0 outline-none bg-primary text-neutral-50 hover:bg-[#86355d]'
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm
