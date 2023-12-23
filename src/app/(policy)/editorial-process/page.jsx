import MainContainer from '@/components/MainContainer'
import { CheckedCircle } from '@/components/Icons'

export const metadata = {
  title:
    'Editorial Process - Benin International Journal for Entrepreneurship Development',
  description:
    'This page contains the editorial process for the Benin International Journal for Entrepreneurship Development.',
}

function EditorialProcess() {
  return (
    <MainContainer>
      <h2 className='text-2xl font-bold underline uppercase font-saira'>
        Editorial Process
      </h2>

      <section className='space-y-3'>
        <h3 className='text-base font-bold capitalize font-saira md:text-xl'>
          Article Submission
        </h3>
        <ul className='ml-2 space-y-5 md:ml-4'>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p className='flex-1'>
              A general call for submission of paper will be issued online (on
              this website) and offline (through flyers) at the begining of
              every new issue. All submissions are to be sent as as e-mail
              attachment to{' '}
              <span className='font-bold'>entrepreneurshipdept@uniben.edu</span>
              , copying the managing editor at{' '}
              <span className='font-bold'>edwin.enofe@uniben.edu</span>.
            </p>
          </li>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p className='flex-1'>
              Articles submitted articles must be the{' '}
              <span className='font-bold'>original</span> work of author(s) and
              approved for submission by all co-authors. Hence, authors are
              liable for any copyright breach.
            </p>
          </li>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p className='flex-1'>
              Authorship of articles should be limited to only author(s) that
              has(have) significantly contributed to the submission.
            </p>
          </li>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p className='flex-1'>
              Only manuscript(s) that have not already been submitted to other
              journals and are not under consideration by other journals should
              be submitted to BIJED. Similarly, manuscript(s) already submitted
              to BIJED should not be submitted to any other Journal for
              processing until the manuscript review process by the BIJED
              editorial board have been completed and editorial decision taken.
            </p>
          </li>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p className='flex-1'>
              Article submission will be treated strictly on a
              first-come-first-served basis. Only submitted articles that comply
              with the authors and submission guidelines will be accepted and
              processed for review.
            </p>
          </li>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p className='flex-1'>
              The editorial board will acknowledge receipt of manuscript(s)
              through the email address of the corresponding author.
            </p>
          </li>
        </ul>
      </section>
      <section className='space-y-3'>
        <h3 className='text-base font-bold capitalize font-saira md:text-xl'>
          Article Processing/Review
        </h3>
        <ul className='ml-2 space-y-5 md:ml-4'>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p className='flex-1'>
              All articles submitted to BIJED go through a double-blind peer
              review process. The articles will be reviewed by both Internal and
              External Reviewers.
            </p>
          </li>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p className='flex-1'>
              All submitted manuscripts will pass through preliminary review
              where they are pre-evaluated at the Editorial Office to check
              whether they meet the basic requirements and quality standards,
              and thus fit for peer review.
            </p>
          </li>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p className='flex-1'>
              Manuscripts that pass the preliminary review will be sent to
              independent reviewers. Reweviers are selected based on their
              qualifications, expertise and experiences on the area of coverage
              of the paper to be reviewed. An honorarium is given to each
              reviewer for the reviewed article.
            </p>
          </li>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p className='flex-1'>
              Depending on the reviewers recommendations, the reviewed
              article(s) may be sent back to the corresponding author to effect
              corrections. Once it is ascertained that the recommendations of
              the reviewers are effected, the article(s) will be sent for final
              review.
            </p>
          </li>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p className='flex-1'>
              The final review is conducted by members of the Editorial Board,
              headed by the Chief Editor. The final review will resuit in an
              editorial decision which may be the acceptance or rejection of the
              manuscript, or recommendation for further work. The corresponding
              author will be notified of the Editorial Decision.
            </p>
          </li>
        </ul>
        <div className='ml-2 md:ml-4'>
          <span className='text-base font-bold underline capitalize md:text-lg font-saira'>
            Note:
          </span>
          <ol className='ml-6 space-y-2 list-decimal list-outside md:ml-8'>
            <li className=''>
              To enhance speedy communication during the review process, authors
              are encouraged to check their emails frequently, for
              correspondence from the editiorial team. Delays in authors&apos;
              correspondence will be penalized (such papers might be removed
              from the review/publication process completely).
            </li>
            <li className=''>
              Authors are banned from contacting Editors-in-Chief directly in
              relation to the review of their article(s). All correspondence
              related to manuscript review should be sent to{' '}
              <span className='font-bold'>entrepreneurshipdept@uniben.edu</span>
              , copying the managing editor at{' '}
              <span className='font-bold'>edwin.enofe@uniben.edu</span>. .
            </li>
          </ol>
        </div>
      </section>

      <section className='space-y-3'>
        <h3 className='text-base font-bold capitalize font-saira md:text-xl'>
          Article Publication
        </h3>
        <ul className='ml-2 space-y-5 md:ml-4'>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p>
              Only submitted articles approved by the editors, as guided by the
              policies of the journal will be published.
            </p>
          </li>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p>
              Articles are published both in soft copies (online) and hard
              copies.
            </p>
          </li>
          <li className='flex items-start gap-2'>
            <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            />
            <p>
              The Benin International Journal for Entrepreneurship Developement
              is published biannually in June and December.
            </p>
          </li>
        </ul>
      </section>
      <div className='py-1 pl-2 border-l-4 solid border-l-primary'>
        <p className='font-bold'>Article review takes between 4 to 8 weeks</p>
      </div>
    </MainContainer>
  )
}

export default EditorialProcess
