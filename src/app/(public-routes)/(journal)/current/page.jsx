import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { PageHeading, Paragraph } from '@/components/Headings'
import ListOfArticlesInIssue from '@/components/ListOfArticlesInIssue'
import MainContainer from '@/components/MainContainer'
import { getArticlesInCurrentIssue } from '@/lib/data'
import { dateHelperFunction } from '@/lib/util'
import { unstable_noStore as noStore } from 'next/cache'

export const metadata = {
  title:
    'Current Issue - Benin International Journal for Entrepreneurship Development',
  description:
    'This page contains the articles in the current issue the Benin International Journal for Entrepreneurship Development.',
}

async function Currentissue() {
  noStore()
  // const { currentIssue, articlesInCurrentIssue } =
  //   await getArticlesInCurrentIssue()
  const response = await getArticlesInCurrentIssue()
  const { currentIssue, articlesInCurrentIssue } = response

  if (!currentIssue || currentIssue.length === 0) {
    return (
      <div className='flex flex-col min-h-screen'>
        <Header />
        <div className='flex items-center justify-center flex-grow w-full h-full'>
          <MainContainer>
            <div className='flex items-center justify-center h-full'>
              <h2>No current issue </h2>
            </div>
          </MainContainer>
        </div>
        <Footer />
      </div>
    )
  }

  const [{ issueTitle, publishDate }] = currentIssue

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center flex-grow w-full h-full'>
        <MainContainer>
          <div>
            <PageHeading>{`BIJED ${issueTitle}`}</PageHeading>
            <Paragraph style='text-center'>{`Publish Date: ${dateHelperFunction(
              publishDate,
              'long'
            )}`}</Paragraph>
          </div>

          <section className='space-y-5'>
            <ListOfArticlesInIssue
              articlesInIssue={articlesInCurrentIssue}
              path='current'
            />
          </section>
        </MainContainer>
      </div>
      <Footer />
    </div>
  )
}

export default Currentissue
