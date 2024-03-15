import { getArticle } from '@/lib/data'

import ArticleForm from '@/components/Dashboard/ArticleForm'

async function EditArticle({ params }) {
  const article = await getArticle(params)
  const plainArticleObject = JSON.parse(JSON.stringify(article))
  const initialValue = { ...plainArticleObject, pdfFile: null }
  console.log(article)

  console.log(params)
  return (
    <div>
      <ArticleForm initialValue={initialValue} params={params} />
    </div>
  )
}

export default EditArticle
