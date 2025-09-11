import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { PageHeading, Paragraph } from '@/components/Headings';
import ListOfArticlesInIssue from '@/components/ListOfArticlesInIssue';
import MainContainer from '@/components/MainContainer';
import { getPublishedIssues, getIssue } from '@/lib/actionsV2/issues';
import { connectDB } from '@/lib/mongoose/config';
import { Article } from '@/lib/mongoose/models/article';
import { dateHelperFunction } from '@/lib/util';
import { cache, Suspense } from 'react';

const getArticlesInIssue = cache(async (issue) => {
  try {
    await connectDB();
    const articlesInIssue = await Article.find({
      ref: `${issue}`,
    }).sort({
      startPage: 1,
    });
    return articlesInIssue;
  } catch (error) {
    console.log(error);
  }
});

export async function generateStaticParams() {
  const publishedIssues = await getPublishedIssues();
  return publishedIssues?.map((i) => ({
    issue: i.ref,
  }));
}

export async function generateMetadata({ params }) {
  const issue = await getIssue(params.issue);
  return {
    title: `BIJED ${issue.issueTitle}`,
  };
}

// Issue content component
async function IssueContent({ issue }) {
  const [articlesInIssue, currentIssue] = await Promise.all([
    getArticlesInIssue(issue),
    getIssue(issue),
  ]);

  return (
    <>
      <div>
        <PageHeading>{`BIJED - ${currentIssue.issueTitle}`}</PageHeading>
        <p className='text-center '>{`Publish Date: ${dateHelperFunction(
          currentIssue.publishDate,
          'long'
        )}`}</p>
      </div>
      <section className='space-y-5'>
        <ListOfArticlesInIssue articlesInIssue={articlesInIssue} />
      </section>
    </>
  );
}

async function IssuePage({ params }) {
  const { issue } = params;

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center flex-grow w-full h-full'>
        <MainContainer>
          <Suspense fallback={<IssuePageLoader />}>
            <IssueContent issue={issue} />
          </Suspense>
        </MainContainer>
      </div>
      <Footer />
    </div>
  );
}

// Loader component for just the content area
function IssuePageLoader() {
  return (
    <>
      <div className='animate-pulse'>
        <div className='w-3/4 h-8 mt-5 mb-2 bg-gray-200 rounded-md'></div>
        <div className='w-1/3 h-4 mb-8 bg-gray-200 rounded-md'></div>
      </div>
      <section className='space-y-5'>
        <div className='animate-pulse'>
          {/* Simulate article loading */}
          {[1, 2, 3].map((i) => (
            <div key={i} className='p-4 mb-4 border rounded-lg'>
              <div className='w-3/4 h-6 mb-2 bg-gray-200 rounded-md'></div>
              <div className='w-1/2 h-4 mb-2 bg-gray-200 rounded-md'></div>
              <div className='w-2/3 h-4 bg-gray-200 rounded-md'></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default IssuePage;
