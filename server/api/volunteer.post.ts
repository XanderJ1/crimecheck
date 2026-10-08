import { createError, defineEventHandler } from 'h3'
import { cleanText, createSubmissionId, isValidEmail, sendEmailJS } from '../utils/emailjs'
import { limitRequests, readSubmissionBody } from '../utils/request-guard'

interface VolunteerSubmission {
  name?: string
  email?: string
  phone?: string
  interest?: string
  message?: string
}

const allowedInterests = new Set([
  'Prison Outreach',
  'Legal Advocacy',
  'Community Support',
  'Media & Storytelling',
  'General Volunteering',
])

export default defineEventHandler(async (event) => {
  limitRequests(event, 'volunteer', 10)
  const body = await readSubmissionBody(event)

  const name = cleanText(body.name, 120)
  const email = cleanText(body.email, 160).toLowerCase()
  const phone = cleanText(body.phone, 60)
  const interest = cleanText(body.interest, 80)
  const message = cleanText(body.message, 2000)

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'name, email, and message are required' })
  }

  if (!isValidEmail(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Please provide a valid email address' })
  }

  if (!allowedInterests.has(interest)) {
    throw createError({ statusCode: 400, statusMessage: 'Please select a valid volunteer interest' })
  }

  const id = createSubmissionId('vol')

  await sendEmailJS({
    title: 'Volunteer',
    name,
    email,
    reply_to: email,
    phone,
    subject: `Volunteer application: ${interest} [${id}]`,
    message,
    interest,
  })

  return {
    ok: true,
    id,
    message: 'Volunteer application received',
  }
})
