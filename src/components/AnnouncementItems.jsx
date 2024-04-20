import Link from 'next/link'
import { connectDB } from '@/lib/mongoose/config'
import { Announcement } from '@/lib/mongoose/models'
import ActionButtons from './Dashboard/ActionButtons'
import { CalenderDaysIcon } from '@heroicons/react/24/outline'
import { deleteAnnouncement } from '@/app/api/actions/actions'
import { DeleteButton, EditButton } from './Dashboard/Buttons'
import { replaceSpaceInTitleWithHyphen } from '@/lib/util'
import { unstable_noStore as noStore } from 'next/cache'
import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser'
import { formatDate } from '@/lib/util'

const fetchAnnouncements = async () => {
  // noStore()
  connectDB()
  const announcements = await Announcement.find()
  // console.log(announcements)
  return announcements
}

async function AnnouncementItems({ isPrivateRoute }) {
  const announcements = await fetchAnnouncements()
  return (
    <div>
      {announcements.map((announcement) => (
        //check if due data has expired
        <article key={announcement._id}>
          <Link href={`/dashboard/announcements/${announcement.slug}`}>
            {announcement.title}
          </Link>
          {/* <p>{url(announcement.title)}</p> */}
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
    </div>
  )
}

export default AnnouncementItems
