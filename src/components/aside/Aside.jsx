import Announcement from './Announcement'
import Archive from './Archive'

function Aside() {
  return (
    <aside className='h-full w-full lg:w-[300px] p-4 text-neutral-600  border-neutral-300 rounded-sm] border lg:border-0 rounded-md mt-5 lg:mt-0 pt-8 mb-10 lg:mb-0'>
      <div className='space-y-16'>
        <Announcement />
        <Archive />
      </div>
    </aside>
  )
}

export default Aside
