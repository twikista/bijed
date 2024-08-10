import MainContainer from '@/components/MainContainer'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticle, getArticlesInIssue } from '@/lib/data'
import ArticleOverview from '@/components/ArticleOverview'

export async function generateStaticParams(params) {
  const articlesInCurrentissue = await getArticlesInIssue(params.issue, false)
  return articlesInCurrentissue.map((article) => article.ref)
}

async function ArticlePage({ params }) {
  const {
    slug: [issue, article],
  } = params
  const currentArticle = await getArticle({ issue, article })
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center flex-grow w-full h-full'>
        <MainContainer>
          <ArticleOverview
            currentArticle={currentArticle}
            currentIssue={true}
          />
        </MainContainer>
      </div>
      <Footer />
    </div>
  )
}

export default ArticlePage
