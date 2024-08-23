import nodemailer from 'nodemailer'
import * as Handlebars from '../../node_modules/handlebars/dist/cjs/handlebars'
import { activationTemplate } from './emailTemplates/activationEmail'
import { resetPasswordEmailTemplate } from './emailTemplates/resetPasswordEmail'
import { render, renderAsync } from '@react-email/components'
import { Email } from '@/components/Emails/Test'

export async function sendEmail({ to, subject, body, from, sender, replyTo }) {
  const { SMTP_EMAIL, SMTP_GMAIL_PASSWORD } = process.env

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: SMTP_EMAIL, pass: SMTP_GMAIL_PASSWORD },
  })
  try {
    const sendMailresult = await transport.sendMail({
      sender,
      from,
      to,
      subject,
      html: body,
      replyTo,
    })
    console.log('sendMailresult:', sendMailresult)
    if (sendMailresult?.accepted?.length > 0) return { successful: true }
  } catch (error) {
    console.log(error)
    return { successful: false }
  }
}

export function compileActivationTemplate({
  name,
  email,
  password,
  url,
  link,
}) {
  const template = Handlebars.compile(activationTemplate)
  const htmlBody = template({ name, email, password, url, link })
  return htmlBody
}

export function compileResetPasswordEmailTemplate({ name, url, link }) {
  const template = Handlebars.compile(resetPasswordEmailTemplate)
  const htmlBody = template({ name, url, link })
  return htmlBody
}

export async function compileReactEmail({ name, url, link }) {
  const email = await renderAsync(Email({ name, url, link }))
  return email
}
