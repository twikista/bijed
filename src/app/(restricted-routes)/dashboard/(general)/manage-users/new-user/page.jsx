import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import NewUserForm from '@/components/auth/NewUserForm'

function Signup() {
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <NewUserForm />
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default Signup
