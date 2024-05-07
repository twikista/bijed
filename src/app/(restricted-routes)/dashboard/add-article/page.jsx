// import UploadInput from '@/components/UploadInput'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import ArticleForm from '@/components/Dashboard/ArticleForm'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'

const initialState = {
  title: '',
  authors: [{ name: '', affliation: '', orchidId: '' }],
  volume: '',
  issue: '',
  startPage: '',
  endPage: '',
  abstract: '',
  keywords: [],
  pdfFile: null,
}

function AddArticle() {
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <ArticleForm initialValue={initialState} />
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default AddArticle
