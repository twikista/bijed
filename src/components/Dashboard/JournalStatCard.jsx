function JournalStatCard({ title, value, Icon, bg }) {
  console.log('value-----', value)
  return (
    <div
      className={`flex items-center justify-center flex-1 gap-2 px-5 py-5 ${bg} rounded-xl shadow-md `}
    >
      <div className='flex flex-col items-center justify-center'>
        <p className='text-6xl'>{value === undefined ? '0' : value}</p>
        <span>{title}</span>
      </div>
      <div className='text-gray-600'>
        <Icon className='w-10' />
      </div>
    </div>
  )
}

export default JournalStatCard
