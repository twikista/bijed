import { connectDB } from '@/lib/mongoose/config'
import { Announcement } from '@/lib/mongoose/models'
import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser'
import { formatDate } from '@/lib/util'
import AnnouncementItems from '@/components/AnnouncementItems'
import CreateButton from '@/components/Dashboard/createButton'

// const fetchAnnouncements = async () => {
//   connectDB()
//   const announcements = await Announcement.find()
//   // console.log(announcements)
//   return announcements
// }

async function AnnouncementsPage() {
  // const announcements = await fetchAnnouncements()

  // console.log(announcements.content)

  // const clean = DOMPurify.sanitize(announcements[0].content, {
  //   FORBID_ATTR: ['style', 'class'],
  // })

  return (
    // <div>
    //   {announcements.map((announcement) => (
    //     <article key={announcement.id}>
    //       <h1>{announcement.title}</h1>
    //       <span>{formatDate(announcement.createdAt)}</span>
    //       <section className='space-y-5 text-justify'>
    //         {parse(
    //           DOMPurify.sanitize(announcement.content, {
    //             FORBID_ATTR: ['style', 'class'],
    //           })
    //         )}
    //       </section>
    //     </article>
    //   ))}
    // </div>
    <div className='flex flex-col'>
      <CreateButton
        href='/dashboard/announcements/add-announcement'
        label='new announcement'
      />
      <AnnouncementItems isPublicRoute={true} />
    </div>
  )
}

export default AnnouncementsPage
