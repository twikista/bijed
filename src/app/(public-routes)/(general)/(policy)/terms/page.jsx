import { PageHeading, Paragraph, SectionHeading } from '@/components/Headings'
import { CheckedCircle } from '@/components/Icons'
import MainContainer from '@/components/MainContainer'

export const metadata = {
  title: 'Terms',
  description:
    'This page contains the terms for using the Benin International Journal of Entrepreneurship Development (BIJED). You can find copyright and licensing information on this page ',
}

function Terms() {
  return (
    <MainContainer>
      <PageHeading>Terms</PageHeading>
      <section className='space-y-3'>
        <SectionHeading>copyright</SectionHeading>
        <p className='inline p-0 m-0'>
          By submitting their articles to BIJED, authors grant copyright
          (including the rights to publish and distribute such articles upon
          approval) to the Publisher.
        </p>
        <p className='flex-1'>
          Authors also grant any third party the right to freely use and share
          the published articles under the terms of the{' '}
          <a
            href='https://creativecommons.org/licenses/by/4.0/'
            className='underline hover:text-blue-500'
          >
            Creative Commons Attribution 4.0 International License.
          </a>
        </p>
        <p className='flex-1'>
          Authors are responsible for obtaining the required permissions for the
          inclusion of materials for which they hold no copyrights in their
          articles. The authors are solely liable for any error, omission or
          infringement that may be associated with their published articles
        </p>
      </section>
      <section className='space-y-3'>
        <SectionHeading>Plagiarism policy</SectionHeading>
        <p className='inline p-0 m-0'>
          BIJED consider plagiarism and other forms of copyright infringements
          as serious academic offenses. Hence, this journal is committed to
          ensuring that articles approved for publication are free from
          copyright issues.
        </p>
        <p>
          To ensure compliance with our plagiarism ploicy, all submitted
          manuscripts will be subjected to plagiarism test to ascertain their
          originality. Manuscripts with a Similarity Index of more than 15
          percent will be dropped.
        </p>
      </section>
      <section m>
        <SectionHeading>Open Access</SectionHeading>
        <p className='inline p-0 m-0'>
          All articles published in Benin International journal of
          Entrepreneurship Development are published under the Open Access
          Model, making them immediately available to read, download, and share
          for free after publication. Therefore, all authors on submission of
          their articles for publishing in BIJED agree to make them freely
          available online without charges to users.
        </p>
      </section>
      <section className=''>
        <SectionHeading>Creative Common Licence</SectionHeading>
        <Paragraph>
          Articles published in Benin International journal of Entrepreneurship
          Development are licenced under a{' '}
          <a
            href='https://creativecommons.org/licenses/by/4.0/'
            className='underline hover:text-blue-500'
          >
            Creative Commons Attribution 4.0 International License,
          </a>{' '}
          which permits use, distribution and reproduction in any medium,
          provided the original work is properly cited.
        </Paragraph>
      </section>
    </MainContainer>
  )
}

export default Terms
