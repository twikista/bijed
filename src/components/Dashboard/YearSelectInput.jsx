'use client'
import React from 'react'
import { useController, useFormContext } from 'react-hook-form'

import react from '@heroicons/react'
import dynamic from 'next/dynamic'
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
// const DatePicker = dynamic(() => import('react-datepicker'), { ssr: false })
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'

function YearSelectInput({ control, error, defaultIssueYear }) {
  console.log(error)
  const { field } = useController({
    control,
    name: 'issueYear',
    defaultValue: `${defaultIssueYear}`,
  })
  const renderYearContent = (year) => {
    const tooltipText = `Tooltip for year: ${year}`
    return <span title={tooltipText}>{year}</span>
  }
  // console.log('field', field)
  return (
    <div className='flex flex-col'>
      <label htmlFor={'issueYear'} className=''>
        Issue year
      </label>
      {/* <DatePicker
        selected={value}
        renderYearContent={renderYearContent}
        showYearPicker
        dateFormat='yyyy'
        onChange={onChange}
        placeholderText={2024}
        // name={name}
      /> */}
      <DatePicker
        selected={field.value}
        renderYearContent={renderYearContent}
        showYearPicker
        dateFormat='yyyy'
        onChange={field.onChange}
        // placeholderText={2024}
        name={field.name}
      />
      {error && <span>{error?.message}</span>}
    </div>
  )
}

export default YearSelectInput
