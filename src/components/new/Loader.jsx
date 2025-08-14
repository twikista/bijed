import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { CircleCheck, CircleX, LoaderCircle } from 'lucide-react';

export const PendingStateLoader = ({ message }) => (
  <motion.div
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    exit={{ scale: 0.8 }}
    className='flex flex-col items-center justify-center w-full p-8 bg-white rounded-lg shadow-lg max-w-80'
  >
    <LoaderCircle className='w-5 h-5 text-primary md:h-8 md:w-8 animate-spin' />
    <p className='mt-4 text-sm font-medium text-center md:text-base'>
      {message ?? 'Loading...'}
    </p>
  </motion.div>
);

export const FullfilledStateLoader = ({ title, message, type }) => (
  <motion.div
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    exit={{ scale: 0.8 }}
    className='w-full p-8 text-center bg-white rounded-lg shadow-lg dark:bg-surface-dark max-w-80'
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 10,
      }}
    >
      {type === 'success' ? (
        <CircleCheck className='w-8 h-8 mx-auto text-primary' />
      ) : (
        <CircleX className='w-8 h-8 mx-auto text-red-400' />
      )}
    </motion.div>
    {title ? <p className='mt-4 text-lg font-medium'>{title}</p> : null}
    <p
      className={cn(
        'mt-2 text-sm md:text-base',
        type === 'success' ? 'text-primary' : 'text-red-400'
      )}
    >
      {message ?? 'Completed'}
    </p>
  </motion.div>
);
