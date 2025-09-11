import { dateHelperFunction } from '@/lib/util';

function ArticleInfo({ article }) {
  return (
    <div className='flex flex-col gap-4 text-sm md:items-center sm:flex-row text-neutral-500'>
      <span className=''>{`Published: ${dateHelperFunction(
        article?.publishDate,
        'short'
      )}`}</span>
      <span className='hidden'>&#124;</span>
      <span className=''>
        {`Vol ${article.volume} No. ${article.issue} (${new Date(
          article.publishDate
        ).getFullYear()})`}
      </span>
    </div>
  );
}

export default ArticleInfo;
