function Archive() {
  const archive = []
  return (
    <div>
      <h3 className='text-xl font-semibold capitalize font-saira text-[#993264]'>
        Archive
      </h3>
      <div>
        {archive.length ? (
          <article>
            <p>
              Call for papers for Volume 18(1). Due for publication on 30 April
              2024
            </p>
          </article>
        ) : (
          <p className='text-gray-400'>No items</p>
        )}
      </div>
    </div>
  )
}

export default Archive
