import { z } from 'zod'
export const signinFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is  requird' })
    .email({ message: 'Invalid email' }),
  // .includes('uniben.edu', { message: 'Email must be valid UNIBEN email' }),
  // .email({ message: 'Invalid email address' }),

  password: z
    .string()
    .trim()
    .min(6, { message: 'Password must be a minimum of 6 characters' }),
})

export const newUserSchema = z.object({
  firstName: z.string().trim().min(1, { message: 'First name is required' }),
  lastName: z.string().trim().min(6, { message: 'Last name is required' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is  requird' })
    .email({ message: 'Invalid email' }),
  // .includes('uniben.edu', { message: 'Email must be valid UNIBEN email' }),
})

export const activateAccountSchema = z.object({
  defaultPassword: z
    .string()
    .min(6, { message: 'Password must be a minimum of 6 characters' }),
  newPassword: z
    .string()
    .min(6, { message: 'Password must be a minimum of 6 characters' }),
})

export const forgetPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is  requird' })
    .email({ message: 'Invalid email' }),
  // .includes('uniben.edu', { message: 'Email must be valid UNIBEN email' }),
})

export const passwordSchema = z.object({
  password: z
    .string()
    .trim()
    .min(6, { message: 'Password must be a minimum of 6 characters' }),
  // .includes('uniben.edu', { message: 'Email must be valid UNIBEN email' }),
})

///(^[a-z]+)(@uniben\.edu|@bijed\.com\.ng)|(^[a-z]+\.[a-z]+)@uniben\.edu$/gm
