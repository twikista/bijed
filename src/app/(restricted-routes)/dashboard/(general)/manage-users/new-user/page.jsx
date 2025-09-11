import DashboardContainer from '@/components/Dashboard/DashboardContainer';
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper';
import NewUserForm from '@/components/auth/NewUserForm';
import NewUserFormV2 from '@/components/auth/NewUserFormV2';

function Signup() {
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <NewUserFormV2 />
      </DashboardWrapper>
    </DashboardContainer>
  );
}

export default Signup;
