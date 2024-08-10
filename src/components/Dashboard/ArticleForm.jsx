'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { createArticle, updateArticle } from '@/lib/actions'
import {
  uploadPdfToStorage,
  removePdfFromStorage,
} from '@/lib/firebase/services'

import Input from '../Input'
import KeywordInput from '../KeywordsInput'
import AuthorsInput from '../articleForm/AuthorsInput'
import Link from 'next/link'
import clsx from 'clsx'
import { articleFileName } from '@/lib/util'
import FileInputToggler from './issues/FileInputToggler'
import FormWrapper from './FormWrapper'

function ArticleForm({ initialValue, params }) {
  const [formData, setFormData] = useState(initialValue)
  const [hideFileInput, setHideFileInput] = useState(true)
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!initialValue._id) {
      // upload article pdf to firebase
      const url = await uploadPdfToStorage(formData)

      //upload formData to server to process and persisit in DB
      const response = await createArticle(
        JSON.parse(JSON.stringify(formData)),
        url,
        params
      )
      //receive response from server and redirect to appropriate route
      if (response.ok) {
        params.issue === undefined
          ? router.push(`/dashboard/articles`)
          : router.push(`/dashboard/issues/${params.issue}`)
        setHideFileInput(true)
      }
    } else {
      let url = null
      //upload article pdf to firebase if pdf is changed by user
      if (formData.pdfFile !== null) {
        await removePdfFromStorage(initialValue.pdfUrl)
        url = await uploadPdfToStorage(formData)
      }
      //upload formData to server to process and persisit in DB
      const response = await updateArticle(
        JSON.parse(JSON.stringify(initialValue)),
        JSON.parse(JSON.stringify(formData)),
        url
      )
      //receive response from server and redirect to appropriate route
      if (response.ok) {
        params.issue === undefined
          ? router.push(`/dashboard/articles`)
          : router.push(`/dashboard/issues/${params.issue}`)
        setHideFileInput(true)
      }
    }
  }

  return (
    <FormWrapper formHeading='Add New Article'>
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

        <Input
          type='text'
          placeholder='volume'
          name='volume'
          value={formData.volume}
          formData={formData}
          setFormData={setFormData}
          readOnly={true}
        />
        <Input
          type='text'
          placeholder='issue'
          name='issue'
          value={formData.issue}
          formData={formData}
          setFormData={setFormData}
          readOnly={true}
        />
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
          onChange={(e) =>
            setFormData({ ...formData, abstract: e.target.value })
          }
        />
        <KeywordInput formData={formData} setFormData={setFormData} />
        <div>
          {params.article !== undefined && hideFileInput && (
            <div>
              <span className='text-gray-400'>
                Article pdf:&nbsp;
                <Link
                  className='underline underline-offset-2 hover:text-blue-500'
                  href={formData.pdfUrl}
                  target='_blank'
                >
                  {articleFileName(formData)}
                </Link>
              </span>
              &nbsp; &#124; &nbsp;
              <FileInputToggler
                params={params}
                hideFileInput={hideFileInput}
                setHideFileInput={setHideFileInput}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          )}
          <input
            type='file'
            onChange={(e) =>
              setFormData({ ...formData, pdfFile: e.target.files[0] })
            }
            accept='application/pdf'
            className={clsx({
              hidden: params.article !== undefined && hideFileInput,
            })}
          />
          {params.article !== undefined && !hideFileInput && (
            <FileInputToggler
              params={params}
              hideFileInput={hideFileInput}
              setHideFileInput={setHideFileInput}
              setFormData={setFormData}
              formData={formData}
            />
          )}
        </div>

        <br />
        <button type='submit'>submit</button>
        <Link href={`/dashboard/issues/${params.issue}`}>cancel</Link>
      </form>
    </FormWrapper>
  )
}

export default ArticleForm
