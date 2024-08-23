'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { createArticle } from '@/lib/actions'
import { uploadPdfToStorage } from '@/lib/firebase/services'

import KeywordInput from './KeywordsInput'
import clsx from 'clsx'
import { handleValidationErrorFromServer } from '@/lib/util'
import TextInput from '../TextInput'
import ArticleAuthorsInput from './ArticleAuthorsInput'
import { newArticleFormSchema } from '@/lib/schema'
import FormWrapper from './FormWrapper'
import { CancelButton } from './Buttons'
import SubmitButton from '../SubmitButton'
import Form from './Form'
import { toast } from 'react-toastify'
import Textarea from '../Textarea'

function NewArticleForm({ initialValue, params }) {
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

  const [errorFromServer, setErrorFromServer] = useState('')
  // const [hideFileInput, setHideFileInput] = useState(true)
  const router = useRouter()

  //submit handler
  const handler = async (data) => {
    // upload article pdf to firebase
    const url = await uploadPdfToStorage(data)
    //upload formData to server to process and persisit in DB
    const { pdfFile, ...dataWithNoPdfFile } = data
    const response = await createArticle(
      JSON.parse(JSON.stringify(dataWithNoPdfFile)),
      url,
      params
    )

    //receive response from server and redirect to appropriate route
    if (response.ok) {
      reset()
      toast.success('Article added sucessfully!!!')
      router.push(`/dashboard/issues/${params?.issue}`)
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
        <Textarea
          name='abstract'
          label='Abstract'
          placeholder='Enter article abstract'
          register={register}
          error={errors?.abstract}
        />
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
        <div className='flex flex-col items-center gap-2 pt-1 md:flex-row'>
          <SubmitButton
            textColor='white'
            bgColor='[#901090]'
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
