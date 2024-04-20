import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser'
import { formatDate } from '@/lib/util'

import { fetchAnnouncement } from '@/lib/data'
import { DeleteButton } from '@/components/Dashboard/Buttons'
import { deleteAnnouncement } from '@/lib/actions'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'
// import { Announcement } from '@/lib/mongoose/models'

async function AnnouncementPage({ params }) {
  const announcement = await fetchAnnouncement(params.slug)
  console.log('annoncement-', announcement)
  return (
    <DashboardContainer>
      <div>
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
          <DeleteButton action={deleteAnnouncement} id={announcement?._id} />
        </article>
      </div>
    </DashboardContainer>
  )
}

export default AnnouncementPage
