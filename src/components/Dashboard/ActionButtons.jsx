'use client'

function ActionButtons({ id, action }) {
  return (
    <section>
      <button
        type='button'
        onClick={() => action(id)}
        className='border border-red-500'
      >
        remove
      </button>
      <button type='button'>edit</button>
    </section>
  )
}

export default ActionButtons
