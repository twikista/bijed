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
import { articleFormSchema, editArticleFormSchema } from '@/lib/schema'
import ToggleFileInputField from './ToggleFileInputField'

function EditArticleForm({ initialValue, params }) {
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
    resolver: zodResolver(editArticleFormSchema),
  })

  console.log(errors)
  const [errorFromServer, setErrorFromServer] = useState('')
  const [hideFileInput, setHideFileInput] = useState(true)
  const router = useRouter()

  //submit handler
  const handler = async (data) => {
    //Article edit
    console.log('running')
    let url = null
    //upload article pdf to firebase if pdf is changed by user
    if (data.pdfFile !== null) {
      const response = await removePdfFromStorage(initialValue.pdfUrl)
      console.log('firebase response-', response)
      url = await uploadPdfToStorage(data)
      console.log('url from editform-', url)
    }
    //upload formData to server to process and persisit in DB
    const { pdfFile, ...dataWithNoPdfFile } = data
    const response = await updateArticle(
      JSON.parse(JSON.stringify(initialValue)),
      JSON.parse(JSON.stringify(dataWithNoPdfFile)),
      url
    )
    //receive response from server and redirect to appropriate route
    if (response.ok) {
      reset()
      console.log(`params:${params}`)
      // params.issue === undefined
      //   ? router.push(`/dashboard/articles`)
      //   : router.push(`/dashboard/issues/${params.issue}`)
      router.push(`/dashboard/issues/${params.issue}`)
      setHideFileInput(true)
    } else {
      console.log(response)
      console.log('i failed woefully')
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
          {params.article !== undefined && hideFileInput && (
            <div>
              <span className='text-gray-400'>
                Article pdf:&nbsp;
                <Link
                  className='underline underline-offset-2 hover:text-blue-500'
                  href={getValues('pdfUrl')}
                  target='_blank'
                >
                  {articleFileName(getValues())}
                </Link>
              </span>
              &nbsp; &#124; &nbsp;
              <ToggleFileInputField
                params={params}
                hideFileInput={hideFileInput}
                setHideFileInput={setHideFileInput}
                setValue={setValue}
              />
            </div>
          )}
          {!hideFileInput && (
            <input
              type='file'
              {...register('pdfFile')}
              accept='application/pdf'
              name='pdfFile'
              // className={clsx({
              //   hidden: params.article !== undefined && hideFileInput,
              // })}
            />
          )}
          {params.article !== undefined && !hideFileInput && (
            <ToggleFileInputField
              params={params}
              hideFileInput={hideFileInput}
              setHideFileInput={setHideFileInput}
              setValue={setValue}
            />
          )}
          {errors && <div>{errors?.pdfFile?.message}</div>}
        </div>

        <br />
        <button type='submit'>
          {isSubmitting ? 'updating Artice...' : 'Submit'}
        </button>
        <Link href={`/dashboard/issues/${params.issue}`}>cancel</Link>
      </form>
    </div>
  )
}

export default EditArticleForm
