import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const failures = []

function file(path) {
  return readFileSync(join(root, path), 'utf8')
}

function assert(condition, message) {
  if (!condition) {
    failures.push(message)
  }
}

assert(existsSync(join(root, '.env.example')), '.env.example is missing')
assert(file('.env.example').includes('PAYSTACK_SECRET_KEY='), '.env.example must document PAYSTACK_SECRET_KEY')
assert(file('.env.example').includes('EMAILJS_SERVICE_ID='), '.env.example must document EMAILJS_SERVICE_ID')
assert(file('.env.example').includes('EMAILJS_TEMPLATE_ID='), '.env.example must document EMAILJS_TEMPLATE_ID')
assert(file('.env.example').includes('EMAILJS_PUBLIC_KEY='), '.env.example must document EMAILJS_PUBLIC_KEY')
assert(file('.env.example').includes('EMAILJS_PRIVATE_KEY='), '.env.example must document EMAILJS_PRIVATE_KEY')

assert(!file('server/api/paystack-init.post.ts').includes('console.log'), 'Paystack API route must not log secrets or payloads')
assert(file('app/layouts/landing-page.vue').includes('<slot />'), 'landing-page layout should render <slot />')
assert(file('app/layouts/about.vue').includes('<slot />'), 'about layout should render <slot />')
assert(file('app/pages/about.vue').includes("layout: 'about'"), 'about page should reference the existing about layout')

for (const path of ['app/pages/news.vue', 'app/pages/gallery.vue', 'app/pages/about.vue', 'app/components/app/Footer.vue']) {
  const contents = file(path)
  assert(!contents.includes('Meena'), `${path} still contains Meena copy`)
  assert(!contents.includes('meenabreast'), `${path} still contains the old Meena domain or handle`)
}

for (const path of ['app/pages/events.vue', 'app/pages/gallery.vue']) {
  assert(!file(path).includes('console.log'), `${path} should not contain production console.log calls`)
}

assert(file('app/pages/donate.vue').includes('DonationForm'), 'donate route should use the shared donation form')
assert(file('app/pages/paystack-test.vue').includes('DonationForm'), 'paystack-test route should use the shared donation form')
assert(existsSync(join(root, 'server/api/contact.post.ts')), 'contact API route is missing')
assert(existsSync(join(root, 'server/api/volunteer.post.ts')), 'volunteer API route is missing')
assert(file('server/utils/emailjs.ts').includes('api.emailjs.com/api/v1.0/email/send'), 'shared EmailJS sender should call the EmailJS REST send endpoint')
assert(file('server/utils/emailjs.ts').includes('interest: string'), 'EmailJS template params should include interest')
assert(!file('server/utils/emailjs.ts').includes('purpose:'), 'EmailJS template params should not require purpose')
assert(!file('server/utils/emailjs.ts').includes('source:'), 'EmailJS template params should not require source')
assert(!file('server/utils/emailjs.ts').includes('submission_id:'), 'EmailJS template params should not require submission_id')
assert(!file('server/utils/emailjs.ts').includes('submitted_at:'), 'EmailJS template params should not require submitted_at')
assert(file('app/pages/index.vue').includes('/api/contact'), 'contact form should submit to the backend API')
assert(file('app/pages/volunteer.vue').includes('/api/volunteer'), 'volunteer page should submit to the backend API')
assert(!file('app/pages/index.vue').includes('mailto:'), 'contact form should not use mailto submissions')
assert(!file('app/pages/volunteer.vue').includes('mailto:'), 'volunteer page should not use mailto submissions')

if (failures.length > 0) {
  console.error('Smoke check failed:')
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exit(1)
}

console.log('Smoke check passed')
