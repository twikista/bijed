import { OpenInNewWindow } from '@/components/Icons'
import MainContainer from '@/components/MainContainer'
import { CheckedCircle } from '@/components/Icons'
import { PageHeading, Paragraph, SectionHeading } from '@/components/Headings'

export const metadata = {
  title: 'Publication Ethics',
  description:
    'Benin International Journal for Entrepreneurship Development is committed to upholding and promoting best ethical practices in the publication of scholarly articles. To this end, BIJED follows the ethical practices and guidlines outlined by the Committee on Publication Ethics (COPE).',
}

function PublicationEthics() {
  return (
    <MainContainer>
      <PageHeading>Publication Ethics</PageHeading>
      <section className='space-y-3'>
        <p className=''>
          Benin International Journal for Entrepreneurship Development is
          committed to upholding and promoting best ethical practices in the
          publication of scholarly articles. To this end, BIJED follows the
          ethical practices and guidlines outlined by the
          <a
            href='https://publicationethics.org/guidance/Guidelines'
            target='_blank'
            className='inline-block underline underline-offset-2 hover:text-blue-500'
          >
            <span>Committee on Publication Ethics (COPE)</span>
            <OpenInNewWindow className='inline-block w-4' />
          </a>
          . These practices and guidelines underscores the expected behaviour of
          the Author, the Chief Editor, the Editorial Board, the Reviewer­­­­­
          and the Publisher (BIJED).
        </p>
        <p>
          <span className='text-base font-bold capitalize md:text-lg font-saira'>
            Note:&nbsp;
          </span>
          The ethical guidelines below were adapted from &nbsp;
          <a
            href='https://www.elsevier.com/about/policies-and-standards/publishing-ethics'
            target='_blank'
            className='underline hover:text-blue-500 underline-offset-2'
          >
            <span>Elsevier&apos;s Publishing Policies</span>
            <OpenInNewWindow className='inline-block w-4' />
          </a>{' '}
          which conforms to &nbsp;
          <a
            href='https://publicationethics.org/guidance/Guidelines'
            target='_blank'
            className='underline hover:text-blue-500 underline-offset-2'
          >
            <span>
              COPE&apos;s Best Practice Guidelines
              <OpenInNewWindow className='inline-block w-4' />
            </span>
          </a>
          &ensp;for Journal Editors
        </p>
      </section>
      <section className='space-y-3'>
        <SectionHeading>Publication Decisions</SectionHeading>
        <ol
          ol
          type='a'
          className='ml-4 space-y-2 list-outside list-lower-alpha md:ml-5'
        >
          <li>
            {/* <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            /> */}
            The editor(s) (Editor-in-Chief and/or Managing Editor) are
            responsible for determining submitted articles that will be
            published. The decisions of the editors shall always be driven by
            the quality/intellectual content of the paper in question, and the
            editorial policies of the journal. /p
          </li>
          <li>
            {/* <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            /> */}
            Editors shall at all times ensure that the editorial policies
            promote and encourage a transaparent and honest editorial process.
          </li>
          <li className=''>
            {/* <CheckedCircle
              className='w-2 md:w-[10px] text-neutral-700 mt-[4px]'
              fill='none'
            /> */}
            Editors shall at no time base their evaluation of manuscripts on the
            race, gender, sexual orientation, religious belief, ethnic origin,
            citizenship, or political philosophy of the authors.
          </li>
        </ol>
      </section>
      <section className='space-y-3'>
        <SectionHeading>Confidentiality</SectionHeading>
        <Paragraph first={true}>
          Manuscript submitted to BIJED will be treated as confidential
          material, and will be disclosed only to individuals (including
          editorial staff, corresponding authors, potential reviewers, actual
          reviewers, and editors) who partake in the processing and preparation
          of the manuscript for possible publication. However, in suspected
          cases of misconduct, a manuscript may be revealed to members of the
          BIJED ethics committee and institutions/organizations that may require
          it for the resolution of the misconduct.
        </Paragraph>
      </section>
      <section className='space-y-3'>
        <SectionHeading>Disclosure and Conflict of Interest</SectionHeading>
        <ol
          type='a'
          className='ml-4 space-y-2 list-outside list-lower-alpha md:ml-5'
        >
          <li>
            Information and ideas contained in unpublished manuscripts submitted
            to the Journal is confidential. Actors in the editorial process
            (including editors and reviewers) who have previleged access to such
            information are prohibited from using them for personal or other
            purposes.
          </li>
          <li>
            Editors and Reviewers must disclose any form of relationship or
            connection they share with any of the authors, companies, or
            institutions connected to a submitted paper that may result in a
            conflict of interest. Where there is conflict of interest, editors
            and reviewers should rescue themselves by asking another member of
            the editorial board or another reviewer to instead review and
            consider the manuscript in question.
          </li>
          <li>
            Editors must at all times ensure that all manuscripts submitted to
            the journal are subjected to all of the journal’s usual procedures,
            and peer review is handled independently of the interest of any
            paries in the edtorial process.
          </li>
          <li>
            All authors should disclose in their manuscript any financial or
            other substantive conflict of interest that might be construed to
            influence the results or interpretation of their manuscript. All
            sources of financial support for the project should be disclosed.
          </li>
        </ol>
      </section>
      <section className='space-y-3'>
        <SectionHeading>Investigation of Misconducts</SectionHeading>
        <ol
          type='a'
          className='ml-4 space-y-2 list-outside list-lower-alpha md:ml-5'
        >
          <li>
            Any action, behaviour or conduct (including the violation of any
            part of BIJED editorial policy, journal policies, publication
            ethics, and any applicable guidelines/policies specified by BIJED)
            will constitue misconduct.
          </li>
          <li>
            The editor (in collaboration with the publisher) should take
            apropriate measures to safeguard the integrity of the journal in
            cases of ethical compalaint about a submitted manuscript or
            published article.
          </li>
          <li>
            All cases of ethical complaints will be investigated and where there
            are convincing evidence of misconduct, appropriate actions
            (including the prompt publication of a correction, retraction,
            expression of concern, or other correction as may be relevant) will
            be taken. Every reported act of unethical publishing behavior must
            be looked into, even if it is discovered years after publication.
          </li>
        </ol>
      </section>
      <section className='space-y-3'>
        <SectionHeading>Duties of Reviewers</SectionHeading>
        <Paragraph first={true}>
          These guidelines are adopted from &nbsp;
          <a
            href='https://www.elsevier.com/about/policies-and-standards/publishing-ethics'
            target='_blank'
            className='underline hover:text-blue-500 underline-offset-2'
          >
            <span>Elsevier&apos;s Publishing Policies</span>
            <OpenInNewWindow className='inline-block w-4' />
          </a>{' '}
          which conforms to &nbsp;
          <a
            href='https://publicationethics.org/guidance/Guidelines'
            target='_blank'
            className='underline hover:text-blue-500 underline-offset-2'
          >
            <span>COPE&apos;s Best Practice Guidelines</span>
            <OpenInNewWindow className='inline-block w-4' />
          </a>
          &nbsp; for Journal Editors
        </Paragraph>
        <ul className='space-y-5'>
          <li>
            <h4 className='text-base font-semibold md:text-lg font-saira'>
              Contribution to editorial decisions
            </h4>
            <div className='space-y-3'>
              <p>
                Peer review assists the editor in making editorial decisions and
                through the editorial communications with the author may also
                assist the author in improving the paper. Peer review is an
                essential component of formal scholarly communication, and lies
                at the heart of the scientific method. In addition to the
                specific ethics-related duties described below, reviewers are
                asked generally to treat authors and their work as they would
                like to be treated themselves and to observe good reviewing
                etiquette.
              </p>
              <p>
                Any selected referee who feels unqualified to review the
                research reported in a manuscript or knows that its prompt
                review will be impossible should notify the editor and decline
                to participate in the review process.
              </p>
            </div>
          </li>
          <li>
            <h4 className='text-base font-semibold md:text-lg font-saira'>
              Alertness to ethical issues
            </h4>
            <div className='space-y-3'>
              <p>
                A reviewer should be alert to potential ethical issues in the
                paper and should bring these to the attention of the editor,
                including any substantial similarity or overlap between the
                manuscript under consideration and any other published paper of
                which the reviewer has personal knowledge. Any statement that an
                observation, derivation, or argument had been previously
                reported should be accompanied by the relevant citation.
              </p>
            </div>
          </li>
          <li>
            <h4 className='text-base font-semibold md:text-lg font-saira'>
              Standards of objectivity & competing interests
            </h4>
            <div className='space-y-3'>
              <p>
                Reviews should be conducted objectively. Reviewers should be
                aware of any personal bias they may have and take this into
                account when reviewing a paper. Personal criticism of the author
                is inappropriate. Referees should express their views clearly
                with supporting arguments.
              </p>
              <p>
                Reviewers should consult the Editor before agreeing to review a
                paper where they have potential conflicts of interest resulting
                from competitive, collaborative, or other relationships or
                connections with any of the authors, companies, or institutions
                connected to the papers.
              </p>
              <p>
                If a reviewer suggests that an author includes citations to the
                reviewer’s (or their associates’) work, this must be for genuine
                scientific reasons and not with the intention of increasing the
                reviewer’s citation count or enhancing the visibility of their
                work (or that of their associates).
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className='space-y-3'>
        <h3 className='text-base font-bold capitalize font-saira md:text-xl'>
          Duties of Authors
        </h3>

        <ul className='space-y-5'>
          <li>
            <h4 className='text-base font-semibold md:text-lg font-saira'>
              Reporting standards
            </h4>
            <div className='space-y-3'>
              <p>
                Authors of reports of original research should present an
                accurate account of the work performed as well as an objective
                discussion of its significance. Underlying data should be
                represented accurately in the paper. A paper should contain
                sufficient detail and references to permit others to replicate
                the work. Fraudulent or knowingly inaccurate statements
                constitute unethical behaviour and are unacceptable.
              </p>
              <p>
                Review and professional publication articles should also be
                accurate and objective, and editorial ‘opinion’ works should be
                clearly identified as such.
              </p>
            </div>
          </li>
          <li>
            <h4 className='text-base font-semibold md:text-lg font-saira'>
              Data access and retention
            </h4>
            <div className='space-y-3'>
              <p>
                Authors may be asked to provide the research data supporting
                their paper for editorial review and/or to comply with the open
                data requirements of the journal. Authors should be prepared to
                provide public access to such data, if practicable, and should
                be prepared to retain such data for a reasonable number of years
                after publication. Authors may refer to their journal’s Guide
                for Authors for further details.
              </p>
            </div>
          </li>
          <li>
            <h4 className='text-base font-semibold md:text-lg font-saira'>
              Originality and acknowledgement of sources
            </h4>
            <div className='space-y-3'>
              <p>
                The authors should ensure that they have written entirely
                original works, and if the authors have used the work and/or
                words of others, that this has been appropriately cited or
                quoted and permission has been obtained where necessary.
              </p>
              <p>
                Proper acknowledgment of the work of others must always be
                given. Authors should cite publications that have influenced the
                reported work and that give the work appropriate context within
                the larger scholarly record. Information obtained privately, as
                in conversation, correspondence, or discussion with third
                parties, must not be used or reported without explicit, written
                permission from the source.
              </p>
              <p>
                Plagiarism takes many forms, from ‘passing off’ another’s paper
                as the author’s own paper, to copying or paraphrasing
                substantial parts of another’s paper (without attribution), to
                claiming results from research conducted by others. Plagiarism
                in all its forms constitutes unethical behaviour and is
                unacceptable.
              </p>
            </div>
          </li>
          <li>
            <h4 className='text-base font-semibold md:text-lg font-saira'>
              Multiple, redundant or concurrent publication
            </h4>
            <div className='space-y-3'>
              <p>
                An author should not in general publish manuscripts describing
                essentially the same research in more than one journal of
                primary publication. Submitting the same manuscript to more than
                one journal concurrently constitutes unethical behaviour and is
                unacceptable.
              </p>
              <p>
                In general, an author should not submit for consideration in
                another journal a paper that has been published previously,
                except in the form of an abstract or as part of a published
                lecture or academic thesis or as an electronic preprint.
              </p>
            </div>
          </li>
          <li>
            <h4 className='text-base font-semibold md:text-lg font-saira'>
              Authorship of the paper
            </h4>
            <div className='space-y-3'>
              <p>
                Authorship should be limited to those who have made a
                significant contribution to the conception, design, execution,
                or interpretation of the reported study. All those who have made
                substantial contributions should be listed as co-authors.
              </p>
              <p>
                Where there are others who have participated in certain
                substantive aspects of the paper (e.g. language editing or
                medical writing), they should be recognised in the
                acknowledgements section.
              </p>
              <p>
                The corresponding author should ensure that all appropriate
                co-authors and no inappropriate co-authors are included on the
                paper, and that all co-authors have seen and approved the final
                version of the paper and have agreed to its submission for
                publication.
              </p>
              <p>
                Authors are expected to consider carefully the list and order of
                authors before submitting their manuscript and provide the
                definitive list of authors at the time of the original
                submission. Only in exceptional circumstances will the Editor
                consider (at their discretion) the addition, deletion or
                rearrangement of authors after the manuscript has been submitted
                and the author must clearly flag any such request to the Editor.
                All authors must agree with any such addition, removal or
                rearrangement.
              </p>
              <p>
                Authors take collective responsibility for the work. Each
                individual author is accountable for ensuring that questions
                related to the accuracy or integrity of any part of the work are
                appropriately investigated and resolved.
              </p>
            </div>
          </li>
          <li>
            <h4 className='text-base font-semibold md:text-lg font-saira'>
              Notification of fundamental errors
            </h4>
            <div className='space-y-3'>
              <p>
                When an author discovers a significant error or inaccuracy in
                their own published work, it is the author’s obligation to
                promptly notify the journal editor or publisher and cooperate
                with the editor to retract or correct the paper if deemed
                necessary by the editor. If the editor or the publisher learn
                from a third party that a published work contains an error, it
                is the obligation of the author to cooperate with the editor,
                including providing evidence to the editor where requested.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </MainContainer>
  )
}

export default PublicationEthics
