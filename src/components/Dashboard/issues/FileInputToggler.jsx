'use client'
function FileInputToggler({
  params,
  hideFileInput,
  setHideFileInput,
  setFormData,
}) {
  const clickHandler = () => {
    setHideFileInput(!hideFileInput)
    if (params.article !== undefined && !hideFileInput) {
      setFormData((prevState) => {
        return { ...prevState, pdfFile: null }
      })
    }
  }
  return (
    <>
      <button onClick={clickHandler} className='text-blue-500 hover:underline'>
        {params.article !== undefined && hideFileInput
          ? 'change file'
          : 'cancel'}
      </button>
    </>
  )
}

export default FileInputToggler
