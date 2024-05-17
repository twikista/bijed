import { useFieldArray } from 'react-hook-form'
import clsx from 'clsx'
import {
  ExclamationCircleIcon,
  PlusIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Tooltip } from 'react-tooltip'

function ArticleAuthorsInput({ control, register, error }) {
  const { fields, append, remove } = useFieldArray({ control, name: 'authors' })
  console.log(error)
  return (
    <fieldset
      className={clsx(``, {
        // ['border border-gray-300']: fields.length > 1,
      })}
    >
      {/* {fields.length > 1 && <legend className='ml-3'>Authors</legend>} */}
      <div>
        <div className='space-y-6'>
          {fields.map((field, index) => (
            <div key={field.id}>
              {fields.length > 1 && (
                <div className='flex items-center gap-1 mb-1'>
                  <span className='font-medium'>{`Author-${index + 1}`}</span>
                  {/* <span className='w-[2px] bg-gray-400 h-5' /> */}
                  <button
                    type='button'
                    data-tooltip-id='delete-author'
                    data-tooltip-content={`Remove Author-${index + 1}`}
                    data-tooltip-place='top'
                    onClick={() => remove(index)}
                    className='flex items-center justify-center w-4 h-4 p-[1px] text-red-500 bg-transparent border border-red-500 rounded-full hover:bg-red-500 hover:text-white'
                  >
                    <XMarkIcon className='w-3' />
                    <Tooltip id='delete-author' />
                  </button>
                </div>
              )}
              <div className='flex flex-col'>
                {/* <div> */}
                <div className='flex flex-col'>
                  <label htmlFor='name' className='inline-block mb-1'>
                    {fields.length > 1 ? 'Name' : 'Author Name'}
                  </label>
                  <div
                    className={clsx(
                      `flex border border-gray-300 rounded-md focus-within:border-2 overflow-hidden bg-white`,
                      { ['border-red-400']: error }
                    )}
                  >
                    <input
                      className={clsx(
                        `w-full text-gray-600 pl-3 inline-block py-2  outline-none appearance-none`
                      )}
                      type='text'
                      {...register(`authors.${index}.name`)}
                      id='name'
                      placeholder="Enter Author's name (Surname First)"
                    />
                    {error && (
                      <ExclamationCircleIcon
                        className={clsx('w-5 mr-3', {
                          ['text-red-400']: error,
                        })}
                      />
                    )}
                  </div>

                  {error && (
                    <span className='text-red-500 '>
                      {error?.[index]?.name?.message}
                    </span>
                  )}
                </div>
                {/* Author's affliation input */}
                <div className='flex flex-col'>
                  <label htmlFor='affliation' className='inline-block mb-1 '>
                    {fields.length > 1 ? 'Affliation' : 'Author Affliation'}
                  </label>
                  <div
                    className={clsx(
                      `flex border border-gray-300 rounded-md focus-within:border-2 overflow-hidden bg-white`,
                      { ['border-red-400']: error }
                    )}
                  >
                    <input
                      className={clsx(
                        `w-full text-gray-600 pl-3 inline-block py-2  outline-none appearance-none`
                      )}
                      type='text'
                      {...register(`authors.${index}.affliation`)}
                      id='affliation'
                      placeholder="Enter Author's Affliation"
                    />
                    {error && (
                      <ExclamationCircleIcon
                        className={clsx('w-5 mr-3', {
                          ['text-red-400']: error,
                        })}
                      />
                    )}
                  </div>

                  {error && (
                    <span className='text-red-500 '>
                      {error?.[index]?.affliation?.message}
                    </span>
                  )}
                </div>
              </div>
              {/* <div>
                {fields.length > 1 && (
                  <button type='button' onClick={() => remove(index)}>
                    remove
                  </button>
                )}
              </div> */}
            </div>
          ))}
        </div>
        <div className='flex justify-end mt-[5px]'>
          <button
            type='button'
            className='text-white bg-[#901090] flex gap-[2px] rounded-[4px] px-2 hover:bg-[#800080] py-1 items-center justify-center'
            onClick={() => append({ name: '', affliation: '', orchidId: '' })}
          >
            <PlusIcon className='w-4 fill-current' />
            <span>Add Author</span>
          </button>
        </div>
      </div>
    </fieldset>
  )
}

export default ArticleAuthorsInput
