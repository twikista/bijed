import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import IssueForm from '@/components/Dashboard/issues/issue-form'
import { getIssue } from '@/lib/data'
// import {useState} from 'react'

async function EditIssue({ params }) {
  const {
    slug: [ref],
  } = params
  console.log(ref)
  const issue = await getIssue(ref)
  // const issueObject = issue.toObject()
  console.log(issue)
  return (
    <DashboardContainer>
      <IssueForm initialValue={issue} />
    </DashboardContainer>
  )
}

export default EditIssue
