---
name: fill-tab-cards-code
description: >-
  Fill a tab in the Context Hub CODE app (the Next.js preview) with context
  cards holding realistic, tab-appropriate content. Fire when the user asks to
  "fill a tab with context cards in code", "populate the Meeting/Project notes
  tab in the app", "add cards to a tab", etc. — for any tab (Meeting notes,
  Project notes, Product release, Engineering release, Company news).
  Deliverable is CODE: render two rows of three cards (6 total), each with a
  distinct heading, body, citation pills, and varied status/priority. The Figma
  file is only a read-only reference (node 945:4683). (The Figma-output
  counterpart is `fill-tab-cards-figma`.)
---

# Fill a tab with context cards (in code)

**Deliverable = CODE** (the Next.js preview app). Use Figma node **`945:4683`**
only as a **read-only reference** to see the intended layout — never write to
Figma here (that's `fill-tab-cards-figma`).

Generate and render **6 context cards (two rows of three)** whose content is
realistic and specific to the tab's theme, reusing the existing Context Card
component and sample-data patterns.

## Before starting — orient
1. **Confirm which tab(s)** to fill and the theme (Meeting notes → meeting
   summaries; Engineering release → shipped changes; etc.).
2. **See the target design:** read Figma node `945:4683` with the official
   Figma MCP (`get_screenshot` / `get_design_context`). Read-only.
3. **Reuse existing code**, don't reinvent:
   - Card UI: `components/cards/ContextCard.tsx`
   - Data shapes: `lib/types.ts` (`ContextCardData`, `SourceCitation`,
     `Source`, `Status`, `Priority`)
   - Sample data + patterns: `lib/sampleData.ts`

## Build the 6 cards
Work in small tasks; report each as it completes.
1. **Generate 6 distinct card contents** themed to the tab. Each card needs:
   - a unique, specific **heading** (not generic filler),
   - **body** text (2–3 plausible sentences),
   - **citation pills** from the source set that fit the content:
     `gmail, jira, gmeet, slack, github, notion, figma, firebase, cursor`,
   - a **status** (`ongoing / paused / archived`) and **priority**
     (`high / medium / low`) — **vary these across the 6**.
2. Add the data (tab-keyed) to `lib/sampleData.ts`, following the existing
   `ContextCardData` / `SourceCitation` patterns.
3. Render the tab's view as **two rows of three** cards, reusing `ContextCard`
   and the existing grid/row styles (in-row gap 16, row gap 16).
4. If the tab's view doesn't exist yet, wire it to show its card set. (Tab
   switching itself is the `navbar-tab-state` skill.)

## Testing / verification
- Run the dev server; open the tab in the browser.
- Confirm **6 cards render in a 2×3 grid**, no overflow or console errors
  (`read_page` / `read_console_messages` / screenshot).
- Confirm every card has a **different** heading/body/pills, and status +
  priority **vary** across the set.
- Confirm citation pills show real logos (no monogram fallback) — the source
  must exist in the icon set (`public/icons/`).
- Confirm spacing matches the card component (8px block rhythm, 16px gaps).

## Rules
- **Exactly 6 cards.** This is a deliberate representative sample — enough for
  anyone viewing to understand the concept. Do NOT populate the whole screen or
  add more cards.
- **Ask follow-up questions** whenever a requirement or detail is unclear —
  before acting.
- **Don't create unnecessary files or redundant data.** Reuse the existing
  component, types, and sample-data patterns.
- Report progress task by task.

Related skills: `fill-tab-cards-figma` (same thing in Figma), `navbar-tab-state`
(makes tabs switch/selectable).
