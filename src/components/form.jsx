'use client'

function Form({ children, func }) {
  const submitHandler = async (e) => {
    e.preventDefault()
    await func()
  }
  return <form onSubmit={submitHandler}>{children}</form>
}

export default Formr
