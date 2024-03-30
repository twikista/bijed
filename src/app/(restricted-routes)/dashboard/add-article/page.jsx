// import UploadInput from '@/components/UploadInput'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import ArticleForm from '@/components/Dashboard/ArticleForm'

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
      {/* <UploadInput /> */}
      <ArticleForm initialValue={initialState} />
    </DashboardContainer>
  )
}

export default AddArticle
