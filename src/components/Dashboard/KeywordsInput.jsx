'use client'

import { useState, useEffect } from 'react'
import { useFieldArray } from 'react-hook-form'
// import ReactQuill from 'react-quill'
// import TestEditor from '@/components/Dashboard/TestEditor'
import { XCircleIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import uniqid from 'uniqid'

function KeywordsInput({ control, register, getValues, error, initialValue }) {
  console.log('keyworderror-', error?.root)
  console.log('keyworderror-', error?.message)

  const { append, fields, remove } = useFieldArray({
    control,
    name: 'keywords',
  })
  console.log('field-', fields)
  const [displayedKeywords, setDisplayedKeyword] = useState([])

  const appendHanlder = () => {
    append({ keyword: '' })
    console.log('keywords:', getValues('keywords'))
    setDisplayedKeyword(getValues('keywords').filter((i) => i.keyword !== ''))
  }

  const removeHandler = (index) => {
    remove(index)
    setDisplayedKeyword(getValues('keywords').filter((i) => i.keyword !== ''))
  }
  console.log('displayedKeywords:', displayedKeywords)

  useEffect(() => {
    if (initialValue.length !== 0) {
      // append({ keyword: '' })
      setDisplayedKeyword(initialValue)
    }
  }, [])

  return (
    <div className='flex flex-col w-full'>
      <div className='flex gap-3'>
        {fields.map(
          (field, index) =>
            index === fields.length - 1 && (
              // <div key={field.id}>
              //   <input
              //     type='text'
              //     placeholder='Enter Keyword'
              //     {...register(`keywords.${index}.keyword`)}
              //   />
              //   {error && <span>{error?.[index]?.keyword?.message}</span>}
              // </div>
              // start

              <>
                {/* <div> */}
                <div className='flex flex-col flex-1' key={field.id}>
                  <label htmlFor='name' className='inline-block mb-1'>
                    Article Keywords
                  </label>
                  <div className='flex gap-1'>
                    <div
                      className={clsx(
                        `flex border border-gray-300 rounded-md focus-within:border-2 overflow-hidden bg-white flex-1`,
                        { ['border-red-400']: error }
                      )}
                    >
                      <input
                        type='text'
                        placeholder='Enter Keyword'
                        {...register(`keywords.${index}.keyword`)}
                        className={clsx(
                          `w-full text-gray-600 pl-3 inline-block py-2  outline-none appearance-none`
                        )}
                      />
                    </div>
                    <button
                      type='button'
                      onClick={appendHanlder}
                      className='bg-[#901090] text-white hover:bg-[#800080] py-2 px-4 rounded-md'
                    >
                      Add Keyword
                    </button>
                  </div>

                  {error && (
                    <span className='text-red-500 '>
                      {error?.[index]?.keyword?.message}
                    </span>
                  )}
                </div>
              </>
              // end
            )
        )}
      </div>
      {displayedKeywords[0]?.keyword !== '' && (
        <div
          className={clsx('', {
            [`flex gap-2 overflow-x-scroll overflow-y-hidden whitespace-nowrap [&::-webkit-scrollbar]:hidden [&::-webkit-overflow-scrolling]:touch border border-gray-300 bg-gray-300 mt-1 px-2 py-1 rounded-md`]:
              !!displayedKeywords.length,
          })}
        >
          {!!displayedKeywords.length &&
            displayedKeywords.map(
              (item, index) =>
                !!item.keyword && (
                  <div
                    key={index}
                    className='flex gap-2 px-2 py-1 bg-gray-200 border border-gray-300 border-solid rounded-lg w-fit'
                  >
                    <p key={index} className=' w-fit'>
                      {item.keyword}
                    </p>
                    {!!displayedKeywords.length && (
                      <button
                        type='button'
                        onClick={() => removeHandler(index)}
                        className='flex items-center justify-center text-red-400'
                      >
                        <XCircleIcon className='w-5' />
                      </button>
                    )}
                  </div>
                )
            )}
        </div>
      )}
      {error && (
        <p className='text-red-500 '>
          {displayedKeywords.length < 1 ? error?.root?.message : null}
        </p>
      )}
      {error && (
        <p className='text-red-500 '>
          {error?.root === undefined ? error?.message : null}
        </p>
      )}
    </div>
  )
}

export default KeywordsInput
