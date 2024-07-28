import { PageHeading, Paragraph, SectionHeading } from '@/components/Headings'
import MainContainer from '@/components/MainContainer'

export const metadata = {
  title:
    'Authors guide - Benin International Journal for Entrepreneurship Development',
  description:
    'This page contains the authors for the Benin International Journal for Entrepreneurship Development.',
}

function AuthorsGuide() {
  return (
    <MainContainer>
      <PageHeading>Authors Guide</PageHeading>
      <section className='space-y-3'>
        {/* <SectionHeading className='text-base font-bold capitalize font-saira md:text-xl'> */}
        <SectionHeading>Manuscript Submission</SectionHeading>

        {/* </SectionHeading> */}
        <Paragraph first={true}>
          All manuscript should be submitted electronically through email
          attachment to:{' '}
          <span className='font-medium underline'>bijed@uniben.edu</span>,
          copying the managing editor at{' '}
          <span className='font-medium underline'>edwin.enofe@uniben.edu</span>.
          Manuscript submissions should be accomapnied with submission fee of
          &#8358;5,000.
        </Paragraph>
        <Paragraph>
          The author who submitted the manuscript automatically becomes the
          corresponding author and must provide contact information (full name,
          email address, institutional affiliation and mailing address) for all
          the co-authors.
        </Paragraph>
        <Paragraph>
          Only manuscript(s) that have not already been submitted to other
          journals should be submitted to BIJED. Similarly, manuscript(s)
          already submitted to BIJED should not be submitted to any other
          Journal for processing.
        </Paragraph>
        <Paragraph>
          By submitting a manuscript, authors confirm that their contributions
          to the Journal are their original work, and the submission is approved
          by all co-authors for publishing. Authors are exclusively responsible
          for the contents of their submissions, the validity of the
          experimental results and must make sure that they have permission from
          all parties to make the data public.
        </Paragraph>
      </section>
      <section className='space-y-3'>
        <SectionHeading>Cover Letter</SectionHeading>
        <Paragraph first={true}>
          Manuscript must be accompanied by a covering letter indicating clearly
          that the paper had not been multiplied, redundant or concurrently
          being submitted to any other publishers and that BIJED owns the
          copyright when published.
        </Paragraph>
      </section>
      <section className='space-y-3'>
        <SectionHeading>Authorship</SectionHeading>
        <Paragraph first={true}>
          Authorship listed in the submission should be limited to only those
          who have significantly contributed to the concept, design, execution,
          or interpretation of the research study. Other individuals whose
          contribution cannot be regarded as significant should be acknowledged.
          The sources of financial support for the project should be disclosed.
        </Paragraph>
        <Paragraph>
          Authors are expected to consider carefully the list and order of
          authors before submitting their manuscript and provide the definitive
          list of authors at the time of the original submission. Only in
          exceptional circumstances will the Editor consider (at their
          discretion) the addition, deletion or rearrangement of authors after
          the manuscript has been submitted and the author must clearly flag any
          such request to the Editor. All authors must agree with any such
          addition, removal or rearrangement.
        </Paragraph>
      </section>
      <section className='space-y-3'>
        <SectionHeading> Editorial Process and Peer Review</SectionHeading>
        <Paragraph first={true}>
          Manuscripts are pre-evaluated at the first instance at the Editorial
          Office in order to check whether they meet the basic requirements and
          quality standards, including being screened for plagiarism. Only those
          contributions which conform to the theoretical and/or empirical,
          scholarly standard, and show clear evidence of contribution to
          knowledge will be accepted for peer review. Authors must strictly
          follow these instructions for authors.
        </Paragraph>
        <Paragraph>
          The Journal uses a double peer review processing for all manuscripts
          according to the following criteria: significance of contribution,
          originality of material, clarity of presentation, and relevance to the
          focus of the Journal
        </Paragraph>
      </section>
      <section className='space-y-3'>
        <SectionHeading>Language</SectionHeading>
        <Paragraph first={true}>
          Paper submitted for publication should be written in English..
        </Paragraph>
      </section>
      <section className='space-y-3'>
        <SectionHeading className='text-base font-bold capitalize font-saira md:text-xl'>
          Plagiarism
        </SectionHeading>
        <Paragraph>
          Plagiarism constitutes unethical scientific behavior and is never
          acceptable. Hence, authors must ensure that all resources used in
          their work is clearly cited and acknowledged. All submissions to BIJED
          will be tested for plagiarism at pre-evalation phase of the review
          process and only submissions with maximum plagiarism score of 10&#37;
          will be moved to the next phase for review.
        </Paragraph>
      </section>
      <section className='space-y-3'>
        <SectionHeading>Correction of Articles</SectionHeading>
        <Paragraph first={true}>
          Errors discovered by the author after submission but before approval
          for publication should be communicated swiftly to the editor of the
          Journal before the end of the review process.
        </Paragraph>
        <Paragraph>
          When an author discovers a significant error or inaccuracy in their
          own published work, it is the author’s obligation to promptly notify
          the journal editor or publisher and cooperate with the editor to
          retract or correct the paper if deemed necessary by the editor. If the
          editor or the publisher learn from a third party that a published work
          contains an error, it is the obligation of the author to cooperate
          with the editor, including providing evidence to the editor where
          requested.
        </Paragraph>
      </section>
      <section className='space-y-3'>
        <SectionHeading className='text-base font-bold font-saira md:text-xl'>
          Publication Fees
        </SectionHeading>
        <article>
          <div>
            <h4 className='text-base font-semibold md:text-lg font-saira'>
              Nigerian Authors:
            </h4>
            <div className='space-y-1'>
              <Paragraph>Article submission fee: &#8358;5,000&#42;</Paragraph>
              <Paragraph>
                Article publication fee: &#8358;25,000 &#40;upon acceptance&#41;
              </Paragraph>
            </div>
          </div>
          <div>
            <h4 className='text-base font-semibold md:text-lg font-saira'>
              International Authors:
            </h4>
            <div className='space-y-1'>
              <Paragraph>Article submission fee:&#32; &#36;10&#42;</Paragraph>
              <Paragraph>
                Article publication fee: &#36;90 &#40;upon acceptance&#41;
              </Paragraph>
            </div>
          </div>
          <br />
          <Paragraph>
            &#42; Article submission fee is mandatory and non-refundable
          </Paragraph>
        </article>
      </section>
    </MainContainer>
  )
}

export default AuthorsGuide
