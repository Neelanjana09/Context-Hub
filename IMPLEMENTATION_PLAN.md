# Context Hub — Code Implementation Plan (Phase 6)

*Brain-work spec written 2026-08-11. Implementation to follow with a fresh mind. Source of truth for tokens = the Figma file (`PXC8h6CVxIdW0K38IHcxAZ`); source of truth for structure/rules = the "Context card anatomy" section + the built components. This doc is the bridge from Figma → code.*

## Goal (from user)

Build, in code, three components — **Context Card**, **Recently Updated Card**, **Agenda Card** — driven by **global design tokens that match Figma**, with a **Next.js preview website** where props/settings can be customized live to test the components. Filters are **hard-coded in code for now**. Anatomy/card-analysis rules from Figma drive the specific structure.

---

## 1. Tech decisions (proposed — confirm tomorrow before scaffolding)

| Decision | Choice | Rationale / note |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | User-requested. |
| Token layer | **CSS custom properties** in one global `tokens.css` | Matches "global tokens" literally; framework-agnostic; one source of truth. Two tiers mirrored: primitives + semantic aliasing them via `var()`. |
| Component styling | **CSS Modules** per component, consuming `var(--token)` | Keeps components isolated, no utility-class indirection over the tokens. (Alternative considered: Tailwind — rejected, adds a config mapping layer over tokens.) |
| Font | Google Sans is **proprietary / not on Google Fonts**. Default to a swappable stack `var(--font-family)` = `'Google Sans', 'Inter', system-ui, sans-serif`; load **Inter** via `next/font` as the practical fallback. | Flag to user. If they have a licensed Google Sans web font, drop it in and the stack picks it up. |
| Source/merchant icons | Inline SVG set (Gmail, Jira, Google Meet, Slack, GitHub, Notion, Figma…) or simple placeholders for v1 | Confirm approach tomorrow — brand SVGs vs. neutral placeholders. |
| Dark mode | **Light only** for v1 | Figma is monochrome-light + one accent; no dark design exists yet. |
| Scope | Context Card, Recently Updated Card, Agenda Card + their atoms + preview site. **Context *sub* card = out of scope** for v1 (not in the request). | |

**Open questions to confirm tomorrow:** (1) font substitution OK? (2) CSS Modules vs Tailwind? (3) source-icon strategy? (4) sub-card really deferred? (5) any interactivity beyond visual (real dropdown menus, hover) or visual-only states first?

---

## 2. Global tokens → CSS variables

One-to-one with the Figma variable system finalized in Phases 1–5. **Primitives hold values; semantics alias primitives** — mirror that in CSS (`--text-heading-1: var(--neutral-900)`), so the two-tier link survives in code.

### 2a. Primitives (15) — value layer
```css
:root {
  /* neutrals */
  --neutral-50:  #ffffff;
  --neutral-100: #f9f9f9;
  --neutral-200: #ebecf0;
  --neutral-500: #747474;
  --neutral-600: #4d5156;
  --neutral-700: #2d3539;
  --neutral-900: #0a0c10;
  /* accent (brand blue) */
  --accent-100:  #e6f4ff;
  --accent-600:  #2252d3;
  /* status hues */
  --red-500:   #c32c2f;
  --amber-400: #ffc43e;
  --green-500: #36b37e;
  --peach-200: #ffd2c1;
  --sky-200:   #c0dfff;
  --pink-200:  #f9c6d7;
}
```

### 2b. Semantic tokens (19) — usage layer (aliases)
```css
:root {
  /* text */
  --text-heading-1:  var(--neutral-900);
  --text-heading-2:  var(--neutral-700);
  --text-subheading: var(--neutral-500);
  --text-body:       var(--neutral-600);
  --text-inverse:    var(--neutral-50);
  /* surface */
  --surface-page:    var(--neutral-100);
  --surface-raised:  var(--neutral-50);
  /* border */
  --border-default:  var(--neutral-200);
  --border-strong:   var(--neutral-700);
  /* icon */
  --icon-default:    var(--neutral-600);
  /* accent */
  --accent-default:  var(--accent-600);
  --accent-hover:    var(--accent-100);
  /* priority (icon tint) */
  --priority-high:   var(--red-500);
  --priority-medium: var(--amber-400);
  --priority-low:    var(--green-500);
  /* status (pill background) */
  --status-ongoing:  var(--green-500);
  --status-paused:   var(--peach-200);
  --status-archived: var(--sky-200);
  --status-default:  var(--pink-200);
}
```

