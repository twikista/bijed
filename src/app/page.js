import Link from 'next/link'
import { Book, CheckedCircle, Mouse, OpenAccess } from '@/components/Icons'
import MainContainer from '@/components/MainContainer'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Dashboard/Breadcrumb'

export default function Home() {
  const journalObjectives = [
    {
      id: 1,
      text: 'provide a platform for scholars to share research knowledge and skills in all in all areas of entrepreneurship, Innovation, Technology, and related fields in the Management and Social Sciences.',
    },
    {
      id: 2,
      text: 'serve as knowledge bank to both academics and organizations (industries) in Entrepreneurship Education Development and Management.',
    },
    {
      id: 3,
      text: 'contribute to existing knowledge by critically analyzing contemporary issues, problems and challenges in Entrepreneurship from a multidisciplinary perspective with suggestions/recommendations for possible solutions and improvement.',
    },
    {
      id: 4,
      text: 'strongly enhance the contribution of knowledge for the existing entrepreneurial practice in Nigeria and globally, with a view to improving and ensuring optimal and excellent continuous practice in entrepreneurship development.',
    },
  ]

  const truncateText = (text, length) => `${text.substring(0, length)}...`
  return (
    <>
      <Header />
      <MainContainer>
        <section>
          <p className='text-justify'>
            Welcome to the official website of the Benin International Journal
            of Entrepreneurship Development &#40;BIJED&#41;, a publication of
            the Department of Entrepreneurship, Faculty of management Sciences,
            University of Benin, Benin city, Nigeria. BIJED seeks to advance the
            frontiers of knowledge in the field of Entreneurship by publsihing
            high quality and well researched articles, that have significant
            applications in the academics sphere and in the wider social, and
            economic environments. The Journal operates the Open Access model.
            It is published bi-annualy in June, and December every year.
          </p>
        </section>
        <section className='space-y-3'>
          <h2 className='text-base font-bold text-gray-600 md:text-xl font-saira'>
            Aim of the Journal
          </h2>
          <p>
            The Benin International Journal of Entrepreneurship Development aim
            to:{' '}
          </p>
          <ul className='pl-2 space-y-5 list-inside'>
            {journalObjectives.map((objective) => (
              <li key={objective.id} className='flex items-start gap-2'>
                <CheckedCircle
                  className='w-2 md:w-[10px] text-gray-600 mt-[10px]'
                  fill='none'
                />
                <span className='flex items-start flex-1'>
                  {' '}
                  {objective.text}
                </span>
              </li>
            ))}
          </ul>
        </section>
        <section className='space-y-3'>
          <h2 className='text-base font-bold text-gray-600 md:text-xl font-saira'>
            Scope of the Journal
          </h2>
          <p>
            The Benin International Journal of Entrepreneurship Development
            covers researches in all areas of entrepreneurship, Innovation,
            Technology, and related fields in the Management and Social
            Sciences.
          </p>
        </section>
        {/* <section className='md:w-[85%]'>
        <h3 className='py-1 font-bold text-white rounded-t-lg bg-primary'>
          Some Quick Facts about BIJED
        </h3>
        <ul className='grid overflow-hidden border border-gray-300 rounded-b-lg md:grid-cols-2'>
          <li>
            To strongly enhance the contribution of knowledge for the existing
          </li>
          <li>
            To strongly enhance the contribution of knowledge for the existing
          </li>
          <li>
            To strongly enhance the contribution of knowledge for the existing
          </li>
          <li>
            To strongly enhance the contribution of knowledge for the existing
          </li>
          <li>
            To strongly enhance the contribution of knowledge for the existing
          </li>
          <li>
            To strongly enhance the contribution of knowledge for the existing
          </li>
          <li>
            To strongly enhance the contribution of knowledge for the existing
          </li>
          <li>
            To strongly enhance the contribution of knowledge for the existing
          </li>
        </ul>
      </section> */}
        <section className='grid grid-cols-1 grid-rows-3 gap-3 md:grid-cols-3 md:grid-rows-1'>
          <article className='flex flex-col items-stretch'>
            <h3 className='flex items-center justify-center gap-1 py-2 text-base font-bold text-white border rounded-t-lg md:text-xl bg-primary font-saira border-primary'>
              <Mouse className='w-5 h-5 p-0 md:w-6 md:h-6' />
              <span>Submision Guide</span>
            </h3>
            <div className='p-[10px] border border-gray-300 rounded-b-lg flex-1'>
              <p>
                {truncateText(
                  'The Benin International Journal of Entrepreneurship Development (BIJED) shall welcome articles from various authors on issues relating to entrepreneurship education, development and management in academics, industry and government.',
                  196
                )}
                <Link
                  href='/submission-guide'
                  className='text-blue-600 hover:underline'
                >
                  read more
                </Link>
              </p>
            </div>
          </article>
          <article className='flex flex-col items-stretch'>
            <h3 className='flex items-center justify-center gap-1 py-2 text-base font-bold text-white border rounded-t-lg md:text-xl bg-primary font-saira border-primary'>
              <Book className='w-5 h-5 p-0 smd:w-6 md:h-6' />
              <span>publication Ethics</span>
            </h3>
            <div className='p-[10px] border border-gray-300 rounded-b-lg flex-1'>
              <p>
                {truncateText(
                  'Benin International Journal for Entrepreneurship Development is committed to upholding and promoting best ethical practices in the publication of scholarly articles. To this end, BIJED follows the ethical practices and guidlines outlined by the',
                  196
                )}
                <Link
                  href='/publication-ethics'
                  className='text-blue-600 hover:underline'
                >
                  read more
                </Link>
              </p>
            </div>
          </article>
          <article className='flex flex-col items-stretch'>
            <h3 className='flex items-center justify-center gap-1 py-2 text-base font-bold text-white border rounded-t-lg md:text-xl bg-primary font-saira border-primary'>
              <OpenAccess className='w-5 h-4 p-0 text-white md:w-6 md:h-5' />
              <span className=''>Open Access</span>
            </h3>
            <div className='p-[10px] border border-gray-300 rounded-b-lg flex-1'>
              <p>
                {truncateText(
                  'All articles published in Benin International journal of Entrepreneurship Development are published under the Open Access Model, making them immediately available to read, download, and share for free after publication.',
                  196
                )}
                <Link
                  href='/open-access'
                  className='text-blue-600 hover:underline'
                >
                  read more
                </Link>
              </p>
            </div>
          </article>
        </section>
      </MainContainer>
      <Footer />
    </>
  )
}
