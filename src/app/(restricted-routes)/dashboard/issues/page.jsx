import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { getIssues } from '@/lib/data'
import { deleteIssue } from '@/lib/actions'
// import DeleteButton from '@/components/Dashboard/issues/delete-issue'
import { DeleteButton } from '@/components/Dashboard/Buttons'
import CreateButton from '@/components/Dashboard/createButton'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import Breadcrumb from '@/components/Dashboard/Breadcrumb'
import { EditButton } from '@/components/Dashboard/Buttons'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'

async function Issues() {
  const issues = await getIssues([true, false])
  // console.log('issues bla', issues)
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <div className='flex justify-end '>
          <CreateButton href='/dashboard/issues/new-issue' label='New Issue' />
        </div>
        <div className='p-2 bg-[#e5d4ff] rounded-lg md:pt-0 overflow-x-auto'>
          <table className='min-w-full overflow-x-scroll'>
            <thead className='rounded-lg'>
              <tr className=''>
                <th className='px-4 py-6 pb-1 font-medium w-[20px]'>S/N</th>
                <th className='px-4 pt-4 pb-1 table-fixed'>Issue</th>
                <th className='px-4 pt-4 pb-1 font-medium w-14'>Status</th>
                <th className='px-4 pt-4 pb-1 font-medium'>Publish Date</th>
                <th className='sr-only'></th>
                <th className='sr-only'></th>
              </tr>
            </thead>
            <tbody className='text-center bg-white divide-y-2 rounded-sm'>
              {issues.map((issue, index) => (
                <tr className='py-5 text-sm' key={issue._id}>
                  <td className='px-4 py-4 border border-solid'>{`${
                    index + 1
                  }.`}</td>
                  <td className='px-4 py-4 text-center border border-solid'>
                    <Link
                      className='text-center text-[#800080] hover:text-blue-600 font-medium'
                      href={`/dashboard/issues/${issue.ref}`}
                    >{`BIJED ${issue.issueTitle}`}</Link>
                  </td>
                  <td className='px-4 py-4 text-center border border-solid'>
                    {issue.published ? (
                      <span className='flex items-center px-3 py-1 space-x-1 font-medium text-white bg-green-500 rounded-lg w-fit'>
                        published
                      </span>
                    ) : (
                      <span className='flex items-center px-3 py-1 space-x-1 font-medium text-gray-500 bg-gray-200 rounded-lg w-fit'>
                        unpublished
                      </span>
                    )}
                  </td>
                  <td className='px-4 py-4 text-center border border-solid'>
                    <span>
                      {issue.published
                        ? new Intl.DateTimeFormat('en-GB').format(
                            issue.publishDate
                          )
                        : 'Not available'}
                    </span>
                  </td>
                  <td className='px-4 py-4 text-center'>
                    <EditButton
                      href={`/dashboard/issues/update/${issue.ref}`}
                      variant='secondary'
                    />
                  </td>
                  <td className='px-4 py-4 text-center'>
                    <DeleteButton
                      action={deleteIssue}
                      id={JSON.stringify(issue._id)}
                      variant='secondary'
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default Issues
