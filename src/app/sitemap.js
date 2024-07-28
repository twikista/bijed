import { getIssue, getIssues } from '@/lib/data'
import { menuItemsData } from '@/static/menuitems_data'

// const staticSitemapData = menuItemsData
//   .map((item) => (item.submenu ? item.submenu : null))

// console.log(menuEntries)
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

  // const menuEntries = staticSitemapData.map((item, index) => {
  //   url: `${process.env.NEXT_BASE_URL}/${item.url}`
  // })
  return [
    {
      url: `${process.env.NEXT_BASE_URL}/contact`,
    },
    ...navbarMenuEntries,
    ...archiveMenu,
  ]
}
