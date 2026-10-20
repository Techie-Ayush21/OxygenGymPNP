# Oxygen Gym — Website Design & Implementation Brief
## Reference-led design direction | Model Town, Panipat

**Purpose:** Give Antigravity a complete, practical specification for designing and building the Oxygen Gym website.

**Business:** Oxygen Gym, Model Town, Panipat, Haryana, India  
**Owner/contact:** Mr. Mohit Arya (confirm business details and preferred public contact information before launch)  
**Website type:** Single-page, static marketing website  
**Project status:** Prospect validation / design and implementation planning

---

# 1. Product vision

Build an original, premium-looking website for Oxygen Gym, inspired by the *visual direction and page structure* in the user-provided TNT Gyms screenshots: cinematic gym imagery, dark surfaces, bold condensed typography, red accents, editorial layouts, high-impact CTAs, membership offers, a facility gallery, testimonials only if verified, and a strong footer.

**Do not copy TNT Gyms' brand identity or content.** Do not use its logo, wording, images, branch statistics, prices, testimonials, awards, or claims. Use the screenshots as design inspiration only. Create an original Oxygen Gym identity.

The website should answer four questions quickly:
1. What is Oxygen Gym and where is it?
2. What facilities and membership options are available?
3. How can I ask about a current offer?
4. How can I call or visit the gym?

**Primary conversion:** Start a WhatsApp enquiry.  
**Secondary conversions:** Call the gym, get directions, browse membership offers, visit social profiles.

The website must feel like a real fitness brand, not a generic AI-generated landing page.

---

# 2. Non-negotiable architecture

This project is a **static website**.

- No database.
- No backend or custom API.
- No CMS or admin dashboard.
- No authentication, member accounts, booking database, or online payments.
- No storage of enquiry data.
- Membership plans and promotions live in a local, version-controlled data file.
- The developer edits the offer data and redeploys when the owner requests changes.
- Contact actions use `tel:` and WhatsApp `wa.me` links.
- Directions use a verified Google Maps URL.
- Deploy to a suitable free static-hosting tier, subject to the provider's current terms and limits.
- Keep domain ownership and paid renewals transparent. Prefer the owner to own the domain account.

### Suggested stack
- React + Vite (or plain HTML/CSS/JS if that is simpler and more reliable)
- JavaScript or TypeScript, according to the existing project
- Tailwind CSS or clean modular CSS
- Lucide icons or another consistent icon system
- Git/GitHub
- Vercel or Netlify static hosting

Do not add dependencies without a clear need. No database-related packages should be installed.

---

# 3. Design reference analysis

The supplied screenshots show these reusable *design principles*:

- A slim utility strip with phone/location/social links above the main navigation.
- A strong black header with a clear wordmark, navigation, and a red rounded CTA.
- A cinematic, dark hero image with large typography and a short positioning line.
- A high-contrast stats strip.
- Alternating dark and light sections to maintain rhythm.
- Large, condensed, athletic headings.
- Red labels, small uppercase section eyebrows, subtle borders, and restrained motion.
- Membership / training zones presented as structured visual sections.
- A real-photo gallery with consistent crops.
- Testimonial section only where genuine, approved testimonials exist.
- A substantial footer with contact details, hours, social links, and quick navigation.
- A persistent mobile-friendly enquiry action that does not cover essential content.

Use these principles to create a **distinct Oxygen Gym site**. Avoid copying exact layouts pixel-for-pixel or reproducing the TNT Gym name, logo, phrases, or business claims.

---

# 4. Brand and visual system

## 4.1 Creative direction

**Concept name:** Oxygen — Strength in Motion

Tone: confident, energetic, disciplined, modern, welcoming to beginners as well as experienced gym-goers.

The experience should be bold without being visually noisy. Use generous spacing, strong image composition, short copy, and clear CTAs.

## 4.2 Suggested design tokens

These are initial proposals; if the owner provides an official logo or palette, use that as the source of truth.

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0A0A0B` | Main dark background |
| `--color-surface` | `#151517` | Dark cards and sections |
| `--color-surface-2` | `#201D1D` | Alternate dark surface |
| `--color-text` | `#F7F5F2` | Primary text on dark |
| `--color-muted` | `#B7B2B0` | Secondary text |
| `--color-red` | `#EF2929` | Main accent and CTA |
| `--color-red-hover` | `#D91F25` | CTA hover/active |
| `--color-light-bg` | `#F4F1EC` | Selected light sections |
| `--color-light-text` | `#171413` | Text on light sections |
| `--color-border` | `rgba(255,255,255,.12)` | Subtle dark dividers |

