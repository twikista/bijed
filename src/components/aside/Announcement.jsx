function Announcement() {
  const announcements = []
  return (
    <div>
      <h3 className='text-xl font-semibold capitalize font-saira text-[#993264]'>
        Announcements
      </h3>
      <div>
        {announcements.length ? (
          <article>
            <p>
              Call for papers for Volume 18(1). Due for publication on 30 April
              2024
            </p>
          </article>
        ) : (
          <p className='text-gray-400'>No announcements</p>
        )}
      </div>
    </div>
  )
}

export default Announcement
