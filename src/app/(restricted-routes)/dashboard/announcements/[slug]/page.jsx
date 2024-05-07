import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser'
import { formatDate } from '@/lib/util'

import { fetchAnnouncement } from '@/lib/data'
import { DeleteButton, EditButton } from '@/components/Dashboard/Buttons'
import { deleteAnnouncement } from '@/lib/actions'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
// import { Announcement } from '@/lib/mongoose/models'

async function AnnouncementPage({ params }) {
  const announcement = await fetchAnnouncement(params.slug)
  console.log('annoncement-', announcement)
  console.log('announcement-params: ', params)
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <div>
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
            <div className='flex justify-end gap-6 mt-8 mb-3'>
              <EditButton
                href={`/dashboard/announcements/${params.slug}/edit`}
                label='edit'
              />
              <DeleteButton
                variant='primary'
                id={String(announcement?._id)}
                action={deleteAnnouncement}
              />
            </div>
          </article>
        </div>
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default AnnouncementPage
