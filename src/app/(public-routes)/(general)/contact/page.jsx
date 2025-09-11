import { PageHeading } from '@/components/Headings';
import MainContainer from '@/components/MainContainer';
import { H3 } from '@/components/new/headings';

export const metadata = {
  title:
    'Contact us - Benin International Journal for Entrepreneurship Development',
  description:
    'React out to us on through the address on this page. Department of Entrepreneurship, Faculty of Management of Sciences, University of Benin, Benin City',
};

function Contact() {
  return (
    <MainContainer>
      <PageHeading>Contact</PageHeading>
      <div className='flex flex-col items-center gap-5 sm:items-start sm:justify-center sm:flex-row md:gap-20'>
        <div className=''>
          <H3>Editor in Chief, BIJED</H3>
          <span className='block'>Department of Entrepreneurship</span>
          <span className='block'>Faculty of Management Sciences</span>
          <span className='block'>University of Benin, Benin city</span>
          <span className='block'>Edo state, Nigeria</span>
          <span className='block'>Email: bijed@uniben.edu</span>
          <span className='block'>www.bijed.com.ng</span>
        </div>
        <div className=''>
          <H3>Support Contact</H3>
          <span className='block'>Dr. Okunbo Osahon</span>
          <span className='block'>Business manager, MSR</span>
          <span className='block'>Email: osahon.okunbo@uniben.edu</span>
          <span className='block'>Phone: 0703 506 6990</span>
        </div>
      </div>
    </MainContainer>
  );
}

export default Contact;
