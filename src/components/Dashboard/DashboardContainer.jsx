function DashboardContainer({ children }) {
  return (
    <main className='flex flex-col flex-1 w-full gap-5 px-5 pt-8 pb-12 mx-auto text-sm max-w-7xl md:pb-24 md:px-10 text-neutral-600 md:text-base lg:flex-row '>
      <section className='flex-1 space-y-6 lg:pr-10'>{children}</section>
    </main>
  )
}

export default DashboardContainer
