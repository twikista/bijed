import { getArticle } from '@/lib/actionsV2/articles';

import EditArticleForm from '@/components/Dashboard/EditArticleForm';
import DashboardContainer from '@/components/Dashboard/DashboardContainer';
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper';
import SideNav from '@/components/Dashboard/SideNav';
import MobileNav from '@/components/Dashboard/MobileNav';
import ArticleForm from '@/components/FormsV2/article';

async function EditArticle({ params }) {
  const article = await getArticle(params);
  const plainArticleObject = JSON.parse(JSON.stringify(article));
  const initialValue = {
    ...plainArticleObject,
    pdfFile: null,
  };
  return (
    <main className='relative flex h-screen'>
      <SideNav />
      <MobileNav />
      <DashboardContainer>
        <DashboardWrapper>
          <ArticleForm initialFormState={initialValue} params={params} />
        </DashboardWrapper>
      </DashboardContainer>
    </main>
  );
}

export default EditArticle;
