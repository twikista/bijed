import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import IssueForm from '@/components/Dashboard/issues/issue-form'
import { Issue } from '@/lib/mongoose/models'
// import { addIssue } from '@/app/api/actions/actions'
// import {useState} from 'react'

async function CreateIssue({ params: { ref } }) {
  const issue = await Issue.findOne({ ref })
  //   const [formData, setFormData] = useState(initialState)
  console.log('issue id-', issue?._id === undefined)
  const initialFormState =
    issue?._id === undefined
      ? { issueNumber: '', volume: '', issueYear: '2023' }
      : JSON.parse(JSON.stringify(issue))

  console.log('initialFormState-', initialFormState)
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <IssueForm initialFormSate={initialFormState} />
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default CreateIssue
