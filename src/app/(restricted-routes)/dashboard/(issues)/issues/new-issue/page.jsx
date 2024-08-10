import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import IssueForm from '@/components/Dashboard/issues/issue-form'
import SideNav from '@/components/Dashboard/SideNav'

async function CreateIssue() {
  const initialFormState = { issueNumber: '', volume: '', issueYear: '2023' }
  return (
    <main className='relative flex h-screen'>
      <SideNav />
      <DashboardContainer>
        <DashboardWrapper>
          <IssueForm initialFormState={initialFormState} />
        </DashboardWrapper>
      </DashboardContainer>
    </main>
  )
}

export default CreateIssue
