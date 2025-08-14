import DashboardContainer from '@/components/Dashboard/DashboardContainer';
import NewArticleForm from '@/components/Dashboard/NewArticleForm';
// import { getIssue } from '@/lib/data'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper';
import SideNav from '@/components/Dashboard/SideNav';
import MobileNav from '@/components/Dashboard/MobileNav';

//new component
import ArticleForm from '@/components/FormsV2/article';
import React, { Suspense } from 'react';
import { getIssue } from '@/lib/actionsV2/issues';

const initialState = {
  title: '',
  authors: [{ name: '', department: '', institution: '' }],
  volume: '',
  issue: '',
  startPage: null,
  endPage: null,
  abstract: '',
  keywords: [{ keyword: '' }],
  pdfFile: '',
};

const initialStateV2 = {
  title: '',
  authors: [{ name: '', department: '', institution: '' }],
  volume: '1',
  issue: '1',
  startPage: null,
  endPage: null,
  abstract: '',
  keywords: [],
  jelClassification: [],
  pdfFile: '',
};

async function AddArticle({ params }) {
  const articleIssue = await getIssue(params.issue);
  const volume = articleIssue?.volume;
  const issue = articleIssue?.issueNumber;
  //new addition
  const publishDate = articleIssue?.publishDate;
  return (
    <main className='relative flex h-screen'>
      <SideNav />
      <MobileNav />
      <DashboardContainer>
        <DashboardWrapper>
          {/* <NewArticleForm
            initialValue={{ ...initialStateV2, volume, issue }}
            params={{ ...params, published: articleIssue?.published }}
          /> */}
          <ArticleForm
            initialFormState={{ ...initialStateV2, volume, issue }}
            params={{
              ...params,
              published: articleIssue?.published,
              publishDate: publishDate,
            }}
          />
        </DashboardWrapper>
      </DashboardContainer>
    </main>
  );
}

export default AddArticle;
