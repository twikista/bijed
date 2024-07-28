import MainContainer from '@/components/MainContainer'
import { connectDB } from '@/lib/mongoose/config'
import { Article } from '@/lib/mongoose/models'
import Image from 'next/image'
import Link from 'next/link'
import orcidid from '@/../public/orcidid.png'
import googleScholar from '@/../public/google-scholar-icon.png'
import pdf from '@/../public/pdf-download.png'
import ccLogo from '@/../public/by.png'
import { getArticlesInIssue } from '@/lib/data'
import PDFViewer from '@/components/pdfviewer'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
  const joinKeywords = (arr) => {
    return arr.join(', ')
  }
  console.log(params)
  const article = await getArticle(params)
  // console.log(keyword(article.keywords))
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center flex-grow w-full h-full'>
        <MainContainer>
          <div>
            <h2 className='mb-3 text-base font-bold sm:text-2xl'>
              {article.title}
            </h2>
            <section className='flex flex-col py-2 space-y-3 border-t border-b sm:space-y-0 sm:flex-row border-neutral-300'>
              <div className='flex-1'>
                <h5 className='font-semibold'>Author(s):</h5>
                <div className='space-y-[5px]'>
                  {article.authors.map(
                    ({ name, affliation, orchidId, _id }) => (
                      <div key={_id} className=''>
                        <div className='flex items-center space-x-1'>
                          <p className='font-medium'>{name}</p>
                          {orchidId && (
                            <a href='https://orcid.org/' target='_blank'>
                              <Image
                                src={orcidid}
                                alt='orcid id logo'
                                width={16}
                                height={16}
                              />
                            </a>
                          )}
                          {orchidId && (
                            <a href='https://orcid.org/' target='_blank'>
                              <Image
                                src={googleScholar}
                                alt='orcid id logo'
                                width={16}
                                height={16}
                              />
                            </a>
                          )}
                        </div>
                        <p className='text-neutral-400'>{affliation}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className='flex flex-col w-[250px]'>
                <h5 className='font-semibold'>Article Info:</h5>
                <div className='space-y-[5px] text-neutral-500'>
                  <div>
                    <h5 className='font-semibold text-neutral-400'>
                      Published
                    </h5>
                    <p>{new Date(article.publishDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h5 className='font-semibold text-neutral-400'>Issue</h5>
                    <p>
                      <Link href={`/archive/${article.ref}`}>
                        {`Vol. ${article.volume} No. ${
                          article.issue
                        } (${new Date(article.publishDate).getFullYear()}) `}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <div className='py-2'>
              <p>
                <span className='font-semibold'>Keywords:</span>
                <span className='capitalize'>{` ${joinKeywords(
                  article.keywords
                )}`}</span>
              </p>
            </div>
            <section className='mt-5 space-y-10'>
              <div className='space-y-3'>
                <h4 className='font-bold'>Abstract</h4>
                <p className='text-justify'>{article.abstract}</p>
              </div>
              <div>
                <a
                  href={article.pdfUrl}
                  download
                  target='_blank'
                  rel='noreferrer'
                  className='block font-bold text-primary px-3 py-2 border border-primary sm:w-[160px] rounded-md hover:bg-primary hover:text-white transition-colors  text-center'
                >
                  {/* <Image src={pdf} alt='download pdf icon' width={25} /> */}
                  DOWNLOAD PDF
                </a>
                <Link
                  href={`${process.env.NEXT_URL}/archive/${params.issue}/${params.article}/view`}
                  className='block font-bold text-primary px-3 py-2 border border-primary sm:w-[160px] rounded-md hover:bg-primary hover:text-white transition-colors  text-center'
                >
                  view pdf
                </Link>
              </div>
              <div>
                <a
                  href='https://creativecommons.org/licenses/by/4.0/'
                  target='_blank'
                >
                  <Image
                    src={ccLogo}
                    alt='creative commons logo'
                    width={500}
                    height={500}
                    className='w-20 sm:w-[100px]'
                  />
                </a>
                <div className=''>
                  This work is licensed under a &nbsp;
                  <a
                    href='https://creativecommons.org/licenses/by/4.0/'
                    target='_blank'
                    className='text-blue-500 underline hover:text-blue-400'
                  >
                    Creative Commons Attribution 4.0 International License.
                  </a>
                </div>
              </div>
            </section>
          </div>
        </MainContainer>
      </div>
      <Footer />
    </div>
  )
}

export default ArticlePage
