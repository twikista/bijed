import Link from 'next/link'

function SideNav() {
  return (
    <aside>
      <div>
        <h1>Admin Dashboard</h1>
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
        </ul>
      </nav>
      <div>
        <p>Sign out</p>
      </div>
    </aside>
  )
}

export default SideNav
