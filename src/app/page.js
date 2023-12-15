import Image from 'next/image'
import { Book, CheckedCircle, Mouse, OpenAccess } from '@/components/Icons'

export default function Home() {
  const journalObjectives = [
    {
      id: 1,
      text: 'To provide a platform for scholars to share research knowledge and skills in all in all areas of entrepreneurship, Innovation, Technology, and related fields in the Management and Social Sciences.',
    },
    {
      id: 2,
      text: 'To serve as knowledge bank to both academics and organizations (industries) in Entrepreneurship Education Development and Management.',
    },
    {
      id: 3,
      text: 'To contribute to existing knowledge by critically analyzing contemporary issues, problems and challenges in Entrepreneurship from a multidisciplinary perspective with suggestions/recommendations for possible solutions and improvement.',
    },
    {
      id: 4,
      text: 'To strongly enhance the contribution of knowledge for the existing entrepreneurial practice in Nigeria and globally, with a view to improving and ensuring optimal and excellent continuous practice in entrepreneurship development.',
    },
  ]
  return (
    <main className='flex-1 w-full max-w-5xl px-4 pt-8 pb-12 md:pb-24 mx-auto space-y-10 text-[13px] text-neutral-600 md:text-base'>
      <section>
        <p className='text-justify' tabIndex={0}>
          Welcome to the official website of the Benin International Journal of
          Entrepreneurship Development &#40;BIJED&#41;, a publication of the
          Department of Entrepreneurship, Faculty of management Sciences,
          University of Benin, Benin city, Nigeria. BIJED seeks to expound the
          frontiers of knowledge in the field of Entreneurship by publsihing
          high quality and well researched articles, with significant
          entrepreneurial applications in the academics sphere and in the wider
          social, and economic environments. The Journal is Open Access and
          covers researches in all areas of entrepreneurship, Innovation,
          Technology, and related fields in the Management and Social Sciences.
        </p>
      </section>
      <section>
        <h2 className='text-base font-bold md:text-xl font-saira text-primary'>
          Objectives of the Journal
        </h2>
        <p>
          The objectives of the Benin Internation Journal of Entrepreneurship
          Development includes:{' '}
        </p>
        <ul className='pl-2 space-y-1 list-inside'>
          {journalObjectives.map((objective) => (
            <li key={objective.id} className='flex items-start gap-1'>
              <CheckedCircle />
              <span className='flex items-start flex-1'> {objective.text}</span>
            </li>
          ))}
        </ul>
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
        <article>
          <h3 className='flex items-center justify-center gap-1 py-2 text-xl font-bold text-white border rounded-t-lg bg-primary font-saira border-primary'>
            <Mouse className='w-8 h-8 p-0' />
            <span>Submision Guide</span>
          </h3>
          <p className='px-2 py-2 border border-gray-300 rounded-b-lg'>
            To strongly enhance the contribution of knowledge for the existing
            entrepreneurial practice in Nigeria and globally, with a view to
            improving and ensuring optimal and excellent continuous practice in
            entrepreneurship development.
          </p>
        </article>
        <article>
          <h3 className='flex items-center justify-center gap-1 py-2 text-xl font-bold text-white border rounded-t-lg bg-primary font-saira border-primary'>
            <Book className='w-8 h-8 p-0' />
            <span>publication Ethics</span>
          </h3>
          <p className='px-2 py-2 border border-gray-300 rounded-b-lg'>
            To strongly enhance the contribution of knowledge for the existing
            entrepreneurial practice in Nigeria and globally, with a view to
            improving and ensuring optimal and excellent continuous practice in
            entrepreneurship development.
          </p>
        </article>
        <article>
          <h3 className='flex items-center justify-center gap-1 py-2 text-xl font-bold text-white border rounded-t-lg bg-primary font-saira border-primary'>
            <OpenAccess className='w-8 h-8 text-white ' />
            <span className=''>Open Access</span>
          </h3>
          <p className='px-2 py-2 border border-gray-300 rounded-b-lg'>
            To strongly enhance the contribution of knowledge for the existing
            entrepreneurial practice in Nigeria and globally, with a view to
            improving and ensuring optimal and excellent continuous practice in
            entrepreneurship development.
          </p>
        </article>
      </section>
    </main>
  )
}
