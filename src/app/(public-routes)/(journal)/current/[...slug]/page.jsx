import MainContainer from '@/components/MainContainer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getArticle, getArticlesInIssue } from '@/lib/data';
import ArticleOverview from '@/components/ArticleOverview';
import { connectDB } from '@/lib/mongoose/config';
import { Issue } from '@/lib/mongoose/models/issue';

async function getArticlesInCurrentIssue() {
  await connectDB();

  const currentIssue = await Issue.findOne({ published: true }, { ref: 1 })
    .sort({ volume: -1, issue: -1 })
    .lean();
  const articles = await getArticlesInIssue(currentIssue?.ref);
  return articles;
}

export async function generateStaticParams() {
  const articlesInCurrentIssue = await getArticlesInCurrentIssue();
  return articlesInCurrentIssue.map((article) => ({
    slug: [article.ref, article.slug],
  }));
}

export async function generateMetadata({ params }) {
  const param = await params;
  const slug = { issue: param.slug[0], article: param.slug[1] };
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const description = article.abstract?.substring(0, 160);

  return {
    title: article.title,
    description: article.abstract?.substring(0, 160),
    keywords: article.keywords?.join(', '),
    other: {
      generator: 'Open Journal Systems 3.2.0.1',
      'DC.Creator.PersonalName': article.authors.map((author) => author.name),
      'DC.Date.created': new Date(article.publishDate)
        .toISOString()
        .split('T')[0]
        .replace(/-/g, '/'),
      'DC.Date.dateSubmitted': new Date(article.publishDate)
        .toISOString()
        .split('T')[0]
        .replace(/-/g, '/'),
      'DC.Date.issued': new Date(article.publishDate)
        .toISOString()
        .split('T')[0]
        .replace(/-/g, '/'),
      'DC.Date.modified': new Date(article.publishDate)
        .toISOString()
        .split('T')[0]
        .replace(/-/g, '/'),
      'DC.Format': 'application/pdf',
      'DC.Description': article.abstract,
      'DC.Identifier.URI': `https://www.bijed.com.ng/archive/${article.ref}/${article.slug}`,
      'DC.Language': 'en',
      'DC.Rights': `Copyright (c) ${new Date().getFullYear()} Benin International of Entrepreneurship Development`,
      'DC.Rights': 'http://creativecommons.org/licenses/by-nc/4.0/deed.en',
      'DC.Source':
        'Benin International Journal of Entrepreneurship Development (ISSN: 0794-5841)',
      'DC.Source.ISSN': '0794-5841',
      'DC.Source.Issue': article.issue,
      'DC.Source.Volume': article.volume,
      'DC.Source.URI': `https://www.bijed.com.ng/`,
      'DC.Subject': article.keywords?.map((keyword) => keyword.trim()),
      'DC.Title': article.title,
      'DC.Type': 'Text.Serial.Journal',
      'DC.Type.articleType': 'Articles',
      citation_journal_title:
        'Benin International Journal of Entrepreneurship Development',
      citation_journal_abbrev: 'BIJED',
      citation_issn: '0794-5841',
      citation_author: article.authors?.map((author) => author.name),
      citation_title: article.title,
      citation_language: 'en',
      citation_publication_date: new Date(article.publishDate)
        .toISOString()
        .split('T')[0]
        .replace(/-/g, '/'),
      citation_volume: article.volume,
      citation_issue: article.issue,
      citation_first_page: article.startPage,
      citation_last_page: article.endPage,
      citation_abstract_html_url: `https://www.bijed.com.ng/archive/${article.ref}/${article.slug}`,
      citation_abstract: article.abstract,
      citation_keywords: article.keywords?.map((keyword) => keyword.trim()),
      citation_pdf_url: `https://www.bijed.com.ng/archive/${article.ref}/${article.slug}/view`,
      citation_author_institution: article.authors?.map(
        (author) => ` ${author.department}, ${author.institution}`
      ),
    },
    openGraph: {
      title: article.title,
      description: article.abstract?.substring(0, 160),
      type: 'article',
      authors: article.authors?.map((author) => author.name),
    },
  };
}

async function ArticlePage({ params }) {
  const {
    slug: [issue, article],
  } = params;
  const currentArticle = await getArticle({ issue, article });
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center flex-grow w-full h-full'>
        <MainContainer>
          <ArticleOverview
            currentArticle={currentArticle}
            currentIssue={true}
          />
        </MainContainer>
      </div>
      <Footer />
    </div>
  );
}

export default ArticlePage;
