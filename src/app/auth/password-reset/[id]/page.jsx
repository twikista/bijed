import ResetPasswordForm from '@/components/auth/ResetPasswordForm'
import { verifyJWT } from '@/lib/util'
import Link from 'next/link'

function page({ params }) {
  const idToken = params.id
  const { expired: isTokenExpired } = verifyJWT(idToken)

  if (isTokenExpired) {
    return (
      <div>
        <p>
          Your password reset link has expired. Follow the link below to request
          a new reset link
        </p>
        <p>
          Click <Link href='/auth/forgot-password'>here</Link> to request for a
          new password reset link
        </p>
      </div>
    )
  }
  return (
    <div>
      <ResetPasswordForm authToken={idToken} />
    </div>
  )
}

export default page
