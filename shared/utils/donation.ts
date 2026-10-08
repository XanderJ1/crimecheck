export const MIN_DONATION_SUBUNITS = 100
export const MAX_DONATION_SUBUNITS = 10_000_000
export const DONATION_CURRENCY = 'GHS'

export function isValidDonationAmount(value: unknown): value is number {
  return typeof value === 'number' && Number.isSafeInteger(value)
    && value >= MIN_DONATION_SUBUNITS && value <= MAX_DONATION_SUBUNITS
}

// Parse decimal input without multiplying a floating-point amount.
export function donationSubunits(value: string | number): number | null {
  const match = String(value).trim().match(/^(\d{1,6})(?:\.(\d{1,2}))?$/)
  if (!match) return null
  const amount = Number(match[1]) * 100 + Number((match[2] || '').padEnd(2, '0'))
  return isValidDonationAmount(amount) ? amount : null
}
