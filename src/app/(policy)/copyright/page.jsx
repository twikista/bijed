import MainContainer from '@/components/MainContainer'

function Copyright() {
  return (
    <MainContainer>
      <h2 className='text-2xl font-bold underline capitalize font-saira'>
        Copyright policy
      </h2>
      <div className='space-y-3'>
        <p>
          By submitting their articles to BIJED, authors grant copyright
          (including the rights to publish and distribute such articles upon
          approval) to the Publisher.
        </p>
        <p>
          Authors also grant any third party the right to freely use and share
          the published articles under the terms of the{' '}
          <a
            href='https://creativecommons.org/licenses/by/4.0/'
            className='underline hover:text-blue-500'
          >
            Creative Commons Attribution 4.0 International License.
          </a>
        </p>
        <p className=''>
          Authors are responsible for obtaining the required permissions for the
          inclusion of materials for which they hold no copyrights in their
          articles. The authors are solely liable for any error, omission or
          infringement that may be associated with their published articles
        </p>
      </div>
    </MainContainer>
  )
}

export default Copyright
