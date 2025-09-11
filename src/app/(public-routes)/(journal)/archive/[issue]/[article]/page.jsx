import MainContainer from '@/components/MainContainer';
import { connectDB } from '@/lib/mongoose/config';
import { Article } from '@/lib/mongoose/models/article';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleOverview from '@/components/ArticleOverview';
import { getArticle } from '@/lib/actionsV2/articles';
import { Suspense } from 'react';

async function getAllArticles() {
  await connectDB();
  const articles = await Article.find({ published: true });
  return articles;
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    issue: article.ref,
    article: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const article = await getArticle(params);
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

// Loading component
function ArticlePageLoading() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center flex-grow w-full h-full'>
        <MainContainer>
          <div className='animate-pulse'>
            <div className='w-3/4 h-8 mb-4 bg-gray-200 rounded'></div>
            <div className='w-1/2 h-4 mb-4 bg-gray-200 rounded'></div>
            <div className='w-full h-12 mb-4 bg-gray-200 rounded'></div>
            <div className='w-1/3 h-4 mb-8 bg-gray-200 rounded'></div>
            <div className='mb-8 space-y-2'>
              <div className='w-full h-4 bg-gray-200 rounded'></div>
              <div className='w-full h-4 bg-gray-200 rounded'></div>
              <div className='w-5/6 h-4 bg-gray-200 rounded'></div>
              <div className='w-3/4 h-4 bg-gray-200 rounded'></div>
            </div>
            <div className='flex justify-center'>
              <div className='w-40 h-10 bg-gray-200 rounded'></div>
            </div>
          </div>
        </MainContainer>
      </div>
      <Footer />
    </div>
  );
}

async function ArticleContent({ articleMetaData }) {
  try {
    const article = await getArticle(articleMetaData);

    if (!article) {
      return (
        <div className='p-6 text-center'>
          <h2 className='mb-2 text-xl font-semibold'>Article Not Found</h2>
          <p className='text-gray-600'>
            The article you&apos;re looking for could not be found.
          </p>
        </div>
      );
    }

    return <ArticleOverview currentArticle={article} />;
  } catch (error) {
    console.error('Error fetching article:', error);
    return (
      <div className='p-6 text-center'>
        <h2 className='mb-2 text-xl font-semibold'>Error Loading Article</h2>
        <p className='text-gray-600'>
          There was a problem loading this article. Please try again later.
        </p>
      </div>
    );
  }
}

async function ArticlePage({ params }) {
  // const article = await getArticle(params)

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center flex-grow w-full h-full'>
        <MainContainer>
          <Suspense fallback={<ArticlePageLoading />}>
            <ArticleContent articleMetaData={params} />
          </Suspense>
        </MainContainer>
      </div>
      <Footer />
    </div>
  );
}

export default ArticlePage;
