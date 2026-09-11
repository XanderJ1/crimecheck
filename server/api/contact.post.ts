import { createError, defineEventHandler, getRequestIP, readBody } from 'h3'
import { cleanText, createSubmissionId, isValidEmail, sendEmailJS } from '../utils/emailjs'

interface ContactSubmission {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactSubmission>(event)

  const name = cleanText(body.name, 120)
  const email = cleanText(body.email, 160).toLowerCase()
  const phone = cleanText(body.phone, 60)
  const subject = cleanText(body.subject, 160) || 'Website contact message'
  const message = cleanText(body.message, 2000)

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'name, email, and message are required' })
  }

  if (!isValidEmail(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Please provide a valid email address' })
  }

  const submittedAt = new Date().toISOString()
  const id = createSubmissionId('contact')
  const ip = getRequestIP(event, { xForwardedFor: true }) || null

  await sendEmailJS({
    title: 'General Contact',
    name,
    email,
    reply_to: email,
    phone,
    subject,
    message,
    interest: 'General',
  })

  await useStorage('contact').setItem(id, {
    id,
    name,
    email,
    phone,
    subject,
    message,
    submittedAt,
    ip,
    emailSent: true,
  })

  return {
    ok: true,
    id,
    message: 'Contact message received',
  }
})
