import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import NewUserForm from '@/components/auth/NewUserForm'
import SignupForm from '@/components/auth/SignupForm'

function Signup() {
  return (
    <DashboardContainer>
      <DashboardWrapper>
        {/* <SignupForm /> */}
        <NewUserForm />
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default Signup
