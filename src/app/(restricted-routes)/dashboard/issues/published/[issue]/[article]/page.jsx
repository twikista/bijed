import Link from 'next/link'
import Image from 'next/image'

import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import { getArticle } from '@/lib/data'
import { articleFileName, joinKeywords } from '@/lib/util'
import { deleteArticle } from '@/lib/actions'

import orcidid from '@/../public/orcidid.png'
import googleScholar from '@/../public/google-scholar-icon.png'
import ccLogo from '@/../public/by.png'

import { EditButton, DeleteButton } from '@/components/Dashboard/Buttons'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'

async function Article({ params }) {
  const article = await getArticle(params)

  return (
    <DashboardContainer>
      <DashboardWrapper>
        <div>
          <div className='flex items-center justify-between'>
            <h2 className='mb-1 text-base font-bold sm:text-2xl'>
              {article.title}
            </h2>
            {/* <div className='flex gap-6 mb-3'>
              <EditButton
                href={`/dashboard/issues/${params.issue}/${params.article}/edit`}
                label='edit'
              />
              <DeleteButton
                variant='primary'
                id={String(article._id)}
                action={deleteArticle}
              />
            </div> */}
          </div>
          <section className='flex flex-col py-2 space-y-3 border-t border-b sm:space-y-0 sm:flex-row border-neutral-300'>
            <div className='flex-1'>
              <div className='space-y-[5px]'>
                {article.authors.map(({ name, affliation, orchidId, _id }) => (
                  <div key={_id} className=''>
                    <div className='flex items-center space-x-1'>
                      <p className='font-semibold'>{name}</p>
                      {/* {orchidId && (
                        <a href='https://orcid.org/' target='_blank'>
                          <Image
                            src={orcidid}
                            alt='orcid id logo'
                            width={16}
                            height={16}
                          />
                        </a>
                      )} */}
                      {/* {orchidId && (
                        <a href='https://orcid.org/' target='_blank'>
                          <Image
                            src={googleScholar}
                            alt='orcid id logo'
                            width={16}
                            height={16}
                          />
                        </a>
                      )} */}
                    </div>
                    <p className='text-sm text-neutral-500'>{affliation}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex flex-col w-[250px]'>
              <div className='space-y-[5px] text-neutral-500'>
                <div>
                  <h5 className='font-medium text-neutral-500'>
                    Date Published:
                  </h5>
                  <p className='text-sm text-gray-500'>
                    {new Intl.DateTimeFormat('en-GB').format(
                      article.publishDate
                    )}
                  </p>
                </div>
                <div>
                  <h5 className='font-medium text-neutral-500'>Issue:</h5>
                  <p>
                    <Link
                      href={`/archive/${article.ref}`}
                      className='text-sm text-gray-500'
                    >
                      {`Vol. ${article.volume} No. ${article.issue} (${new Date(
                        article.publishDate
                      ).getFullYear()}) pp. ${article.slug}`}
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
                download={articleFileName(article)}
                target='_blank'
                rel='noreferrer'
                className='block font-bold text-[#800080] px-3 py-2 border border-[#800080] sm:w-[160px] rounded-md hover:bg-[#800080] hover:text-white transition-colors  text-center'
              >
                {/* <Image src={pdf} alt='download pdf icon' width={25} /> */}
                DOWNLOAD PDF
              </a>
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
                  className='text-blue-500 underline hover:text-blue-600'
                >
                  Creative Commons Attribution 4.0 International License.
                </a>
              </div>
            </div>
          </section>
        </div>
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default Article
