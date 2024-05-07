import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import IssueForm from '@/components/Dashboard/issues/issue-form'
import { getIssue } from '@/lib/data'
// import {useState} from 'react'

async function EditIssue({ params }) {
  console.log('params-', params)
  // const { issue } = params
  // console.log(issue)
  const issue = await getIssue(params.slug)
  // const issueObject = issue.toObject()
  // console.log('issue-', issue)
  console.log(
    'issueYear-',
    new Date(issue.issueYear).toISOString().substring(0, 10)
  )
  const initialFormState = {
    issueNumber: issue?.issueNumber,
    issueYear: new Date(issue?.issueYear).toISOString().substring(0, 10),
    volume: issue?.volume,
  }
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <IssueForm initialFormState={initialFormState} initialValue={issue} />
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default EditIssue
