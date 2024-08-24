'use client'

import { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

function Recaptcha() {
  const captchaRef = useRef
  return (
    <div>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_DEV_SITE_KEY}
        ref={captchaRef}
        // onChange={handler}
      />
    </div>
  )
}

export default Recaptcha
