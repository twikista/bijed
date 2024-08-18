import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import IssueForm from '@/components/Dashboard/issues/issue-form'
import MobileNav from '@/components/Dashboard/MobileNav'
import SideNav from '@/components/Dashboard/SideNav'
import { getIssue } from '@/lib/data'

async function EditIssue({ params }) {
  const issue = await getIssue(params.issue)
  const initialFormState = {
    issueNumber: issue?.issueNumber,
    issueYear: new Date(issue?.issueYear).toISOString().substring(0, 10),
    volume: issue?.volume,
  }
  return (
    <main className='relative flex h-screen'>
      <SideNav />
      <MobileNav />
      <DashboardContainer>
        <DashboardWrapper>
          <IssueForm initialFormState={initialFormState} initialValue={issue} />
        </DashboardWrapper>
      </DashboardContainer>
    </main>
  )
}

export default EditIssue
