import MainContainer from '@/components/MainContainer'

export const metadata = {
  title:
    'Article Publication Charge - Benin International Journal for Entrepreneurship Development',
  description:
    'Theis page outlines the charges asscociated with publishing in the Benin International Journal of Entrepreneurship Development.',
}

function PublicationFee() {
  return (
    <MainContainer>
      <h2 className='text-2xl font-bold underline capitalize font-saira'>
        Article Processing Charge
      </h2>
      <section className='space-y-3'>
        <article>
          <div>
            <h4 className='text-base font-semibold md:text-lg font-saira'>
              Nigerian Authors:
            </h4>
            <div className='ml-2 space-y-1 md:ml-4'>
              <p>Article submission fee: &#8358;5,000&#42;</p>
              <p>Article publication fee: &#8358;25,000</p>
              <p className='font-medium'>
                Total publication fee: &#8358;30,000
              </p>
            </div>
          </div>
          <div>
            <h4 className='text-base font-semibold md:text-lg font-saira'>
              International Authors:
            </h4>
            <div className='ml-2 space-y-1 md:ml-4'>
              <p>Article submission fee:&#32; &#36;10&#42;</p>
              <p>Article publication fee: &#36;70</p>
              <p className='font-medium'>Total publication fee: &#36;80</p>
            </div>
          </div>
          <br />
          <p>&#42; Article submission fee is mandatory and non-refundable</p>
        </article>
      </section>
    </MainContainer>
  )
}

export default PublicationFee
