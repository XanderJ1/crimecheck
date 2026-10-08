import { test, before, after } from 'node:test'
import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import { setTimeout as delay } from 'node:timers/promises'

const base = 'http://127.0.0.1:3217'
let child
let startupLog = ''
before(async () => {
  child = spawn(process.execPath, ['--import', './tests/provider-mock.mjs', '.output/server/index.mjs'], {
    env: { ...process.env, HOST: '127.0.0.1', PORT: '3217', NODE_ENV: 'production',
      PAYSTACK_SECRET_KEY: 'unit-test-only-secret', PAYSTACK_SECRET: '', PAYSTACK_KEY: '', SITE_URL: 'https://example.test', TRUST_PROXY: 'false',
      EMAILJS_SERVICE_ID: 'mock', EMAILJS_TEMPLATE_ID: 'mock', EMAILJS_PUBLIC_KEY: 'mock', EMAILJS_PRIVATE_KEY: 'mock' },
    stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true,
  })
  child.stdout.on('data', chunk => { startupLog = (startupLog + chunk).slice(-3000) })
  child.stderr.on('data', chunk => { startupLog = (startupLog + chunk).slice(-3000) })
  for (let attempt = 0; attempt < 120; attempt++) {
    if (child.exitCode !== null) throw new Error(startupLog)
    if (startupLog.includes('Listening on')) {
      try { if ((await fetch(base + '/images/logo.png')).ok) return } catch {}
    }
    await delay(250)
  }
  throw new Error('Test server did not start: ' + startupLog)
})
after(async () => {
  if (child && child.exitCode === null) { const exited = once(child, 'exit'); child.kill(); await exited }
})
async function post(path, body) {
  return fetch(base + path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
}
async function initialize(email = 'donor@example.test') {
  const response = await post('/api/paystack-init', { name: 'Test Donor', email, amount: 1999, message: 'Test note' })
  assert.equal(response.status, 200, await response.clone().text())
  return response.json()
}
test('primary SSR pages have one main, a skip target and route-specific canonical', async () => {
  for (const route of ['/', '/about', '/projects', '/donate', '/volunteer', '/privacy']) {
    const response = await fetch(base + route)
    assert.equal(response.status, 200, route)
    const html = await response.text()
    assert.match(html, /<html[^>]*lang="en"/)
    assert.equal((html.match(/<main(?:\s|>)/g) || []).length, 1, route)
    assert.match(html, /id="main-content"/)
    const canonicals = html.match(/<link[^>]*rel="canonical"[^>]*>/g) || []
    assert.equal(canonicals.length, 1, route)
    const href = canonicals[0].match(/href="([^"]+)"/)?.[1]
    assert.ok(href, route)
    assert.equal(new URL(href).pathname.replace(/\/$/, '') || '/', route)
    assert.doesNotMatch(html, /to="#"|href="#"|fight breast cancer|Thank you for subscribing/)
  }
})
test('CMS outages render recovery instead of crashing or reporting empty collections', async () => {
  for (const [route, text] of [['/events', 'Retry events'], ['/news', 'Retry news'], ['/gallery', 'Retry gallery']]) {
    const response = await fetch(base + route)
    assert.equal(response.status, 200)
    assert.ok((await response.text()).includes(text), route)
  }
})
test('public test payment route redirects and result pages are not cached', async () => {
  const redirect = await fetch(base + '/paystack-test', { redirect: 'manual' })
  assert.equal(redirect.status, 301)
  assert.equal(redirect.headers.get('location'), '/donate')
  const result = await fetch(base + '/donation-result')
  assert.equal(result.headers.get('cache-control'), 'no-store')
  assert.match(result.headers.get('x-robots-tag') || '', /(?:^|,\s*)noindex(?:,|$)/)
})
test('local image optimization works in the production server', async () => {
  const response = await fetch(base + '/_ipx/w_64/images/logo.png')
  assert.equal(response.status, 200, await response.clone().text())
  assert.match(response.headers.get('content-type') || '', /^image\//)
})
test('API rejects malformed bodies and invalid donation values before checkout', async () => {
  for (const body of [null, [], { name: 'Test Donor', email: 'invalid', amount: 100 }, { name: 'Test Donor', email: 'a@example.test', amount: -1 }, { name: 'Test Donor', email: 'a@example.test', amount: '100' }]) {
    assert.equal((await post('/api/paystack-init', body)).status, 400)
  }
})
test('verified donation matches GHS amount and never exposes payment instruments', async () => {
  const initialized = await initialize()
  assert.ok(initialized.authorizationUrl.startsWith('https://checkout.paystack.com/'))
  const response = await fetch(base + '/api/paystack-verify?reference=' + initialized.reference)
  assert.equal(response.status, 200)
  const body = await response.json()
  assert.deepEqual(body, { status: 'success', amount: 1999, currency: 'GHS', reference: initialized.reference })
  assert.equal(response.headers.get('cache-control'), 'no-store')
  assert.equal((await fetch(base + '/api/paystack-verify?reference=' + initialized.reference.replace('.1999.', '.9999.'))).status, 400)
})
test('pending, failed, mismatched and unavailable providers do not imply success', async () => {
  for (const state of ['pending', 'failed']) {
    const initialized = await initialize(`${state}@example.test`)
    const response = await fetch(base + '/api/paystack-verify?reference=' + initialized.reference)
    assert.equal((await response.json()).status, state)
  }
  const mismatch = await initialize('mismatch@example.test')
  assert.equal((await fetch(base + '/api/paystack-verify?reference=' + mismatch.reference)).status, 409)
  const unavailable = await post('/api/paystack-init', { name: 'Test Donor', email: 'unavailable@example.test', amount: 100 })
  assert.equal(unavailable.status, 502)
  assert.ok(!(await unavailable.text()).includes('private-provider-detail'))
})
test('contact and volunteer delivery handles success and failure without a second storage write', async () => {
  for (const path of ['/api/contact', '/api/volunteer']) {
    assert.equal((await post(path, null)).status, 400)
    const input = { name: 'Test Applicant', email: 'person@example.test', message: 'Test', interest: 'General Volunteering' }
    const response = await post(path, input)
    assert.equal(response.status, 200)
    assert.ok((await response.json()).id)
    const failure = await post(path, { ...input, email: 'unavailable@example.test' })
    assert.equal(failure.status, 502)
    assert.ok(!(await failure.text()).includes('private-provider-detail'))
  }
})
test('repeated form requests are rate limited with a retry time', async () => {
  let response
  for (let i = 0; i < 11; i++) response = await post('/api/contact', {})
  assert.equal(response.status, 429)
  assert.ok(Number(response.headers.get('retry-after')) > 0)
})
