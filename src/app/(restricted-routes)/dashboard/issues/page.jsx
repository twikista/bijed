import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { getIssues } from '@/lib/data'
import { deleteIssue } from '@/lib/actions'
import DeleteButton from '@/components/Dashboard/issues/delete-issue'
import CreateButton from '@/components/Dashboard/createButton'

async function Issues() {
  const issues = await getIssues()
  console.log(issues)
  return (
    <div className='flex-grow'>
      <CreateButton href='/dashboard/issues/new-issue' label='New Issue' />
      <article>
        {issues.map((issue) => (
          <div key={issue._id} className='flex justify-between'>
            <h2>
              <Link
                href={`/dashboard/issues/${issue.ref}`}
              >{`BIJED ${issue.issueTitle}`}</Link>
            </h2>
            <span className='text-gray-400'>{`published: ${
              new Date(issue.publishDate).toISOString().split('T')[0]
            }`}</span>
            <Link href={`/dashboard/issues/${issue.ref}/edit`} className='flex'>
              <PencilIcon className='w-5' />
            </Link>
            <DeleteButton action={deleteIssue} id={JSON.stringify(issue._id)} />
            {/* <Button type='button' clickHandler ={deleteIssue} i>
              <TrashIcon />
            </Button> */}
          </div>
        ))}
      </article>
    </div>
  )
}

export default Issues
