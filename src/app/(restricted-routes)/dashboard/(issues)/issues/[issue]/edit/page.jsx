import DashboardContainer from '@/components/Dashboard/DashboardContainer';
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper';
import IssueForm from '@/components/FormsV2/issue/IssueForm';
import MobileNav from '@/components/Dashboard/MobileNav';
import SideNav from '@/components/Dashboard/SideNav';
import { getIssue } from '@/lib/actionsV2/issues';

async function EditIssue({ params }) {
  const issue = await getIssue(params.issue);
  const initialFormState = {
    issueNumber: issue?.issueNumber,
    issueYear: issue?.issueYear,
    volume: issue?.volume,
    issueType: issue?.issueType,
    issueTheme: issue?.issueTheme,
    id: JSON.stringify(issue?._id),
  };
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
  );
}

export default EditIssue;
