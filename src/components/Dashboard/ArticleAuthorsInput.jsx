import { useFieldArray } from 'react-hook-form'

function ArticleAuthorsInput({ control, register, error }) {
  const { fields, append, remove } = useFieldArray({ control, name: 'authors' })

  return (
    <div>
      <h4>Author&#40;s&#41;</h4>
      <div>
        {fields.map((field, index) => (
          <div key={field.id}>
            <span>{`Author ${index + 1}`}</span>
            <div className='flex flex-col'>
              <label htmlFor='name' className=''>
                Name
              </label>
              <div>
                <input
                  type='text'
                  {...register(`authors.${index}.name`)}
                  id='name'
                  placeholder={placeholder}
                />
                <button onClick={() => remove(index)}>remove</button>
              </div>
              {error && <span>{error?.[index].message}</span>}
              <div>
                <button
                  onClick={() =>
                    append({ name: '', affliation: '', orchidId: '' })
                  }
                >
                  Add Author
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticleAuthorsInput
