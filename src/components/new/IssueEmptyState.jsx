import React from 'react';
import CreateButton from '../Dashboard/createButton';
import SideNav from '../Dashboard/SideNav';
import MobileNav from '../Dashboard/MobileNav';
import DashboardContainer from '../Dashboard/DashboardContainer';
import DashboardWrapper from '../Dashboard/DashboardWrapper';

export default function IssueEmptyState({ issue }) {
  return (
    <main className='relative flex h-screen'>
      <SideNav />
      <MobileNav />
      <DashboardContainer>
        <DashboardWrapper>
          <section className='flex flex-col'>
            <div className='h-14'>
              <h2 className='text-2xl font-bold text-center capitalize md:text-left font-cairo'>
                {issue.issueTitle}
              </h2>
              <p className='text-sm text-center text-gray-400 font-cairo md:text-left'>
                {issue.published
                  ? `Publish Date: ${new Date(
                      issue.publishDate
                    ).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}`
                  : 'Publish Date: N/A'}
              </p>
            </div>
            <div className='flex flex-col items-center justify-center flex-1 my-24 space-y-8'>
              <p className='text-2xl text-center text-gray-400'>
                There are currently no articles in this issue
              </p>
              {issue.status === 'draft' && (
                <CreateButton
                  label='Add Article'
                  href={`/dashboard/issues/${issue.ref}/new-article`}
                />
              )}
            </div>
          </section>
        </DashboardWrapper>
      </DashboardContainer>
    </main>
  );
}