### 2c. Spacing (7) & Radius (3)
```css
:root {
  --space-0: 0px;  --space-2: 2px;  --space-4: 4px;  --space-6: 6px;
  --space-8: 8px;  --space-12: 12px; --space-16: 16px;
  --radius-2: 2px; --radius-4: 4px; --radius-8: 8px;
}
```

### 2d. Typography (9 styles) — Google Sans; weights Regular 400 / Medium 500 / Bold 700
Provide as utility classes (or a `<Text variant>` component). size / line-height / weight:

| Class / variant | Style name | px | line | weight |
|---|---|---|---|---|
| `.type-h1` | Heading 1/Medium | 28 | 30 | 500 |
| `.type-h2` | Heading 2/Bold | 18 | 20 | 700 |
| `.type-subheading` | Sub Heading/Regular | 18 | 20 | 400 |
| `.type-body1-bold` | Body text 1/Bold | 16 | 20 | 700 |
| `.type-body1-medium` | Body text 1/Medium | 16 | 20 | 500 |
| `.type-body1` | Body text 1/Regular | 16 | 22 | 400 |
| `.type-body2` | Body text 2/Regular | 14 | 20 | 400 |
| `.type-pill-medium` | Pill text/Medium | 12 | 20 | 500 |
| `.type-pill` | Pill text/Regular | 12 | 20 | 400 |

---

## 3. Project structure (proposed)
```
context-hub-preview/
  app/
    layout.tsx            # loads font, imports tokens.css
    page.tsx              # the preview website (controls + live canvas)
    tokens.css            # §2 — the global token layer (single source of truth)
    globals.css           # reset + type utility classes (§2d)
  components/
    primitives/
      SourceIcon.tsx      # merchant logo (Icon Holder), 24×24
      CitationPill.tsx    # category pill (5 categories)
      PriorityBadge.tsx   # flag + label
      StatusBadge.tsx     # status pill
      TickMark.tsx        # checklist checkbox (default/selected)
      TimeLabel.tsx       # am/pm, or "N hrs ago" if yesterday
      IconButton.tsx      # three-dot menu trigger (+ menu)
    rows/
      RecentlyUpdatedRow.tsx
      AgendaRow.tsx
    cards/
      ContextCard.tsx
      RecentlyUpdatedCard.tsx
      AgendaCard.tsx
    filters/
      FilterBar.tsx       # hard-coded Category/Date/Priority/Status
  lib/
    types.ts              # shared prop types (Priority, Status, Category, Source…)
    sampleData.ts         # default demo content
  preview/
    Controls.tsx          # the settings panel that drives props
```

---

## 4. Component specs (API + anatomy + tokens)

Enums (in `lib/types.ts`):
- `Priority = 'high' | 'medium' | 'low'`
- `Status = 'ongoing' | 'paused' | 'archived' | 'default'`
- `Category = 'meeting-notes' | 'project-notes' | 'product-release' | 'company-news' | 'engineering-release'`
- `Source = 'gmail' | 'jira' | 'gmeet' | 'slack' | 'github' | 'notion' | 'figma' | …`

### Atoms
- **SourceIcon** `{ source: Source; size?: 24 }` — the "Icon Holder"; merchant logo of the title's source.
- **CitationPill** `{ category: Category }` — icon + label; light container (`--surface-page`/`--neutral-100` fill, `--border-default`), label `.type-pill` in `--text-body`. Maps to Figma `Citation pill` set. Labels: "Meeting notes", "Project notes", "Product Release", "Company news", "Engineering Release".
- **PriorityBadge** `{ priority: Priority }` — flag icon tinted `--priority-{level}` + label ("High"/"Medium"/"Low") in `.type-h2`/`--text-heading-2`.
- **StatusBadge** `{ status: Status }` — pill, bg `--status-{status}`; text is `--text-inverse` on `ongoing` (dark green bg) and `--text-heading-1` on the light `paused/archived/default` bgs. Labels: "Ongoing"/"Paused"/"Archived"/"Default". Radius `--radius-4`.
- **TickMark** `{ checked?: boolean }` — checklist checkbox; default = outline circle+check, selected = green tint fill (`status/ongoing`-ish `#e0fff2` tint bg + green check). 24×24.
- **TimeLabel** `{ time: string | Date }` — **rule from anatomy:** today → `h:mm am/pm`; if the item is from yesterday → `"N hrs ago"`. `.type-body2` in `--text-subheading`/`--text-body`.
- **IconButton** `{ onSelect? }` — three-dot (`⋮`) trigger; menu items: **Link to a card**, **Add to Agenda**, **Delete** (delete in `--red-500`). v1 can render the open-menu state statically.

