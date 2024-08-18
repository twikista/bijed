import Link from 'next/link'
import Image from 'next/image'
import { auth } from '../../../../../../../../auth'

import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import { getArticle } from '@/lib/data'
import { joinKeywords } from '@/lib/util'
import { deleteArticle } from '@/lib/actions'

import ccLogo from '@/../public/by.png'
import {
  EdiButton,
  DeleteButton,
  EditButton,
} from '@/components/Dashboard/Buttons'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import SideNav from '@/components/Dashboard/SideNav'
import Authors from '@/components/Authors'
import ArticleInfo from '@/components/ArticleInfo'
import { PDFIcon } from '@/components/Icons'
import MobileNav from '@/components/Dashboard/MobileNav'

async function Article({ params }) {
  const { user } = await auth()
  const article = await getArticle(params)

  return (
    <main className='relative flex h-screen'>
      <SideNav />
      <MobileNav />
      <DashboardContainer>
        <DashboardWrapper>
          <div>
            <div className='flex flex-col items-center justify-between'>
              <h2 className='mb-1 text-base font-bold sm:text-2xl'>
                {article.title}
              </h2>
            </div>
            <section className='flex flex-col py-2 space-y-3 border-t border-b sm:space-y-0 sm:flex-row border-neutral-300'>
              <div className='flex-1'>
                <h5 className='font-semibold'>Author(s):</h5>
                <Authors authors={article.authors} withAffliation={true} />
              </div>
              <ArticleInfo article={article} />
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
              <div className='flex flex-col justify-center gap-2 pt-2 border-t border-neutral-300'>
                <Link
                  href={`/dashboard/issues/${params.issue}/${params.article}/view`}
                  className='flex justify-center w-full gap-2 px-3 py-2 font-medium text-center text-white transition-colors border md:max-w-[400px] md:mx-auto rounded-md hover:bg-[#ac3dba] hover:border-[#ac3dba] bg-primary'
                >
                  <span>View PDF</span>
                  <PDFIcon className='w-5 text-' />
                </Link>
                {user.role === 'business manager' && !article.published && (
                  <div className='flex flex-col gap-2 mb-3'>
                    <EditButton
                      href={`/dashboard/issues/${params.issue}/${params.article}/edit`}
                      label='edit Article'
                    />
                    <DeleteButton
                      variant='primary'
                      id={String(article._id)}
                      action={deleteArticle}
                      label='Delete Article'
                    />
                  </div>
                )}
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
    </main>
  )
}

export default Article
