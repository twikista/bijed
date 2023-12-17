import React from 'react'

function MainContainer({ children }) {
  return (
    <main className='flex-1 w-full max-w-5xl px-4 pt-8 pb-12 mx-auto space-y-10 text-sm md:pb-24 text-neutral-600 md:text-base'>
      {children}
    </main>
  )
}

export default MainContainer
