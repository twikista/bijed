'use client'

import { useState } from 'react'
import uniqid from 'uniqid'

function KeywordInput({ formData, setFormData }) {
  const [inputValue, setInputValue] = useState('')
  const removeTag = (index) =>
    setFormData({
      ...formData,
      keywords: formData.keywords.filter((tag, i) => index !== i),
    })
  const onChangeHandler = (e) => {
    setInputValue(e.target.value)
  }

  const onKeyDownHendler = (e) => {
    const trimmedInputvalue = inputValue.trim()
    if (
      e.key === ',' &&
      trimmedInputvalue.length &&
      !formData.keywords.includes(trimmedInputvalue)
    ) {
      e.preventDefault()
      setFormData((prevState) => {
        return {
          ...prevState,
          keywords: [...formData.keywords, inputValue.trim()],
        }
      })
      setInputValue('')
    } else {
      return
    }
  }

  return (
    <div>
      {formData.keywords?.length > 0 &&
        formData.keywords.map((keyword, index) => (
          <div key={uniqid()}>
            <span>{keyword}</span>
            <span onClick={() => removeTag(index)}>x</span>
          </div>
        ))}
      <input
        type='text'
        value={inputValue}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHendler}
      />
    </div>
  )
}

export default KeywordInput
