import { Teko, Saira_Condensed } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const teko = Teko({ subsets: ['latin'] })
const saira = Saira_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'BIJED - Benin International Journal of Entrepreneurship Development',
  description:
    'The Benin International Journal of Entrepreneurship Development (BIJED) is a publication of the Department of Entrepreneurship, Faculty of Management Sciences, University of Benin, Benin city, Nigeria. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={saira.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
