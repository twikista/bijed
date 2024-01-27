import MainContainer from '@/components/MainContainer'
import { CheckedCircle } from '@/components/Icons'

export const metadata = {
  title:
    'Reviewers Guideline - Benin International Journal for Entrepreneurship Development',
  description:
    'This page outlines the steps and expectations required for reviewers of the Benin International Journal for Entrepreneurship Development to carry out their work effectively and efficiently as possible.',
}

function ReviewersGuide() {
  return (
    <MainContainer>
      <h2 className='text-2xl font-bold underline uppercase font-saira'>
        Reviewers Guideline
      </h2>
      <section className='space-y-3'>
        <p>
          This guide outlines the steps and expectations required for BIJED
          reviewers to carry out their work effectively and efficiently as
          possible.
        </p>
      </section>

      <section className='space-y-3'>
        <h3 className='text-base font-bold capitalize font-saira md:text-xl'>
          Accepting Review Invitations
        </h3>
        <div className='space-y-3'>
          <p className='flex-1'>
            Before accepting the editor&#39;s invitation for a review, consider
            the following:
          </p>
          <ul className='ml-2 space-y-3 md:ml-4'>
            <li className='flex items-start gap-1 md:gap-2'>
              <CheckedCircle
                className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                fill='currentColor'
              />
              <p className='flex-1'>
                Does the manuscript you are being asked to review truly match
                your expertise?
              </p>
            </li>
            <li className='flex items-start gap-1 md:gap-2'>
              <CheckedCircle
                className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                fill='currentColor'
              />
              <p className='flex-1'>
                Do you have time to complete the review of the manuscript in the
                allotted time?
              </p>
            </li>
            <li className='flex items-start gap-1 md:gap-2'>
              <CheckedCircle
                className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                fill='currentColor'
              />
              <p className='flex-1'>
                Are there any potential conflicts of interest?
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className='space-y-3'>
        <h3 className='text-base font-bold font-saira md:text-xl'>
          Conducting the Review
        </h3>
        <p>
          The following are steps to be taken once a reviewer accepts the
          editor&#39;s invitation to review a manuscript:
        </p>
        {/* list of review steps */}
        <ol className='ml-4 space-y-2 list-decimal list-outside md:ml-4'>
          {/* step one - Research the Journal */}
          <li>
            <h4 className='text-base font-bold md:text-lg font-saira'>
              Research the Journal
            </h4>
            <ul className='ml-2 space-y-3 md:ml-4'>
              <li className='flex items-start gap-1'>
                <CheckedCircle
                  className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                  fill='currentColor'
                />
                <p className='flex-1'>
                  Read through the contents of previously published articles of
                  the journal to get a sense of the journal’s published content
                  and house style to decide whether the paper being reviewed is
                  suitable for the journal or not.
                </p>
              </li>
              <li className='flex items-start gap-1'>
                <CheckedCircle
                  className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                  fill='currentColor'
                />
                <p className='flex-1'>
                  Refer to the Instructions for Authors to check if the paper
                  meets the submission criteria of the journal (e.g. length,
                  scope, and style of presentation).
                </p>
              </li>
            </ul>
          </li>
          {/* start of step two - Evaluate the Manuscript*/}
          <li>
            <h4 className='text-base font-bold md:text-lg font-saira'>
              Evaluate the Manuscript
            </h4>
            <p>Evaluate the manuscript base on the following:</p>
            <ul className='ml-2 space-y-3 md:ml-4'>
              <li className='flex items-start gap-1'>
                <CheckedCircle
                  className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                  fill='currentColor'
                />
                <div className='flex-1'>
                  <h5 className='text-sm font-bold md:text-base font-cairo'>
                    Scope of the Journal
                  </h5>
                  <ul>
                    <li>
                      Is the content of the manuscript within the scope of the
                      Journal?
                    </li>
                  </ul>
                </div>
              </li>
              {/* Evaluate item - originality */}
              <li className='flex items-start gap-1'>
                <CheckedCircle
                  className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                  fill='currentColor'
                />
                <div className='flex-1'>
                  <h5 className='text-sm font-bold md:text-base font-cairo'>
                    Originality
                  </h5>
                  <p>
                    Is the content of the manuscript novel enough to warrant its
                    publication? Will it contribute to existing Knowlegde in the
                    subject area? Does article conform to the journal&#39;s
                    standards?
                  </p>
                </div>
              </li>
              {/* Evaluate item -structure */}
              <li className='flex items-start gap-1'>
                <CheckedCircle
                  className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                  fill='currentColor'
                />
                <div className='flex-1'>
                  <h5 className='text-sm font-bold md:text-base font-cairo'>
                    Structure
                  </h5>
                  <div className='space-y-2'>
                    {/* item - Title */}
                    <div className='ml-2'>
                      <h6 className='font-semibold'>Title</h6>
                      <p>
                        Is the title suitable? Does it clearly describe the
                        mauscript?
                      </p>
                    </div>
                    {/* Item - abstract */}
                    <div className='ml-2'>
                      <h6 className='font-semibold'>Abstract</h6>
                      <p>
                        Does it reflect the content of the manuscript? Are
                        relevant keywords provided?
                      </p>
                    </div>
                    {/* Item - introduction */}
                    <div className='ml-2'>
                      <h6 className='font-semibold'>Introduction</h6>
                      <p>
                        Does it clearly describe the purpose and aims of the
                        research? Is the problem being investigated clearly
                        stated?
                      </p>
                      <p>
                        The introduction should summarize the relevant research
                        to provide context, and explain what findings of other
                        author(s), if any, are being challenged or extended.
                      </p>
                    </div>
                    {/* Item - Method */}
                    <div className='ml-2'>
                      <h6 className='font-semibold'>Method</h6>
                      <p>
                        Does the author clearly and accurately explain how the
                        data was collected? Is the design appropriate for
                        answering the research questions? Is there sufficient
                        information (including the procedures followd and how
                        the prodedures are ordered) to aid replication of the
                        research? If methods utilized are new, are they clearly
                        explained in detail? Was the sampling adequate? Have the
                        equipment and materials been adequately described?
                      </p>
                    </div>
                    {/* Item - Method */}
                    <div className='ml-2'>
                      <h6 className='font-semibold'>Results</h6>
                      <p>
                        Here, the author(s) should explain in words and logical
                        sequence what has been discovered in the research. Has
                        appropriate analysis been carried out? Are the
                        statistics correct?
                      </p>
                      <p>
                        <span className='text-sm font-medium underline capitalize md:text-base font-saira'>
                          Note:
                        </span>
                        &nbsp; Interpretation of results should not be included
                        in this section.
                      </p>
                    </div>
                    {/* Item - Discussion*/}
                    <div className='ml-2'>
                      <h6 className='font-semibold'>Discussion</h6>
                      <p>
                        Are the results and their meaning clearly interpreted?
                        Have the author(s) indicated how the results relate to
                        the expectations and earlier research?
                      </p>
                    </div>
                    {/* Item - Conclusion*/}
                    <div className='ml-2'>
                      <h6 className='font-semibold'>Conclusion</h6>
                      <p>
                        Do the conclusions align with the data? Do the
                        conclusions explain how the research has moved the body
                        of scientific knowledge forward?
                      </p>
                    </div>
                    {/* Item - References*/}
                    <div className='ml-2'>
                      <h6 className='font-semibold'>References</h6>
                      <p>
                        Are the references sufficient, up-to-date, and relevant?
                        Are they properly written following the reference style
                        guide (e.g. APA 7th edition)?
                      </p>
                    </div>
                    {/* Item - Figures and Tables*/}
                    <div className='ml-2'>
                      <h6 className='font-semibold'>Figures and Tables</h6>
                      <p>
                        Are the figures and tables informative enogh to consider
                        them an important part of the write up? Are all the
                        figures and tables necessary? Do the figures describe
                        the data accurately? Are they consistent? Are they easy
                        to interpret and comprehend?
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              {/* Evaluate item - originality */}
              <li className='flex items-start gap-1'>
                <CheckedCircle
                  className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                  fill='currentColor'
                />
                <div className='flex-1'>
                  <h5 className='text-sm font-bold md:text-base font-cairo'>
                    Language
                  </h5>
                  <p>
                    Is the manuscript in Standard English to aid understanding
                    of the reader? If an article is poorly written due to
                    grammatical errors, you do not need to correct the English.
                    You may wish to bring it to the attention of the editor,
                    however.
                  </p>
                </div>
              </li>
            </ul>
          </li>
          {/* end of step two */}
          {/* Evaluate item - originality */}
          <li>
            <h4 className='text-base font-bold md:text-lg font-saira'>
              Provide Detailed Comment
            </h4>
            <div>
              <p>
                Comments are an opportunity to seek clarifications and provide
                author(s) with feedbacks and constructive criticism that can
                improve their submission. Hence, commentaries should be
                courteous, constructive, and clearly presented in a way that is
                easily understood and suitable for transmission to the authors.
                The following are few points to keep in mind while writing your
                comments:
              </p>
              <ul className='ml-2 space-y-3 md:ml-4'>
                <li className='flex items-start gap-1'>
                  <CheckedCircle
                    className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                    fill='currentColor'
                  />
                  <p className='flex-1'>
                    Comments should be deviod of any personal remarks or
                    personal details including your name.
                  </p>
                </li>
                <li className='flex items-start gap-1'>
                  <CheckedCircle
                    className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                    fill='currentColor'
                  />
                  <p className='flex-1'>
                    Suggest how the author can improve clarity, succinctness,
                    and the overall quality of presentation where necessary.
                  </p>
                </li>
                <li className='flex items-start gap-1'>
                  <CheckedCircle
                    className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                    fill='currentColor'
                  />
                  <p className='flex-1'>
                    Confirm whether the subject of the paper justify its length.
                    Where adjustment of the paper length is recommended,
                    indicate specific areas where such adjustment is required.
                  </p>
                </li>
                <li className='flex items-start gap-1'>
                  <CheckedCircle
                    className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                    fill='currentColor'
                  />
                  <p className='flex-1'>
                    A referee may disagree with the author’s opinions, but
                    should allow them to stand, provided they are consistent
                    with the available evidence.
                  </p>
                </li>
                <li className='flex items-start gap-1'>
                  <CheckedCircle
                    className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                    fill='currentColor'
                  />
                  <p className='flex-1'>
                    Provide insight into any observed deficiencies, explaining
                    and supporting your judgment so that both editors and
                    authors are better able to understand the basis of the
                    comments. You should indicate whether your comments are your
                    own opinion or reflected by data.
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <h4 className='text-base font-bold md:text-lg font-saira'>
              Make a Recommendation
            </h4>
            <div>
              <p>
                Once you’ve read the paper and have assessed its quality, you
                need to make a recommendation to the editor regarding
                publication by choosing from one of the following options:
              </p>
              <ul className='ml-2 space-y-3 md:ml-4'>
                <li className='flex items-start gap-1'>
                  <CheckedCircle
                    className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                    fill='currentColor'
                  />
                  <p className='flex-1'>
                    <span className='font-semibold'>Accept submission:</span>
                    &nbsp;this indicates that the submission should be accepted
                    with no or just minor changes (e.g. fixing typos, small
                    changes in wording, clarification of crucial examples).
                  </p>
                </li>
                <li className='flex items-start gap-1'>
                  <CheckedCircle
                    className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                    fill='currentColor'
                  />
                  <p className='flex-1'>
                    <span className='font-semibold'>Minor revision:</span>
                    &nbsp;this indicates that the author needs to make some
                    small changes before publication. Please list the revisions
                    you would recommend the author makes. The changes will be
                    reviewed by the editor and no further peer review will be
                    required.
                  </p>
                </li>
                <li className='flex items-start gap-1'>
                  <CheckedCircle
                    className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                    fill='currentColor'
                  />
                  <p className='flex-1'>
                    <span className='font-semibold'>Major revision:</span>
                    &nbsp;this indicates that substantial changes such as
                    expanded data analysis, widening of the literature review,
                    or rewriting sections of the text are required. The author
                    will need to make the requested changes and go through
                    another round of peer review, possibly with you or with a
                    new reviewer.
                  </p>
                </li>
                <li className='flex items-start gap-1'>
                  <CheckedCircle
                    className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                    fill='currentColor'
                  />
                  <p className='flex-1'>
                    <span className='font-semibold'>Reject:</span>
                    &nbsp;this indicates that the paper is not suitable for
                    publication with this journal or the revisions required are
                    too fundamental for the submission to continue being
                    considered in its current form.
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </section>
      <section className='space-y-3'>
        <h3 className='text-base font-bold capitalize font-saira md:text-xl'>
          Other Important Considerations
        </h3>
        <div className='space-y-3'>
          <ul className='ml-2 space-y-3 md:ml-4'>
            <li className='flex items-start gap-1 md:gap-2'>
              <CheckedCircle
                className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                fill='currentColor'
              />
              <p className='flex-1'>
                All submissions are confidential. Hence the review process
                should be kept confidential, without disclosure of any aspect of
                the manuscript with a third party.
              </p>
            </li>
            <li className='flex items-start gap-1 md:gap-2'>
              <CheckedCircle
                className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                fill='currentColor'
              />
              <p className='flex-1'>
                If you would like to discuss the article with a colleague,
                please seek the permission of the editor first.
              </p>
            </li>
            <li className='flex items-start gap-1 md:gap-2'>
              <CheckedCircle
                className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                fill='currentColor'
              />
              <p className='flex-1'>
                You should not contact the author directly.
              </p>
            </li>
            <li className='flex items-start gap-1 md:gap-2'>
              <CheckedCircle
                className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                fill='currentColor'
              />
              <p className='flex-1'>
                Be aware when you submit your review that any recommendations
                you make will contribute to the final decision made by the
                editor.
              </p>
            </li>
            <li className='flex items-start gap-1 md:gap-2'>
              <CheckedCircle
                className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                fill='currentColor'
              />
              <p className='flex-1'>
                If you suspect that an article is a considerable copy of another
                work, please let the editor know, citing the previous work in as
                much detail as possible.
              </p>
            </li>
            <li className='flex items-start gap-1 md:gap-2'>
              <CheckedCircle
                className='w-[6px] md:w-[10px] text-neutral-700 mt-[6px] md:mt-2'
                fill='currentColor'
              />
              <p className='flex-1'>
                If you suspect the results in an article to be untrue, discuss
                it with the editor.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </MainContainer>
  )
}

export default ReviewersGuide
