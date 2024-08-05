// import UploadInput from '@/components/UploadInput'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import ArticleForm from '@/components/Dashboard/ArticleForm'
import NewArticleForm from '@/components/Dashboard/NewArticleForm'
import { getIssue } from '@/lib/data'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import SideNav from '@/components/Dashboard/SideNav'

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
  console.log('pararam: ', params)
  const articleIssue = await getIssue(params.issue)
  const volume = articleIssue?.volume
  const issue = articleIssue?.issueNumber
  return (
    <main className='relative flex h-screen'>
      <SideNav />
      <DashboardContainer>
        <DashboardWrapper>
          <NewArticleForm
            initialValue={{ ...initialState, volume, issue }}
            params={{ ...params, published: articleIssue?.published }}
          />
        </DashboardWrapper>
      </DashboardContainer>
    </main>
  )
}

export default AddArticle
