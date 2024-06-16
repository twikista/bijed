import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser'
import { auth } from '../../auth'
import { formatDate } from '@/lib/util'

import { fetchAnnouncement } from '@/lib/data'
import { DeleteButton } from '@/components/Dashboard/Buttons'
import { deleteAnnouncement } from '@/lib/actions'
import MainContainer from './MainContainer'
import DashboardContainer from './Dashboard/DashboardContainer'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
// import { Announcement } from '@/lib/mongoose/models'

async function AnnouncementDetail({ params, isProtectedRoute }) {
  const announcement = await fetchAnnouncement(params.slug)
  console.log('annoncement-', announcement)
  const user = await auth()
  console.log('user-', user)
  return (
    <div className='space-y-2'>
      <article key={announcement?.slug}>
        {/* <h2 className='mb-1 text-base font-bold sm:text-2xl'>
              {announcement?.title}
            </h2>
            <span>{formatDate(announcement?.createdAt)}</span> */}
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
