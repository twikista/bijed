// import { saira, cairo, barlow, ibmPlex } from './font/font'
import {
  Saira_Condensed,
  Cairo,
  Barlow,
  IBM_Plex_Sans,
  IBM_Plex_Sans_Condensed,
} from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
// import Header from '@/components/Header'
// import Footer from '@/components/Footer'

export const saira = Saira_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-saira',
  // display: 'swap',
  // adjustFontFallback: false,
})

export const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plex',
  // display: 'swap',
  // adjustFontFallback: false,
})

export const ibmPlexCon = IBM_Plex_Sans_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plexCon',
  // display: 'swap',
  // adjustFontFallback: false,
})

export const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
  // display: 'swap',
  // adjustFontFallback: false,
})

export const cairo = Cairo({
  subsets: ['latin'],
  variable: '--font-cairo',
  // display: 'swap',
  // adjustFontFallback: false,
})

export const metadata = {
  title: 'BIJED - Benin International Journal of Entrepreneurship Development',
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
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={``}>
      <body
        className={`${ibmPlex.className} ${saira.variable} ${cairo.variable} ${barlow.variable}  antialiased flex flex-col min-h-full bg-slate-50 min-w-[320px]`}
      >
        {/* <Header /> */}
        {children}
        <ToastContainer />
        {/* <Footer /> */}
      </body>
    </html>
  )
}
