import { resetPassword } from '@/lib/actions'
import { verifyJWT } from '@/lib/util'
import Link from 'next/link'

function page({ params }) {
  const idToken = params.id
  const { expired: isTokenExpired } = verifyJWT(idToken)
  const resetPasswordWithId = resetPassword.bind(null, idToken)
  if (isTokenExpired) {
    return (
      <div>
        <p>
          Your password reset link has expired. Follow the link below to request
          a new reset link
        </p>
        <Link href='/auth/forgot-password'>Request new password rest link</Link>
      </div>
    )
  }
  return (
    <div>
      <form action={resetPasswordWithId}>
        <p>Enter your new password:</p>
        <input type='password' name='password' />
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}

export default page
