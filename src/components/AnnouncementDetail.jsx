import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser'
import { auth } from '../../auth'
import { formatDate } from '@/lib/util'

import { fetchAnnouncement } from '@/lib/data'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'

async function AnnouncementDetail({ params, isProtectedRoute }) {
  const announcement = await fetchAnnouncement(params.slug)
  const user = await auth()

  return (
    <div className='space-y-2'>
      <article key={announcement?.slug}>
        <div className='mb-5'>
          <h2 className='mb-1 text-base font-bold sm:text-2xl'>
            {announcement?.title}
          </h2>
          <div className='flex gap-1 text-gray-400'>
            <CalendarDaysIcon className='w-5' />
            <span>{formatDate(announcement?.createdAt)}</span>
          </div>
        </div>
        <section className='space-y-5 text-justify'>
          {parse(
            DOMPurify.sanitize(announcement?.content, {
              FORBID_ATTR: ['style', 'class'],
            })
          )}
        </section>
      </article>
    </div>
  )
}

export default AnnouncementDetail
