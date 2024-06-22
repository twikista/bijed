import Link from 'next/link'
import { getAnnouncements } from '@/lib/data'

async function Announcement() {
  const announcements = await getAnnouncements()
  if (announcements.length === 0) {
    return (
      <>
        <h3 className='text-xl font-semibold capitalize font-saira text-primary'>
          Announcements
        </h3>
        <p className='text-gray-400'>No announcements</p>
      </>
    )
  }
  return (
    <div>
      <h3 className='text-xl font-semibold capitalize font-saira text-primary'>
        Announcements
      </h3>
      <div className='space-y-3'>
        {announcements.map((announcement) => (
          <article key={announcement.slug}>
            <Link
              href={`/announcements/${announcement.slug}`}
              className=' hover:text-blue-600 hover:underline'
            >
              {announcement.title}
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Announcement
