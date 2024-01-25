import MainContainer from '@/components/MainContainer'

function PeerReview() {
  return (
    <MainContainer>
      <h2 className='text-2xl font-bold underline capitalize font-saira'>
        Peer Review
      </h2>
      <div className='space-y-3'>
        <p>
          Peer Review provides a collaborative process which allows for an
          objective evaluation of submitted manuscripts/articles. It provides
          authors with feedback to better improve their work, allows the editor
          to critically assess a paper&339;s suitability for publication, and
          help to ensure published research is accurate, trustworthy, and meets
          the highest standards of research within a given field. Thus, Peer
          Review is one of the most critical elements of scholarly publishing.
        </p>
        <p>
          BIJED places a high premiuim on an effective, unbiased, and
          independent review process that ensures high quality research outputs.
          Hence, BIJED uses a double-blind peer review approach which ensures
          that authors remain anonymous to the reviewers throughout the
          peer-review process and vice versa. This approach eliminates any form
          of bias that could compromise the quality of feedback received by the
          editorial team.
        </p>
      </div>
    </MainContainer>
  )
}

export default PeerReview
