import Breadcrumb from './Breadcrumb'
import Top from './Top'

function DashboardContainer({ children }) {
  return (
    <main className='relative flex flex-col flex-1 w-full overflow-y-scroll text-sm text-gray-600 bg-gray-200 md:text-base'>
      <Top />
      <section className='flex-1 px-5 mx-8 mt-[85px] mb-5 rounded-xl bg-gray-50'>
        <Breadcrumb />
        {children}
      </section>
    </main>
  )
}

export default DashboardContainer
