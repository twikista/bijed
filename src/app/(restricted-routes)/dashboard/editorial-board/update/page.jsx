import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import EditAnnouncementForm from '@/components/Dashboard/EditAnnouncementForm'
import EditEditorialBoardForm from '@/components/Dashboard/EditEditorialBoardForm'
import { Announcement, EditorialBoard } from '@/lib/mongoose/models'

async function EditEditorialBoard() {
  const editorialBoardArray = await EditorialBoard.find({})
  const editorialBoard = editorialBoardArray[0]
  console.log('editorial board-', editorialBoard)
  const parsedEditorialTeam = JSON.parse(JSON.stringify(editorialBoard))
  // parsedAnnouncement.dueDate = new Date(parsedAnnouncement.dueDate)
  //   .toISOString()
  //   .substring(0, 10)
  // // const { slug, ...initialState } = parsedAnnouncement
  // console.log('edited announcement-', parsedAnnouncement)
  // console.log(
  //   'setdate-',
  //   new Date(parsedAnnouncement.dueDate).toISOString().substring(0, 10)
  // )

  return (
    <DashboardContainer>
      <DashboardWrapper>
        <EditEditorialBoardForm initialState={parsedEditorialTeam} />
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default EditEditorialBoard
