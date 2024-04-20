import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { getIssues } from '@/lib/data'
import { deleteIssue } from '@/lib/actions'
import DeleteButton from '@/components/Dashboard/issues/delete-issue'
import CreateButton from '@/components/Dashboard/createButton'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'

async function Issues() {
  const issues = await getIssues()
  // console.log('issues bla', issues)
  return (
    <DashboardContainer>
      <div className='flex-grow'>
        <CreateButton href='/dashboard/issues/new-issue' label='New Issue' />
        <article>
          {issues.map((issue) => (
            <div key={issue._id} className='flex justify-between'>
              <div>
                <h2>
                  <Link
                    href={`/dashboard/issues/${issue.ref}`}
                  >{`BIJED ${issue.issueTitle}`}</Link>
                </h2>
                <div>
                  <span className='text-gray-400'>{`published: ${
                    new Date(issue.publishDate).toISOString().split('T')[0]
                  }`}</span>
                  <span className='text-gray-400'>
                    {issue.published ? 'published' : 'pending'}
                  </span>
                </div>
              </div>
              <div>
                <Link
                  href={`/dashboard/issues/update/${issue.ref}`}
                  className='flex'
                >
                  <PencilIcon className='w-5' />
                </Link>
                <DeleteButton
                  action={deleteIssue}
                  id={JSON.stringify(issue._id)}
                />
              </div>
            </div>
          ))}
        </article>
      </div>
    </DashboardContainer>
  )
}

export default Issues
