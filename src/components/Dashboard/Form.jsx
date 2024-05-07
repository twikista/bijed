import clsx from 'clsx'

function Form({ handleSubmit, handler, children, props }) {
  return (
    <form
      onSubmit={handleSubmit(handler)}
      noValidate
      className={clsx(`pt-5 pb-8 space-y-5 bg-gray-200 px-7 rounded-b-md`, {
        ...props,
      })}
    >
      {children}
    </form>
  )
}

export default Form
