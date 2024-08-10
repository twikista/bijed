import MainContainer from '@/components/MainContainer'
import { connectDB } from '@/lib/mongoose/config'
import { Article } from '@/lib/mongoose/models'
import Image from 'next/image'
import Link from 'next/link'
import orcidid from '@/../public/orcidid.png'
import googleScholar from '@/../public/google-scholar-icon.png'
import ccLogo from '@/../public/by.png'
import pdf from '@/../public/pdf-download.png'
import { getArticlesInIssue } from '@/lib/data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { dateHelperFunction } from '@/lib/util'
import Authors from '@/components/Authors'
import ArticleKeywords from '@/components/ArticleKeywords'
import Abstract from '@/components/Abstract'
import ArticleOverview from '@/components/ArticleOverview'

const getArticle = async (slug) => {
  connectDB()
  const article = await Article.findOne({
    ref: `${slug.issue}`,
    slug: `${slug.article}`,
  })
  console.log(`slug:${slug}`)
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
