import { joinKeywords } from '@/lib/util'

function ArticleKeywords({ keywords }) {
  return (
    <div className='py-2'>
      <p>
        <span className='font-semibold'>Keywords:</span>
        <span className='capitalize'>{` ${joinKeywords(keywords)}`}</span>
      </p>
    </div>
  )
}

export default ArticleKeywords
