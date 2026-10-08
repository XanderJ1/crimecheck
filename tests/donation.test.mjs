import test from 'node:test'
import assert from 'node:assert/strict'
import { donationSubunits, isValidDonationAmount } from '../shared/utils/donation.ts'
import { createPaymentReference, referenceAmount, matchesPayment } from '../server/utils/payment-reference.ts'

test('donation decimal amounts use exact integer subunits', () => {
  for (const [input, expected] of [['1', 100], ['1.01', 101], ['19.99', 1999], ['100000', 10000000]]) {
    assert.equal(donationSubunits(input), expected)
  }
  for (const invalid of ['', '0', '-5', '0.99', '100000.01', '1.001', '1e3', 'Infinity', 'NaN']) assert.equal(donationSubunits(invalid), null)
})
test('API amounts reject coercion, nonfinite values and out-of-range subunits', () => {
  for (const invalid of [null, undefined, true, '100', [], {}, NaN, Infinity, -100, 0, 99, 100.1, 10000001]) assert.equal(isValidDonationAmount(invalid), false)
  assert.equal(isValidDonationAmount(1999), true)
})
test('signed references bind original amount and resist forgery', () => {
  const secret = 'unit-test-only-secret'
  const reference = createPaymentReference(1999, secret)
  assert.equal(referenceAmount(reference, secret), 1999)
  assert.notEqual(reference, createPaymentReference(1999, secret))
  assert.equal(referenceAmount(reference.replace('.1999.', '.9999.'), secret), null)
  assert.equal(referenceAmount(reference, 'wrong-secret'), null)
  assert.equal(referenceAmount(reference + 'x', secret), null)
  for (const invalid of [null, [], '', 'not-a-reference']) assert.equal(referenceAmount(invalid, secret), null)
})
test('verification must match reference, amount and currency', () => {
  const data = { reference: 'expected', amount: 1999, currency: 'GHS' }
  assert.equal(matchesPayment(data, 'expected', 1999), true)
  assert.equal(matchesPayment({ ...data, currency: 'NGN' }, 'expected', 1999), false)
  assert.equal(matchesPayment({ ...data, amount: 2000 }, 'expected', 1999), false)
  assert.equal(matchesPayment({ ...data, reference: 'other' }, 'expected', 1999), false)
})
