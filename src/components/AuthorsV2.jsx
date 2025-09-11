import { authorsNameWithAbrreviationsV2 } from '@/lib/util';
import { authorsNameWithAbrreviations } from '@/lib/utils';
import { cn } from '@/lib/utils';

export default function AuthorsV2({ authors, withAffliation, className }) {
  if (withAffliation)
    return (
      <div className='space-y-2'>
        {authors.map(({ name, department, institution, _id }) => (
          <div key={_id} className=''>
            {/* <div className='flex items-center space-x-1'> */}
            <span className='text-sm font-semibold leading-none sm:text-base'>
              {name}
            </span>
            {/* </div> */}
            <span className='flex flex-wrap text-[#808080] text-sm'>{`${department}, ${institution}`}</span>
            {/* <p className='text-neutral-500'>{institution}</p> */}
          </div>
        ))}
      </div>
    );
  return (
    <div className=''>
      {authors.map((author, index) => (
        <span
          key={author._id}
          className={cn('text-sm text-[#606060]', className)}
        >{`${authorsNameWithAbrreviationsV2(author.name)}${
          index !== authors.length - 1 ? ', ' : ''
        }`}</span>
      ))}
    </div>
  );
}
