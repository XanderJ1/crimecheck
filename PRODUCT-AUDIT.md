# Crime Check Foundation product audit

Date: 2026-09-30. Scope: the local repository, not a verified production deployment.

Implementation follow-up: see [AUDIT-FIXES.md](AUDIT-FIXES.md) for changes, validation, and remaining owner/deployment actions. The findings below are the original audit baseline.

The site communicates a useful mission and offers concrete ways to donate and volunteer, but conversion, trust, and accessibility defects need attention before a wider launch. This is an expert source review, not user research or a WCAG conformance certification.

Methods: heuristic-evaluation, accessibility-audit, and web-design-guidelines skills. Reviewed all public page sources, shared navigation, donation and contact flows, API handlers, configuration, and existing smoke checks. `npm.cmd run smoke` passed. Browser tooling returned no available browsers; a local development-server request returned HTTP 503 while startup was still in progress. No visual, mobile, screen-reader, completed payment, or email-delivery tests were completed. The 503 is not classified as a product defect.

## Product assessment

Primary audiences are prospective donors, volunteers, partners, and visitors assessing the foundation's work. The intended journey is discover the mission, inspect evidence of impact, then donate, apply, or contact the team. Beneficiaries seeking assistance have only a general contact path; whether a dedicated assistance flow is needed requires stakeholder confirmation.

Strengths include specific project descriptions, founder history, testimonials, multiple giving methods, a shared donation component, and volunteer opportunities tied to an application. Donation and volunteer inputs mostly use native labels and validation. Contact and volunteer APIs perform basic server validation and await email delivery before returning success.

The main product weakness is the gap between a visible promise and its outcome: donation calls to action are inconsistent, newsletter success is fictitious, several trust links are placeholders, and payment completion is not represented in the repository. Improving these flows is more urgent than adding more sections or decorative styling.

## Prioritized findings

Priority: P0 = immediate investigation; P1 = fix before broad release; P2 = next improvement cycle. Heuristic severity uses 0–4: 2 minor, 3 major, 4 blocks the affected task. File references are relative to the repository root.