Use red sparingly and consistently. Avoid neon green/blue accents that compete with the red identity.

## 4.3 Typography

- Headings: **Barlow Condensed**, **Oswald**, **Teko**, or a similar bold condensed display typeface.
- Body and UI: **Inter**, **Manrope**, or another readable sans-serif.
- Optional micro-labels: a monospaced font with moderate letter spacing.
- Use very large headings for the hero and section titles, but keep line lengths controlled.
- Body text must be comfortably readable on mobile.
- Load fonts responsibly; include system fallbacks.

## 4.4 Layout

- Mobile-first.
- Max content width: approximately 1160–1240px.
- Use an 8px-based spacing scale.
- Section padding: generous on desktop, reduced appropriately on mobile.
- Cards: 12–18px radius, subtle borders, minimal shadow.
- Use grid and editorial image/text splits rather than every section being identical cards.
- Keep readable text widths around 55–75 characters per line.
- Avoid horizontal overflow at all viewport sizes.

## 4.5 Photography and assets

Real Oxygen Gym photos are strongly preferred. Request permission to use the logo, facility photos, trainer photos, and promotional material.

For prototypes:
- Use clearly replaceable placeholders.
- Do not imply stock photos depict Oxygen Gym.
- Do not hotlink to random image URLs.
- Prefer optimized local WebP/AVIF images.
- Use image overlays only to maintain text contrast.
- Use appropriate `alt` text.

Do not use TNT Gym screenshots as live assets or extract their branding.

## 4.6 Motion

- Small hover transitions and restrained reveal effects.
- Respect `prefers-reduced-motion`.
- Do not make important content wait for animations.
- Avoid excessive parallax, cursor effects, spinning elements, or distracting auto-play media.

---

# 5. Information architecture

Build a polished single-page website with anchor navigation. Do not create unnecessary routes for the MVP.

Recommended section order:

1. Utility bar
2. Main navigation
3. Hero
4. Quick facts / stats strip
5. About Oxygen Gym
6. Facilities / training areas
7. Membership offers
8. Why choose Oxygen Gym
9. Gallery
10. FAQs
11. Location and hours
12. Final CTA
13. Footer
14. Floating enquiry controls (carefully positioned, especially on mobile)

A testimonials section is optional and should only be added if the owner supplies genuine, approved testimonials. Do not fabricate reviews.

---

# 6. Detailed design and content requirements

## 6.1 Utility bar

A slim strip above the primary header.

Potential content:
- Phone icon and verified phone number
- Pin icon and “Model Town, Panipat”
- Instagram and Facebook icons

Requirements:
- Small, understated type.
- Thin bottom border.
- Hide or simplify secondary links on narrow screens.
- Do not show unverified branch counts or claims.
- Only publish business contact details approved by the owner.

## 6.2 Main navigation

Desktop:
- Original Oxygen Gym logo or clean typographic wordmark on the left.
- Links: Home, About, Facilities, Membership, Gallery, Contact.
- Red CTA: **ENQUIRE NOW** or **JOIN OXYGEN**.

Mobile:
- Logo/wordmark and accessible menu button.
- Menu opens/closes correctly by touch and keyboard.
- A clear enquiry CTA remains available.
- Avoid a tall header that consumes the mobile viewport.

Behavior:
- Sticky header is optional; use it only if it does not obstruct content.
- Anchor navigation must account for the header height.
- Active nav styling can be subtle, but do not over-engineer scroll tracking.

## 6.3 Hero

**Visual priority:** The most polished part of the website.

Suggested copy (draft; owner approval required):
- Eyebrow: `YOUR FITNESS. YOUR PACE.`
- Heading: `BUILD YOUR STRONGER SELF.`
- Supporting copy: `Train at Oxygen Gym, Model Town, Panipat. Explore our facilities and ask us about current membership offers.`
- Primary CTA: `ENQUIRE ON WHATSAPP`
- Secondary CTA: `EXPLORE MEMBERSHIPS`
- Small location tag: `MODEL TOWN · PANIPAT`

