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
        <LinkIcon className='w-6 h-6 fill-gray-500' />
        <h4 className='text-xl font-medium'>Quick Links</h4>
      </div>
      <div className='px-4 py-5 space-y-2 rounded-md bg-gray-50'>
        {userRole === 'business manager' && (
          <QuickLinkItem
            Icon={AddIssuesIcon}
            linkUrl={`${process.env.DASHBOARD_ISSUES}/new-issue`}
            linkText='Add new issue'
          />
        )}
        {userRole === 'business manager' && (
          <QuickLinkItem
            Icon={DocumentPlusIcon}
            linkUrl={`${process.env.DASHBOARD_NEWS}/new`}
            linkText='Add Announcement'
          />
        )}
        {userRole === 'admin' && (
          <>
            <QuickLinkItem
              Icon={AddUserIcon}
              linkUrl={`${process.env.AUTH}/new-user`}
              linkText='Add new user'
            />
            <QuickLinkItem
              Icon={UsersIcon}
              linkUrl={`${process.env.AUTH}/manage-users`}
              linkText='Manage Users'
            />
          </>
        )}
        {userRole === 'managing editor' && (
          <QuickLinkItem
            Icon={HourGlassIcon}
            linkUrl={`${process.env.DASHBOARD_JOBS}/pending-jobs`}
            linkText='Pending Jobs'
          />
        )}
        {userRole === 'managing editor' && (
          <QuickLinkItem
            Icon={StackIcon}
            linkUrl={`${process.env.DASHBOARD_ISSUES}/unpublished`}
            linkText='Unpublished Issues'
          />
        )}
        <QuickLinkItem
          Icon={PasswordIcon}
          linkUrl={`${process.env.NEXT_URL}`}
          linkText='Change password'
        />

        <QuickLinkItem
          Icon={HomePageIcon}
          linkUrl={`${process.env.NEXT_URL}`}
          linkText='Journal homepage'
        />
      </div>
    </div>
  )
}

export default QuickLinks
