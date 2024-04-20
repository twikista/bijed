'use client'

import { useState, useEffect } from 'react'
import { useFieldArray } from 'react-hook-form'
// import ReactQuill from 'react-quill'
import TestEditor from '@/components/Dashboard/TestEditor'
import { XCircleIcon } from '@heroicons/react/24/outline'

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
  console.log(displayedKeywords)

  useEffect(() => {
    if (initialValue.length !== 0) {
      // append({ keyword: '' })
      setDisplayedKeyword(initialValue)
    }
  }, [])

  return (
    <div>
      <h2>Basic Form component With UseFieldArray</h2>
      <div className='flex gap-3'>
        {fields.map(
          (field, index) =>
            index === fields.length - 1 && (
              <div key={field.id}>
                <input
                  type='text'
                  placeholder='Enter Keyword'
                  {...register(`keywords.${index}.keyword`)}
                />
                {error && <span>{error?.[index]?.keyword?.message}</span>}
              </div>
            )
        )}
        <button type='button' onClick={appendHanlder}>
          Add
        </button>
      </div>
      <div className='flex gap-2'>
        {!!displayedKeywords.length &&
          displayedKeywords.map(
            (item, index) =>
              !!item.keyword && (
                <div
                  key={index}
                  className='flex gap-2 px-2 py-1 border border-gray-300 border-solid rounded-lg w-fit'
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
      {error && (
        <p>{displayedKeywords.length < 1 ? error?.root?.message : null}</p>
      )}
      {error && <p>{error?.root === undefined ? error?.message : null}</p>}
    </div>
  )
}

export default KeywordsInput
