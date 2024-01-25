import MainContainer from '@/components/MainContainer'

function SubmissionGuide() {
  return (
    <MainContainer>
      <h2 className='text-2xl font-bold underline capitalize font-saira'>
        Submission Guide
      </h2>
      <section className='space-y-3'>
        <p>
          The Benin International Journal of Entrepreneurship Development
          (BIJED) shall welcome articles from various authors subject to the
          following guidelines:
        </p>
        <ol
          type='a'
          className='ml-4 space-y-2 list-outside list-lower-alpha md:ml-5'
        >
          <li>
            Articles shall deal on issues relating to entrepreneurship
            education, development and management in academics, industry and
            government.
          </li>
          <li>
            <p>
              Authors shall submit their articles in the following structure:
            </p>
            <ol className='ml-4 space-y-1 md:ml-6 list-lower-roman'>
              <li>Researchable topic with a title of a maximum of 16 words.</li>
              <li>
                Author’s bio-data information: Name, Contact Address/Institution
                and Correspondence e-mail address on the cover page.
              </li>
              <li>
                Abstract of about 250 words on a separate page which should be
                italicized, typed in single-line spacing and with keywords
                written underneath.
              </li>
              <li>
                Introduction which should cover the following: Background to the
                Study, clear Statement of the Research Problem/ Research
                Questions / Main and Specific Purposes/Objectives of the Study
                /Justification/Rationale, etc., must be clearly stated.
              </li>
              <li>
                Conceptual Framework, Theoretical Literature, Empirical
                Literature, Gap in the Literature and the Summarising
                Theoretical Framework of the paper
              </li>
              <li>Methodology; including Test of Hypothesis (if applicable)</li>
              <li>Analysis of Results/Discussion of Findings</li>
              <li>Summary, Conclusion and Recommendations</li>
              <li>
                References using the 6th Edition of America Psychological
                Association (APA) format.
              </li>
            </ol>
          </li>
          <li>
            The main body of the article shall be typed in double line spacing
            with an average of 15 pages.
          </li>
          <li>
            Articles should be tested and ensure free from plagiarism before
            submission.
          </li>
          <li>
            The full expression(s) of All Abbreviations should be fully written
            in the first instance.
          </li>
          <li>All contributions must be written in English.</li>
          <li>
            The Editorial Board shall acknowledge the receipt of contributions;
            and authors shall be informed of the status of their papers through
            their contact address or preferred e-mail address, which must be
            submitted along with their article(s).
          </li>
          <li>
            The Editorial Board shall have the final decision on any submitted
            article.
          </li>
        </ol>
      </section>
      <section className='space-y-3'>
        <h3 className='text-base font-bold font-saira md:text-xl'>
          Mode of Submission
        </h3>
        <p>
          Authors shall send soft copies of their articles accompanied by an
          abstract of about 250 words to entrepreneurshipdept@uniben.edu
        </p>
      </section>
      <section className='space-y-3'>
        <h3 className='text-base font-bold font-saira md:text-xl'>
          Publication Fees
        </h3>
        <article>
          <div>
            <h4 className='text-base font-semibold md:text-lg font-saira'>
              Nigerian Authors:
            </h4>
            <div className='ml-2 space-y-1 md:ml-4'>
              <p>Article submission fee: &#8358;5,000&#42;</p>
              <p>
                Article publication fee: &#8358;25,000 &#40;upon acceptance&#41;
              </p>
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
              <p>Article publication fee: &#36;90 &#40;upon acceptance&#41;</p>
              <p className='font-medium'>Total publication fee: &#36;100</p>
            </div>
          </div>
          <br />
          <p>&#42; Article submission fee is mandatory and non-refundable</p>
        </article>
      </section>
    </MainContainer>
  )
}

export default SubmissionGuide
