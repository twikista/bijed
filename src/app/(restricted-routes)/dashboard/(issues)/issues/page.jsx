import Link from 'next/link'
import { getIssues } from '@/lib/data'

import CreateButton from '@/components/Dashboard/createButton'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import ResourceFilter from '@/components/Dashboard/ResourceFilter'
import { auth } from '../../../../../../auth'
import SideNav from '@/components/Dashboard/SideNav'
import { DeleteButton, EditButton } from '@/components/Dashboard/Buttons'
import { deleteIssue } from '@/lib/actions'

async function Issues({ searchParams }) {
  const { user } = await auth()
  const mode = searchParams.mode
  const issues = await getIssues(mode)
  console.log('ref======xxxxx', issues[0].ref)

  if (!issues.length) {
    return (
      <main className='relative flex h-screen'>
        <SideNav />
        <DashboardContainer>
          <DashboardWrapper>
            <div className='flex flex-row-reverse items-center justify-between pb-3 border-b-2 border-200'>
              {user.role === 'business manager' && (
                <CreateButton
                  href='/dashboard/issues/new-issue'
                  label='Add New Issue'
                />
              )}
              <ResourceFilter mode={mode} />
            </div>
            <section className='flex flex-col'>
              <div className='flex items-center justify-center flex-1 my-24'>
                <p className='text-2xl font-medium text-gray-400'>
                  Oops! No pending pending/unpublished issue
                </p>
              </div>
            </section>
          </DashboardWrapper>
        </DashboardContainer>
      </main>
    )
  }

  return (
    <main className='relative flex h-screen'>
      <SideNav />
      <DashboardContainer>
        <DashboardWrapper>
          <div className='flex flex-row-reverse items-center justify-between pb-3 border-b-2 border-200'>
            {user.role === 'business manager' && (
              <CreateButton
                href='/dashboard/issues/new-issue'
                label='Add New Issue'
              />
            )}
            <ResourceFilter mode={mode} />
          </div>
          <div className='p-2 bg-[#e5d4ff] rounded-lg md:pt-0 overflow-x-auto'>
            <table className='min-w-full overflow-x-scroll'>
              <thead className='rounded-lg'>
                <tr className=''>
                  <th className='px-4 pt-4 pb-1 table-fixed'>Issue</th>
                  <th className='px-4 pt-4 pb-1 font-medium'>Status</th>
                  <th className='px-4 pt-4 pb-1 font-medium'>Publish Date</th>
                  {user.role === 'admin' && (
                    <>
                      <th className='sr-only'></th>
                      <th className='sr-only'></th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className='text-center bg-white divide-y-2 rounded-sm'>
                {issues.map((issue, index) => (
                  <tr className='py-5 text-sm' key={issue._id}>
                    <td className='px-4 py-4 text-center border border-solid'>
                      <Link
                        className='text-center text-[#800080] hover:text-blue-600 font-medium'
                        href={`/dashboard/issues/${issue.ref}`}
                      >{`BIJED ${issue.issueTitle}`}</Link>
                    </td>
                    <td className='px-4 py-4 text-center border border-solid'>
                      {issue.status === 'published' ? (
                        <span className='px-3 py-[5px] space-x-1 font-medium text-center text-white bg-green-500 rounded-[20px] '>
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
                    {user.role === 'admin' && (
                      <>
                        <td className='px-4 py-4 text-center'>
                          <EditButton
                            href={`/dashboard/issues/${issue.ref}/edit`}
                            variant='secondary'
                          />
                        </td>
                        <td className='px-4 py-4 text-center'>
                          <DeleteButton
                            action={deleteIssue}
                            id={issue.ref}
                            variant='secondary'
                          />
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DashboardWrapper>
      </DashboardContainer>
    </main>
  )
}

export default Issues
