import { auth } from '../../../auth'
import { logOut } from '@/lib/actions'
import Link from 'next/link'

async function SideNav() {
  const session = await auth()
  console.log('from side nav: ', session?.user)
  return (
    <aside className='bg-[#f0dce3] overflow-y-hidden flex flex-col'>
      <div className='flex flex-col'>
        <span className='inline-block'>BIJED Admin</span>
        <span>Dashboard</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/dashboard'>home</Link>
          </li>
          <li>
            <Link href='/dashboard/issues'>issues</Link>
          </li>
          <li>
            <Link href='/dashboard/articles'>View articles</Link>
          </li>
          <li>
            <Link href='/dashboard/add-issue'>new issue</Link>
          </li>
          <li>
            <Link href='/dashboard/add-article'>new article</Link>
          </li>
          <li>
            <Link href='/dashboard/publish-issue'>publish issue</Link>
          </li>
          <li>
            <Link href='/dashboard/announcements'>Announcements</Link>
          </li>
          <li>
            <Link href='/dashboard/profile'>Profile</Link>
          </li>
          {session?.user?.isAdmin && (
            <li>
              <Link href='/dashboard/admin'>Admin</Link>
            </li>
          )}
        </ul>
      </nav>
      <div>
        <form action={logOut}>
          <button>sign out</button>
        </form>
      </div>
    </aside>
  )
}

export default SideNav
