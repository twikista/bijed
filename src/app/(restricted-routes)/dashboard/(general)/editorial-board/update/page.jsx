import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import EditEditorialBoardForm from '@/components/Dashboard/EditEditorialBoardForm'
import { EditorialBoard } from '@/lib/mongoose/models'

async function EditEditorialBoard({ params, searchParams }) {
  const editorialBoard = await EditorialBoard.find({
    mode: searchParams?.mode,
  })
  const parsedEditorialBoard = JSON.parse(JSON.stringify(editorialBoard[0]))

  return (
    <DashboardContainer>
      <DashboardWrapper>
        <EditEditorialBoardForm initialState={parsedEditorialBoard} />
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default EditEditorialBoard
