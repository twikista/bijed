import { z } from 'zod'
export const signinFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is  requird' })
    .email({ message: 'Invalid email' })
    .includes('uniben.edu', { message: 'Email must be valid UNIBEN email' }),
  // .email({ message: 'Invalid email address' }),

  password: z
    .string()
    .trim()
    .min(6, { message: 'Password must be a minimum of 6 characters' }),
})

export const authenticateActionSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' })
    .includes('uniben', { message: 'must be valid uniben email' }),
  password: z
    .string()
    .trim()
    .min(6, { message: 'Password must be a minimum of 6 characters' }),
})

///(^[a-z]+)(@uniben\.edu|@bijed\.com\.ng)|(^[a-z]+\.[a-z]+)@uniben\.edu$/gm
