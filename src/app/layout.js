// import { saira, lato, cairo, barlow, inter } from './font/font'
import { Saira_Condensed, Inter, Lato, Cairo, Barlow } from 'next/font/google'
import './globals.css'
// import Header from '@/components/Header'
// import Footer from '@/components/Footer'

export const saira = Saira_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-saira',
  display: 'swap',
})

// export const barlow = Barlow({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700', '800', '900'],
//   variable: '--font-saira',
//   display: 'swap',
// })

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
})

export const cairo = Cairo({
  subsets: ['latin'],
  variable: '--font-cairo',
  display: 'swap',
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
    <html
      lang='en'
      className={`${inter.className} ${saira.variable} ${cairo.variable} antialiased`}
    >
      <body className={'flex flex-col min-h-screen bg-slate-50 min-w-[320px]'}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
