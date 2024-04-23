import { DocumentPlusIcon } from '@heroicons/react/24/outline'
import { LinkIcon } from '../Icons'
import QuickLinkItem from './QuickLnkItem'
import { AddIssuesIcon, AddUserIcon, HomePageIcon } from '@/components/Icons'

function QuickLinks() {
  return (
    <div className='flex-1 p-2 bg-gray-200 rounded-lg'>
      <div className='flex items-center gap-1 px-4 py-3'>
        <LinkIcon className='w-6 h-6 fill-gray-500' />
        <h4 className='text-xl font-medium'>Quick Links</h4>
      </div>
      <div className='px-4 py-5 space-y-2 rounded-md bg-gray-50'>
        <QuickLinkItem
          Icon={AddIssuesIcon}
          linkUrl={`${process.env.DASHBOARD_ISSUES}/new-issue`}
          linkText='Add new issue'
        />
        <QuickLinkItem
          Icon={DocumentPlusIcon}
          linkUrl={`${process.env.DASHBOARD_NEWS}/new`}
          linkText='Add news'
        />
        <QuickLinkItem
          Icon={AddUserIcon}
          linkUrl={`${process.env.AUTH}/new-user`}
          linkText='Add new user'
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
