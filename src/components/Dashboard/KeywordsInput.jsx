'use client'

import { useState } from 'react'
import { useFieldArray } from 'react-hook-form'
// import ReactQuill from 'react-quill'
import TestEditor from '@/components/Dashboard/TestEditor'
import { XCircleIcon } from '@heroicons/react/24/outline'

function KeywordsInput({ control, register, getValues, error }) {
  const { append, fields, remove } = useFieldArray({
    control,
    name: 'keywords',
  })
  const [displayedKeywords, setDisplayedKeyword] = useState([])

  const appendHanlder = () => {
    append({ keyword: '' })
    console.log(getValues('keywords'))
    setDisplayedKeyword(getValues('keywords').filter((i) => i.keyword !== ''))
  }

  const removeHandler = (index) => {
    remove(index)
    setDisplayedKeyword(getValues('keywords').filter((i) => i.keyword !== ''))
  }
  console.log(displayedKeywords)
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
                {error && <span>{error?.[index].message}</span>}
              </div>
            )
        )}
        <button type='button' onClick={appendHanlder}>
          Add
        </button>
      </div>
      {!!displayedKeywords.length &&
        displayedKeywords.map(
          (item, index) =>
            !!item.name && (
              <div key={index}>
                <p key={index} className='px-3 py-1 bg-gray-400 border w-fit'>
                  {item.name}
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
  )
}

export default KeywordsInput
