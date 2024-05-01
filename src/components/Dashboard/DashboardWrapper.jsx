import React from 'react'
import Breadcrumb from './Breadcrumb'

function DashboardWrapper({ children }) {
  return (
    <div className='h-full px-10 py-5 space-y-5 bg-gray-50 rounded-xl'>
      <Breadcrumb homeElement='Home' homeUrl='/' isProtectedRoute={true} />

      <React.Fragment>{children}</React.Fragment>
    </div>
  )
}

export default DashboardWrapper
