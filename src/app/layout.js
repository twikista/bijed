// import {
//   Nanum_Gothic,
//   Saira_Condensed,
//   Fira_Sans,
//   Roboto,
// } from 'next/font/google'
import { roboto, saira, inter, cairo } from '../font/font'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['400', '500', '700', '900'],
//   display: 'swap',
// })

// const saira = Saira_Condensed({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700', '800', '900'],
//   variable: '--font-saira',
//   display: 'swap',
// })

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
    'university of benin',
    'Benin International Journal of Entrepreneurship Development',
    'BIJED',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${inter.className} ${saira.variable} ${cairo.variable}`}
    >
      <body className={'flex flex-col min-h-screen bg-slate-50 min-w-[320px]'}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
