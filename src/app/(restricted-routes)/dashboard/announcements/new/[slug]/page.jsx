import { fetchAnnouncement } from '@/lib/data'

async function Announcement({ params }) {
  const { slug } = params
  const announcement = await fetchAnnouncement(slug)

  return (
    <section>
      <h2>{announcement.title}</h2>
    </section>
  )
}

export default Announcement
