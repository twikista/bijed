import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser'
import { formatDate } from '@/lib/util'

import { fetchAnnouncement } from '@/lib/data'
import {
  DeleteButton,
  EditButton,
  LinkButton,
  PublishButton,
  RejectPublishButton,
  SendForAuthorizationButton,
} from '@/components/Dashboard/Buttons'
import {
  deleteAnnouncement,
  rejectRequestToPublishAnnouncement,
} from '@/lib/actions'
import {
  publishAnnouncement,
  submitAnnouncementForPublishing,
} from '@/lib/actions/announcement'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import { auth } from '../../../../../../../auth'

async function AnnouncementPage({ params }) {
  const announcement = await fetchAnnouncement('slug', params?.slug)
  const session = await auth()
  const businessManagerPrivilege =
    announcement?.status === 'draft' &&
    session?.user.role === 'business manager'
  const managingEditorPrivilege =
    announcement?.status === 'review' &&
    session?.user.role === 'managing editor'
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <div>
          <article key={announcement?.slug}>
            {businessManagerPrivilege && (
              <div className='flex justify-end gap-6 pt-8 pb-3 mb-5 border-b-2 border-gray-200'>
                <EditButton
                  href={`/dashboard/announcements/${params.slug}/edit`}
                  label='edit announcement'
                />
                <DeleteButton
                  variant='primary'
                  id={String(announcement?._id)}
                  action={deleteAnnouncement}
                  label='delete Announcement'
                />
              </div>
            )}
            <div className='mb-5'>
              <h2 className='mb-1 text-base font-bold sm:text-2xl'>
                {announcement?.title}
              </h2>
              <div className='flex gap-1 text-gray-400'>
                <CalendarDaysIcon className='w-5' />
                <span>{formatDate(announcement?.createdAt)}</span>
              </div>
              <span className='inline-block px-2 mt-2 text-base font-medium bg-gray-300 rounded-3xl'>{`status: ${announcement?.status}`}</span>
            </div>
            <section className='pb-10 space-y-5 text-justify'>
              {parse(
                DOMPurify.sanitize(announcement?.content, {
                  FORBID_ATTR: ['style', 'class'],
                })
              )}
            </section>
            {businessManagerPrivilege && (
              <div className='flex justify-center gap-6 pt-8 pb-6 border-t-2 border-gray-200'>
                <SendForAuthorizationButton
                  redirectUrl={`/dashboard/announcements/${params.slug}`}
                  resourceRef={announcement?.ref}
                  slug={announcement?.slug}
                  action={submitAnnouncementForPublishing}
                  label={{
                    main: 'Submit for Authorization',
                    alt: 'submitting Announcement...',
                  }}
                  notificationMessage={{
                    succes:
                      'Announcement successfully submitted for authorization',
                    error: 'Something went wrong',
                  }}
                />
              </div>
            )}
            {managingEditorPrivilege && (
              <div className='flex justify-center gap-6 pt-8 pb-6 border-t-2 border-gray-200'>
                <PublishButton
                  resource='announcements'
                  resourceRef={announcement.ref}
                  slug={announcement.slug}
                  user={session.user}
                  action={publishAnnouncement}
                  notificationMessage={{
                    success: 'Announcement published',
                    error: 'Error publishing Announcement',
                  }}
                  label={{
                    main: 'Publish Announcement',
                    error: 'Publishing Announcement',
                  }}
                />
                <RejectPublishButton
                  resource='announcements'
                  resourceRef={announcement.ref}
                  label={{ main: 'Reject Publish Request', alt: 'Processing' }}
                  action={rejectRequestToPublishAnnouncement}
                  notificationMessage={{
                    success: 'Publish request rejected successfully',
                    error: 'Something went wrong',
                  }}
                />
              </div>
            )}
          </article>
        </div>
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default AnnouncementPage
