import { connectDB } from '@/lib/mongoose/config'
import { Announcement } from '@/lib/mongoose/models'
import { formatDate } from '@/lib/util'
import Link from 'next/link'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import MainContainer from '@/components/MainContainer'

const fetchAnnouncements = async () => {
  connectDB()
  const announcements = await Announcement.find()
  return announcements
}

async function AnnouncementPage() {
  const announcements = await fetchAnnouncements()
  return (
    <MainContainer>
      {announcements.map((announcement) => (
        <article
          className='px-3 py-2 border border-gray-300 rounded-md boder-solid'
          key={announcement.id}
        >
          <Link
            className='font-semibold text-[#3b80a0]'
            href={`/announcements/${announcement.slug}`}
          >
            {announcement.title}
          </Link>
          <div className='flex gap-1 text-gray-400'>
            <CalendarDaysIcon className='w-4' />
            <span className='text-sm'>
              {formatDate(announcement.createdAt)}
            </span>
          </div>
        </article>
      ))}
    </MainContainer>
  )
}

export default AnnouncementPage
