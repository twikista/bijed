import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import EditAnnouncementForm from '@/components/Dashboard/EditAnnouncementForm'
import EditEditorialBoardForm from '@/components/Dashboard/EditEditorialBoardForm'
import { Announcement, EditorialBoard } from '@/lib/mongoose/models'

async function EditEditorialBoard({ params, searchParams }) {
  const editorialBoard = await EditorialBoard.find({
    // slug: params?.slug,
    mode: searchParams?.mode,
  })
  // const editorialBoard = editorialBoardArray[0]
  console.log('editorial board-', editorialBoard)
  console.log('params-----', params)
  console.log('search params-------', searchParams)
  const parsedEditorialBoard = JSON.parse(JSON.stringify(editorialBoard[0]))
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
        <EditEditorialBoardForm initialState={parsedEditorialBoard} />
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default EditEditorialBoard