Design:
- Large cinematic gym photograph with a dark overlay.
- Black/charcoal base with subtle red light accents.
- Oversized condensed headline; one phrase may be highlighted in red.
- Use an asymmetrical or editorial composition; don't simply center all text if a split composition looks stronger.
- Keep the primary CTA above the fold on common desktop and mobile screens.
- Hero image must be replaceable with real approved gym photography.
- No fabricated member count, awards, transformation statistics, or claims.
- If the owner does not approve the suggested copy, make it easy to change.

## 6.4 Quick facts / stats strip

Use a four-column desktop strip with dividers; stack or use a compact 2×2 grid on mobile.

Possible items, only if verified:
- Location: Model Town
- Opening hours: 5:30 AM–10:30 PM (confirm operating days)
- Facilities: only verified facilities
- Membership: “Ask about current plans”

Do not invent:
- Number of members
- Number of branches
- Years in business
- Ratings or awards
- Number of programs

If only two facts are verified, show two strong facts rather than fake statistics.

## 6.5 About section

Suggested eyebrow: `ABOUT OXYGEN GYM`  
Suggested heading: `YOUR TRAINING. YOUR NEXT LEVEL.`

Layout:
- Desktop: large image on one side, content on the other.
- Use one or two genuine photos when available.
- Short paragraph explaining the gym's location, environment, and training offering.
- Three concise bullets about verified services or strengths.
- CTA: `COME VISIT US` or `ASK ABOUT MEMBERSHIP`.

Do not publish “certified trainers,” “premium equipment,” “personalised coaching,” or similar claims unless confirmed.

## 6.6 Facilities / training areas

Suggested heading: `FIND YOUR TRAINING ZONE`

Use a mix of image-led panels and compact feature cards. Only include actual, owner-confirmed facilities. Potential categories to investigate:
- Strength and free weights
- Cardio equipment
- Functional training
- Personal training
- Group sessions
- Changing/locker facilities

For each confirmed item:
- Real photo or suitable approved image
- Short heading
- One sentence explaining what is available
- Optional small icon or red accent

Do not claim that a facility exists just because it is common in gyms. During development, use obvious placeholders and prevent them from accidentally being published.

## 6.7 Membership offers

This is a core conversion section and must be visually prominent.

Suggested eyebrow: `MEMBERSHIP & OFFERS`  
Suggested heading: `FIND THE PLAN THAT FITS YOU.`  
Suggested supporting copy: `Ask the Oxygen Gym team about current plans, membership durations, and available offers.`

Design:
- Use 2–4 offer cards depending on the actual approved plans.
- Dark cards on a dark section, with subtle borders and red accents.
- One featured card may be highlighted only if the owner identifies a featured offer.
- Clear plan name, price (if approved), duration, included benefits, and offer validity.
- Each card includes an `ASK ABOUT THIS PLAN` button.
- Button opens WhatsApp with a prefilled message that names the selected plan.
- If pricing is not approved for public display, show `Contact us for current pricing`.
- Never invent prices, discounts, “limited-time” offers, free trials, or expiry dates.
- Expired offers must not be presented as current.

Keep the offer cards visually strong but avoid deceptive urgency, fake crossed-out prices, or misleading “most popular” labels.

## 6.8 Why choose Oxygen Gym

Suggested heading: `A BETTER PLACE TO SHOW UP.`

Use three concise cards or an image/text split. Populate with owner-confirmed differentiators only, for example:
- Convenient location
- Equipment or training variety
- Trainer support
- Opening hours
- Community or beginner support

Each card should have a short factual description. Avoid generic unsupported claims like “best gym in Panipat,” “guaranteed transformation,” or “results in 30 days.”

If no differentiators are confirmed, omit this section until the owner provides information.

## 6.9 Gallery

Suggested eyebrow: `INSIDE OXYGEN GYM`  
Suggested heading: `THE SPACE. THE WORK. THE ENERGY.`

Design:
- Editorial photo grid, asymmetric collage, or consistent 3–4 column grid on desktop.
- 2 columns on mobile where the images remain legible.
- Use actual facility, equipment, and training photos with permission.
- Images should have consistent visual treatment and responsive crops.
- Add a link to the verified Instagram profile.
- A lightbox is optional; only implement if accessible and useful.

