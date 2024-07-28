export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/dashboard', '/auth'] }],
    sitemap: `${process.env.NEXT_BASE_URL}/sitemap.xml`,
  }
}
