'use client'
function ToggleFileInputField({
  params,
  hideFileInput,
  setHideFileInput,
  setValue,
}) {
  const clickHandler = () => {
    setHideFileInput(!hideFileInput)
    if (params.article !== undefined && !hideFileInput) {
      setValue('pdfFile', null)
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

export default ToggleFileInputField
