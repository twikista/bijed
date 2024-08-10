import MainContainer from '@/components/MainContainer'
import { connectDB } from '@/lib/mongoose/config'
import { Article } from '@/lib/mongoose/models'
import { getArticlesInIssue } from '@/lib/data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleOverview from '@/components/ArticleOverview'

const getArticle = async (slug) => {
  connectDB()
  const article = await Article.findOne({
    ref: `${slug.issue}`,
    slug: `${slug.article}`,
  })
  return article
}

export async function generateStaticParams({ params }) {
  const articlesInIssue = await getArticlesInIssue(params.issue)
  return articlesInIssue.map((article) => article.ref)
}

export async function generateMetadata({ params }) {
  const article = await getArticle(params)
  return {
    title: article.title,
  }
}

async function ArticlePage({ params }) {
  const article = await getArticle(params)

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center flex-grow w-full h-full'>
        <MainContainer>
          <ArticleOverview currentArticle={article} />
        </MainContainer>
      </div>
      <Footer />
    </div>
  )
}

export default ArticlePage
