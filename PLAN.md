# Machintu Website Plan

## Goal

Build a minimal, responsive personal website for Machintu, centred on work, purpose, who Machintu is, and contact. Use [Cherupil](https://cherupil.com/) for inspiration in hierarchy, concise navigation, bold storytelling, and project presentation. Keep Machintu's identity and content original.

**Assumptions:** This is a public-facing personal portfolio for Machintu. Use Next.js App Router for routes and shadcn/ui for accessible primitives. Project details and final copy will come from Machintu; do not invent clients, results, or testimonials.

## Site map

```text
/
├── /work
│   └── /work/[slug]
├── /purpose
├── /about
└── /contact
```

Keep global navigation to **Home**, **Work**, **Purpose**, **About**, and **Contact**. On small screens, show a menu button that opens a shadcn `Sheet`. The homepage's “Selected work” link can jump to `/#work`; “View all work” goes to `/work`.

## Pages

### `/` — Home

One scannable, storytelling page:

1. **Header:** Machintu wordmark and compact global navigation.
2. **Hero:** One clear statement of what Machintu does, a short supporting sentence, and one primary action.
3. **What we do:** A concise introduction to capabilities; avoid a grid of generic feature cards.
   Use this section to communicate Machintu's purpose, based only on details supplied and approved.
4. **Selected work (`#work`):** A small set of real projects, each linking to its detail page.
5. **Closing contact prompt:** A direct invitation and link to `/contact`.
6. **Footer:** Copyright and only the social links Machintu actually uses.

### `/work` — Work index

Show all approved projects in a simple, responsive list or grid. Each item has a title, short summary, relevant type/date metadata, and a clear link to `/work/[slug]`. Use real project imagery only when available. If there are no publishable projects yet, omit this page from navigation until content is ready.

### `/work/[slug]` — Project detail

Reusable template for each project:

- Project title and short overview
- The problem or context
- Machintu's contribution / approach
- Outcome or result, only when verified
- Relevant images or media
- Link to the live project, when public
- Previous/next project or return-to-work link

Do not create empty or placeholder project routes.

### `/about` — Who I am

Briefly explain who Machintu is. Add background information only when supplied and approved. Keep this page distinct from the homepage's short introduction.

### `/purpose` — Purpose

Explain Machintu's purpose and what motivates the work, using only details supplied and approved. Keep this page focused and distinct from the project case studies.

### `/contact` — Contact

One clear way to contact Machintu (approved email or form), with a short expectation-setting note. Do not add a form unless there is a real destination and handling flow.

### Not found

Provide a minimal 404 page with a clear route back to Home or Work.

## Shared UI and shadcn/ui

- Install only the shadcn/ui components needed: `Button`, `Sheet`, and optionally `Card` and `Separator`.
- Build shared `SiteHeader`, `MobileNav`, `SiteFooter`, `ProjectPreview`, and `PageIntro` components only where reused.
- Use semantic links for navigation and buttons for actions. Preserve visible focus, keyboard access, and accessible menu state.
- Follow `DESIGN.md` for visual direction, spacing, responsive behaviour, and accessibility; do not reproduce Cherupil's exact copy or assets.

## Build order

1. **Confirm content:** Gather Machintu's proposition, capabilities, contact destination, and publishable projects. Keep unprovided facts out of the site.
2. **Set up the app:** Add the chosen Next.js App Router structure and initialise shadcn/ui using the existing `DESIGN.md` as the design guide.
3. **Build the shared shell:** Header, desktop links, mobile Sheet navigation, and footer.
4. **Build Home:** Hero, capabilities, selected work, and contact prompt in that order.
5. **Build Work routes:** Index, data-backed project details, and empty/404 handling based on actual content.
6. **Build Purpose, About, and Contact:** Keep each focused and only include supported content.
7. **Verify:** Check every route and navigation link, keyboard use, mobile menu, 390px and desktop layouts, reduced-motion behaviour, and no horizontal overflow.

## Scope guardrails

- Keep the first release to the routes above; no blog, CMS, accounts, or dashboard unless separately requested.
- No fabricated case studies, metrics, testimonials, or placeholder links.
- Prefer a clear page hierarchy and a few strong sections over long scroll-driven effects.
- Use shadcn/ui as a component foundation, not as a reason to make the marketing site look like an admin dashboard.
