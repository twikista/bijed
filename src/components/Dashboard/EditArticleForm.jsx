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
import FormWrapper from './FormWrapper'
import SubmitButton from '../SubmitButton'
import { CancelButton } from './Buttons'

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
    <FormWrapper formHeading='Edit Article'>
      {errorFromServer && (
        <div>
          <span>{errorFromServer}</span>
        </div>
      )}
      <form
        onSubmit={handleSubmit(handler)}
        className='px-5 pt-8 pb-5 space-y-5 rounded-b-md'
      >
        <TextInput
          label='Article Title'
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
          label='Article volume'
          name='volume'
          placeholder='Enter Article Volume'
          register={register}
          error={errors?.volume}
          readOnly={true}
          valueAsNumber={true}
        />
        <TextInput
          label='Article issue'
          name='issue'
          placeholder='Enter Article issue'
          register={register}
          error={errors?.issue}
          readOnly={true}
          valueAsNumber={true}
        />

        <TextInput
          label='Article start page'
          name='startPage'
          placeholder='Enter article start page'
          register={register}
          error={errors?.startPage}
          valueAsNumber={true}
        />
        <TextInput
          label='Article end page'
          name='endPage'
          placeholder='Enter article end page'
          register={register}
          error={errors?.endPage}
          valueAsNumber={true}
        />
        {/* <div>
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
        <div className='flex items-center gap-2 pt-1'>
          <SubmitButton
            textColor='white'
            bgColor='901090'
            hoverBgColor='800080'
            mainText='Update Article'
            altText='Updating...'
            formSubmitState={isSubmitting}
          />
          <CancelButton
            href={`/dashboard/issues/${params?.issue}`}
            style='bg-red-400 hover:bg-red-500'
            text='Cancel'
          />
        </div>

        {/* <br />
        <button type='submit'>
          {isSubmitting ? 'updating Artice...' : 'Submit'}
        </button>
        <Link href={`/dashboard/issues/${params.issue}`}>cancel</Link> */}
      </form>
    </FormWrapper>
  )
}

export default EditArticleForm
