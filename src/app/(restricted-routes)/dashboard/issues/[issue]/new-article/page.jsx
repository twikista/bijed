// import UploadInput from '@/components/UploadInput'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import ArticleForm from '@/components/Dashboard/ArticleForm'
import NewArticleForm from '@/components/Dashboard/NewArticleForm'
import { getIssue } from '@/lib/data'

const initialState = {
  title: '',
  authors: [{ name: '', affliation: '', orchidId: '' }],
  volume: '',
  issue: '',
  startPage: null,
  endPage: null,
  abstract: '',
  keywords: [{ keyword: '' }],
  pdfFile: '',
}

async function AddArticle({ params }) {
  const articleIssue = await getIssue(params.issue)
  const volume = articleIssue?.volume
  const issue = articleIssue?.issueNumber
  return (
    <DashboardContainer>
      {/* <UploadInput /> */}
      <NewArticleForm
        initialValue={{ ...initialState, volume, issue }}
        params={{ ...params, published: articleIssue?.published }}
      />
    </DashboardContainer>
  )
}

export default AddArticle
