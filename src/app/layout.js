import {
  Inter,
  Cairo,
  Barlow,
  IBM_Plex_Sans,
  Saira_Condensed,
  Roboto,
} from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export const saira = Saira_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-saira',
  display: 'swap',
  adjustFontFallback: false,
})

export const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plex',
  display: 'swap',
  adjustFontFallback: false,
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
})

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  adjustFontFallback: false,
})

export const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
  adjustFontFallback: false,
})

export const cairo = Cairo({
  subsets: ['latin'],
  variable: '--font-cairo',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata = {
  metadataBase: new URL('https://bijed.com.ng'),
  title: {
    default:
      'BIJED - Benin International Journal of Entrepreneurship Development',
    template:
      '%s | Benin International Journal of Entrepreneurship Development',
  },
  description:
    'The Benin International Journal of Entrepreneurship Development (BIJED) is a publication of the Department of Entrepreneurship, Faculty of Management Sciences, University of Benin, Benin city, Nigeria.',

  keyword: [
    'Academic',
    'journal',
    'academic journal',
    'International journal',
    'entrepreneurship',
    'development',
    'entrepreneurship development',
    'university of Benin',
    'Benin International Journal of Entrepreneurship Development',
    'BIJED',
    'sme',
    'msme',
    'management sciences',
    'faculty of management sciences',
    'Nigeria',
    'UNIBEN',
  ],
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={``}>
      <body
        className={`${ibmPlex.className} ${saira.variable} ${cairo.variable} ${barlow.variable} ${ibmPlex.variable} antialiased flex flex-col min-h-full bg-slate-50 min-w-[320px]`}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
