import { connectDB } from '@/lib/mongoose/config'
import { Issue } from '@/lib/mongoose/models'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const getArchive = async () => {
  try {
    connectDB()
    const archive = await Issue.find({ published: true })
      .sort({ volume: -1, issueNumber: -1 })
      .limit(4)
    return archive
  } catch (error) {}
}

async function Archive() {
  const archive = await getArchive()
  return (
    <div className='space-y-2'>
      <h3 className='text-lg font-semibold text-center capitalize md:text-left md:text-xl font-saira text-primary'>
        Archive
      </h3>
      <div className='space-y-[5px] flex flex-col items-center md:items-start'>
        {archive && archive?.length ? (
          archive.map((issue) => (
            <article key={issue._id}>
              <Link
                href={`/archive/${issue?.ref}`}
                className='text-blue-500 underline hover:text-blue-700 hover:font-medium '
              >
                {issue?.issueTitle}
              </Link>
            </article>
          ))
        ) : (
          <p className='text-gray-400'>No items</p>
        )}
        <Link
          href='/archive'
          className='flex items-center gap-1 mt-4 font-medium text-blue-500 hover:text-blue-700'
        >
          See more <ArrowLongRightIcon className='w-5' />
        </Link>
      </div>
    </div>
  )
}

export default Archive
