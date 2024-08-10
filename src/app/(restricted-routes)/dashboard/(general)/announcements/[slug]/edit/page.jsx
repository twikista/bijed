import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import EditAnnouncementForm from '@/components/Dashboard/EditAnnouncementForm'
import { Announcement } from '@/lib/mongoose/models'

async function EditAnnouncement({ params }) {
  const announcement = await Announcement.findOne({ slug: params.slug })

  const parsedAnnouncement = JSON.parse(JSON.stringify(announcement))
  parsedAnnouncement.dueDate = new Date(parsedAnnouncement.dueDate)
    .toISOString()
    .substring(0, 10)
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <EditAnnouncementForm initialState={parsedAnnouncement} />
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default EditAnnouncement
