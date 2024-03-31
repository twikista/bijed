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

export const articleAuthorSchema = z.object({
  name: z.string().min(1, { message: 'name is required' }),
  affliation: z.string().min(1, { message: "author's affliation is required" }),
  orchidId: z
    .string()
    .min(1, { message: 'Orchid Id is required' })
    .refine((val) => /^(\d{4}-){3}\d{4}$/.test(val), {
      message: 'Enter a valid Orchid Id',
    }),
})

export const articleFormSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  authors: z.array(articleAuthorSchema),
  volume: z.number().min(1, { message: 'volume is required' }),
  issue: z.number().min(1, { message: 'volume is required' }),
  startPage: z.number().min(1, { message: 'srart page number is required' }),
  endPage: z.number().min(1, { message: 'srart page number is required' }),
  abstract: z.string().min(1, { message: 'Abstract is required' }),
  keywords: z
    .array(
      z.object({
        keyword: z.string().min(1, { message: 'keyword must be provided' }),
      })
    )
    .nonempty({ message: 'keyword must be provided' }),
  pdfFile: z
    .custom()
    .refine((files) => Array.from(files ?? []).length !== 0, {
      message: 'Article PDF is required',
    })
    .refine(
      (files) =>
        Array.from(files ?? []).every(
          (file) => ((file.size / 1024) * 1024).toFixed(2) <= 2
        ),
      { message: 'maximum file size 1 2MB' }
    )
    .refine(
      (files) =>
        Array.from(files ?? []).every(
          (file) => file.type === 'application/pdf'
        ),
      { message: 'File type must be PDF' }
    ),
})

///(^[a-z]+)(@uniben\.edu|@bijed\.com\.ng)|(^[a-z]+\.[a-z]+)@uniben\.edu$/gm
