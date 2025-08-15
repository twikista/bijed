'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import clsx from 'clsx';

import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import { cn } from '@/lib/utils';

function ResourceFilterV2({ mode }) {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  // const router = useRouter();
  const { replace } = useRouter();

  const handler = (filterParam) => {
    const params = new URLSearchParams(searchParams);
    filterParam ? params.set('status', filterParam) : params.delete('status');
    replace(`?${params.toString()}`);
  };

  return (
    <div className='flex items-center self-end'>
      {/* <div>Filter:</div> */}
      <div className='flex w-[160px] text-xs  items-center overflow-hidden border-2 justify-evenly border-[#800080] rounded-xl md:w-[160px]'>
        <button
          onClick={() => handler('published')}
          className={cn(
            'flex-1 flex justify-center w-6/12 py-1 px-1 text-[#800080]',
            status === 'published' || status === null
              ? 'text-white bg-[#800080]'
              : null
          )}
        >
          Published
        </button>
        {/* <div className='mx-[3px] '>|</div> */}
        <button
          onClick={() => handler('draft')}
          className={cn(
            'flex-1 flex py-1 px-1 w-6/12 justify-center text-[#800080]',
            status === 'draft' ? 'text-white bg-[#800080]' : null
          )}
        >
          Unpublished
        </button>
      </div>
    </div>
  );
}

export default ResourceFilterV2;
