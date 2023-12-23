import Link from 'next/link'
import OpenInNewWindow from '@/components/Icons'
import MainContainer from '@/components/MainContainer'
import { CheckedCircle } from '@/components/Icons'

export const metadata = {
  title:
    'Publication Ethics - Benin International Journal for Entrepreneurship Development',
  description:
    'Benin International Journal for Entrepreneurship Development is committed to upholding and promoting best ethical practices in the publication of scholarly articles. To this end, BIJED follows the ethical practices and guidlines outlined by the Committee on Publication Ethics (COPE).',
}

function PublicationEthics() {
  return (
    <MainContainer>
      <h2 className='text-2xl font-bold underline uppercase font-saira'>
        Publication Ethics
      </h2>
      <section className='space-y-3'>
        <p className=''>
          Benin International Journal for Entrepreneurship Development is
          committed to upholding and promoting best ethical practices in the
          publication of scholarly articles. To this end, BIJED follows the
          ethical practices and guidlines outlined by the
          <a
            href='https://publicationethics.org/guidance/Guidelines'
            target='_blank'
            className='inline-block underline underline-offset-2'
          >
            <span>Committee on Publication Ethics (COPE)</span>
            <OpenInNewWindow className='inline-block w-4' />
          </a>
          . These practices and guidelines underscores the expected behaviour of
          the Author, the Chief Editor, the Editorial Board, the Reviewer­­­­­
          and the Publisher (BIJED).
        </p>
      </section>
      <section className='space-y-3'>
        <h3 className='text-base font-bold capitalize font-saira md:text-xl'>
          Article Approval Decisions
        </h3>
        <p>
          The editors are responsible for determining the submitted articles
          that will be published. The decisions of the editors shall always be
          driven by the quality/intellectual content of the paper in question
          and its level of compliance to the policies of the journal. Editors
          shall at no time base their evaluation of manuscripts on the race,
          gender, sexual orientation, religious belief, ethnic origin,
          citizenship, or political philosophy of the authors.
        </p>
      </section>
      {/* <section className='space-y-3'>
        <h3 className='text-base font-bold capitalize font-saira md:text-xl'>
          Correction of Articles
        </h3>
        <ul className='ml-2 space-y-5 md:ml-4'>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p className='flex-1'>
              Author(s) cannot make major corrections or changes to manuscripts
              already accepted for publication. Hence, it is important for
              authors to carefully complete their research work before
              submitting to BIJED.
            </p>
          </li>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p className='flex-1'>
              Errors discovered after submission but before approval for
              publication by the Author(s) should be communicated swiftly to the
              Editor of the Journal before the end of the review process.
            </p>
          </li>
        </ul>
      </section> */}
      <section className='space-y-3'>
        <h3 className='text-base font-bold capitalize font-saira md:text-xl'>
          Confidentiality
        </h3>
        <p>
          Manuscript submitted to BIJED will be treated as confidential
          material, and will be disclosed only to individuals (including
          editorial staff, corresponding authors, potential reviewers, actual
          reviewers, and editors) who partake in the processing and preparation
          of the manuscript for possible publication. However, in suspected
          cases of misconduct, a manuscript may be revealed to members of the
          BIJED ethics committee and institutions/organizations that may require
          it for the resolution of the misconduct.
        </p>
      </section>
      <section className='space-y-3'>
        <h3 className='text-base font-bold capitalize font-saira md:text-xl'>
          Disclosure and Conflict of Interest
        </h3>
        <p>
          Information and ideas contained in unpublished manuscripts submitted
          to the Journal is confidential. Actors in the editorial process
          (including editors and reviewers) who have previleged access to such
          information are prohibited from using them for their personal or other
          purposes. An editor must disclose any form of relationship or
          connection with any of the authors, companies, or institutions
          connected to the submitted paper that may result in a conflict of
          interest.
        </p>
      </section>
      <section className='space-y-3'>
        <h3 className='text-base font-bold capitalize font-saira md:text-xl'>
          Misconduct
        </h3>
        <p>
          Any action, behaviour or conduct (including the violation of any part
          of BIJED editorial policy, journal policies, publication ethics, and
          any applicable guidelines/policies specified by BIJED) will constitue
          misconduct. All suspected cases of misconduct will be investigated and
          appropriate actions taken where necessary.
        </p>
      </section>
      <section className='space-y-10 '>
        <Link
          href='/authors-guide'
          className='flex items-center text-base font-bold underline capitalize underline-offset-2 hover:text-blue-500 font-saira md:text-xl w-fit'
        >
          <span>Authors Guide</span>
          <OpenInNewWindow className='inline-block w-4 md:w-5' />
        </Link>
        <Link
          href='/reviewers-guide'
          className='flex items-center text-base font-bold underline capitalize underline-offset-2 hover:text-blue-500 font-saira md:text-xl w-fit'
        >
          <span>Reviewers Guide</span>
          <OpenInNewWindow className='inline-block w-4 md:w-5' />
        </Link>
        <Link
          href='/for-editors'
          className='flex items-center text-base font-bold underline capitalize underline-offset-2 hover:text-blue-500 font-saira md:text-xl w-fit'
        >
          <span>For Editors</span>
          <OpenInNewWindow className='inline-block w-4 md:w-5' />
        </Link>
      </section>
    </MainContainer>
  )
}

export default PublicationEthics
