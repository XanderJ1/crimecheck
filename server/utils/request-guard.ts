import { createError, getHeader, getRequestIP, readBody, setResponseHeader, type H3Event } from 'h3'

const buckets = new Map<string, { count: number; expires: number }>()
export function limitRequests(event: H3Event, scope: string, limit: number) {
  const now = Date.now()
  for (const [key, bucket] of buckets) if (bucket.expires <= now) buckets.delete(key)
  const ip = getRequestIP(event, { xForwardedFor: process.env.TRUST_PROXY === 'true' }) || 'unknown'
  const key = `${scope}:${ip}`
  const bucket = buckets.get(key) || { count: 0, expires: now + 10 * 60_000 }
  if (bucket.count >= limit || (!buckets.has(key) && buckets.size >= 10_000)) {
    setResponseHeader(event, 'Retry-After', String(Math.max(1, Math.ceil((bucket.expires - now) / 1000))))
    throw createError({ statusCode: 429, statusMessage: 'Too many requests. Please wait a few minutes before trying again.' })
  }
  bucket.count++
  buckets.set(key, bucket)
}

export async function readSubmissionBody(event: H3Event): Promise<Record<string, unknown>> {
  if (Number(getHeader(event, 'content-length') || 0) > 16_384) {
    throw createError({ statusCode: 413, statusMessage: 'Your message is too long.' })
  }
  const body = await readBody(event)
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw createError({ statusCode: 400, statusMessage: 'Please check the form and try again.' })
  }
  if (JSON.stringify(body).length > 16_384) throw createError({ statusCode: 413, statusMessage: 'Your message is too long.' })
  return body
}
