import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { PageHeading, SectionHeading } from '@/components/Headings'
import MainContainer from '@/components/MainContainer'

export const metadata = {
  title:
    'Article Publication Charge - Benin International Journal for Entrepreneurship Development',
  description:
    'Theis page outlines the charges asscociated with publishing in the Benin International Journal of Entrepreneurship Development.',
}

function PublicationFee() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center flex-grow w-full h-full'>
        <MainContainer>
          <PageHeading>Publication fees</PageHeading>
          <section className='space-y-3 w-full  md:w-[70%] mx-auto'>
            <div>
              <SectionHeading>Nigerian Authors:</SectionHeading>
              <div className='space-y-1'>
                <p>Article submission fee: &#8358;5,000&#42;</p>
                <p>Article publication fee: &#8358;25,000</p>
                {/* <p className='font-medium'>Total publication fee: &#8358;30,000</p> */}
              </div>
            </div>
            <div>
              <SectionHeading>International Authors:</SectionHeading>
              <div className='space-y-1'>
                <p>Article submission fee:&#32; &#36;10&#42;</p>
                <p>Article publication fee: &#36;70</p>
                {/* <p className='font-medium'>Total publication fee: &#36;80</p> */}
              </div>
            </div>
            <br />
            <p>&#42; Article submission fee is mandatory and non-refundable</p>
          </section>
        </MainContainer>
      </div>
      <Footer />
    </div>
  )
}

export default PublicationFee
