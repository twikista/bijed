import { getIssues } from '@/lib/data'
import { menuItemsData } from '@/static/menuitems_data'

export default async function sitemap() {
  const navbarMenuEntries = menuItemsData
    .map((item) => (item.submenu ? item.submenu : null))
    .flat()
    .filter((i) => i !== null)
    .map((item) => {
      return { url: `/${item.url}` }
    })

  const publishedIssues = await getIssues('final')
  const archiveMenu = publishedIssues.map((issue) => {
    return {
      url: `/archive/${issue?.ref}`,
      lastModified: `${new Date(issue.createdAt)}`,
    }
  })

  return [
    {
      url: `/contact`,
    },
    ...navbarMenuEntries,
    ...archiveMenu,
  ]
}
