// import UploadInput from '@/components/UploadInput'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import ArticleForm from '@/components/Dashboard/ArticleForm'
import { getIssue } from '@/lib/data'

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

async function AddArticle({ params }) {
  const articleIssue = await getIssue(params.issue)
  const volume = articleIssue.volume
  const issue = articleIssue.issueNumber
  return (
    <DashboardContainer>
      {/* <UploadInput /> */}
      <ArticleForm
        initialValue={{ ...initialState, volume, issue }}
        params={{ ...params, published: articleIssue.published }}
      />
    </DashboardContainer>
  )
}

export default AddArticle
