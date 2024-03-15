import { getUsers } from '@/lib/data'

async function Users() {
  const response = await getUsers()

  return (
    <div>
      {response.ok && (
        <>
          {response.users.map((user) => (
            <p key={user.email}>{user.email}</p>
          ))}
        </>
      )}
    </div>
  )
}

export default Users
