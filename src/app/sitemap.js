import { getIssues } from '@/lib/actionsV2/issues';
import { menuItemsData } from '@/static/menuitems_data';
import { config } from '@/lib/config';
import { getAllPublishedArticles } from '@/lib/actionsV2/articles';

export default async function sitemap() {
  const baseUrl = config.baseUrl;
  console.log(baseUrl);
  const navbarMenuEntries = menuItemsData
    .map((item) => (item.submenu ? item.submenu : null))
    .flat()
    .filter((i) => i !== null)
    .map((item) => {
      return { url: `${baseUrl}/${item.url}` };
    });

  const publishedIssues = await getIssues('published');
  const archiveMenu = publishedIssues.map((issue) => {
    return {
      url: `${baseUrl}/archive/${issue?.ref}`,
      lastModified: new Date().toISOString(
        issue?.updatedAt || issue?.createdAt
      ),
    };
  });

  const publishedArticles = await getAllPublishedArticles();
  const publishedArticleEntries = publishedArticles.map((article) => {
    return {
      url: `${baseUrl}/archive/${article?.ref}/${article?.slug}`,
      lastModified: new Date().toISOString(
        article?.updatedAt || article?.createdAt
      ),
    };
  });

  return [
    {
      url: `${baseUrl}/contact`,
    },
    ...navbarMenuEntries,
    ...archiveMenu,
    ...publishedArticleEntries,
  ];
}
