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
    .min(1, { message: 'E-mail is  requird' })
    .email({ message: 'Enter a valid e-mail' }),
  // .includes('uniben.edu', { message: 'Email must be valid UNIBEN email' }),
})

export const passwordSchema = z.object({
  password: z
    .string()
    .trim()
    .min(6, { message: 'Password must be a minimum of 6 characters' }),
  // .includes('uniben.edu', { message: 'Email must be valid UNIBEN email' }),
})

const articleAuthorSchema = z.object({
  name: z.string().min(1, { message: 'name is required' }),
  affliation: z.string().min(1, { message: "author's affliation is required" }),
  orchidId: z
    .string()
    .min(1, { message: 'Orchid Id is required' })
    .refine((val) => /^([0-9a-zA-Z]{4}-){3}\d{4}$/.test(val), {
      message: 'Enter a valid Orchid Id',
    }),
})

const fileSizeInMb = (sizeInBytes) => sizeInBytes / 1024 ** 2
const MAX_FILESIZE = 2
const fileInputSchema = z
  .custom()
  .refine((files) => Array.from(files ?? []).length !== 0, {
    message: 'Article PDF is required',
  })
  .refine((files) =>
    Array.from(files ?? []).every(
      (file) => +fileSizeInMb(file.size).toFixed(2) <= MAX_FILESIZE,
      {
        message: 'maximum file size is 2MB',
      }
    )
  )
  .refine(
    (files) =>
      Array.from(files ?? []).every((file) => {
        console.log('file type-', file.type === 'application/pdf')
        console.log('file size-', +fileSizeInMb(file.size).toFixed(2))
        return 'application/pdf' === file?.type
      }),
    { message: 'File type must be PDF' }
  )

export const articleFormSchema = z.object({
  title: z.string().trim().min(1, { message: 'Title is required' }),
  authors: z.array(articleAuthorSchema),
  volume: z.number({
    required_error: 'volume is required',
    invalid_type_error: 'Volume must be a number',
  }),
  issue: z.number({
    required_error: 'volume is required',
    invalid_type_error: 'Volume must be a number',
  }),
  startPage: z.number({
    required_error: 'start page number is required',
    invalid_type_error: 'start page must be a number',
  }),
  endPage: z.number({
    required_error: 'end page number is required',
    invalid_type_error: 'end page must be a number',
  }),
  abstract: z.string().min(1, { message: 'Abstract is required' }),
  keywords: z
    .array(
      z.object({
        keyword: z.string(),
      })
    )
    .refine((keywords) => keywords[0].keyword !== '', {
      message: 'Keyword must be provided',
    }),
  // .nonempty({ message: 'keyword must be provided' }),
  // pdfFile: z
  //   .custom()
  //   .refine((files) => Array.from(files ?? []).length !== 0, {
  //     message: 'Article PDF is required',
  //   })
  //   .refine((files) =>
  //     Array.from(files ?? []).every((file) => file.size / 1024 ** 2 <= 2, {
  //       message: 'maximum file size is 2MB',
  //     })
  //   )
  //   .refine(
  //     (files) =>
  //       Array.from(files ?? []).every((file) => {
  //         console.log('file type-', file.type === 'application/pdf')
  //         console.log(
  //           'file size-',
  //           Number((file.size / 1024 ** 2).toFixed(2)) <= 2
  //         )
  //         return 'application/pdf' === file?.type
  //       }),
  //     { message: 'File type must be PDF' }
  //   ),
})

export const newArticleFormSchema = articleFormSchema.extend({
  pdfFile: fileInputSchema,
})

export const articleSchemaForServer = articleFormSchema.extend({
  pdfFile: z
    .union([
      z
        .string()
        .url({ message: 'provide valid url' })
        .startsWith('https://firebasestorage.googleapis.com', {
          message: 'provide valid url',
        })
        .includes('bijed-f265e.appspot.com', { message: 'provide valid' }),
      z.null(),
    ])
    .optional(),
})

export const editArticleFormSchema = articleFormSchema.extend({
  pdfFile: z.union([fileInputSchema, z.null()]).optional(),
})

// export const issueFormSchema = z.object({
//   issue: z.number({
//     required_error: 'issue field is required',
//     invalid_type_error: 'Issue must be a number',
//   }),
//   volume: z.number({
//     required_error: 'Volume field is required',
//     invalid_type_error: 'Volume must be a number',
//   }),
// })

export const announcementSchema = z.object({
  title: z.string().trim().min(1, { message: 'title is required' }),
  description: z
    .string()
    .min(20, { message: 'description is required' })
    .max(100, { message: 'Exceeded maximum character length for description' }),
  dueDate: z.date({ message: 'enter a valid date' }),
  content: z
    .string()
    .min(30, { message: 'Content must have minimum of 30 characters' }),
})

export const issueFormSchema = z.object({
  issueNumber: z.number({
    required_error: 'issue field is required',
    invalid_type_error: 'Issue must be a number',
  }),
  issueYear: z.date({ message: 'enter a valid date' }),
  volume: z.number({
    required_error: 'issue field is required',
    invalid_type_error: 'Issue must be a number',
  }),
})

///(^[a-z]+)(@uniben\.edu|@bijed\.com\.ng)|(^[a-z]+\.[a-z]+)@uniben\.edu$/gm