### Rows
- **RecentlyUpdatedRow** `{ source, title, category, time }` — `[SourceIcon] [title (single line, truncates)] … [CitationPill] [TimeLabel]`. Row hugs ~34–36px tall; left-aligned to card content edge; time right-aligned. (Description belongs to the Context Card detail, not this row.)
- **AgendaRow** `{ task, time, state?: 'normal'|'hover'|'strikethrough' }` — `[TickMark] [task text] … [TimeLabel]`. **Hover** replaces the time with a check + delete action pair; **strikethrough** = completed (tick selected/green, text struck, 60% opacity).

### Cards
- **RecentlyUpdatedCard** `{ items: RecentlyUpdatedRowProps[]; hover?: boolean }` — header row ("Recently Updated" + calendar/update icon) then the list. Card = `--surface-raised` fill, `--border-default` stroke, `--radius-8`, padding `--space-16`, row gap ~`--space-12`. `hover` adds an `--accent-default` border (matches Figma Daily Card `State=Hover`).
- **AgendaCard** `{ items: AgendaRowProps[]; hover?: boolean }` — same shell; header "Agenda" + calendar-check icon; list of AgendaRow.
- **ContextCard** `{ title, priority, status, meta:{time,date,team,extra?}, description, sources: Category[], note?: string, state?: 'default'|'note-added'|'menu-open'|'hover' }` — anatomy elements:
  1. **Title** (`.type-h2`) · 2. **PriorityBadge** · 3. **StatusBadge** · 4. **IconButton** (three-dot) — all in the header row.
  5. **Meta** row — time · date · team (time+date constant, rest depends on content).
  6. **Description** (`.type-body1`, `--text-body`).
  7. **Sources** — "Source(s)" label + one or many **CitationPill**s.
  8. **Note** — avatar + "Write a Note" input; `note-added` state shows saved note.
  Shell: `--surface-raised`, `--border-default`, `--radius-8`, padding `--space-16`. `hover` state = `--accent-default` border (Figma `State3`). `menu-open` = three-dot dropdown visible.

### FilterBar (hard-coded)
`Category: All ▾ · Date: Today ▾ · Priority: All ▾ · Status: All ▾` — static markup for now; dropdown chrome only, no real filtering logic in v1.

---

## 5. Preview website

- **Layout:** left/center = live canvas rendering the selected component on a `--surface-page` background; right = **Controls** panel.
- **Component switcher:** tabs — Context Card · Recently Updated · Agenda.
- **Controls (drive props live via React state):**
  - Context Card: title text, priority (select), status (select), description text, sources (multi-select of categories), meta time/date/team, state (default/note-added/hover/menu-open).
  - Recently Updated: per-row source/title/category/time; add/remove rows; card hover toggle.
  - Agenda: per-row task/time/state; add/remove rows; card hover toggle.
- Everything reads tokens, so the cards render identically to Figma. No backend.

---

## 6. Build order for tomorrow
1. `create-next-app` (TS, App Router) into `context-hub-preview/`; wire `next/font` (Inter fallback).
2. `tokens.css` (§2) + `globals.css` type utilities (§2d) — verify a swatch page renders every token.
3. Atoms (§4) with CSS Modules.
4. Rows → Cards.
5. FilterBar (static).
6. Preview page + Controls.
7. `npm run dev`, screenshot each card, **diff against Figma** (Context Card `429:6161`, Daily Card `806:3965`, List item `800:3619`) and adjust spacing/type to match.

## 7. Data to pull fresh from Figma tomorrow (didn't need it for the spec, do need it for pixel-fidelity)
- Precise measured tree of **Context Card** `429:6161` (per-element padding/gap/type — the read timed out today on a symbol-serialization issue; retry with plain values).
- **Citation pill** internal layout (icon size, gap, padding, container fill/border, per-category icon).
- **Daily Card header** composition (icon + title text style/'"Recently Updated"/"Agenda"').
- **Source icon** set — which merchants appear (Gmail, Jira, Google Meet, Slack, GitHub, Notion, Figma…) to build the SVG map.
- Agenda **hover** + **strikethrough** exact treatment (icons revealed, opacity).

---

*Everything in §2 (tokens) is final and verified against the file. §4 APIs are ready to implement. §1 open questions + §7 measurements are the only things to resolve tomorrow.*
