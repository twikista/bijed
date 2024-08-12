import InputField from './InputField'
import TextArea from './TextArea'

function ContactForm() {
  return (
    <form className='flex flex-col space-y-3'>
      <div className='w-full md:w-[512px] mx-auto'>
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
