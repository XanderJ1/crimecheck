// Loaded only by the integration-test child process, never by the application.
const originalFetch = globalThis.fetch
const payments = new Map()
globalThis.fetch = async (input, init) => {
  const url = new URL(typeof input === 'string' ? input : input.url || String(input))
  if (url.hostname === '127.0.0.1') return originalFetch(input, init)
  if (url.hostname === 'api.paystack.co') {
    if (url.pathname === '/transaction/initialize') {
      const body = JSON.parse(init.body)
      if (body.currency !== 'GHS' || body.metadata?.name !== 'Test Donor' || !body.callback_url.endsWith('/donation-result')) return Response.json({ status: false }, { status: 400 })
      if (body.email === 'unavailable@example.test') return Response.json({ message: 'private-provider-detail' }, { status: 503 })
      payments.set(body.reference, body)
      return Response.json({ status: true, data: { reference: body.reference, authorization_url: `https://checkout.paystack.com/${body.reference}` } })
    }
    if (url.pathname.startsWith('/transaction/verify/')) {
      const reference = decodeURIComponent(url.pathname.split('/').at(-1))
      const payment = payments.get(reference)
      if (!payment) return Response.json({ status: false }, { status: 404 })
      return Response.json({ status: true, data: {
        reference, amount: payment.email === 'mismatch@example.test' ? payment.amount + 1 : payment.amount,
        currency: 'GHS', status: payment.email === 'pending@example.test' ? 'pending' : payment.email === 'failed@example.test' ? 'failed' : 'success',
        customer: { email: payment.email }, authorization: { authorization_code: 'must-not-leak' },
      } })
    }
  }
  if (url.hostname === 'api.emailjs.com') {
    const body = JSON.parse(init.body)
    if (!body.template_params.subject.includes('[')) return new Response('missing reference', { status: 400 })
    if (body.template_params.email === 'unavailable@example.test') return new Response('private-provider-detail', { status: 503 })
    return new Response('OK')
  }
  // Fail CMS calls deliberately to exercise graceful failure rendering. No external network.
  throw new Error('External network disabled in integration tests')
}
