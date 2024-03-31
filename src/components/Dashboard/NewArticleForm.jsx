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
import { articleFileName } from '@/lib/util'
import FileInputToggler from './issues/FileInputToggler'
import TextInput from '../TextInput'
import ArticleAuthorsInput from './ArticleAuthorsInput'
import { articleAuthorSchema } from '@/lib/schema'
import ToggleFileInputField from './ToggleFileInputField'

function NewArticleForm({ initialValue, params }) {
  console.log(`params:${params.published}`)
  const {
    register,
    control,
    handleSubmit,
    getValues,
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: initialValue,
    resolver: zodResolver(articleAuthorSchema),
  })

  // const [formData, setFormData] = useState(initialValue)
  const [hideFileInput, setHideFileInput] = useState(true)
  const router = useRouter()
  const handler = async (data) => {
    if (!initialValue._id) {
      // upload article pdf to firebase
      const url = await uploadPdfToStorage(data)

      //upload formData to server to process and persisit in DB
      const response = await createArticle(
        JSON.parse(JSON.stringify(data)),
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
      console.log('running')
      let url = null
      //upload article pdf to firebase if pdf is changed by user
      if (data.pdfFile !== null) {
        await removePdfFromStorage(initialValue.pdfUrl)
        url = await uploadPdfToStorage(data)
      }
      //upload formData to server to process and persisit in DB
      const response = await updateArticle(
        JSON.parse(JSON.stringify(initialValue)),
        JSON.parse(JSON.stringify(data)),
        url
      )
      //receive response from server and redirect to appropriate route
      if (response.ok) {
        console.log(`params:${params}`)
        params.issue === undefined
          ? router.push(`/dashboard/articles`)
          : router.push(`/dashboard/issues/${params.issue}`)
        setHideFileInput(true)
      }
    }
  }

  return (
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
        error={errors?.abstract}
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
        error={errors?.issuee}
        readOnly={true}
        valueAsNumber={true}
      />

      <TextInput
        label='start page'
        name='startPage'
        placeholder='Enter article start page'
        register={register}
        error={errors.startPage}
        valueAsNumber={true}
      />
      <TextInput
        label='end page'
        name='endPage'
        placeholder='Enter article end page'
        register={register}
        error={errors.endPage}
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
        {errors && <span>{errors?.abstract.message}</span>}
      </div>

      <KeywordInput
        control={control}
        register={register}
        getValues={getValues}
        error={errors.keywords}
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
        <input
          type='file'
          {...register('pdfFile')}
          accept='application/pdf'
          className={clsx({
            hidden: params.article !== undefined && hideFileInput,
          })}
        />
        {params.article !== undefined && !hideFileInput && (
          <ToggleFileInputField
            params={params}
            hideFileInput={hideFileInput}
            setHideFileInput={setHideFileInput}
            setValue={setValue}
          />
        )}
        {errors && <div>{errors?.pdfFile.message}</div>}
      </div>

      <br />
      <button type='submit'>submit</button>
      <Link href={`/dashboard/issues/${params.issue}`}>cancel</Link>
    </form>
  )
}

export default NewArticleForm
