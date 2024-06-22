import { connectDB } from '@/lib/mongoose/config'
import { Announcement } from '@/lib/mongoose/models'
import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser'
import { formatDate, replaceSpaceInTitleWithHyphen } from '@/lib/util'
import AnnouncementItems from '@/components/AnnouncementItems'
import CreateButton from '@/components/Dashboard/createButton'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import { DeleteButton, EditButton } from '@/components/Dashboard/Buttons'
import { deleteAnnouncement } from '@/lib/actions'
import Link from 'next/link'

// const fetchAnnouncements = async () => {
//   connectDB()
//   const announcements = await Announcement.find()
//   // console.log(announcements)
//   return announcements
// }

const fetchAnnouncements = async () => {
  // noStore()
  connectDB()
  const announcements = await Announcement.find({})
  // console.log(announcements)
  return announcements
}

async function AnnouncementsPage() {
  // const announcements = await fetchAnnouncements()
  const announcements = await fetchAnnouncements()

  // console.log(announcements)

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
    <DashboardContainer>
      <DashboardWrapper>
        <div className='flex justify-end'>
          <CreateButton
            href='/dashboard/announcements/new'
            label='new announcement'
          />
        </div>
        <div className='p-2 bg-[#e5d4ff] rounded-lg md:pt-0 overflow-x-auto'>
          <table className='min-w-full overflow-x-scroll'>
            <thead className='rounded-lg'>
              <tr className=''>
                <th className='px-4 pt-4 pb-1 table-fixed'>Announcements</th>
                <th className='px-4 pt-4 pb-1 font-medium w-14'>Date Added</th>
                <th className='px-4 pt-4 pb-1 font-medium'>Status</th>
                {/* <th className='sr-only'></th> */}
                <th className='sr-only'></th>
              </tr>
            </thead>
            <tbody className='text-center bg-white divide-y-2 rounded-sm'>
              {announcements.map((announcement) => (
                <tr className='py-5 text-sm' key={announcement._id}>
                  <td className='px-4 py-4 text-left border border-solid'>
                    <Link
                      href={`/dashboard/announcements/${announcement.slug}`}
                      className='text-center text-[#800080] hover:text-blue-600 font-medium hover:underline ml-2'
                    >
                      {announcement.mode === 'final'
                        ? announcement.title
                        : `${announcement.title}(edited)`}
                    </Link>
                  </td>
                  <td className='px-4 py-4 text-center border border-solid'>
                    <span className='flex items-center px-3 py-1 space-x-1'>
                      {new Intl.DateTimeFormat('en-GB').format(
                        announcement.createdAt
                      )}
                    </span>
                  </td>
                  <td className='px-4 py-4 text-center border border-solid'>
                    <span className='flex items-center justify-center px-3 py-1 space-x-1 font-medium capitalize rounded-lg'>
                      active
                    </span>
                  </td>
                  {/* <td className='px-4 py-4 text-center'>
                    <EditButton
                      label='Edit'
                      href={`/dashboard/announcements/${replaceSpaceInTitleWithHyphen(
                        announcement?.title
                      )}/edit`}
                      variant='secondary'
                    />
                  </td> */}
                  <td className='px-4 py-4 text-center'>
                    <DeleteButton
                      id={String(announcement?._id)}
                      action={deleteAnnouncement}
                      variant='secondary'
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default AnnouncementsPage
