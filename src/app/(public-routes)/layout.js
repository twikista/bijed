import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function PublicRoutesLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
