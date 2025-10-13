import { defineEventHandler, readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody<{ email?: string; amount?: string | number }>(event)

  const secret = process.env.PAYSTACK_SECRET_KEY || process.env.PAYSTACK_SECRET || process.env.PAYSTACK_KEY
  if (!secret) {
    throw createError({ statusCode: 500, statusMessage: 'PAYSTACK_SECRET_KEY not set in environment' })
  }

  if (!body?.email || !body?.amount) {
    throw createError({ statusCode: 400, statusMessage: 'email and amount are required' })
  }

  // Ensure the amount is sent as a string/number as provided; caller is responsible for correct units per Paystack docs
  const payload = { email: body.email, amount: body.amount }

  console.log(process.env.PAYSTACK_SECRET_KEY, payload)
  try {
    const res = await $fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secret}`,
        'Content-Type': 'application/json',
      },
      body: payload,
    })
    return res
  } catch (err: any) {
    // Surface Paystack error response when possible
    const statusCode = err?.response?.status || 500
    const statusMessage = err?.response?._data?.message || err?.message || 'Paystack initialize failed'
    throw createError({ statusCode, statusMessage, data: err?.response?._data })
  }
})
