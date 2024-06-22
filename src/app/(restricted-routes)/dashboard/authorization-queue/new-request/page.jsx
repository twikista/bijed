import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import Form from '@/components/Dashboard/Form'
import FormWrapper from '@/components/Dashboard/FormWrapper'
import NewJobForm from '@/components/Dashboard/NewJobForm'
import { Announcement, EditorialBoard, Issue } from '@/lib/mongoose/models'
import React from 'react'

const getResource = async (slug, resourceType) => {
  if (resourceType === 'announcements') {
    const resource = await Announcement.find({ slug: slug })
    return resource
  }
  if (resourceType === 'issues') {
    const resource = await Issue.find({ slug: slug })
    return resource
  } else {
    const resource = await EditorialBoard.find({ slug: slug })
    return resource[0]
  }
}

async function NewJob({ searchParams: { item, type } }) {
  let params = {}
  // for (let [key, value] of searchParams.entries()) {
  //   console.log(key, value)
  //   params[key] = value
  // }
  const targetResource = await getResource(item, type)
  console.log('targetResource------', targetResource)
  const [{ title, ref, slug }] = targetResource
  console.log('params from server----', item)
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <NewJobForm
          resourceData={{ title, ref, slug, resource: 'announcements' }}
        />
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default NewJob
