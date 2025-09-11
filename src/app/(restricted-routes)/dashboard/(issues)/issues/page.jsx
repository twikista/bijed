import Link from 'next/link';
// import { getIssues } from '@/lib/data';
import CreateButton from '@/components/Dashboard/createButton';
import DashboardContainer from '@/components/Dashboard/DashboardContainer';
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper';
import ResourceFilter from '@/components/Dashboard/ResourceFilter';
import ResourceFilterV2 from '@/components/new/ResourceFilterV2';
import { auth } from '../../../../../../auth';
import SideNav from '@/components/Dashboard/SideNav';
import { DeleteButton, EditButton } from '@/components/Dashboard/Buttons';
import { deleteIssue } from '@/lib/actions/issues';
import MobileNav from '@/components/Dashboard/MobileNav';
import { getIssues } from '@/lib/actionsV2/issues';
import IssuesEmptyState from '@/components/new/IssuesEmptyState';

async function Issues({ searchParams }) {
  const { user } = await auth();
  console.log('user:', user);
  const status = searchParams.status;
  console.log(status);
  const issues = await getIssues(status === 'undefined' ? 'published' : status);

  if (!issues?.length) {
    return (
      <IssuesEmptyState status={status} user={user} issues={issues.length} />
    );
  }

  return (
    <main className='relative flex h-screen'>
      <SideNav />
      <MobileNav />
      <DashboardContainer>
        <DashboardWrapper>
          <div className='flex flex-row-reverse items-center justify-between pb-3 border-b-2 border-200'>
            {user && (
              <CreateButton
                href='/dashboard/issues/new-issue'
                label='Add Issue'
              />
            )}
            {/* <ResourceFilter mode={mode} /> */}
            <ResourceFilterV2 />
          </div>
          <div className='p-2 bg-[#e5d4ff] rounded-lg md:pt-0 overflow-x-auto'>
            <table className='min-w-full border-collapse'>
              <thead className='rounded-lg'>
                <tr className=''>
                  <th className='px-4 pt-4 pb-1 table-fixed min-w-[200px]'>
                    Issue
                  </th>
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
                  <tr className='py-5 text-sm md:text-base' key={issue?._id}>
                    <td className='px-4 py-4 text-center border border-solid'>
                      <Link
                        className='text-center text-[#800080] hover:text-blue-600 font-medium'
                        href={`/dashboard/issues/${issue?.ref}`}
                      >{`BIJED ${issue.issueTitle}`}</Link>
                    </td>
                    <td className='px-4 py-4 text-center border border-solid'>
                      {issue?.status === 'published' ? (
                        <span className='px-1 py-[5px] space-x-1 text-center w-fit'>
                          published
                        </span>
                      ) : (
                        <span className='flex items-center px-1 py-1 space-x-1 w-fit'>
                          unpublished
                        </span>
                      )}
                    </td>
                    <td className='px-4 py-4 text-center border border-solid'>
                      <span>
                        {issue?.published
                          ? new Intl.DateTimeFormat('en-GB').format(
                              issue?.publishDate
                            )
                          : 'N/A'}
                      </span>
                    </td>
                    {(user.role === 'admin' ||
                      (user.role === 'business manager' &&
                        !issue.published)) && (
                      <>
                        <td className='px-4 py-4 text-center'>
                          <EditButton
                            href={`/dashboard/issues/${issue?.ref}/edit`}
                            variant='secondary'
                          />
                        </td>
                        <td className='px-4 py-4 text-center'>
                          <DeleteButton
                            action={deleteIssue}
                            id={issue?._id}
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
  );
}

export default Issues;
