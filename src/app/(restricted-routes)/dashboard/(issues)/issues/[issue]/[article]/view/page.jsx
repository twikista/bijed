import dynamic from 'next/dynamic'
import { connectDB } from '@/lib/mongoose/config'
import { Article } from '@/lib/mongoose/models'

const PDFViewer = dynamic(
  () => import('../../../../../../../../components/pdfviewer'),
  { ssr: false }
)

const getArticle = async (slug) => {
  connectDB()
  const article = await Article.findOne({
    ref: `${slug.issue}`,
    slug: `${slug.article}`,
  })

  return article
}

async function ViewPDF({ params }) {
  console.log('yaaaaaayyyy!')
  const article = await getArticle(params)
  // let x = ''
  // console.log(article.pdfUrl)
  // const response = await fetch(article?.pdfUrl, { next: { revalidate: 0 } })
  // // console.log('reeess', response.data)
  // const blob = await response.blob()
  // // const fileURl = URL.createObjectURL(file)
  // // console.log('fileURl-----', blob)
  // const url = await blobToURL(blob)

  return (
    <div className='flex flex-col min-h-screen bg-neutral-600'>
      <PDFViewer filePath={article.pdfUrl} params={params} />
    </div>
  )
}

export default ViewPDF
