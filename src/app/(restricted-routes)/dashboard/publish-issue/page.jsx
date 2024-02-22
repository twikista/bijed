import { connectDB } from '@/lib/mongoose/config'
import { Issue, Article } from '@/lib/mongoose/models'
import Button from '@/components/Dashboard/Button'

const fetchUnpublishedIssue = async () => {
  try {
    connectDB()
    const unpublishedIssue = await Issue.find({ published: false }).populate(
      'articles'
    )
    console.log(unpublishedIssue)
    return unpublishedIssue
  } catch (error) {
    console.log(error)
  }
}

async function PublishArticle() {
  const unpublishedIssue = await fetchUnpublishedIssue()

  if (!unpublishedIssue.length || !unpublishedIssue[0].articles.length) {
    return <h2>There are no unplished Issues</h2>
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
