import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import { getUsers } from '@/lib/data'
import CreateButton from '@/components/Dashboard/createButton'
import { DeleteButton } from '@/components/Dashboard/Buttons'
import { removeUser } from '@/lib/actions'

async function AdminPage() {
  const response = await getUsers()

  return (
    <DashboardContainer>
      <DashboardWrapper>
        <div>
          <div className='flex items-center justify-end'>
            <CreateButton
              href='/dashboard/manage-users/new-user'
              label='create user'
            />
          </div>
        </div>
        <div className='p-2 bg-[#e5d4ff] rounded-lg md:pt-0 overflow-x-auto'>
          <table className='min-w-full overflow-x-scroll'>
            <thead className='rounded-lg'>
              <tr className=''>
                <th className='px-4 py-6 pb-1 font-medium w-[20px]'>S/N</th>
                <th className='px-4 pt-4 pb-1 table-fixed'>Name</th>
                <th className='px-4 pt-4 pb-1 font-medium w-14'>Email</th>
                <th className='px-4 pt-4 pb-1 font-medium'>Role</th>
                <th className='sr-only'></th>
                <th className='sr-only'></th>
              </tr>
            </thead>
            <tbody className='text-center bg-white divide-y-2 rounded-sm'>
              {response?.users.map((user, index) => (
                <tr className='py-5 text-sm' key={user?.email}>
                  <td className='px-4 py-4 border border-solid'>{`${
                    index + 1
                  }.`}</td>
                  <td className='px-4 py-4 text-left border border-solid'>
                    {`${user?.firstName} ${
                      user?.lastName ? user.lastName : ''
                    }`}
                  </td>
                  <td className='px-4 py-4 text-center border border-solid'>
                    {user?.email}
                  </td>
                  <td className='px-4 py-4 text-center capitalize border border-solid'>
                    {user.role}
                  </td>
                  <td className='px-4 py-4 text-center'>
                    {user.role !== 'admin' && (
                      <DeleteButton
                        action={removeUser}
                        id={user._id}
                        label='Remove'
                        variant='primary'
                        icon={false}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default AdminPage