Do not use images of another gym and label them as Oxygen Gym. If owner photos are unavailable, use a clearly temporary placeholder section in the prototype.

## 6.10 Testimonials (optional)

Only include this section if the owner supplies real testimonials and permission to publish them.

- Use the exact approved words.
- Identify the speaker only as approved by the owner.
- Do not fabricate names, avatars, star ratings, or review counts.
- If real testimonials are not available, omit this section rather than filling it with invented content.

## 6.11 FAQs

Suggested questions:
- Where is Oxygen Gym located?
- What are the opening hours?
- What membership plans are available?
- How do I ask about current fees or offers?
- Can beginners join?
- What facilities are available?

Use a simple accessible accordion or a static list. Only publish answers confirmed by the owner. If details are unknown, answer: “Please contact Oxygen Gym for the latest information.”

## 6.12 Location and hours

Include:
- Verified address and Google Maps pin
- Verified hours and operating days
- `GET DIRECTIONS` link
- `CALL THE GYM` link
- `ENQUIRE ON WHATSAPP` link
- Verified Instagram/Facebook links

The currently supplied hours are 5:30 AM–10:30 PM, but the owner must confirm the days and holiday schedule. Do not publish an unverified address or phone number.

An embedded map is optional. A simple directions link is lighter and often sufficient for a static MVP.

## 6.13 Final CTA

Suggested heading: `READY TO GET STARTED?`  
Supporting copy: `Visit Oxygen Gym in Model Town or ask us about current membership options.`  
Button: `CHAT WITH OXYGEN GYM`

Use a contrasting dark/red treatment with an approved gym image or subtle background texture. Ensure the CTA is not redundant or overwhelming.

## 6.14 Footer

Desktop: 3–4 columns; stack cleanly on mobile.

Include:
- Oxygen Gym wordmark
- Short, approved description
- Quick links
- Verified contact details
- Opening hours
- Instagram and Facebook
- Directions link
- Copyright year
- Note: `Membership offers and availability may change. Contact the gym to confirm current details.`

Do not include branches outside Panipat, other businesses' addresses, fake email addresses, or unverified legal/policy pages.

## 6.15 Floating contact actions

A floating WhatsApp or enquiry action can help conversion but must not obstruct content.

- Prefer one clear primary floating action, not multiple oversized overlapping buttons.
- Ensure it does not cover membership cards, mobile navigation, footer links, or cookie/privacy UI if any is later added.
- On mobile, respect safe-area insets and keep enough bottom spacing.
- Provide accessible labels.
- Use the verified business number only.
- If no verified number is available, disable/hide the action rather than inventing one.

---

# 7. Static offers data

Keep all changeable membership information in one local file, such as `src/data/offers.js` or `src/data/offers.ts`.

Example shape only; values are placeholders and must not be published as real prices:

```js
export const offers = [
  {
    id: "monthly",
    name: "Monthly Membership",
    price: null,
    currency: "INR",
    duration: "1 month",
    benefits: [],
    label: "",
    expiresOn: null,
    isFeatured: false,
    isAvailable: true
  }
];
```

Rules:
- `price: null` renders `Contact us for current pricing`.
- Only owner-approved benefits may be displayed.
- Use ISO dates (`YYYY-MM-DD`) for expiry dates.
- Hide offers that have expired or are unavailable.
- Never use raw HTML from offer data.
- Document how to update the file and redeploy.
- There is no owner self-service editor in this version.

### WhatsApp link
Use:
`https://wa.me/<COUNTRYCODE_AND_NUMBER>?text=<URL_ENCODED_MESSAGE>`

Use a verified business number in international format without `+`, spaces, or punctuation in the path. Build prefilled messages with `encodeURIComponent`. Do not expose a form that pretends to submit to a backend.

---

# 8. Suggested project structure

```text
oxygen-gym/
├── public/
│   ├── images/
│   ├── favicon.svg
│   └── og-image.jpg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── UtilityBar
│   │   ├── Header
│   │   ├── Hero
│   │   ├── QuickFacts
│   │   ├── About
│   │   ├── Facilities
│   │   ├── MembershipOffers
│   │   ├── WhyOxygen
│   │   ├── Gallery
│   │   ├── FAQ
│   │   ├── Location
│   │   ├── FinalCTA
│   │   └── Footer
│   ├── data/
│   │   └── offers.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── README.md
└── .gitignore
```

