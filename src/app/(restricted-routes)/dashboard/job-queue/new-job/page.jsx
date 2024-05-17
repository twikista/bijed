import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import Form from '@/components/Dashboard/Form'
import FormWrapper from '@/components/Dashboard/FormWrapper'
import NewJobForm from '@/components/Dashboard/NewJobForm'
import React from 'react'

function NewJob() {
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <NewJobForm />
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default NewJob
