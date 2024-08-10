import Image from 'next/image'
import Link from 'next/link'
import ccLogo from '@/../public/by.png'
import { dateHelperFunction } from '@/lib/util'
import Authors from '@/components/Authors'
import { PDFIcon } from '@/components/Icons'

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
        <div className='flex flex-col w-[250px]'>
          <h5 className='font-semibold'>Article Info:</h5>
          <div className='space-y-[5px] text-neutral-500'>
            <div>
              <h5 className='font-medium text-neutral-500'>Publish date</h5>
              <p>{dateHelperFunction(currentArticle?.publishDate)}</p>
            </div>
            <div>
              <h5 className='font-medium text-neutral-500'>Issue</h5>
              <p>
                <Link href={`/archive/${currentArticle?.ref}`}>
                  {`Vol. ${currentArticle?.volume} No. ${currentArticle?.issue}, pp. ${currentArticle?.slug}`}
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
        <div className='flex justify-center'>
          <Link
            href={`${process.env.NEXT_URL}/archive/${currentArticle.ref}/${
              currentArticle.slug
            }/${currentIssue ? 'view?ref=current' : 'view'}`}
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
