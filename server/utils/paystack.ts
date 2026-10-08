import { createError } from 'h3'
export function paystackSecret() {
  const secret = process.env.PAYSTACK_SECRET_KEY || process.env.PAYSTACK_SECRET || process.env.PAYSTACK_KEY
  if (!secret) throw createError({ statusCode: 503, statusMessage: 'Online donations are temporarily unavailable. Please use another giving method or contact us.' })
  return secret
}
export function paymentCallbackUrl() {
  const url = new URL(process.env.SITE_URL || 'https://crimecheckfoundationgh.org')
  if (url.protocol !== 'https:' && !(process.env.NODE_ENV !== 'production' && ['localhost', '127.0.0.1'].includes(url.hostname))) {
    throw createError({ statusCode: 503, statusMessage: 'Online donations are temporarily unavailable.' })
  }
  return new URL('/donation-result', url.origin).href
}
