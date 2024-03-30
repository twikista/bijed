'use client'

import { useState } from 'react'
import { Controller, useForm, useFieldArray } from 'react-hook-form'
// import ReactQuill from 'react-quill'
import TestEditor from '@/components/Dashboard/TestEditor'

function BasicForm() {
  const { control, register, handleSubmit, getValues } = useForm()
  const { append, fields, remove } = useFieldArray({ control, name: 'base' })
  const [values, setValues] = useState([])

  const subHandler = (data) => {
    console.log(data)
  }

  const appendHanlder = () => {
    append({ name: '' })
    console.log(getValues('base'))
    setValues(getValues('base').filter((i) => i.name !== ''))
  }

  const removeHandler = (index) => {
    remove(index)
    setValues(getValues('base').filter((i) => i.name !== ''))
  }
  console.log(values)
  return (
    <div>
      <form onSubmit={handleSubmit(subHandler)}>
        <h2>Basic Form component With UseFieldArray</h2>
        <div>
          <input type='email' placeholder='email' {...register('email')} />
        </div>
        <div>
          {fields.map(
            (field, index) =>
              index === fields.length - 1 && (
                <div key={field.id}>
                  <input
                    type='text'
                    placeholder='text'
                    {...register(`base.${index}.name`)}
                  />
                </div>
              )
          )}
          <button type='button' onClick={appendHanlder}>
            Add Field
          </button>
        </div>
        {!!values.length &&
          values.map(
            (val, index) =>
              !!val.name && (
                <div key={index}>
                  <p key={index} className='px-3 py-1 bg-gray-400 border w-fit'>
                    {val.name}
                  </p>
                  {!!values.length && (
                    <button
                      type='button'
                      onClick={() => removeHandler(index)}
                      className='inline-flex items-center justify-center w-5 h-5 text-gray-100 bg-red-400 rounded-full'
                    >
                      x
                    </button>
                  )}
                </div>
              )
          )}
        <div>
          <Controller
            control={control}
            name='ReactQuill'
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TestEditor onChange={onChange} onBlur={onBlur} value={value} />
            )}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default BasicForm
