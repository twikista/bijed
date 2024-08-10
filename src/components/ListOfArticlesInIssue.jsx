import Link from 'next/link'
import Authors from './Authors'

function ListOfArticlesInIssue({ articlesInIssue }) {
  return (
    <div className='space-y-3'>
      {articlesInIssue.map((article) => (
        <div
          key={`${article._id}`}
          className='px-4 py-2 border border-l-8 border-neutral-300'
        >
          <h4 className='text-base font-medium md:text-lg text-primary hover:text-blue-600 hover:underline'>
            <Link href={`/current/${article.ref}/${article.slug}`}>
              {article.title}
            </Link>
          </h4>
          <Authors authors={article.authors} />
          <p className='font-medium'>{`pp. ${article.slug}`}</p>
        </div>
      ))}
    </div>
  )
}

export default ListOfArticlesInIssue
