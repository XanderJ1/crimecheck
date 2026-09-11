import { createError } from 'h3'

export interface EmailTemplateParams {
  title: string
  name: string
  email: string
  reply_to: string
  phone: string
  subject: string
  message: string
  interest: string
}

export function cleanText(value: unknown, maxLength: number) {
  return String(value || '').trim().slice(0, maxLength)
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function createSubmissionId(prefix: string) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`
}

export async function sendEmailJS(templateParams: EmailTemplateParams) {
  const serviceId = process.env.EMAILJS_SERVICE_ID
  const templateId = process.env.EMAILJS_TEMPLATE_ID
  const publicKey = process.env.EMAILJS_PUBLIC_KEY
  const privateKey = process.env.EMAILJS_PRIVATE_KEY

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    throw createError({ statusCode: 500, statusMessage: 'EmailJS is not configured' })
  }

  try {
    await $fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: templateParams,
      },
    })
  } catch (err: any) {
    const statusCode = err?.response?.status || 502
    const statusMessage = err?.response?._data || err?.message || 'Unable to send email'
    throw createError({ statusCode, statusMessage })
  }
}
