'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/new/Spinner';

// export const CancelButton = ({ text, href, className }) => (
//   <Link href={href} className={cn('btn btn-danger', className)}>
//     {text}
//   </Link>
// )

export function CancelButton({ text, className }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      type='button'
      className={cn('btn btn-danger', className)}
    >
      {text}
    </button>
  );
}

export function SubmitButton({ mainText, altText, isSubmitting, className }) {
  return (
    <button
      type='submit'
      disabled={isSubmitting}
      className={cn('btn btn-primary', className)}
    >
      {isSubmitting ? (
        <Spinner text={altText} />
      ) : (
        <span className=''>{mainText}</span>
      )}
    </button>
  );
}
