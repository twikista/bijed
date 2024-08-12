import { PageHeading } from '@/components/Headings'
import MainContainer from '@/components/MainContainer'

export const metadata = {
  title: 'Open Acess Policy',
  description:
    'All articles published in Benin International journal of Entrepreneurship Development are published under the Open Access Model, making them immediately available to read, download, and share for free after publication.',
}

function OpenAccess() {
  return (
    <MainContainer>
      <PageHeading>Open Access</PageHeading>
      <div className='space-y-3'>
        <p>
          All articles published in Benin International journal of
          Entrepreneurship Development are published under the Open Access
          Model, making them immediately available to read, download, and share
          for free after publication. Therefore, all authors on submission of
          their articles for publishing in BIJED agree to make them freely
          available online without charges to users.
        </p>
      </div>
    </MainContainer>
  )
}

export default OpenAccess
