import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import NewAnnouncementForm from '@/components/Dashboard/NewAnnouncementForm'

function NewAnnouncement() {
  const initialState = {
    title: '',
    description: '',
    publishDate: '',
    content: '',
    dueDate: '',
  }

  return (
    <DashboardContainer>
      <DashboardWrapper>
        <NewAnnouncementForm initialState={initialState} />
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default NewAnnouncement
