import Image from 'next/image'
import Link from 'next/link'
import ccLogo from '@/../public/by.png'
import Authors from '@/components/Authors'
import { PDFIcon } from '@/components/Icons'
import ArticleInfo from './ArticleInfo'

function ArticleOverview({ currentArticle, currentIssue = false }) {
  const joinKeywords = (arr) => {
    return arr.join(', ')
  }
  return (
    <div>
      <h2 className='mb-3 text-base font-bold sm:text-2xl'>
        {currentArticle?.title}
      </h2>
      <section className='flex flex-col py-2 space-y-3 border-t border-b sm:space-y-0 sm:flex-row border-neutral-300'>
        <div className='flex-1'>
          <h5 className='font-semibold'>Author(s):</h5>
          <Authors authors={currentArticle.authors} withAffliation={true} />
        </div>
        <ArticleInfo article={currentArticle} />
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
        <div className='flex justify-center'>
          <Link
            href={
              currentIssue
                ? `/archive/${currentArticle.ref}/${currentArticle.slug}/view?ref=current`
                : `/archive/${currentArticle.ref}/${currentArticle.slug}/view`
            }
            className='flex justify-center gap-2 font-bold hover:text-primary px-3 py-2 border hover:border-primary sm:w-[240px] rounded-md bg-primary hover:bg-white text-white transition-colors  text-center'
          >
            <span>View PDF</span>
            <PDFIcon className='w-5 text-' />
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
  )
}

export default ArticleOverview
