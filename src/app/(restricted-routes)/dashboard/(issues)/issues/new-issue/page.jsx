import DashboardContainer from '@/components/Dashboard/DashboardContainer';
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper';
// import IssueForm from '@/components/Dashboard/issues/issue-form'
import IssueForm from '@/components/FormsV2/issue/IssueForm';
import MobileNav from '@/components/Dashboard/MobileNav';
import SideNav from '@/components/Dashboard/SideNav';

async function CreateIssue() {
  // const initialFormState = { issueNumber: '', volume: '', issueYear: '2023' }
  const initialFormStateV2 = {
    issueNumber: '',
    volume: '',
    issueYear: new Date().getFullYear(),
    issueType: 'regular-issue',
    issueTheme: '',
  };
  return (
    <main className='relative flex h-screen'>
      <SideNav />
      <MobileNav />
      <DashboardContainer>
        <DashboardWrapper>
          <IssueForm initialFormState={initialFormStateV2} />
        </DashboardWrapper>
      </DashboardContainer>
    </main>
  );
}

export default CreateIssue;
