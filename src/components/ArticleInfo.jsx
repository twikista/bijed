import { dateHelperFunction } from '@/lib/util'

function ArticleInfo({ article }) {
  return (
    <div className='flex flex-col gap-[2px] text-sm font-medium md:items-center sm:flex-row md:text-lg text-neutral-500'>
      <span className=''>{`Published: ${dateHelperFunction(
        article?.publishDate,
        'long'
      )}`}</span>
      <span className='hidden'>&#124;</span>
      <span className=''>
        {`Vol ${article.volume} No. ${article.issue} (${new Date(
          article.publishDate
        ).getFullYear()}) pp. ${article.slug}`}
      </span>
    </div>
  )
}

export default ArticleInfo
