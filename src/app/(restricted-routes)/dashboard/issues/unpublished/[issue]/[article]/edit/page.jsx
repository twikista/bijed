import { getArticle } from '@/lib/data'

import ArticleForm from '@/components/Dashboard/ArticleForm'
import NewArticleForm from '@/components/Dashboard/NewArticleForm'
import EditArticleForm from '@/components/Dashboard/EditArticleForm'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'

async function EditArticle({ params }) {
  const article = await getArticle(params)
  // const keywords = article?.keywords.map((i) => {
  //   return { keyword: i.keyword }
  // })
  // const keywordsExpanded = keywords
  // keywordsExpanded.push()
  // article.keywords = keywords

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
    <DashboardContainer>
      <DashboardWrapper>
        <EditArticleForm initialValue={initialValue} params={params} />
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default EditArticle
