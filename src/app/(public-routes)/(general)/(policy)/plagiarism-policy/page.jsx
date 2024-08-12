import { PageHeading } from '@/components/Headings'
import MainContainer from '@/components/MainContainer'

export const metadata = {
  title: 'Plagiarism Policy',
  description:
    'BIJED consider plagiarism and other forms of copyright infringements as serious academic offenses. Hence, This journal is committed to ensuring that articles approved for publication are free from copyright issues.',
}

function PlagiarismPolicy() {
  return (
    <MainContainer>
      <PageHeading>Plagiarism policy</PageHeading>
      <div className='space-y-3'>
        <p>
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
      </div>
    </MainContainer>
  )
}

export default PlagiarismPolicy
