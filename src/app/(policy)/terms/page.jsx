import { CheckedCircle } from '@/components/Icons'
import MainContainer from '@/components/MainContainer'

export const metadata = {
  title: 'BIJED | Terms',
  description:
    'This page contains the terms of using the Benin International Journal of Entrepreneurship Development (BIJED). You find copyright and licensing information on this page ',
}

function Terms() {
  return (
    <MainContainer>
      <h2 className='text-2xl font-bold underline uppercase font-saira'>
        Terms of Use
      </h2>
      <section className='space-y-3'>
        <h3 className='text-base font-bold capitalize font-saira md:text-xl'>
          1.0: copyright
        </h3>
        <ul className='ml-2 space-y-5 md:ml-4'>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p className='flex-1'>
              Copyright for all open access articles published in BIJED is
              retained by the respective author&#40;s&#41;.
              {/* Consequently, the authors retain all
              publication and redistribution rights without restrictions. */}
            </p>
          </li>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p className='flex-1'>
              Authors grant publishing and distribution rights to the publisher,
              including the right to publish the article on BIJED’s website.
            </p>
          </li>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p className='flex-1'>
              Authors also grant any third party the right to freely use and
              share the published articles under the terms of the{' '}
              <a
                href='https://creativecommons.org/licenses/by/4.0/'
                className='underline'
              >
                Creative Commons Attribution 4.0 International License.
              </a>
            </p>
          </li>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 pt-[5px] inline-block'
              fill='none'
            />
            <p className='flex-1'>
              Authors are responsible for obtaining the required permissions for
              the inclusion of materials for which they hold no copyrights in
              their articles. The authors are solely liable for any error,
              omission or infringement that may be associated with their
              published articles
            </p>
          </li>
        </ul>
      </section>
      <section m>
        <h3 className='mb-2 text-base font-bold capitalize font-saira md:text-xl'>
          2.0: Open Access Policy
        </h3>
        <p>
          All articles published in Benin International journal of
          Entrepreneurship Development are published under the Open Access
          Model, making them immediately available to read, download, and share
          for free after publication. Therefore, all authors on submission of
          their articles for publishing in BIJED agree to make them freely
          available online without charges to users.
        </p>
      </section>
      <section className=''>
        <h3 className='mb-2 text-base font-bold capitalize font-saira md:text-xl'>
          3.0: Creative Common Licence
        </h3>
        <p>
          Articles published in Benin International journal of Entrepreneurship
          Development are licenced under a{' '}
          <a
            href='https://creativecommons.org/licenses/by/4.0/'
            className='underline'
          >
            Creative Commons Attribution 4.0 International License,
          </a>{' '}
          which permits use, distribution and reproduction in any medium,
          provided the original work is properly cited.
        </p>
      </section>
    </MainContainer>
  )
}

export default Terms
