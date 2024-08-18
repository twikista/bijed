// import { HomeIconFill, HomeIconOutline } from '@/components/Icons'
import { NewspaperIcon as NewspaperIconOutline } from '@heroicons/react/24/outline'
import { NewspaperIcon as NewspaperIconFill } from '@heroicons/react/24/solid'
import { Square3Stack3DIcon as Square3Stack3DIconOutline } from '@heroicons/react/24/outline'
import { Square3Stack3DIcon as Square3Stack3DIconFill } from '@heroicons/react/24/solid'
import { DocumentTextIcon as DocumentTextIconOutline } from '@heroicons/react/24/outline'
import { DocumentTextIcon as DocumentTextIconFill } from '@heroicons/react/24/solid'

export const sideNavMenuItems = [
  {
    text: 'Home',
    url: '/dashboard',
    outlineIcon: HomeIconOutline,
    fillIcon: HomeIconFill,
  },
  {
    text: 'Issues',
    url: '/dashboard/issues',
    outlineIcon: Square3Stack3DIconOutline,
    fillIcon: Square3Stack3DIconFill,
  },
  {
    text: 'News',
    url: '/dashboard/announcements',
    outlineIcon: NewspaperIconOutline,
    fillIcon: NewspaperIconFill,
  },
  {
    text: 'Editors',
    url: '/dashboard/editorial-board',
    outlineIcon: DocumentTextIconOutline,
    fillIcon: DocumentTextIconFill,
  },
]
