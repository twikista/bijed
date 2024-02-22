import { Saira_Condensed, Inter, Lato, Cairo, Barlow } from 'next/font/google'

export const saira = Saira_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-saira',
  display: 'swap',
})

export const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-saira',
  display: 'swap',
})

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
