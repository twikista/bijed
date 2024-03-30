import { getUser, getUsers } from '@/lib/data'
import Link from 'next/link'

async function AdminPage() {
  const response = await getUsers()

  return (
    <div>
      <Link href='/auth/new-user'>create user</Link>
      {response.ok && (
        <>
          {response.users.map((user) => (
            <div className='flex gap-4' key={user.email}>
              <p>{user.email}</p>
              <p>{user.isAdmin ? 'Website Admin' : 'Business Manager'}</p>
              {!user.isAdmin && <button>remove</button>}
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default AdminPage
