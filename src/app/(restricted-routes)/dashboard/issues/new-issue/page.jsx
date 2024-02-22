import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import IssueForm from '@/components/Dashboard/issues/issue-form'
// import { addIssue } from '@/app/api/actions/actions'
// import {useState} from 'react'

function CreateIssue() {
  //   const [formData, setFormData] = useState(initialState)
  return (
    <DashboardContainer>
      {/* <form action={addIssue}>
        <input type='text' placeholder='issue number' name='issueNumber' />
        <input type='text' placeholder='volume' name='volume' />
        <input type='date' name='date' />
        <input type='submit' value='submit' />
      </form> */}

      <IssueForm initialValue={{ issueNumber: '', volume: '' }} />
    </DashboardContainer>
  )
}

export default CreateIssue
