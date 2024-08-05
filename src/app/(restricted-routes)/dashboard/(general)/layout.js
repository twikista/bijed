import SideNav from '@/components/Dashboard/SideNav'

export default function DashboardLayout({ children }) {
  return (
    <main className='relative flex h-screen'>
      <SideNav />
      {children}
    </main>
  )
}
