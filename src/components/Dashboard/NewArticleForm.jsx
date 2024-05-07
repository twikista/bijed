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
import FormWrapper from './FormWrapper'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { CancelButton } from './Buttons'
import SubmitButton from '../SubmitButton'
import Form from './Form'

function NewArticleForm({ initialValue, params }) {
  console.log(`params:${params}`)
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
    <FormWrapper formHeading='Add New Article'>
      {errorFromServer && (
        <div>
          <span>{errorFromServer}</span>
        </div>
      )}
      <Form handleSubmit={handleSubmit} handler={handler}>
        <TextInput
          label='Article Title'
          name='title'
          placeholder='Enter article title'
          register={register}
          error={errors?.title}
        />
        <ArticleAuthorsInput
          control={control}
          register={register}
          error={errors?.authors}
        />
        <TextInput
          label='Article Volume'
          name='volume'
          placeholder='Enter Article Volume'
          register={register}
          error={errors?.volume}
          readOnly={true}
          valueAsNumber={true}
        />
        <TextInput
          label='Article Issue'
          name='issue'
          placeholder='Enter Article issue'
          register={register}
          error={errors?.issue}
          readOnly={true}
          valueAsNumber={true}
        />

        <TextInput
          label='Article Start Page'
          name='startPage'
          placeholder='Enter article start page'
          register={register}
          error={errors?.startPage}
          valueAsNumber={true}
        />
        <TextInput
          label='Article End Page'
          name='endPage'
          placeholder='Enter article end page'
          register={register}
          error={errors?.endPage}
          valueAsNumber={true}
        />
        {/* <div>
          <label htmlFor='abstract' className='inline-block mb-1 '>
            Abstract
          </label>
          <textarea className={clsx(
                        `w-full text-gray-600 pl-3 inline-block py-2  outline-none appearance-none`
                      )}
            name='abstract'
            placeholder='abstract'
            id='abstract'
            {...register('abstract')}
          />
          {errors && <span>{errors?.abstract?.message}</span>}
        </div> */}
        {/* beginning of abstract text input */}
        <div className='flex flex-col'>
          <label htmlFor='name' className='inline-block mb-1'>
            Abstract
          </label>
          <div
            className={clsx(
              `flex border border-gray-300 rounded-md focus-within:border-2 overflow-hidden bg-white h-[300px]`,
              { ['border-red-400']: errors?.abstract }
            )}
          >
            <textarea
              className={clsx(
                `w-full text-gray-600 pl-3 inline-block py-2  outline-none appearance-none resize-none max-h-full`
              )}
              name='abstract'
              placeholder='Enter article abstract'
              id='abstract'
              {...register('abstract')}
            />
            {/* {errors?.abstract && (
              <ExclamationCircleIcon
                className={clsx('w-5 mr-3', {
                  ['text-red-400']: errors?.abstract,
                })}
              />
            )} */}
          </div>
          {errors && (
            <span className='text-red-500 '>{errors?.abstract?.message}</span>
          )}
        </div>
        {/* end of abstrct text input */}

        <KeywordInput
          control={control}
          register={register}
          getValues={getValues}
          error={errors.keywords}
          initialValue={initialValue.keywords}
        />
        <div className='flex flex-col'>
          <input
            type='file'
            {...register('pdfFile')}
            accept='application/pdf'
            // className={clsx({
            //   hidden: params.article !== undefined && hideFileInput,
            // })}
          />
          {errors && (
            <span className='text-red-500 '>{errors?.pdfFile?.message}</span>
          )}
        </div>

        {/* <br />
        <button type='submit'>{isSubmitting ? 'loading...' : 'submit'}</button>
        <Link href={`/dashboard/issues/${params.issue}`}>cancel</Link> */}
        <div className='flex items-center gap-2 pt-1'>
          <SubmitButton
            textColor='white'
            bgColor='901090'
            hoverBgColor='800080'
            mainText='Add Article'
            altText='Adding Article...'
            formSubmitState={isSubmitting}
          />
          <CancelButton
            href={`/dashboard/issues/${params?.issue}`}
            style='bg-red-400 hover:bg-red-500'
            text='Cancel'
          />
        </div>
      </Form>
    </FormWrapper>
  )
}

export default NewArticleForm
