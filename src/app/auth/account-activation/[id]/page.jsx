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

  return (
    <div className='flex items-center justify-center w-full border'>
      <AccountActivationForm id={params?.id} />
    </div>
  )
}

export default AccountActivation
