import { ChevronLeft, CogIcon } from '@/components/Icons'
import MainContainer from '@/components/MainContainer'
import Link from 'next/link'

export const metadata = {
  title:
    'Current Issue - Benin International Journal for Entrepreneurship Development',
  description:
    'This page contains the articles in the current issue the Benin International Journal for Entrepreneurship Development.',
}

function Currentissue() {
  return (
    <MainContainer>
      <h2 className='text-2xl font-bold underline uppercase font-saira'>
        Current Issue
      </h2>
      <section className='flex flex-col items-center space-y-8'>
        <CogIcon className='w-16 h-16 md:w-20 md:h-20 text-neutral-400' />
        <h3 className='text-base md:text-2xl xl:text-3xl text-neutral-400'>
          This page is still under construction
        </h3>
        <Link
          href={'/'}
          className='flex items-center text-xs font-medium transition-all text-primary hover:underline hover:font-semibold md:text-base '
        >
          <ChevronLeft className='inline-block w-3 h-3 md:w-4 md:h-4' />
          <span>Back to Homepage</span>
        </Link>
      </section>
    </MainContainer>
  )
}

export default Currentissue
