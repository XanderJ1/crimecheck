# Audit remediation

## Implemented

- Donation CTAs now lead to `/donate`; the duplicate payment-test route permanently redirects there and is excluded from the sitemap.
- Removed the fake newsletter signup and generic social links. News and contact links provide working alternatives. Approved social profiles can be added when supplied.
- Replaced inherited mission copy; added a factual information-use page and links from forms. Removed the empty Terms link rather than inventing contractual terms.
- Desktop/mobile navigation share a single link list. Mobile navigation is an inline disclosure with valid expanded state, Escape dismissal, natural tab order, and focus return on Escape. It does not obscure background content.
- News cards are native buttons, with a native modal dialog, title, keyboard close, background inertness, focus return, and one scrollable content area. Prismic rich-text rendering replaces unsafe HTML/string fallbacks.
- CMS pages have distinct loading, failure/retry, and empty states. Event details expand in place, and same-day events remain upcoming in Ghana's time zone.
- Contact inputs now have visible labels; personal fields have autocomplete; results are announced; donation radio choices have native grouping and visible focus. Added skip links, route announcements, English document language, reduced-motion styles, and a consistent light theme.
- Improved responsive news/project layouts, image loading, video preload, footer/action contrast, and image alternatives. Removed the global homepage canonical; route canonicals are supplied by Nuxt SEO. Social previews use an existing image.
- Added optional CMS caption and transcript fields and corresponding gallery rendering. Publishing actual captions/transcripts remains an editorial task.
- Payments validate bounded integer subunits and email/name on the server, use explicit GHS currency, preserve name/message metadata, and use signed references bound to the original amount. The callback verifies status, reference, currency and amount before displaying success. Payment details are not returned to the browser. Cancellation/pending/failure cases provide recovery instructions.
- Contact/volunteer references are included in the email subject. The handlers no longer write a second volatile copy of personal data after successful delivery. Provider failures return user-oriented messages without exposing raw provider details.
- Added process-local request limits and payload checks; production reverse-proxy limits remain necessary for distributed deployments.
- Removed `.env` from the Git index without deleting the local file. Added environment ignore rules, a tracked-file secret-pattern check, unit tests, mocked-provider integration tests, and a CI workflow.
- Explicitly allowed Sharp's native installation in pnpm and aligned Docker/CI on pnpm 10. The production image-resizing endpoint is included in integration tests to catch missing native binaries.
- Disabled the unused generated social-card service; existing explicit share-image metadata remains in place. This removes unused renderer/template dependencies from the production bundle.

## UI refresh

Interior-page refresh: added a shared namespaced page introduction to Projects, About, Gallery, Events, News and Volunteer. Standardized content gutters, programme sections, story/media cards, values, timeline and founder layouts. Gallery photos use consistent crops; videos retain their full frame. CMS loading/retry/empty states, event disclosures, news dialogs and volunteer submissions remain intact. Live development responses and compiled CSS were checked across these routes; rendered browser verification remains unavailable.

Screenshot follow-up: fixed a daisyUI `hero-content` class collision that arranged the entire hero in a horizontal flex row and crushed the heading. The hero now has a namespaced block layout. Navigation and footer use the same content width as the homepage, grid columns can shrink safely, and the contact section stacks below 1024px. The running dev server serves the corrected markup and compiled CSS; no browser surface is available for rendered verification.

The homepage now uses a shared warm-paper, navy and green palette, responsive type and spacing, a clearer mission-led hero, numbered areas of work, consistent initiative/testimonial cards, a photo gallery, and a split contact section. Navigation includes the foundation name and gives Donate the primary visual emphasis. The footer and donation fields share the updated styling. Existing submission handlers, payment validation, focus indicators, reduced-motion support and mobile menu behavior are preserved.

The homepage uses existing local outreach photos. Unverified partner-endorsement copy was removed; no replacement statistics or promises were added. The selected brand-token contrast checks measure white/green at 7.18:1, ink/paper at 13.98:1, muted/paper at 5.94:1 and green/paper at 6.82:1. Browser visual and interaction review remains unavailable in this session.

## Configuration and operational follow-up

1. Rotate the EmailJS private key that was committed, and inspect repository history for any other exposed credentials. Update deployment/local secrets outside Git. Removing a tracked file does not erase earlier commits or invalidate keys. Coordinate any history rewrite with repository collaborators; none was performed here.
2. Configure `PAYSTACK_SECRET_KEY` and `SITE_URL` on the server. `SITE_URL` must be the site's HTTPS origin in production; it supplies the callback URL. For local development use a test key and `SITE_URL=http://127.0.0.1:3000`. Verify actual Paystack sandbox success/cancel/failure, then confirm production account currency and reconciliation practices.
3. The Paystack dashboard remains the donation system of record. Callback verification does not implement a local ledger, receipts, automated fulfillment, or a webhook worker. Use dashboard reconciliation for donors who do not return from checkout. Signed references depend on the server key used at initialization; after key rotation, refer old references to the foundation for reconciliation.
4. Configure EmailJS variables and ensure its template renders `subject` so staff can find the reference. Validate actual delivery with an authorized test message. A provider timeout can have an uncertain outcome; automatic email retries are deliberately disabled.
5. Process-local limits are 10 form requests, 20 payment initializations, and 60 status checks per IP per 10 minutes. Use a shared edge limiter for multiple processes/serverless instances. Set `TRUST_PROXY=true` only if your trusted proxy replaces untrusted forwarding headers. Configure an upstream request body limit of 16 KB.
6. Publish the changed `videos` CMS model before adding English WebVTT captions and transcripts. Check that the media host allows anonymous cross-origin video/caption requests. Existing media still require caption/audio-description review; fields alone do not establish accessibility compliance.
7. Supply approved social URLs, retention/privacy wording, impact-report links, and a volunteer response-time commitment. The current information-use page describes the implemented flow; it is not a substitute for an organization-approved full privacy policy. No impact statistics or turnaround promises were invented.

## Validation

Completed on 2026-10-01: production build passed; 4 unit tests and 9 mocked-provider production integration tests passed; smoke, tracked-file secret checks, selected contrast checks, and Git diff whitespace checks passed. The production image-resizing request returns HTTP 200. Nuxt Image still emits a native-binary discovery warning on this Windows setup, but the actual built image endpoint was verified successfully. Existing Browserslist, CSS optimizer, and dependency deprecation warnings remain non-blocking.

Run `npm run smoke`, `npm test`, `npm run check:secrets`, `npm run build`, `npm run check:contrast`, then `npm run test:integration` (Node 24+ for the test runner's TypeScript support). Integration tests start an isolated production server on port 3217, replace external provider requests with fixtures, simulate CMS failure, and do not send messages or create real payments.

Selected built color-token checks passed: white/green-700 4.94:1; white/blue-600 5.26:1; white/blue-700 6.82:1; slate-300/slate-900 12.02:1. These are sRGB calculations for those pairs, not a whole-page contrast certification.

Implementation references: [Paystack transaction verification](https://paystack.com/docs/payments/verify-payments/), [native HTML dialogs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog), and [Sharp installation](https://sharp.pixelplumbing.com/install/).

Browser tooling is unavailable in this session. Keyboard/screen-reader interaction, responsive widths, measured contrast, caption quality and real payment/email provider behavior still require acceptance testing. The original audit remains in `PRODUCT-AUDIT.md` as the historical baseline.
