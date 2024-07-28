import MainContainer from '@/components/MainContainer'
import { connectDB } from '@/lib/mongoose/config'
import { Article } from '@/lib/mongoose/models'
import Image from 'next/image'
import Link from 'next/link'
import orcidid from '@/../public/orcidid.png'
import googleScholar from '@/../public/google-scholar-icon.png'
import pdf from '@/../public/pdf-download.png'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export async function generateStaticParams(params) {
  connectDB()
  const articlesInCurrentissue = await Article.find({
    ref: params.issue,
    published: true,
  })
  return articlesInCurrentissue.map((article) => article.ref)
  //use context api to get data to generate the params
}

const getArticle = async (slug) => {
  console.log('slug+++++++++', slug)
  connectDB()
  const article = await Article.findOne({
    ref: `${slug.issue}`,
    slug: `${slug.article}`,
  })
  console.log(article)
  return article
}

async function ArticlePage({ params }) {
  const joinKeywords = (arr) => {
    const joinedKeywords = arr && arr.join(', ')
    return joinedKeywords
  }
  console.log('params=======>', params)
  const {
    slug: [issue, article],
  } = params
  console.log(issue, article)
  const currentArticle = await getArticle({ issue, article })
  // console.log(keyword(article.keywords))
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center flex-grow w-full h-full'>
        <MainContainer>
          <div>
            <h2 className='mb-3 text-base font-bold sm:text-2xl'>
              {currentArticle?.title}
            </h2>
            <section className='flex flex-col py-2 space-y-3 border-t border-b sm:space-y-0 sm:flex-row border-neutral-300'>
              <div className='flex-1'>
                <h5 className='font-semibold'>Author(s):</h5>
                <div className='space-y-[5px]'>
                  {currentArticle?.authors.map(
                    ({ name, affliation, orchidId, _id }) => (
                      <div key={_id} className=''>
                        <div className='flex items-center space-x-1'>
                          <p className='font-semibold'>{name}</p>
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
                    <p>
                      {new Date(
                        currentArticle?.publishDate
                      ).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <h5 className='font-semibold text-neutral-400'>Issue</h5>
                    <p>
                      <Link href={`/archive/${currentArticle?.ref}`}>
                        {`Vol. ${currentArticle?.volume} No. ${
                          currentArticle?.issue
                        } (${new Date(
                          currentArticle?.publishDate
                        ).getFullYear()}) pp. ${currentArticle?.slug}`}
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
                  currentArticle?.keywords
                )}`}</span>
              </p>
            </div>
            <section className='mt-5 space-y-10'>
              <div className='space-y-3'>
                <h4 className='font-bold'>Abstract</h4>
                <p className='text-justify'>{currentArticle?.abstract}</p>
              </div>

              <a
                href={currentArticle?.pdfUrl}
                download
                target='_blank'
                rel='noreferrer'
                className='block font-bold text-primary px-3 py-2 border border-primary sm:w-[160px] rounded-md hover:bg-primary hover:text-white transition-colors mt-[250px] text-center'
              >
                {/* <Image src={pdf} alt='download pdf icon' width={25} /> */}
                DOWNLOAD PDF
              </a>
            </section>
          </div>
        </MainContainer>
      </div>
      <Footer />
    </div>
  )
}

export default ArticlePage
