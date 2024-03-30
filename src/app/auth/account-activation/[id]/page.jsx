import { verifyJWT } from '@/lib/util'
import AccountActivationForm from '@/components/auth/AccountActivationForm'

async function AccountActivation({ params }) {
  const idToken = params.id
  const { expired: isTokenExpired } = verifyJWT(idToken)
  if (isTokenExpired) {
    return (
      <div>
        <p>
          Your activation link has expired. Please contact the site
          administrator.
        </p>
      </div>
    )
  }
  // const user = await getUser()
  console.log('params:', params)
  return (
    <div>
      <AccountActivationForm id={params?.id} />
    </div>
  )
}

export default AccountActivation
