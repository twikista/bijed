import Link from 'next/link'
import { connectDB } from '@/lib/mongoose/config'
import { Announcement } from '@/lib/mongoose/models'
import { deleteAnnouncement } from '@/app/api/actions/actions'
import { DeleteButton, EditButton } from './Dashboard/Buttons'
import { replaceSpaceInTitleWithHyphen } from '@/lib/util'

const fetchAnnouncements = async () => {
  connectDB()
  const announcements = await Announcement.find()
  return announcements
}

async function AnnouncementItems({ isPrivateRoute }) {
  const announcements = await fetchAnnouncements()
  return (
    <section>
      {announcements.map((announcement) => (
        //check if due data has expired
        <article key={announcement._id}>
          <Link href={`/dashboard/announcements/${announcement.slug}`}>
            {announcement.title}
          </Link>
          {isPrivateRoute && (
            <>
              <DeleteButton
                id={String(announcement?._id)}
                action={deleteAnnouncement}
                variant='secondary'
              />
              <EditButton
                label='Edit'
                href={`/dashboard/announcements/update/${replaceSpaceInTitleWithHyphen(
                  announcement?.title
                )}`}
                variant='secondary'
              />
            </>
          )}
        </article>
      ))}
    </section>
  )
}

export default AnnouncementItems
