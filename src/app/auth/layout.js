import { IdeasIcon } from '@/components/Icons'

export default function DashboardLayout({ children }) {
  return (
    <main className='relative flex h-screen bg-white'>
      <header className='fixed left-0 right-0 flex items-center px-6 border-b border-gray-300 border-solid h-[60px]'>
        <IdeasIcon className='w-10 text-[#800080]' />
        <h1 className='text-2xl font-semibold text-[#800080]'>BIJED</h1>
        <span className='h-6 w-[1px] bg-gray-500 inline-block mx-1' />
        <span className='text-[#ac3dba]'>
          Benin International Journal for Entrepreneurship Development
        </span>
      </header>
      {children}
    </main>
  )
}
