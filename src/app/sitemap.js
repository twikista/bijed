import { getIssues } from '@/lib/data'
import { menuItemsData } from '@/static/menuitems_data'

export default async function sitemap() {
  const navbarMenuEntries = menuItemsData
    .map((item) => (item.submenu ? item.submenu : null))
    .flat()
    .filter((i) => i !== null)
    .map((item) => {
      return { url: `${process.env.NEXT_BASE_URL}/${item.url}` }
    })

  const publishedIssues = await getIssues('final')
  const archiveMenu = publishedIssues.map((issue) => {
    return {
      url: `${process.env.NEXT_BASE_URL}/archive/${issue?.ref}`,
      lastModified: `${new Date(issue.createdAt)}`,
    }
  })

  return [
    {
      url: `${process.env.NEXT_BASE_URL}/contact`,
    },
    ...navbarMenuEntries,
    ...archiveMenu,
  ]
}