This is a suggested structure, not a mandate to split every tiny element into its own file. Keep code maintainable and consistent with the existing project.

---

# 9. Functional requirements

- All anchor navigation works.
- Mobile navigation opens/closes with mouse, touch, and keyboard.
- All CTAs point to real, configured destinations.
- WhatsApp buttons open the verified business chat with an appropriate prefilled message.
- Phone CTA uses a verified `tel:` link.
- Directions link opens the correct location.
- Social links open the correct profiles.
- Membership cards render from the local offers file.
- Missing prices and missing benefits are handled gracefully.
- Expired/unavailable offers are not presented as active.
- No fake form submissions, dead buttons, or placeholder `href="#"` links.
- No data is stored or submitted to a custom backend.
- No secrets or private credentials are embedded.
- Images load correctly and do not cause major layout shifts.
- No horizontal scrolling at mobile widths.

---

# 10. Responsive design requirements

Test at approximately:
- 360px mobile
- 390px mobile
- 768px tablet
- 1024px laptop
- 1440px desktop and wider

On mobile:
- Hero text remains readable and CTA visible.
- Header and navigation do not overflow.
- Stats wrap into a readable grid.
- Split sections stack in a logical order.
- Offer cards become a single column or a clean swipe layout (avoid tiny cards).
- Gallery remains legible.
- Floating actions don't cover content.
- Tap targets are comfortably sized.
- Body text is not too small.
- No fixed-width elements force horizontal scrolling.

---

# 11. Accessibility, performance, SEO, and privacy

## Accessibility
- Semantic HTML landmarks and logical heading order.
- Visible keyboard focus.
- Adequate text/background contrast.
- Descriptive link and button labels.
- Alt text for meaningful images; empty alt for decorative imagery.
- Keyboard-accessible FAQ controls.
- Reduced-motion support.
- Never use color alone to convey important information.

## Performance
- Compress and resize images.
- Prefer WebP/AVIF where practical.
- Lazy-load below-the-fold images.
- Avoid unnecessary dependencies and third-party scripts.
- Set image dimensions/aspect ratios to reduce layout shifts.
- Avoid large auto-playing video backgrounds.

## SEO and sharing
- Unique title, e.g. `Oxygen Gym | Fitness & Membership Enquiries in Model Town, Panipat`
- Accurate meta description based on confirmed services.
- Favicon and Open Graph image.
- Canonical URL only after the final domain is chosen.
- Sitemap/robots configuration appropriate for a small public site.
- Structured data only for verified business facts and only if implemented correctly.
- Never invent reviews, ratings, awards, or local-business claims.

## Privacy
- Do not collect/store membership enquiries on the site.
- WhatsApp enquiries leave the site and are handled by WhatsApp.
- Publish only business contact details approved by the owner.
- No analytics/tracking scripts unless requested and properly configured.

---

# 12. Content needed from the owner

Before launch, request:
- Official logo and brand colors, if any
- Permission to use facility photos, trainer photos, and promotional graphics
- Exact address and Google Maps pin
- Confirmed phone and WhatsApp number
- Confirmed opening days, hours, and holiday timings
- Official Instagram/Facebook URLs
- Actual facilities and services
- Approved membership names, prices, durations, included benefits, and expiry dates
- Any trainer names/qualifications to publish
- Approved gym description
- Genuine testimonials and permission, if testimonials are desired

Never invent missing content. Keep placeholders clearly identifiable and remove them before launch.

---

# 13. Development phases

## Phase 1 — Confirm scope and content
- Confirm the owner wants the website and approves the commercial scope.
- Confirm whether membership prices can be public.
- Collect verified contact details, hours, logo, photos, facilities, and offers.
- Agree on price, revisions, domain ownership, handover, and update turnaround.

## Phase 2 — Visual foundation
- Inspect the existing workspace first.
- Set up design tokens, typography, buttons, containers, and responsive rules.
- Build utility bar, header, and hero first.
- Review the visual direction before filling every section.

