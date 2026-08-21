---
name: create-detail-screen
description: >-
  Create the context-card DETAIL screen (the /context/[id] route) for the first
  card of each tab in the Context Hub CODE app. Fire when the user asks to
  "create a cc/context-card detail screen", "replicate the detail screen for
  each tab's first card", "give the first card of every tab its detail page",
  etc. Deliverable is CODE. The detail screen already exists for one card
  (operations-insight-board); this replicates it — main card + its own sub
  context cards (related signals) — for the first card of every tab (Meeting
  notes, Project notes, Product release, Engineering release, Company news).
  Figma is a read-only reference only.
---

# Create the context-card detail screen (per tab's first card)

**Deliverable = CODE** (the Next.js preview app). The detail screen already
exists and works for one card; replicate it for **the first card of every tab**,
each with its own realistic sub context cards. Figma is read-only reference only
— never write to Figma.

## How the detail screen works today (reuse this — don't rebuild)
- **Route:** `app/context/[id]/page.tsx` — renders from `contextDetails[id]`;
  `notFound()` for unknown ids.
- **Data:** `contextDetails: Record<string, ContextDetail>` in `lib/sampleData.ts`.
  Currently only `"operations-insight-board"` has an entry.
- **Types** (`lib/types.ts`): `ContextDetail { card, breadcrumb, pills,
  subCards }`, `SubCard { id, source, title, metas, description }`,
  `SubMeta { icon, text }`, `SourceCitation { source, title }`.
- **Components** (`components/detail/`): `DetailContextCard` (left, full card +
  source pills), `SubCardList` (right column; renders the sub-cards),
  `ContextSubCard` (a related-signal card). Provide exactly **3 sub-cards** —
  the "+N more" reveal is a static element with no interaction needed now, so
  do NOT generate extra hidden cards.
- **Linking:** a `ContextCard` becomes clickable when it has an `id` (renders a
  full-card `<Link>` to `/context/[id]`). The dashboard's first card already
  does this; the tab cards need the same on their first card.

## Steps
Break into small tasks; report each as it completes.
1. **Confirm scope** if unclear: all five tabs' first cards? Any breadcrumb
   wording preference?
2. For **each tab's first card**: give it a stable `id` (e.g.
   `meeting-notes-<slug>`) and wire it to link to `/context/[id]`.
3. For each such id, add a `contextDetails[id]` entry:
   - **card**: reuse that first card's data (title, priority, status, meta,
     description, sources).
   - **breadcrumb**: `["All Signals", <card title>]` (match the existing entry).
   - **pills**: 3–4 `SourceCitation`s themed to the card.
   - **subCards**: exactly **3** related signals themed to the card's topic —
     each with a distinct source, title, `metas` (date / assignee /
     participants / etc.), and a 2–3 sentence description. Vary the sources.
     Only 3 — the "+N more" reveal is static and not needed; don't generate
     hidden cards.
4. Reuse `SubCardList` / `ContextSubCard` / `DetailContextCard` as-is; do not
   duplicate their markup.

## Testing / verification
- Run the dev server. For **each tab**, click the first card → its detail screen
  renders (no `notFound`), main card on the left, **3 sub-cards** on the right.
- Breadcrumb "All Signals" links back to `/`.
- Content is realistic and specific to that card (not copied across tabs).
- No console errors (`read_page` / `read_console_messages` / screenshot).

## Rules
- **Ask follow-up questions** whenever a requirement or detail is unclear —
  before acting.
- **Don't create unnecessary files or redundant data.** Reuse the existing
  route, components, types, and sample-data patterns; add data, not new files.
- Report progress task by task (e.g. "Meeting notes detail done").

Related skills: `fill-tab-cards-code` (populates the tab's cards),
`navbar-tab-state` (tab switching).
