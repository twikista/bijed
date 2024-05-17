import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import { getIssues } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

async function PublishedIssues() {
  const publishedIssues = await getIssues(true)
  console.log('publishedIssues- ', publishedIssues)
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <h3 className='text-2xl font-medium '>Published Issues</h3>
        <div className='p-2 bg-[#e5d4ff] rounded-lg md:pt-0 overflow-x-auto'>
          <table className='min-w-full overflow-x-scroll'>
            <thead className='rounded-lg'>
              <tr className=''>
                <th className='px-4 py-6 pb-1 font-medium w-[20px]'>S/N</th>
                <th className='px-4 pt-4 pb-1 table-fixed'>Issue</th>
                <th className='w-20 px-4 pt-4 pb-1 font-medium'>Status</th>
                <th className='px-4 pt-4 pb-1 font-medium'>Publish Date</th>
              </tr>
            </thead>
            <tbody className='text-center bg-white divide-y-2 rounded-sm'>
              {publishedIssues.map((issue, index) => (
                <tr className='py-5 text-sm' key={issue._id}>
                  <td className='px-4 py-4 border border-solid'>{`${
                    index + 1
                  }.`}</td>
                  <td className='px-4 py-4 text-center border border-solid'>
                    <Link
                      className='text-center text-[#800080] hover:text-blue-600 font-medium'
                      href={`/dashboard/issues/published/${issue.ref}`}
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default PublishedIssues
