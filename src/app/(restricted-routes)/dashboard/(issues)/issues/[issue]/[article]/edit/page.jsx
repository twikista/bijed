import { getArticle } from '@/lib/data'

import EditArticleForm from '@/components/Dashboard/EditArticleForm'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import SideNav from '@/components/Dashboard/SideNav'

async function EditArticle({ params }) {
  const article = await getArticle(params)

  const plainArticleObject = JSON.parse(JSON.stringify(article))
  const initialValue = {
    ...plainArticleObject,
    pdfFile: null,
    keywords: [
      ...article?.keywords.map((i) => {
        return { keyword: i }
      }),
      { keywords: '' },
    ],
  }
  console.log('article:', article)
  console.log('initialValue:', initialValue)
  // console.log('expanded-', keywordsExpanded)
  console.log(params)
  return (
    <main className='relative flex h-screen'>
      <SideNav />
      <DashboardContainer>
        <DashboardWrapper>
          <EditArticleForm initialValue={initialValue} params={params} />
        </DashboardWrapper>
      </DashboardContainer>
    </main>
  )
}

export default EditArticle
