import nodemailer from 'nodemailer'
import * as Handlebars from '../../node_modules/handlebars/dist/cjs/handlebars'
import { activationTemplate } from './emailTemplates/activationEmail'
import { resetPasswordEmailTemplate } from './emailTemplates/resetPasswordEmail'

export async function sendEmail({ to, subject, body }) {
  const { SMTP_EMAIL, SMTP_GMAIL_PASSWORD } = process.env

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: SMTP_EMAIL, pass: SMTP_GMAIL_PASSWORD },
  })
  try {
    const testEmailService = await transport.verify()
    console.log(testEmailService)
  } catch (error) {
    console.log(error)
  }

  try {
    const sendMailresult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    })
    console.log(sendMailresult)
  } catch (error) {
    console.log(error)
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
