import Image from 'next/image';
import Link from 'next/link';
import { unstable_noStore as noStore } from 'next/cache';

import MainContainer from '@/components/MainContainer';
import coverImage from '@/../public/bijed_cover_image.jpg';
import { PageHeading } from '@/components/Headings';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPublishedIssues } from '@/lib/actionsV2/issues';

export const metadata = {
  title: 'Archive',
  description:
    'List of the issues published by the Benin International Journal for Entrepreneurship Development.',
};

async function Archive() {
  noStore();
  const issues = await getPublishedIssues();
  if (!issues || issues.length === 0) {
    return (
      <div className='flex flex-col min-h-screen'>
        <Header />
        <div className='flex items-center justify-center flex-grow w-full h-full'>
          <MainContainer>
            <div className='flex items-center justify-center h-full'>
              <h2>This Journal has not published any Issue</h2>
            </div>
          </MainContainer>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center flex-grow w-full h-full'>
        <MainContainer>
          <PageHeading>Archive</PageHeading>
          <div className='space-y-2'>
            {issues.map((issue) => (
              <div
                key={issue._id}
                className='flex gap-5 sm:gap-10 border rounded-[4px] sm:flex-row border-neutral-300  py-2 px-2'
              >
                <Image
                  src={coverImage}
                  alt='Bijed cover page'
                  className=' border border-neutral-300 sm:block w-[40px] sm:w-[60px] rounded-[2px] sm:rounded-[4px]'
                />
                <div className='flex-1'>
                  <h2 className='text-sm font-semibold transition-colors sm:text-base text-primary hover:text-blue-600 w-fit hover:underline'>
                    <Link href={`/archive/${issue.ref}`} className='w-fit'>
                      {/* {`BIJED ${issue?.issueYear} ${
                        issue.issueNumber === '1' ? 'First' : 'Second'
                      } Issue`} */}
                      Benin International Journal for Entrepreneurship
                      Development
                    </Link>
                  </h2>
                  <p className='font-medium text-neutral-500'>
                    {issue.issueTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MainContainer>
      </div>
      <Footer />
    </div>
  );
}

export default Archive;
