import { connectDB } from '@/lib/mongoose/config'
import { Announcement } from '@/lib/mongoose/models'
import CreateButton from '@/components/Dashboard/createButton'
import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import Link from 'next/link'
import ResourceFilter from '@/components/Dashboard/ResourceFilter'
import { auth } from '../../../../../../auth'
import clsx from 'clsx'

const fetchAnnouncements = async () => {
  // noStore()
  connectDB()
  const announcements = await Announcement.find({})

  return announcements
}

const filterAnnouncements = async (mode) => {
  const currrentMode = mode === undefined || mode == 'final' ? 'final' : mode
  // noStore()
  connectDB()
  const announcements = await Announcement.find({ mode: currrentMode })

  return announcements
}

async function AnnouncementsPage({ searchParams }) {
  const session = await auth()
  const mode = searchParams?.mode
  const data = await Promise.all([
    filterAnnouncements(mode),
    fetchAnnouncements(),
  ])
  const [filteredAnnouncements, announcements] = data

  if (!filterAnnouncements.length) {
    return (
      <DashboardContainer>
        <DashboardWrapper>
          <div>
            <ResourceFilter mode={mode} />
          </div>
          <section className='flex flex-col'>
            <div className='flex items-center justify-center flex-1 my-24'>
              <p className='text-2xl font-medium text-gray-400'>
                {session?.user?.role === 'managing editor'
                  ? 'Oops! No pending draft Announcements for authorization'
                  : 'Oops! No pending draft Announcements '}
              </p>
            </div>
          </section>
        </DashboardWrapper>
      </DashboardContainer>
    )
  }

  return (
    <DashboardContainer>
      <DashboardWrapper>
        <div
          className={clsx(
            'flex items-center justify-between pb-3 border-b-2 border-200',
            {
              ['justify-start']: session?.user?.role !== 'business manager',
            }
          )}
        >
          <ResourceFilter mode={mode} />
          {session.user.role === 'business manager' && (
            <CreateButton
              href='/dashboard/announcements/new'
              label='new announcement'
            />
          )}
        </div>
        <div className='p-2 bg-[#e5d4ff] rounded-lg md:pt-0 overflow-x-auto'>
          <table className='min-w-full overflow-x-scroll'>
            <thead className='rounded-lg'>
              <tr className=''>
                <th className='px-4 pt-4 pb-1 table-fixed'>Announcements</th>
                <th className='px-4 pt-4 pb-1 font-medium w-14'>Date Added</th>
                <th className='px-4 pt-4 pb-1 font-medium'>Status</th>
              </tr>
            </thead>
            <tbody className='text-center bg-white divide-y-2 rounded-sm'>
              {filteredAnnouncements.map((announcement) => (
                <tr className='py-5 text-sm' key={announcement._id}>
                  <td className='px-4 py-4 text-left border border-solid'>
                    <Link
                      href={`/dashboard/announcements/${announcement.slug}`}
                      className='text-center text-[#800080] hover:text-blue-600 font-medium hover:underline ml-2'
                    >
                      {announcement.title}
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
                      {announcement.status === 'published'
                        ? 'Published'
                        : 'Draft'}
                    </span>
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
