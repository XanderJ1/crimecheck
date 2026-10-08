import { createError, defineEventHandler, getQuery, setResponseHeader } from 'h3'
import { referenceAmount, matchesPayment } from '../utils/payment-reference'
import { paystackSecret } from '../utils/paystack'
import { limitRequests } from '../utils/request-guard'

export default defineEventHandler(async (event) => {
  setResponseHeader(event, 'Cache-Control', 'no-store')
  limitRequests(event, 'payment-verify', 60)
  const reference = getQuery(event).reference
  const secret = paystackSecret()
  const amount = referenceAmount(reference, secret)
  if (amount === null || typeof reference !== 'string') throw createError({ statusCode: 400, statusMessage: 'This donation reference is not valid. Contact us if you have already paid.' })
  let response
  try {
    response = await $fetch<{ status: boolean; data?: { status: string; reference: string; amount: number; currency: string } }>(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      headers: { Authorization: `Bearer ${secret}` }, retry: 0, timeout: 15_000,
    })
  } catch {
    throw createError({ statusCode: 502, statusMessage: 'We couldn’t check your donation yet. Please check again before making another payment.' })
  }
  if (!response.status || !response.data || !matchesPayment(response.data, reference, amount)) {
    throw createError({ statusCode: 409, statusMessage: 'We couldn’t match the donation details. Please contact us with your reference before paying again.' })
  }
  // Return only the outcome and amount, never provider customer/payment-instrument data.
  return { status: response.data.status, amount, currency: 'GHS', reference }
})
