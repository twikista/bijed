import clsx from 'clsx'

function Form({ handleSubmit, handler, children, props }) {
  return (
    <form
      onSubmit={handleSubmit(handler)}
      noValidate
      className={clsx(`space-y-5 rounded-b-md`, {
        ...props,
      })}
    >
      {children}
    </form>
  )
}

export default Form
