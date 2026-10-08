import { createError, defineEventHandler } from 'h3'
import { isValidDonationAmount, DONATION_CURRENCY } from '../../shared/utils/donation'
import { cleanText, isValidEmail } from '../utils/emailjs'
import { createPaymentReference } from '../utils/payment-reference'
import { paystackSecret, paymentCallbackUrl } from '../utils/paystack'
import { limitRequests, readSubmissionBody } from '../utils/request-guard'

export default defineEventHandler(async (event) => {
  limitRequests(event, 'payment-init', 20)
  const body = await readSubmissionBody(event)
  const email = cleanText(body.email, 160).toLowerCase()
  const name = cleanText(body.name, 120)
  const message = cleanText(body.message, 2000)
  if (!name || !isValidEmail(email)) throw createError({ statusCode: 400, statusMessage: 'Please enter your name and a valid email address.' })
  if (!isValidDonationAmount(body.amount)) throw createError({ statusCode: 400, statusMessage: 'Enter an amount from GHS 1 to GHS 100,000, with no more than two decimal places.' })
  const secret = paystackSecret()
  const reference = createPaymentReference(body.amount, secret)
  const callbackUrl = paymentCallbackUrl()
  try {
    const res = await $fetch<{ status: boolean; data?: { authorization_url?: string; reference?: string } }>('https://api.paystack.co/transaction/initialize', {
      method: 'POST', retry: 0, timeout: 15_000,
      headers: { Authorization: `Bearer ${secret}` },
      body: { email, amount: body.amount, currency: DONATION_CURRENCY, reference, callback_url: callbackUrl, metadata: { name, message } },
    })
    const checkout = new URL(res.data?.authorization_url || '')
    if (!res.status || res.data?.reference !== reference || checkout.protocol !== 'https:' || checkout.hostname !== 'checkout.paystack.com') throw new Error('Unexpected checkout response')
    return { authorizationUrl: checkout.href, reference }
  } catch {
    throw createError({ statusCode: 502, statusMessage: 'We couldn’t open Paystack checkout. Your details are still here; please try again or use another giving method.' })
  }
})
