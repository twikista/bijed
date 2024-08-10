'use client'
import { publishIssue } from '@/app/api/actions/actions'

function Button({ issueRef }) {
  return (
    <div>
      <button onClick={() => publishIssue(issueRef)}>Publish Issue</button>
    </div>
  )
}

export default Button
