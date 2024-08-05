function Authors({ authors, withAffliation }) {
  if (withAffliation)
    return (
      <div className='space-y-[5px]'>
        {authors.map(({ name, affliation, orchidId, _id }) => (
          <div key={_id} className=''>
            <div className='flex items-center space-x-1'>
              <p className='font-semibold'>{name}</p>
              {/* {orchidId && (
                <a href='https://orcid.org/' target='_blank'>
                  <Image
                    src={orcidid}
                    alt='orcid id logo'
                    width={16}
                    height={16}
                  />
                </a>
              )}
              {orchidId && (
                <a href='https://orcid.org/' target='_blank'>
                  <Image
                    src={googleScholar}
                    alt='orcid id logo'
                    width={16}
                    height={16}
                  />
                </a>
              )} */}
            </div>
            <p className='text-neutral-500'>{affliation}</p>
          </div>
        ))}
      </div>
    )
  return (
    <div>
      {authors.map((author, index) => (
        <span
          key={author._id}
          className='text-xs font-medium sm:text-sm text-neutral-600'
        >{`${author.name}${index !== authors.length - 1 ? ', ' : ''}`}</span>
      ))}
    </div>
  )
}

export default Authors
