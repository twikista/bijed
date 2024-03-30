'use client'

import dynamic from 'next/dynamic'
// import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
function TestEditor({ onChange, onBlur, value }) {
  return (
    <div className=' h-[343px]'>
      <ReactQuill
        theme='snow'
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className='h-[300px] w-[500px]'
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
    </div>
  )
}

export default TestEditor
