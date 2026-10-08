import { createError } from 'h3'
import { randomUUID } from 'node:crypto'

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
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function createSubmissionId(prefix: string) {
  return `${prefix}_${randomUUID()}`
}

export async function sendEmailJS(templateParams: EmailTemplateParams) {
  const serviceId = process.env.EMAILJS_SERVICE_ID
  const templateId = process.env.EMAILJS_TEMPLATE_ID
  const publicKey = process.env.EMAILJS_PUBLIC_KEY
  const privateKey = process.env.EMAILJS_PRIVATE_KEY

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    throw createError({ statusCode: 503, statusMessage: 'Messages are temporarily unavailable. Please call +233 242 074 276.' })
  }

  try {
    await $fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      retry: 0,
      timeout: 15000,
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
    throw createError({ statusCode: 502, statusMessage: 'We couldn’t confirm delivery. Your details are still here. Please try again later or call +233 242 074 276.' })
  }
}
