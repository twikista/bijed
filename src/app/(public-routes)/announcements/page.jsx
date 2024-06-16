import { connectDB } from '@/lib/mongoose/config'
import { Announcement } from '@/lib/mongoose/models'
import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser'
import { formatDate } from '@/lib/util'
import Link from 'next/link'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import MainContainer from '@/components/MainContainer'

const fetchAnnouncements = async () => {
  connectDB()
  const announcements = await Announcement.find()
  // console.log(announcements)
  return announcements
}

async function AnnouncementPage() {
  const announcements = await fetchAnnouncements()

  // console.log(announcements.content)

  // const clean = DOMPurify.sanitize(announcements[0].content, {
  //   FORBID_ATTR: ['style', 'class'],
  // })

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

          {/* <section className='space-y-5 text-justify'>
            {parse(
              DOMPurify.sanitize(announcement.content, {
                FORBID_ATTR: ['style', 'class'],
              })
            )}
          </section> */}
        </article>
      ))}
    </MainContainer>
  )
}

export default AnnouncementPage
