import { activateUser } from '@/lib/actions'
import { getUser } from '@/lib/data'

async function AccountActivation({ params }) {
  const activateUserWithId = activateUser.bind(null, params?.id)
  // const user = await getUser()
  console.log('params:', params)
  return (
    <div>
      <h1>Complete Account Activation</h1>
      <form action={activateUserWithId}>
        <input
          type='password'
          placeholder='current password'
          name='defaultPassword'
        />
        <input type='password' placeholder='New Password' name='newPassword' />
        {/* <input type='hidden' value={params.id} name='encryptdToken' /> */}
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}

export default AccountActivation
