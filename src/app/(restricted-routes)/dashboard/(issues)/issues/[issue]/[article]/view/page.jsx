import dynamic from 'next/dynamic';
// import { connectDB } from '@/lib/mongoose/config';
// import { Article } from '@/lib/mongoose/models';
import PDFViewerV2 from '@/components/PDFViewerV2';
import { getArticle } from '@/lib/actionsV2/articles';

// const PDFViewer = dynamic(
//   () => import('../../../../../../../../components/pdfviewer'),
//   { ssr: false }
// )

// const getArticle = async (slug) => {
//   connectDB()
//   const article = await Article.findOne({
//     ref: `${slug.issue}`,
//     slug: `${slug.article}`,
//   })

//   return article
// }

// async function ViewPDF({ params }) {
//   const article = await getArticle(params)
//   return (
//     <div className='flex flex-col min-h-screen bg-neutral-600'>
//       <PDFViewer filePath={article.pdfUrl} params={params} />
//     </div>
//   )
// }

async function ViewPDF({ params }) {
  try {
    const param = await params;
    const article = await getArticle(param);

    if (!article) {
      return (
        <div className='flex flex-col items-center justify-center min-h-screen text-white bg-neutral-600'>
          <h1 className='text-2xl font-bold'>Article not found</h1>
        </div>
      );
    }

    return (
      <div className='flex flex-col min-h-screen bg-neutral-600'>
        <PDFViewerV2
          filePath={article.pdfUrl.split('/').at(-1)}
          params={param}
        />
      </div>
    );
  } catch (error) {
    // Error handling for any uncaught exceptions
    console.error('Error in ViewPDF component:', error);
    return (
      <div className='flex flex-col items-center justify-center min-h-screen text-white bg-neutral-600'>
        <h1 className='text-2xl font-bold'>Error loading article</h1>
        <p>Please try again later.</p>
      </div>
    );
  }
}

export default ViewPDF;
