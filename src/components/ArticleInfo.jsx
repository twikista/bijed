import { dateHelperFunction } from '@/lib/util'
import Link from 'next/link'

function ArticleInfo({ article }) {
  return (
    <div className='flex flex-col w-[250px]'>
      <h5 className='font-semibold'>Article Info:</h5>
      <div className='space-y-[5px] text-neutral-500'>
        <div>
          <h5 className='font-medium text-neutral-500'>Publish date</h5>
          <p>
            {article?.publishDate
              ? new Intl.DateTimeFormat('en-GB').format(article?.publishDate)
              : 'N/A'}
          </p>
          {/* <p>{dateHelperFunction(article?.publishDate)}</p> */}
        </div>
        <div>
          <h5 className='font-medium text-neutral-500'>Issue</h5>
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
  )
}

export default ArticleInfo
