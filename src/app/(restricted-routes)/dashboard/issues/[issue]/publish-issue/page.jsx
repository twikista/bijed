import { connectDB } from '@/lib/mongoose/config'
import { Issue, Article } from '@/lib/mongoose/models'
import Button from '@/components/Dashboard/Button'
import { fetchUnpublishedIssue } from '@/lib/data'
import Link from 'next/link'
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline'

async function PublishArticle({ params }) {
  const unpublishedIssue = await fetchUnpublishedIssue()

  if (!unpublishedIssue.length || !unpublishedIssue[0].articles.length) {
    return (
      <>
        <h2>There are no unplished Issues</h2>
        <Link href={`/dashboard/issue/${params.issue}`}>
          Back To Issues
          <ArrowsRightLeftIcon className='w-5' />
        </Link>
      </>
    )
  }

  return (
    <div>
      {/* <Unpublished /> */}
      <h2>bla</h2>
      <Button issueRef={unpublishedIssue[0].ref} />
    </div>
  )
}

export default PublishArticle
