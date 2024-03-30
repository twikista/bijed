import { auth } from '../../../../../auth'

async function Profile() {
  const session = await auth()
  const loggedInUser = session?.user
  return (
    <div>
      <p>{`first Name: ${
        loggedInUser.isAdmin ? 'Platform' : loggedInUser.firstName
      }`}</p>
      <p>{`last Name: ${
        loggedInUser.isAdmin ? 'Admistrator' : loggedInUser.lastName
      }`}</p>
      <p>{`Email:  ${loggedInUser.email}`}</p>
      <p>{`role: ${loggedInUser.isAdmin ? 'Admin' : 'Journal Manager'}`}</p>
    </div>
  )
}

export default Profile
