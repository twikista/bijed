import { PageHeading } from '@/components/Headings'
import MainContainer from '@/components/MainContainer'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title:
    'Contact us - Benin International Journal for Entrepreneurship Development',
  description:
    'React out to us on through the address on this page. Department of Entrepreneurship, Faculty of Management of Sciences, University of Benin, Benin City',
}

function Contact() {
  return (
    <MainContainer>
      <PageHeading>Contact</PageHeading>
      <div className='pt-5'>
        <section className='flex flex-col items-center space-y-1'>
          {/* <h3 className='text-xl font-semibold font-saira'>Address</h3> */}
          <div className='text-center'>
            <p>Depatrment of Entreprenuership,</p>
            <p>Faculty of Management Sciences,</p>
            <p>University of Benin, </p>
            <p>Benin City &#45; Nigeria.</p>
            <p>
              <span className='font-medium'>Tel:&nbsp;</span>+2348037236527
            </p>
            <p>
              <span className='font-medium'>Email:&nbsp;</span>bijed@uniben.edu
            </p>
          </div>
        </section>
        <section className='flex flex-col items-center space-y-2'>
          {/* <h3 className='text-xl font- font-saira'>Send us a message</h3> */}
          <div className='w-full'>
            <ContactForm />
          </div>
        </section>
      </div>
    </MainContainer>
  )
}

export default Contact