## Phase 3 — Main page sections
- Build facts, about, facilities, membership offers, gallery, FAQs, location, final CTA, and footer.
- Use real content where approved and obvious placeholders otherwise.
- Keep section rhythm varied: dark/light alternation, image-led panels, editorial splits, and offer cards.

## Phase 4 — Functional wiring
- Connect WhatsApp, phone, directions, and social links.
- Load offer cards from local data.
- Implement responsive navigation and FAQ interaction.
- Remove all fake or placeholder actions.

## Phase 5 — Quality assurance
- Test all target viewport widths.
- Test all links and interactions.
- Confirm every offer and date.
- Test keyboard navigation and contrast.
- Check browser console and network errors.
- Run the production build.
- Check page title, description, and sharing metadata.
- Confirm all claims and images with the owner.

## Phase 6 — Deployment and handover
- Deploy to the agreed static host.
- Connect the custom domain only after owner approval and ownership confirmation.
- Verify HTTPS and final URLs.
- Provide the owner with the site URL and update procedure.
- Keep source code and access/ownership arrangements clear.
- Document the local offers file and deployment steps.
- Confirm the ongoing maintenance arrangement in writing.

---

# 14. Acceptance checklist

- [ ] Original Oxygen Gym design; no copied TNT Gyms branding/content.
- [ ] Premium, cinematic hero with readable CTA.
- [ ] Consistent dark/red visual identity and strong typography.
- [ ] Balanced dark/light section rhythm.
- [ ] Mobile layout is polished and responsive.
- [ ] Actual logo and owner-approved photos used where available.
- [ ] Only verified business facts are published.
- [ ] Membership offers come from a local static data file.
- [ ] No database, backend, CMS, admin panel, or member login.
- [ ] WhatsApp, call, directions, and social links work.
- [ ] No expired or fabricated offers, reviews, or stats.
- [ ] No dead buttons or fake forms.
- [ ] Accessibility and reduced-motion basics are covered.
- [ ] Images are optimized and have appropriate alt text.
- [ ] SEO title, description, and sharing metadata are present.
- [ ] Production build succeeds and there are no serious console errors.
- [ ] Owner approves public content and launch.
- [ ] Domain, ownership, price, revisions, and maintenance are agreed.

---

# 15. Antigravity implementation prompt

Read this brief completely before modifying the project.

1. Inspect the existing workspace and report the current stack and structure. Do not overwrite working files without understanding them.
2. Use the uploaded TNT Gyms screenshots only as visual inspiration for dark cinematic photography, red accents, bold condensed typography, section rhythm, offer cards, gallery, and footer. Create a distinct Oxygen Gym design; do not copy TNT branding, text, logos, imagery, statistics, or testimonials.
3. First implement the visual foundation and responsive header/hero. Then build the remaining sections, wire interactions, and run QA.
4. Keep the site static: no database, backend, CMS, admin panel, authentication, payment flow, or enquiry storage.
5. Keep offers in a local, documented data file.
6. Do not fabricate the gym's prices, facilities, ratings, awards, member counts, testimonials, hours, or contact details.
7. Use obvious placeholders for content that needs owner approval and make them easy to replace.
8. Prioritize visual quality, responsive behavior, image treatment, typography, whitespace, and clear enquiry CTAs. Avoid generic gradients, excessive cards, over-animation, and unnecessary libraries.
9. Ensure every interactive control has a working, meaningful action.
10. Run the production build and test important interactions before claiming completion.
11. At the end, report the files changed, what is complete, the commands to run, remaining owner-supplied content, test results, and known issues.

---

# 16. Open questions before launch

- Has the owner approved the website project and quote?
- What is the official logo and brand palette?
- What exact address and map pin should be published?
- Are the hours 5:30 AM–10:30 PM every day?
- What are the actual membership plans and approved offers?
- Should prices be public or enquiries only?
- What is the verified public phone/WhatsApp number?
- Which gym photos can be used?
- Which facilities and services are available?
- Who owns the domain and source repository?
- What is the agreed price, revision limit, maintenance fee, and update turnaround?

**Guiding principle:** Make the site feel premium, but keep it honest and lightweight. The goal is a reliable path from discovering Oxygen Gym to enquiring about membership—not a complex platform.