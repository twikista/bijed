import { getArchive } from '@/lib/actionsV2/issues';
import { connectDB } from '@/lib/mongoose/config';
import { Issue } from '@/lib/mongoose/models/issue';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Suspense } from 'react';

// Skeleton loading component
function ArchiveSkeleton() {
  return (
    <div className='space-y-3'>
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className='relative'>
          <div className='w-40 h-5 overflow-hidden bg-gray-200 rounded md:w-48'>
            <div className='absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white to-transparent'></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Archive content component
async function ArchiveContent() {
  const archive = await getArchive();

  return (
    <>
      {archive && archive.length ? (
        archive.map((issue) => (
          <article key={issue._id}>
            <Link
              href={`/archive/${issue?.ref}`}
              className='text-[#006798] hover:text-[#008acb] underline text-sm transition-all duration-300'
            >
              {issue?.issueTitle}
            </Link>
          </article>
        ))
      ) : (
        <span className='text-gray-400'>No items</span>
      )}
    </>
  );
}

function Archive() {
  return (
    <div className='space-y-2'>
      <h3 className='text-lg font-semibold text-center capitalize md:text-left md:text-xl font-saira text-primary'>
        Archive
      </h3>
      <div className='space-y-[5px] flex flex-col items-center md:items-start'>
        <Suspense fallback={<ArchiveSkeleton />}>
          <ArchiveContent />
          <Link
            href='/archive'
            className='flex items-center gap-1 mt-4 text-[#006798] hover:text-[#008acb] text-sm transition-all hover:underline'
          >
            See more
          </Link>
        </Suspense>
      </div>
    </div>
  );
}

export default Archive;
