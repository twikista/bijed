import MainContainer from '@/components/MainContainer'
import ContactForm from '@/components/contactform/ContactForm'

function Contact() {
  return (
    <MainContainer>
      <h2 className='text-2xl font-bold underline capitalize font-saira'>
        Contact
      </h2>
      <div className='space-y-10'>
        <section className='space-y-1'>
          <h3 className='text-xl font-semibold font-saira'>Address</h3>
          <div>
            <p>Depatrment of Entreprenuership,</p>
            <p>Faculty of Management Sciences,</p>
            <p>University of Benin, </p>
            <p>Benin City &#45; Nigeria.</p>
            <p>
              <span className='font-medium'>Tel:&nbsp;</span>+2349011990518
            </p>
            <p>
              {' '}
              <span className='font-medium'>Email:&nbsp;</span>bijed@uniben.edu
            </p>
          </div>
        </section>
        <section className='space-y-2'>
          <h3 className='text-xl font-semibold font-saira'>Contact us</h3>
          <div>
            <ContactForm />
          </div>
        </section>
      </div>
    </MainContainer>
  )
}

export default Contact
