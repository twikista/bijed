import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import IssueForm from '@/components/Dashboard/issues/issue-form'
import { getIssue } from '@/lib/data'
// import {useState} from 'react'

async function EditIssue({ params }) {
  console.log(params)
  // const { issue } = params
  // console.log(issue)
  const issue = await getIssue(params.issue)
  // const issueObject = issue.toObject()
  console.log(issue)
  return (
    <DashboardContainer>
      <IssueForm initialValue={issue} />
    </DashboardContainer>
  )
}

export default EditIssue
