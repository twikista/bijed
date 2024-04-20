import NewAnnouncementForm from '@/components/Dashboard/NewAnnouncementForm'

function NewAnnouncement() {
  const initialState = {
    title: '',
    description: '',
    publishDate: '',
    content: '',
    dueDate: '',
  }

  return (
    <section>
      <NewAnnouncementForm initialState={initialState} />
    </section>
  )
}

export default NewAnnouncement
