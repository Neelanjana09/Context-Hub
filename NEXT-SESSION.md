# Next Session — Resume Prompt

Paste the block below to start the next session.

---

**Continue the Context Hub preview** (`/Users/neelanjanamaity/Documents/Context Hub_Figma files`).

**First, read these to get oriented:**
- `PRD.md` — living project log. Read the last dated section (**2026-08-19**) for the full current state.
- `FIGMA-SYNC-PENDING.md` — code changes ahead of Figma (currently only the parked priority↔status 8px gap; see below).
- `.claude/skills/` — the project skills built this week (see list below).

**Start the app:** `cd context-hub-preview && npm run dev` → localhost:3000.
- Dashboard `/` (All Signals). Sidebar tabs are **interactive** — each of the 5 category tabs shows its own 6 cards.
- Detail screens: the **first card of every tab** links to `/context/[id]` (e.g. `/context/meeting-notes-q3-roadmap`), plus `/context/operations-insight-board`.
- ⚠️ Turbopack dev cache goes stale after edits (phantom errors / stale CSS). Fix: `pkill -f "next dev"; rm -rf .next; npm run dev`. Trust `npx tsc --noEmit` + a fresh browser tab over the browser's console history. **Never run `npm run build` while `next dev` is live** — it corrupts the shared `.next`.

**Figma:** fileKey `PXC8h6CVxIdW0K38IHcxAZ`. Official Figma MCP (`get_screenshot` / `get_design_context`) for reads; figma-console **Desktop Bridge** for exact values + writes (needs the Desktop Bridge plugin open in Figma). The Bridge's `execute` was healthy on 2026-08-18 (the earlier timeout issue did not recur).

**Where we left off (2026-08-19):** big CODE day making the preview demo-ready (no dead ends). Interactive sidebar tabs + 6 cards per tab; per-tab detail screens (first card of each tab, 3 sub-cards each); layout fixes (card/filter alignment, full-height category rows, equal-height cards + pinned footers); navbar interactivity on the detail screen (`linkMode` + `?tab`); breadcrumb now shows the card's tab, not "All Signals"; UI polish (removed TopBar title → search flush-left, daily-card hover, tab weight → medium). All logged in PRD 2026-08-19.

**Tomorrow's plan (parked):**
1. **GitHub / portfolio wrap-up** (project purpose = a concept piece to show interviewers): write a portfolio-quality `README.md`, verify `npm run build` produces a clean production build (deployability — note the app uses a non-standard Next.js), repo hygiene (`git init`, `.gitignore`, license, decide what to do with the internal working docs).
2. **Subagent demo** — dispatch a 3-way parallel audit that doubles as wrap-up prep: dead-end audit (Explore) ‖ README research (Explore) ‖ build & repo readiness (general-purpose). (User wants to see subagents in action.)
3. **Push the priority↔status 8px gap to Figma** — `.ctxHeaderMeta` gap is 8px in code, still 4px in Figma node `409:5500` (×4 component states). Parked "for last, once every detail is wrapped."
4. Optional: soften the daily-card hover if the shadow feels heavy.

**Project skills** (`.claude/skills/`, code deliverables; Figma is read-only reference):
- `fill-tab-cards-code` / `fill-tab-cards-figma` — fill a tab with 6 context cards.
- `navbar-tab-state` — interactive tabs + selected-vs-hover fix.
- `create-detail-screen` — per-tab detail screens (first card → `/context/[id]`, 3 sub-cards).
(Skills need a fresh session to appear under `/`; natural-language triggers work any time.)

**⚠️ Recurring gotcha (documented rule):** never import a **value** (e.g. `TAB_LABELS`) from a `"use client"` module into a server component — it fails silently across the boundary. Tab labels/keys/hrefs live in the server-safe `lib/types.ts` (`TabKey`, `TAB_LABELS`, `TAB_KEYS`, `tabHref`).
