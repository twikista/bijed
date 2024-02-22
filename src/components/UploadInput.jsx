'use client'

import { useState } from 'react'
import { uploadPdf } from '@/lib/firebase/uploadPdf'

import Input from './Input'
import KeywordInput from './KeywordsInput'
import AuthorsInput from './articleForm/AuthorsInput'
// import { uploadArticle } from '@/services/services'
import { createArticle } from '@/app/api/actions/actions'

function UploadInput() {
  const initialState = {
    title: '',
    authors: [{ name: '', affliation: '', orchidId: '' }],
    volume: '',
    issue: '',
    startPage: '',
    endPage: '',
    abstract: '',
    keywords: [],
    pdfFile: null,
  }
  // const [fileToUpload, setFileToUpload] = useState(null)
  const [formData, setFormData] = useState(initialState)
  // console.log(process.env.NEXT_PUBLIC_MONGO_URI)
  // let data = new FormData()
  // console.log(data)
  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setFormData({ ...formData, [name]: [value] })
  // }
  // console.log(fileToUpload)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(formData)
    // if (!formData.pdfFile) return
    const fileName = `bijed-vol-${formData.volume}(${formData.issue})-pg${formData.startPage}-${formData.endPage}.pdf`
    const url = await uploadPdf(formData.pdfFile, fileName)
    // console.log(url)
    // for (let key in formData) {
    //   // if (key === 'pdfFile') console.log('yes')
    //   // data.append(`${key}`, formData[key])
    //   data.append(`${key}`, `${formData[key]}`)
    // }
    let { pdfFile, ...articleData } = formData
    articleData.pdfUrl = url
    articleData.slug = `${formData.startPage}-${formData.endPage}`
    articleData.ref = `volume-${formData.volume}-issue-${formData.issue}`
    articleData.published = false
    articleData.publishDate = new Date()
    // setFormData({ ...formData, pdfFile: url })
    // await uploadArticle(articleData)
    await createArticle(articleData)
    // console.log(url)
    // setFileToUpload(url)
    // console.log(formData)
    // setFormData(initialState)
    console.log(articleData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='title'
        name='title'
        value={formData.title}
        formData={formData}
        setFormData={setFormData}
      />
      <AuthorsInput formData={formData} setFormData={setFormData} />
      {/* <Input
        type='text'
        placeholder='author'
        name='author'
        value={formData.author}
        formData={formData}
        setFormData={setFormData}
      /> */}
      <Input
        type='text'
        placeholder='volume'
        name='volume'
        value={formData.volume}
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        type='text'
        placeholder='issue'
        name='issue'
        value={formData.issue}
        formData={formData}
        setFormData={setFormData}
      />
      {/* <Input
        type='date'
        placeholder='Publish Date'
        name='publishDate'
        value={formData.publishDate}
        formData={formData}
        setFormData={setFormData}
      /> */}
      <Input
        type='text'
        placeholder='start page'
        name='startPage'
        value={formData.startPage}
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        type='text'
        placeholder='end page'
        name='endPage'
        value={formData.endPage}
        formData={formData}
        setFormData={setFormData}
      />
      <textarea
        name='abstract'
        placeholder='abstract'
        value={formData.abstract}
        onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
      />
      <KeywordInput formData={formData} setFormData={setFormData} />
      <input
        type='file'
        onChange={(e) =>
          setFormData({ ...formData, pdfFile: e.target.files[0] })
        }
        accept='application/pdf'
      />
      <br />
      <button type='submit'>submit</button>
    </form>
  )
}

export default UploadInput
