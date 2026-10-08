import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto'
import { isValidDonationAmount } from '../../shared/utils/donation.ts'

function signature(value: string, secret: string) {
  return createHmac('sha256', secret).update(`ccf-donation:${value}`).digest('hex').slice(0, 32)
}

// Bind the original amount to an unpredictable reference, without storing personal data.
export function createPaymentReference(amount: number, secret: string) {
  if (!isValidDonationAmount(amount) || !secret) throw new Error('Invalid payment reference input')
  const value = `ccf.${amount}.${randomBytes(16).toString('hex')}`
  return `${value}.${signature(value, secret)}`
}

export function referenceAmount(reference: unknown, secret: string): number | null {
  if (typeof reference !== 'string' || !secret) return null
  const match = reference.match(/^(ccf\.(\d{3,8})\.[a-f0-9]{32})\.([a-f0-9]{32})$/)
  if (!match || !isValidDonationAmount(Number(match[2]))) return null
  const valid = timingSafeEqual(Buffer.from(match[3]!, 'hex'), Buffer.from(signature(match[1]!, secret), 'hex'))
  return valid ? Number(match[2]) : null
}

export function matchesPayment(data: { reference?: unknown; amount?: unknown; currency?: unknown }, reference: string, amount: number) {
  return data.reference === reference && data.amount === amount && data.currency === 'GHS'
}
