import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-[#993264] h-10 text-white font-nanum'>
      <div>
        <span>&copy;{currentYear}</span>
        <span> </span>
        <span className='uppercase'>bijed</span>
      </div>
    </footer>
  )
}

export default Footer
