# Machintu Design Guidelines

## Purpose and source

Use [Christopher Cherupil’s portfolio](https://cherupil.com/) as a reference for visual hierarchy, pacing, typography, and interactive storytelling, not as a template to copy verbatim. Keep Machintu’s own identity, content, and assets.

Reference inspected in a live browser on 25 October 2026 at desktop and 390px mobile widths. Values labelled **observed** come from rendered styles; **recommended** values are implementation guidance for this repository, not claims about the reference’s source code.

Repository currently has no application source or established component system. These guidelines are framework-independent and apply to future frontend work. They do not prescribe a portfolio structure for every product screen.

## 1. Design direction

**Bold typography, restrained chrome, playful technical craft.**

- Make one clear statement the focal point of each section.
- Use scale, contrast, and whitespace before borders, shadows, or decoration.
- Combine a confident monochrome foundation with selective expressive colour.
- Give interactive visuals a narrative purpose: demonstrate an idea rather than fill empty space.
- Alternate immersive storytelling with straightforward, readable evidence.
- Keep navigation and calls to action understandable even when surrounding visuals are experimental.

Avoid generic dashboard styling on marketing pages: repeated feature tiles, competing gradients, floating badges, and decorative glass panels undermine this direction.

## 2. Page structure and layout

### Reference patterns

The reference opens with a sparse header and a large, centred headline on black. Its sequence moves through creative capabilities and visual experiments, then switches to a white contact section and an off-white work section. Work entries mix full-width and narrower rounded cards.

### Rules for Machintu

- Marketing pages should follow a decision path: core proposition, concrete demonstration, supporting evidence, next action.
- Give the hero one dominant heading. Highlight only a meaningful word or phrase.
- Use generous negative space; do not put every statement inside a card.
- Keep desktop header identity and navigation at opposite ends of a shared content width. A subtle horizontal rule may connect the composition.
- Use full-bleed backgrounds with consistently aligned inner content.
- Use a two-column project grid only when content benefits from comparison; let important items span both columns.
- Collapse grids to one column on narrow screens, preserving reading order.
- For functional product screens, prioritise task density and navigation over cinematic section heights.

**Recommended starting values:** maximum content width 1120px; desktop gutters 48–80px; mobile gutters 20–24px; section padding 80–128px desktop and 48–80px mobile. Adjust to content rather than reproducing the reference’s long scroll distances.

## 3. Colour system

### Observed reference colours

| Role | Value | Use in reference |
| --- | --- | --- |
| Primary dark | `#000000` | Hero and several storytelling sections |
| Secondary dark | `#121212` | Dimension and photography sections |
| Raised dark | `#242424` | Travel section; also text on light surfaces |
| Light canvas | `#F9F9F9` | Work section |
| White | `#FFFFFF` | Dark-section text, contact background, light cards |
| Dark project card | `#1B1B1B` | Contrasting work entry |
| Deep blue ink | `#0A1E31` | Blue-themed project text and contact action text |
| Deep green ink | `#0F270C` | Green-themed project text |

The desktop hero visually accents “creative” with a cyan/teal treatment. No exact accent hex is asserted here.

### Initial homepage tokens

- Use `#000000` for the page canvas, `#121212` for the analysis demo and footer, `#242424` for subtle control surfaces, and `#FFFFFF` for primary text.
- Use `#9EDBCD` as the restrained Machintu teal accent for emphasis and small status indicators. Keep body text neutral and check contrast for each use.
- Use `#C86417` only for the animated underline that marks illustrative passages in the Linse demo; do not use it for probability text or status.
- Use the native system sans-serif stack (`-apple-system`, `BlinkMacSystemFont`, `"SF Pro Display"`, `"SF Pro Text"`, `"Segoe UI"`, sans-serif) so Apple platforms use their system type without requiring a separately licensed font.
- Keep the header and footer within the 1120px content width. Use a compact desktop Linse navigation and an accessible menu button on small screens.

### Machintu usage

- Start with black/white and neutral surfaces above. Keep colour roles consistent.
- Reserve cyan/teal for a key phrase, interactive demonstration, or primary accent, not every heading and button.
- Treat project-specific colours as local themes, not additional global brand colours.
- Pair light themed surfaces with dark themed ink; verify contrast before adoption.
- Communicate success, warning, and error through text or icons as well as colour.
- Do not assume visual similarity proves accessibility: test actual foreground/background combinations.

## 4. Typography

**Observed:** the reference uses `Articulat CF, system-ui, sans-serif`, with font weights 400, 500, 600, and 700 loaded.

| Role | Observed desktop style |
| --- | --- |
| Hero heading | 96px, weight 700, tracking -1px |
| Large narrative text | 96px, weight 600, tracking -1px |
| Work section heading | 48px, weight 600, tracking -0.5px |
| Project heading | 24px, weight 700 |
| Body and navigation | 16px, weight 400 |
| Action links | 16px, weight 600 |

At 390px viewport width, the hero measured 35.1px with a matching 35.1px line height. This is an observation, not a universal mobile size requirement.

### Rules

- Use Articulat CF only with a suitable licence. Otherwise use a legally available sans-serif with similar proportions, or the system stack.
- Use one primary font family. Establish hierarchy through size and weight rather than adding display fonts.
- Use fluid hero sizing; a recommended starting range is 36–96px, tuned to actual copy and viewport width.
- Keep display line height near 1–1.1 and body line height near 1.5–1.65.
- Keep paragraphs roughly 45–70 characters wide where practical.
- Compose intentional desktop line breaks without forcing awkward mobile wrapping.
- Keep body copy at least 16px by default. Never shrink essential text to preserve a composition.
- Use semantic heading levels even when narrative text is visually oversized.

## 5. Spacing and components

**Recommended spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Reuse it rather than introducing arbitrary values for each component.

### Navigation

- Keep top-level destinations few and descriptive, based on real Machintu content.
- Use actual links for navigation and buttons for actions.
- On mobile, use an accessible menu button when links no longer fit. The reference exposes an “Open Global Menu” button at mobile width.
- Provide visible focus, an accurate expanded state, Escape-to-close behaviour, and sensible focus return for an overlay menu.

### Project or evidence cards

- Include a title, relevant metadata, a concise description, and an explicit destination when available.
- Reference cards have an **observed** 32px corner radius and desktop padding of `32px 32px 24px`.
- Recommended Machintu padding: 24–32px, reduced only when mobile content needs it.
- Use surface contrast rather than heavy shadows to separate cards.
- Use real screenshots or purposeful visuals, not interchangeable stock imagery.
- Do not make static cards appear clickable. Avoid nested interactive elements inside a card-wide link.

### Calls to action

- Prefer a clear verb and destination, such as “Explore the project” or “Contact us”.
- Keep one primary action per decision point. Secondary actions should be visually quieter.
- Define default, hover, keyboard-focus, active, and disabled states where applicable.
- Never depend on hover alone to reveal essential content.

## 6. Motion and interaction

The reference’s content and section structure emphasise animation, interactivity, and dimensional graphics. Its narrative sections occupy multiple viewport heights. Do not treat those scroll lengths as mandatory Machintu behaviour or assume an exact animation implementation from appearance.

- Use motion to reveal relationships, guide attention, or demonstrate capability.
- Keep normal document scrolling. Do not hijack the wheel or require users to complete an animation to reach content.
- If using sticky storytelling, keep the sequence short and ensure all content remains reachable on small screens and at increased zoom.
- Prefer transforms and opacity over repeatedly animating layout properties.
- Pause offscreen rendering. Introduce canvas or WebGL only when it materially improves the story.
- Recommended micro-interaction duration: 150–250ms. Recommended entrance transitions: 300–600ms. These are project defaults, not measured reference timings.
- Respect `prefers-reduced-motion`: remove parallax, long pinned sequences, and nonessential movement; show the final readable state directly.
- Ensure a static or failed-animation state still communicates the full message.

## 7. Accessibility, responsive behaviour, and performance

These are Machintu requirements, not an assertion that the reference meets every criterion.

- Target WCAG 2.2 AA: at least 4.5:1 contrast for normal text and 3:1 for qualifying large text; preserve visible control boundaries and focus indicators.
- Support keyboard navigation, logical focus order, a skip link, landmarks, and accessible names.
- Aim for at least 44 × 44px touch targets on primary controls.
- Give meaningful images descriptive alt text; use empty alt text for purely decorative assets. Do not reproduce placeholder alt text from the reference.
- Preserve useful content without animation, hover, WebGL, or successful image loading.
- Check at 390px mobile width, intermediate widths, and wide desktop; also check 320px reflow and 200% zoom.
- Prevent horizontal overflow and clipped headings. Choose layout breakpoints when content stops fitting, not to match arbitrary device names.
- Optimise responsive images, reserve their dimensions, and lazy-load below-the-fold media.
- Load only necessary font weights and avoid blocking content on decorative assets.
- Keep large visual effects separate from essential navigation and content rendering.

## 8. Content and originality

- Write concise, concrete copy about what Machintu actually does.
- Use examples and outcomes instead of unsubstantiated claims or decorative metrics.
- Borrow hierarchy, contrast, pacing, and craft, not Christopher Cherupil’s name, logo, personal story, project descriptions, artwork, or downloadable assets.
- Do not copy the reference’s navigation labels unless they match real destinations.
- No placeholder links, fabricated testimonials, or invented clients in shipped UI.

## 9. Implementation and review checklist

Before frontend implementation, map the requested screen to these guidelines and identify any deliberate deviation. Prefer existing repository primitives when application code is introduced; do not install a framework or animation engine just to follow this document.

- [ ] One dominant message and a clear next action.
- [ ] Consistent content alignment, spacing, type hierarchy, and surface roles.
- [ ] Dark storytelling and light evidence sections used only where appropriate.
- [ ] Real content and original, licensed assets.
- [ ] Responsive layout without clipping or horizontal scrolling.
- [ ] Working links and controls with visible keyboard focus.
- [ ] Readable reduced-motion and static states.
- [ ] Contrast, keyboard, mobile menu, touch targets, and zoom checked.
- [ ] Images, fonts, and effects kept within a deliberate performance budget.
- [ ] Actual browser inspection on desktop and mobile, not source review alone.

### Known limits and design debt

This document establishes direction, not a finished component library or a pixel-perfect clone specification. Product audience, final accent colour, font licensing, production assets, exact breakpoints, and animation choreography remain undecided. Resolve them against real content before implementing affected screens. No application UI was changed or tested as part of writing these guidelines.
