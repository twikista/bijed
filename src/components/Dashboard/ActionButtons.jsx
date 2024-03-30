'use client'

function ActionButtons({ id, action, children }) {
  return (
    <section>
      <button type='button' onClick={() => action(id)} className='bg-blue-500'>
        {children}
      </button>
    </section>
  )
}

export default ActionButtons
