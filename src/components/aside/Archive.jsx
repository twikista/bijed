import { connectDB } from '@/lib/mongoose/config'
import { Issue } from '@/lib/mongoose/models'
import Link from 'next/link'

const getArchive = async () => {
  try {
    connectDB()
    const archive = await Issue.find({ published: true })
      .sort({ volume: -1, issueNumber: -1 })
      .limit(4)
    return archive
  } catch (error) {
    console.log(error)
  }
}

async function Archive() {
  const archive = await getArchive()
  return (
    <div className='space-y-2'>
      <h3 className='text-xl font-semibold capitalize font-saira text-primary'>
        Archive
      </h3>
      <div className='space-y-[5px]'>
        {archive && archive?.length ? (
          archive.map((issue) => (
            <article key={issue._id}>
              <Link
                href={`/archive/${issue?.ref}`}
                className='font-medium text-blue-500 underline'
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
          className='block mt-4 font-semibold text-blue-500'
          // className='block font-bold text-primary px-3 py-2 border border-primary sm:w-[160px] rounded-md hover:bg-primary hover:text-white transition-colors  text-center'
        >
          ...view more
        </Link>
      </div>
    </div>
  )
}

export default Archive
