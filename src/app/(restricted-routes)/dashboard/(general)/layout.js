import MobileNav from '@/components/Dashboard/MobileNav'
import SideNav from '@/components/Dashboard/SideNav'

export default function DashboardLayout({ children }) {
  return (
    <main className='relative flex h-screen'>
      <SideNav />
      <MobileNav />
      {children}
    </main>
  )
}
