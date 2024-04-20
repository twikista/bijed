import AnnouncementDetail from '@/components/AnnouncementDetail'
import MainContainer from '@/components/MainContainer'

async function AnnouncementPage({ params }) {
  return (
    <MainContainer>
      <AnnouncementDetail params={params} isProtectedRoute={false} />
    </MainContainer>
  )
}

export default AnnouncementPage
