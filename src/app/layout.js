import { Nanum_Gothic, Saira_Condensed, Fira_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const nanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-nanum-gothic',
})
const saira = Saira_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-fira-sans',
})

export const metadata = {
  title: 'BIJED - Benin International Journal of Entrepreneurship Development',
  description:
    'The Benin International Journal of Entrepreneurship Development (BIJED) is a publication of the Department of Entrepreneurship, Faculty of Management Sciences, University of Benin, Benin city, Nigeria. ',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${saira.className} ${nanumGothic.variable} ${firaSans.variable}`}
    >
      <body className={'flex flex-col min-h-screen bg-slate-50'}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
