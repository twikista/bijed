import DashboardContainer from '@/components/Dashboard/DashboardContainer'
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
      {/* <form action={addIssue}>
        <input type='text' placeholder='issue number' name='issueNumber' />
        <input type='text' placeholder='volume' name='volume' />
        <input type='date' name='date' />
        <input type='submit' value='submit' />
      </form> */}

      <IssueForm initialFormSate={initialFormState} />
    </DashboardContainer>
  )
}

export default CreateIssue
