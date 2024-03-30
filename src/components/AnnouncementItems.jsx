import Link from 'next/link'
import { connectDB } from '@/lib/mongoose/config'
import { Announcement } from '@/lib/mongoose/models'
import ActionButtons from './Dashboard/ActionButtons'
import { deleteAnnouncement } from '@/app/api/actions/actions'
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

async function AnnouncementItems({ isPublicRoute }) {
  const announcements = await fetchAnnouncements()
  const url = (string) => {
    const join = string.replace(/ /g, '-')
    console.log(join)
    return join
  }

  return (
    <div>
      {announcements.map((announcement) => (
        <article key={announcement._id}>
          <Link href={`/dashboard/announcements/${url(announcement.title)}`}>
            {announcement.title}
          </Link>
          {/* <p>{url(announcement.title)}</p> */}
          {isPublicRoute && (
            <ActionButtons
              id={String(announcement._id)}
              action={deleteAnnouncement}
            />
          )}
        </article>
      ))}
    </div>
  )
}

export default AnnouncementItems