| ID | Priority / severity | Evidence and impact | Remediation and acceptance criteria |
|---|---|---|---|
| 01 | P0 / security review | `.env` is tracked (`git ls-files --error-unmatch .env` succeeds); `.gitignore` explicitly contains `!.env`. This creates a credential-exposure risk. Values and repository visibility were not inspected, so actual secret exposure is not established. | Privately inspect tracked contents and history. If real credentials were committed, rotate them and follow repository incident procedures. Remove secrets from tracking, restore ignore rules, retain a placeholder-only `.env.example`, and add secret scanning. |
| 02 | P1 / 3, consistency and error prevention | `app/pages/index.vue:180` uses a button with a `to` attribute but no handler. `app/pages/projects.vue:28` sends Donate to `/`; line 33 renders a Donate heading as a floating control. These interrupt the main conversion journey. | Use links to `/donate` for all donation navigation. Verify every visible donation action by pointer and keyboard. Home Learn More at `index.vue:86` should lead to meaningful mission/project content. |
| 03 | P1 / 4 for newsletter, system status | `app/components/app/Footer.vue:142` only shows an alert and clears the address. No subscription request occurs; any nonempty value can trigger success because native form submission is absent. | Implement a real validated subscription flow or remove the signup. Show success only after confirmed subscription acceptance; preserve the address and offer retry on failure. |
| 04 | P1 / 3, consistency and trust | `app/pages/news.vue:93` and `gallery.vue:51` describe fighting breast cancer despite these pages' justice-reform context. Footer social links lead to platform homepages; Contact, Privacy, and Terms point to `#` (`Footer.vue:38,125,128`). | Replace inherited copy with verified mission copy and actual organization profiles. Link contact to the contact section, publish appropriate privacy/terms content, and verify every footer destination. |
| 05 | P1 / 3, error prevention | `server/api/paystack-init.post.ts:11–16` checks only truthiness and forwards the client amount. The UI promises GHS but the API does not explicitly set currency. Name and message collected by `DonationForm.vue` are discarded by the API. No callback/verification/webhook handler was found in `server/`. | Validate email and a bounded positive integer subunit amount server-side, explicitly set GHS, and decide which donor details to retain as metadata. Add a verified completion/reconciliation path and cancellation/retry guidance. Confirm existing Paystack dashboard processes before deciding what belongs on-site. Test in sandbox; do not treat checkout initialization as a completed donation. |
| 06 | P1 / 3, consistency | `app/pages/paystack-test.vue` is a routable duplicate donation page containing `00-0000000` and masked MoMo details. No production route exclusion is visible. | Remove or restrict the test route in production and exclude it from indexing. Verify that public donation entry points present one approved set of giving instructions. |
| 07 | P1 / 3, error recovery | `app/pages/events.vue:114,120` calls `.filter` on `events.value` without a fallback. A failed CMS request can leave data absent and trigger a render error. News treats absent data like an empty collection; gallery offers no explicit error or empty state. | Provide array defaults and distinct loading, failure, retry, and genuine-empty states. Test unavailable CMS and empty collections separately. Event Learn More links should expose the selected event instead of sending every visitor to About. |
| 08 | P1 / 3, consistency and efficiency | `TestNavbar.vue` desktop navigation includes Gallery and Volunteer; mobile navigation omits both and adds Events. Volunteer remains reachable in the footer, but mobile users lose a primary conversion entry. | Use one navigation data source across breakpoints. Keep Donate and Volunteer readily discoverable and add a visible active-page treatment. |
| 09 | P2 / 2, error prevention | `DonationForm.vue:49,157` synchronizes a preset into the amount only in one direction. Editing the amount can leave a different preset highlighted. | Derive selection from the amount or switch to Custom on manual editing. Verify that the highlighted choice, displayed amount, and checkout amount always agree. |
| 10 | P2 / 2, help and trust | Project narratives establish purpose but do not provide a concise dated impact summary or linked reporting alongside donation decisions. The volunteer confirmation gives a reference without a response-time expectation. | Add verified outcomes with dates and sources, explain how gifts support work, and state a team-approved follow-up window and contact route. Do not invent impact figures or response promises. |

