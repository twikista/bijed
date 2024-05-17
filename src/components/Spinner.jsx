import React from 'react'
import clsx from 'clsx'

function Spinner({
  text,
  basic,
  width,
  height,
  borderSize,
  textColor = 'white',
}) {
  return (
    <div className='flex items-center gap-2'>
      <i
        className={`border-[3px] inline-block border-white/40 w-4 h-4 border-t-[3px] border-t-white rounded-full animate-spin`}
      />
      {basic ? null : <span className={`text-${textColor}`}>{text}</span>}
    </div>
  )
}

export default Spinner
