'use client'
function AuthorsInput({ formData, setFormData }) {
  const handleChange = (e, i) => {
    const { name, value } = e.target
    const newAuthors = [...formData.authors]
    newAuthors[i][name] = value
    setFormData({ ...formData, authors: newAuthors })
  }

  const addAuthor = () => {
    const newAuthors = [...formData.authors, { name: '', affliation: '' }]
    setFormData({ ...formData, authors: newAuthors })
  }

  const removeAuthor = (i) => {
    const newAuthors = formData.authors.filter((author, index) => i === index)
    setFormData({ ...formData, authors: newAuthors })
  }

  return (
    <div>
      {formData.authors.map((author, index) => (
        <div key={index}>
          <span>{`Author ${index + 1}`}</span>
          <div>
            <input
              type='text'
              name='name'
              placeholder='author&#39; name'
              value={author.name}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div>
            <input
              type='text'
              name='affliation'
              placeholder='author&#39;s affliation'
              value={author.affliation}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div>
            <input
              type='text'
              name='orchidId'
              placeholder='orchid Id'
              value={author.orchidId}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div>
            {formData.authors.length > 1 && (
              <button type='button' onClick={() => removeAuthor(index)}>
                remove
              </button>
            )}
          </div>
        </div>
      ))}
      <button type='button' onClick={addAuthor}>
        add author
      </button>
    </div>
  )
}

export default AuthorsInput
