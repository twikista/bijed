'use client'

import dynamic from 'next/dynamic'
// import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
function RichTextEditor({ onChange, onBlur, value, error }) {
  return (
    <div className='h-[320px]'>
      <lable>Announcement content</lable>
      <ReactQuill
        theme='snow'
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className='h-[270px]'
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link'],
            [{ align: [] }],
            [{ color: [] }],
            // ['code-block'],
            // ['clean'],
          ],
        }}
        formats={[
          'header',
          'bold',
          'italic',
          'underline',
          'strike',
          'blockquote',
          'list',
          'bullet',
          'link',
          'image',
          'align',
          'color',
          'code-block',
        ]}
      />
      {error && <span>{error?.message}</span>}
    </div>
  )
}

export default RichTextEditor
