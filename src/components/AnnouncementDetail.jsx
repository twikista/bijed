import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser'
import { auth } from '../../auth'
import { formatDate } from '@/lib/util'

import { fetchAnnouncement } from '@/lib/data'
import { DeleteButton } from '@/components/Dashboard/Buttons'
import { deleteAnnouncement } from '@/lib/actions'
import MainContainer from './MainContainer'
import DashboardContainer from './Dashboard/DashboardContainer'
// import { Announcement } from '@/lib/mongoose/models'

async function AnnouncementDetail({ params, isProtectedRoute }) {
  const announcement = await fetchAnnouncement(params.slug)
  console.log('annoncement-', announcement)
  const user = await auth()
  console.log('user-', user)
  return (
    <div className='space-y-2'>
      <article key={announcement?.slug}>
        <h1>{announcement?.title}</h1>
        <span>{formatDate(announcement?.createdAt)}</span>
        <section className='space-y-5 text-justify'>
          {parse(
            DOMPurify.sanitize(announcement?.content, {
              FORBID_ATTR: ['style', 'class'],
            })
          )}
        </section>
        {isProtectedRoute && (
          <DeleteButton
            action={deleteAnnouncement}
            id={JSON.parse(JSON.stringify(announcement?._id))}
          />
        )}
      </article>
    </div>
  )
}

export default AnnouncementDetail
