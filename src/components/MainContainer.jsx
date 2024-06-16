import Breadcrumb from './Dashboard/Breadcrumb'
import Aside from './aside/Aside'

function MainContainer({ children, showAside = true }) {
  return (
    <main className='flex flex-col flex-1 w-full gap-5 px-5 mx-auto text-sm max-w-7xl md:px-10 text-neutral-600 md:text-base lg:flex-row '>
      <section className='flex flex-col flex-1 pb-12 space-y-6 border-gray-200 lg:border-r lg:pr-10'>
        <Breadcrumb
          homeElement='Home'
          homeUrl='/'
          isProtectedRoute={false}
          separator='/'
        />
        {children}
      </section>
      {showAside && <Aside />}
    </main>
  )
}

export default MainContainer
