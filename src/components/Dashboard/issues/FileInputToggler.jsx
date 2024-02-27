function FileInputToggler({ params, hideFileInput, setHideFileInput }) {
  return (
    <>
      <button
        onClick={() => setHideFileInput(!hideFileInput)}
        className='text-blue-500 hover:underline'
      >
        {params.article !== undefined && hideFileInput
          ? 'change file'
          : 'cancel'}
      </button>
    </>
  )
}

export default FileInputToggler
