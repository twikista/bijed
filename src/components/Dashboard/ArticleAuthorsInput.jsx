import { useFieldArray } from 'react-hook-form'

function ArticleAuthorsInput({ control, register, error }) {
  const { fields, append, remove } = useFieldArray({ control, name: 'authors' })
  console.log(error)
  return (
    <div>
      <h4>Author&#40;s&#41;</h4>
      <div>
        {fields.map((field, index) => (
          <div key={field.id}>
            <span>{`Author ${index + 1}`}</span>
            <div className='flex flex-col'>
              {/* <label htmlFor='name' className=''>
                Name
              </label> */}
              <div>
                <div>
                  <input
                    type='text'
                    {...register(`authors.${index}.name`)}
                    id='name'
                    placeholder="Enter Author's name"
                  />
                  {error && <span>{error?.[index]?.name?.message}</span>}
                </div>
                <div>
                  <input
                    type='text'
                    {...register(`authors.${index}.affliation`)}
                    id='affliation'
                    placeholder="Enter Author's Affliation"
                  />
                  {error && <span>{error?.[index]?.affliation?.message}</span>}
                </div>
                <div>
                  <input
                    type='text'
                    {...register(`authors.${index}.orchidId`)}
                    id='orchidId'
                    placeholder="Enter Author's Orchid ID"
                  />
                  {error && <span>{error?.[index]?.orchidId?.message}</span>}
                </div>
              </div>
              <div>
                {fields.length > 1 && (
                  <button onClick={() => remove(index)}>remove</button>
                )}
              </div>
            </div>
          </div>
        ))}
        <div>
          <button
            onClick={() => append({ name: '', affliation: '', orchidId: '' })}
          >
            Add Author
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArticleAuthorsInput
