import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function DashboardLayout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center flex-grow w-full h-full px-3 md:my-10'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