Payment guidance is based on the [Paystack transaction API](https://paystack.com/docs/api/transaction/), which documents subunit amounts, currency, metadata, initialization, and verification. Currency omission is a configuration-dependent risk, not proof that donations currently use the wrong currency.

## Accessibility findings

Mappings use [WCAG 2.2](https://www.w3.org/TR/WCAG22/). Source evidence supports the findings below; final conformance requires rendered and assistive-technology testing.

| ID | Severity / criterion | Location and barrier | Remediation |
|---|---|---|---|
| A1 | Critical for news access / 2.1.1 | `news.vue:113–117`: clickable `div` cards have no native keyboard action or focusability. Keyboard users cannot open stories. | Use a native button or a real article link. Verify Tab, Enter, and Space as appropriate. Prefer article URLs for sharing and browser history. |
| A2 | Major / 4.1.2, 2.4.3 | `news.vue:148–204`: overlay lacks dialog semantics, a dialog label, initial focus, focus containment, and focus restoration. Escape is implemented, but is not sufficient. | Use an accessible dialog with a title, move focus inside, prevent background interaction, and restore focus to the opener. Test complete keyboard traversal. |
| A3 | Major / 4.1.2 | `TestNavbar.vue:49` outputs the literal string `isMobileMenuOpen` as `aria-expanded`, not a boolean state. Drawer also lacks explicit focus management. | Bind `:aria-expanded="isMobileMenuOpen"`, add `aria-controls`, and implement a coherent disclosure or modal-drawer pattern including keyboard dismissal and focus behavior. |
| A4 | Major / 1.3.1, 3.3.2 | `index.vue:223–227` and footer newsletter rely on placeholders instead of persistent associated labels. | Add visible labels tied to field IDs, explain required/optional fields, and retain instructions while users type. |
| A5 | Major / 4.1.3 | Contact, volunteer, and donation results appear dynamically in plain paragraphs. Success/error changes lack live-region semantics. | Add `role="status"` for success/progress, appropriate error announcements, and field-specific error associations where needed. |
| A6 | Major / 2.4.7 | `DonationForm.vue:107–128`: focused radio inputs are visually hidden while focus styles are attached to nonfocusable labels. The radios also lack a shared native `name`. | Group radios by name and show focus on the visible label using peer/sibling focus-visible styles. Confirm arrow-key selection and visible focus. |
| A7 | Minor / 1.1.1 | `index.vue:143` labels the UNODC logo as USAID; lines 212–215 reuse “school donate” for different images. | Write accurate purpose-based alternatives; use empty alternatives for genuinely decorative images. Review CMS image alternatives too. |
| A8 | Minor / 1.3.5 | Name, email, and telephone fields do not explicitly supply autocomplete tokens. | Add `autocomplete="name"`, `email`, and `tel` to applicable personal-data fields. |

Example remediation patterns:

```vue
<button :aria-expanded="isMobileMenuOpen" aria-controls="mobile-navigation"
        @click="toggleMobileMenu">Menu</button>
<label for="contact-email">Email address</label>
<input id="contact-email" v-model="contactForm.email" type="email"
       autocomplete="email" required />
<p v-if="contactSuccess" role="status">{{ contactSuccess }}</p>
<p v-if="contactError" role="alert">{{ contactError }}</p>
```

These snippets address individual semantics, not the full interaction implementation.

## Items requiring runtime verification

- News uses an unwrapped horizontal flex row and fixed-width image containers (`news.vue:112–125`). Test 320, 375, 768, and 1280 CSS-pixel widths for horizontal overflow. The stacked news dialog uses a height cap with outer overflow hidden; test that all story text remains reachable on short mobile screens.
- Measure contrast for white text on green actions, footer text, image-backed hero text, and focus indicators. No measured contrast result is claimed.
- Test zoom, text spacing, keyboard bypass of repeated navigation, document language, and focus under overlays. No explicit skip link was found; other bypass mechanisms must be assessed in the rendered page.
- Gallery videos have no caption tracks in their template. Inspect actual media for speech, burned-in captions, and required descriptions before recording a media conformance failure.
- `nuxt.config.ts` sets a global home canonical while some routes override it. Inspect rendered canonical URLs for every route. `/social-share.jpg`, referenced by news and gallery, is absent from `public`; verify the production asset response and replace broken share images.
- Measure transferred image/video sizes and Core Web Vitals. Large files exist in `public`, but file size alone does not establish that they load on a given page. Review responsive image sizes, lazy loading below the fold, and video preload behavior.
- Contact/volunteer APIs send email and then write to `useStorage`; no durable mount or rate limiting was found in repository configuration. Confirm hosting-level storage, spam protection, and retention. A storage failure after email delivery could report failure and prompt a duplicate retry.

## Suggested execution order and release checks

1. Inspect tracked environment data, repair donation destinations, remove public test giving instructions, replace misleading newsletter behavior and inherited copy.
2. Complete the donation lifecycle and provider-sandbox checks. Align mobile navigation and fix CMS failure handling.
3. Repair keyboard access, dialog/menu behavior, form labeling, status announcements, and radio focus. Then test with a screen reader and keyboard on rendered pages.
4. Resolve responsive, contrast, social preview, and performance findings from runtime measurements; improve impact evidence and follow-up expectations.

Release checks should cover: every primary CTA destination; donation success/cancel/retry and amount/currency agreement; actual subscription acceptance; contact/volunteer success and provider failure; CMS outage and empty data; keyboard-only news/menu/dialog journeys; mobile reflow; and valid public policy/contact links.

The current smoke script checks source strings and file existence. Its passing result does not cover these behaviors. Add a small set of meaningful journey and API-validation checks when implementing fixes. No application code was changed during this audit.
