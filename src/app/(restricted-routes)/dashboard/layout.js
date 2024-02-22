import SideNav from '@/components/Dashboard/SideNav'

export default function DashboardLayout({ children }) {
  return (
    <main className='flex'>
      <SideNav />
      {children}
    </main>
  )
}
