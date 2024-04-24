'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { createArticle, updateArticle } from '@/lib/actions'
import {
  uploadPdfToStorage,
  removePdfFromStorage,
} from '@/lib/firebase/services'

import Input from '../Input'
import KeywordInput from './KeywordsInput'
import Link from 'next/link'
import clsx from 'clsx'
import { articleFileName, handleValidationErrorFromServer } from '@/lib/util'
import FileInputToggler from './issues/FileInputToggler'
import TextInput from '../TextInput'
import ArticleAuthorsInput from './ArticleAuthorsInput'
import { articleFormSchema, newArticleFormSchema } from '@/lib/schema'
import ToggleFileInputField from './ToggleFileInputField'

function NewArticleForm({ initialValue, params }) {
  console.log(`params:${params.published}`)
  console.log('initialValue', initialValue)
  const {
    register,
    control,
    handleSubmit,
    getValues,
    reset,
    setError,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: initialValue,
    resolver: zodResolver(newArticleFormSchema),
  })

  console.log(errors)
  const [errorFromServer, setErrorFromServer] = useState('')
  const [hideFileInput, setHideFileInput] = useState(true)
  const router = useRouter()

  //submit handler
  const handler = async (data) => {
    console.log('ddata', data)
    console.log('i ran from new article form')
    // upload article pdf to firebase
    const url = await uploadPdfToStorage(data)
    console.log(url)
    //upload formData to server to process and persisit in DB
    const { pdfFile, ...dataWithNoPdfFile } = data
    console.log('dataWithNoPdfFile', dataWithNoPdfFile)
    const response = await createArticle(
      JSON.parse(JSON.stringify(dataWithNoPdfFile)),
      url,
      params
    )

    //receive response from server and redirect to appropriate route
    if (response.ok) {
      reset()
      // params.issue === undefined
      //   ? router.push(`/dashboard/articles`)
      //   : router.push(`/dashboard/issues/${params.issue}`)
      router.push(`/dashboard/issues/${params.issue}`)
    } else {
      if (response?.errorType === 'validationError') {
        const formfields = {
          title: ' title',
          authors: 'authors',
          volume: 'volume',
          issue: 'issue',
          startPage: 'startPage',
          endPage: 'endPage',
          abstract: 'abstract',
          keywords: 'keuwords',
          pdfFile: 'pdfFile',
        }
        handleValidationErrorFromServer(response, formfields, setError)
      }
      if (response?.errorType === 'other') {
        setErrorFromServer(response.error)
      }
    }
  }

  return (
    <div>
      {errorFromServer && (
        <div>
          <span>{errorFromServer}</span>
        </div>
      )}
      <form onSubmit={handleSubmit(handler)}>
        <TextInput
          label='title'
          name='title'
          placeholder='Enter Article title'
          register={register}
          error={errors?.title}
        />
        <ArticleAuthorsInput
          control={control}
          register={register}
          error={errors?.authors}
        />
        <TextInput
          label='volume'
          name='volume'
          placeholder='Enter Article Volume'
          register={register}
          error={errors?.volume}
          readOnly={true}
          valueAsNumber={true}
        />
        <TextInput
          label='issue'
          name='issue'
          placeholder='Enter Article issue'
          register={register}
          error={errors?.issue}
          readOnly={true}
          valueAsNumber={true}
        />

        <TextInput
          label='start page'
          name='startPage'
          placeholder='Enter article start page'
          register={register}
          error={errors?.startPage}
          valueAsNumber={true}
        />
        <TextInput
          label='end page'
          name='endPage'
          placeholder='Enter article end page'
          register={register}
          error={errors?.endPage}
          valueAsNumber={true}
        />
        <div>
          <label htmlFor='abstract' className=''>
            Abstract
          </label>
          <textarea
            name='abstract'
            placeholder='abstract'
            id='abstract'
            {...register('abstract')}
          />
          {errors && <span>{errors?.abstract?.message}</span>}
        </div>

        <KeywordInput
          control={control}
          register={register}
          getValues={getValues}
          error={errors.keywords}
          initialValue={initialValue.keywords}
        />
        <div>
          <input
            type='file'
            {...register('pdfFile')}
            accept='application/pdf'
            // className={clsx({
            //   hidden: params.article !== undefined && hideFileInput,
            // })}
          />
          {errors && <div>{errors?.pdfFile?.message}</div>}
        </div>

        <br />
        <button type='submit'>{isSubmitting ? 'loading...' : 'submit'}</button>
        <Link href={`/dashboard/issues/${params.issue}`}>cancel</Link>
      </form>
    </div>
  )
}

export default NewArticleForm