import Image from 'next/image'
import Link from 'next/link'

import { connectDB } from '@/lib/mongoose/config'
import { Issue } from '@/lib/mongoose/models'
import MainContainer from '@/components/MainContainer'
import coverImage from '@/../public/bijed_cover_image.jpg'
import { PageHeading } from '@/components/Headings'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPublishedIssues } from '@/lib/actions/issues'

export const metadata = {
  title: 'Archive',
  description:
    'List of the issues published by the Benin International Journal for Entrepreneurship Development.',
}

async function Archive() {
  const issues = await getPublishedIssues()
  if (!issues.length) {
    return (
      <div className='flex flex-col min-h-screen'>
        <Header />
        <div className='flex items-center justify-center flex-grow w-full h-full'>
          <MainContainer>
            <div className='flex items-center justify-center h-full'>
              <h2>This Journal has not published any article</h2>
            </div>
          </MainContainer>
        </div>
        <Footer />
      </div>
    )
  }
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center flex-grow w-full h-full'>
        <MainContainer>
          <PageHeading>Archive</PageHeading>
          <div className='space-y-5'>
            {issues.map((issue) => (
              <div
                key={issue._id}
                className='flex gap-5 sm:gap-10 border rounded-[4px] sm:flex-row border-neutral-300  py-2 px-2'
              >
                <Image
                  src={coverImage}
                  alt='Bijed cover page'
                  className=' border border-neutral-300 sm:block w-[40px] sm:w-[150px] rounded-[2px] sm:rounded-[4px]'
                />
                <div className='flex-1'>
                  <h2 className='text-sm font-bold transition-colors sm:text-lg text-primary hover:text-blue-600'>
                    <Link href={`/archive/${issue.ref}`}>
                      {`BIJED ${new Date(issue.issueYear).getFullYear()} ${
                        issue.issueNumber === 1 ? 'First' : 'Second'
                      } Issue`}
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
  )
}

export default Archive
