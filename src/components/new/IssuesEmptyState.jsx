import React from 'react';
import ResourceFilterV2 from './ResourceFilterV2';
import CreateButton from '../Dashboard/createButton';
import DashboardWrapper from '../Dashboard/DashboardWrapper';
import DashboardContainer from '../Dashboard/DashboardContainer';
import MobileNav from '../Dashboard/MobileNav';
import SideNav from '../Dashboard/SideNav';

export default function IssuesEmptyState({ status, user }) {
  console.log(status);
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
          <section className='flex flex-col'>
            <div className='flex items-center justify-center flex-1 my-24'>
              <p className='text-2xl font-medium text-center text-gray-400'>
                {status == 'published' || status === 'undefined'
                  ? 'No Published Issues'
                  : 'Oops! No pending pending/unpublished issue'}
              </p>
            </div>
          </section>
        </DashboardWrapper>
      </DashboardContainer>
    </main>
  );
}
