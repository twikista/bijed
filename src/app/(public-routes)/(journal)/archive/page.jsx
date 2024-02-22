import { ChevronLeft, CogIcon, UnderConstruction } from '@/components/Icons'

import Image from 'next/image'
import Link from 'next/link'

import { connectDB } from '@/lib/mongoose/config'
import { Issue } from '@/lib/mongoose/models'
import MainContainer from '@/components/MainContainer'
import coverImage from '@/../public/bijed_cover_image.jpg'

export const metadata = {
  title:
    'Archive - Benin International Journal for Entrepreneurship Development',
  description:
    'This page contains the various volumes, issues, and articles published by the Benin International Journal for Entrepreneurship Development.',
}

const getPublishedIssues = async () => {
  // const res = await fetch('http://localhost:3000/api/archive')
  // if (!res.ok) {
  //   throw new Error('Something went wrong')
  // }
  // return res.json()
  try {
    connectDB()
    const publishedIssues = await Issue.find({ published: true })
    return publishedIssues
  } catch (error) {
    console.log(error)
  }
}

async function Archive() {
  const issues = await getPublishedIssues()
  console.log(issues)
  if (!issues.length) {
    return (
      <MainContainer>
        <div className='flex items-center justify-center h-full'>
          <h2>This Journal has not published any article</h2>
        </div>
      </MainContainer>
    )
  }
  return (
    <MainContainer>
      <h2 className='text-2xl font-bold underline uppercase font-saira'>
        Archive
      </h2>
      {/* <section className='flex flex-col items-center space-y-8'>
        <CogIcon className='w-16 h-16 md:w-20 md:h-20 text-neutral-400 animate-spin-slow' />
        <h3 className='text-base md:text-2xl xl:text-3xl text-neutral-400'>
          This page is under construction
        </h3>
        <Link
          href={'/'}
          className='flex items-center text-xs font-medium transition-all text-primary hover:underline hover:font-semibold md:text-base '
        >
          <ChevronLeft className='inline-block w-3 h-3 md:w-4 md:h-4' />
          <span>Back to Homepage</span>
        </Link>
      </section> */}
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
                  {`BIJED ${issue.issueYear} ${
                    issue.issueNumber === 1 ? 'First' : 'Second'
                  } Issue`}
                </Link>
              </h2>
              <p className='font-medium text-neutral-500'>{issue.issueTitle}</p>
            </div>

            {/* <p>{`Vol. ${issue.volume} No. ${issue.issueNumber} ${new Date(
              issue.createdAt
            ).getFullYear()}`}</p> */}
          </div>
        ))}
      </div>
    </MainContainer>
  )
}

export default Archive
