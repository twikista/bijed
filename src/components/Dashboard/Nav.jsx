import Link from 'next/link'

export function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href='/dashboard/add-issue'>Add Issue</Link>
          </li>
          <li>
            <Link href='/dashboard/add-article'>Add Article</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
