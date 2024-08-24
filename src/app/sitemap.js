import { getIssues } from '@/lib/data'
import { menuItemsData } from '@/static/menuitems_data'
import { config } from '@/lib/config'
import { getAllPublishedArticles } from '@/lib/actions'

export default async function sitemap() {
  const baseUrl = config.baseUrl
  console.log(baseUrl)
  const navbarMenuEntries = menuItemsData
    .map((item) => (item.submenu ? item.submenu : null))
    .flat()
    .filter((i) => i !== null)
    .map((item) => {
      return { url: `${baseUrl}/${item.url}` }
    })

  const publishedIssues = await getIssues('final')
  const archiveMenu = publishedIssues.map((issue) => {
    return {
      url: `${baseUrl}/archive/${issue?.ref}`,
    }
  })

  const publishedArticles = await getAllPublishedArticles()
  const publishedArticleEntries = publishedArticles.map((article) => {
    return {
      url: `${baseUrl}/archive/${article?.ref}/${article?.slug}`,
    }
  })

  return [
    {
      url: `${baseUrl}/contact`,
    },
    ...navbarMenuEntries,
    ...archiveMenu,
    ...publishedArticleEntries,
  ]
}
