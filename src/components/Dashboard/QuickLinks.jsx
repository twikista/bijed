import { DocumentPlusIcon } from '@heroicons/react/24/outline'
import { LinkIcon, PasswordIcon, StackIcon, UsersIcon } from '../Icons'
import QuickLinkItem from './QuickLnkItem'
import {
  AddIssuesIcon,
  AddUserIcon,
  HomePageIcon,
  HourGlassIcon,
} from '@/components/Icons'

function QuickLinks({ userRole }) {
  return (
    <div className='flex-1 p-2 bg-gray-200 rounded-lg'>
      <div className='flex items-center gap-1 px-4 py-3'>
        <LinkIcon className='w-4 h-4 md:w-5 md:h5 fill-gray-500' />
        <h4 className='text-base font-medium md:text-xl'>Quick Links</h4>
      </div>
      <div className='px-4 py-5 space-y-2 rounded-md bg-gray-50'>
        {userRole === 'business manager' && (
          <QuickLinkItem
            Icon={AddIssuesIcon}
            linkUrl='/dashboard/issues/new-issue'
            linkText='Add new issue'
          />
        )}
        {userRole === 'business manager' && (
          <QuickLinkItem
            Icon={DocumentPlusIcon}
            linkUrl={`/dashboard/announcements/new`}
            linkText='Add Announcement'
          />
        )}
        {userRole === 'admin' && (
          <>
            <QuickLinkItem
              Icon={AddUserIcon}
              linkUrl='/dashboard/manage-users/new-user'
              linkText='Add new user'
            />
            <QuickLinkItem
              Icon={UsersIcon}
              linkUrl='/dashboard/manage-users'
              linkText='Manage Users'
            />
          </>
        )}
        {userRole === 'managing editor' && (
          <QuickLinkItem
            Icon={HourGlassIcon}
            linkUrl='/dashboard/issues?mode=final'
            linkText='Published Issues'
          />
        )}
        {userRole === 'managing editor' && (
          <QuickLinkItem
            Icon={StackIcon}
            linkUrl='/dashboard/issues?mode=draft'
            linkText='Unpublished Issues'
          />
        )}
        <QuickLinkItem
          Icon={PasswordIcon}
          linkUrl='/dashboard'
          linkText='Change password'
        />

        <QuickLinkItem
          Icon={HomePageIcon}
          linkUrl='/'
          linkText='Journal homepage'
        />
      </div>
    </div>
  )
}

export default QuickLinks
