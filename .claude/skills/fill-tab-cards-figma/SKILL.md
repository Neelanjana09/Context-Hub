---
name: fill-tab-cards-figma
description: >-
  Fill a tab in the Designer Context Hub FIGMA file (fileKey
  PXC8h6CVxIdW0K38IHcxAZ) with context cards holding realistic, tab-appropriate
  content. Fire when the user asks to "fill a tab with context cards in Figma",
  "populate the Meeting/Project notes tab in the design", "add cards to a tab in
  Figma", etc. Deliverable is the FIGMA design: two rows of three cards (6
  total), each with a distinct heading, body, citation pills, and varied
  status/priority. (The code counterpart is `fill-tab-cards-code`.)
---

# Fill a tab with context cards (in Figma)

**Deliverable = the FIGMA design.** Populate a tab with **6 context cards (two
rows of three)** of realistic, tab-themed content, reusing the existing Context
Card component. Reference layout: node **`945:4683`**. Component set:
**`429:6162`** (spec already synced — see `FIGMA-SYNC-PENDING.md`; don't
re-derive spacing).

## Before starting — orient
1. **Confirm which tab(s)** to fill and the theme.
2. **Health-check the Desktop Bridge** (`figma_get_status {probe:true}`). If
   disconnected, ask the user to open Plugins → Development → Figma Desktop
   Bridge, then re-probe. Don't write until the probe succeeds.
3. Read the reference node `945:4683` — official Figma MCP (`get_screenshot` /
   `get_design_context` / `get_metadata`) for layout; figma-console
   (`figma_execute`) for exact values and all writes.

## Build the 6 cards
Work in small tasks; report each as it completes.
1. Locate the two card-row frames under the tab.
2. **Generate 6 distinct card contents** themed to the tab. Each card needs:
   - a unique, specific **heading**,
   - **body** text (2–3 plausible sentences),
   - **citation pills** from the source set that fit:
     `gmail, jira, gmeet, slack, github, notion, figma, firebase, cursor`,
   - a **status** (`ongoing / paused / archived`) and **priority**
     (`high / medium / low`) — **vary these across the 6**.
3. Instantiate the Context Card component (`429:6162`) 6× (or fill existing
   slots) into the two rows. Set each instance's text / pills / status /
   priority via **`figma_set_instance_properties`** — direct text edits on
   instance children fail silently.
4. Keep spacing to the synced spec (in-row gap 16, row-to-row gap 16, card
   block rhythm 8/12). Reuse the component; don't rebuild card internals.

## figma_execute gotchas
- Throws `Cannot unwrap symbol` if you return a `figma.mixed` value (e.g.
  per-side strokeWeight) — coerce symbols to strings before returning.
- A node's NAME may not match its role (a "Frame 95" was actually a note row) —
  verify children before bulk edits.
- The write half of a script runs even if a later line throws — re-read to
  confirm state rather than blindly re-applying.

## Testing / verification
- Screenshot the tab node after placing cards → confirm **6 cards in a 2×3
  grid**, no overflow or misalignment.
- Confirm each card has a **different** heading/body/pills, and status +
  priority **vary** across the set.
- Confirm citation pills render real logos (no monogram fallback).
- Confirm spacing matches the component spec.

## Rules
- **Exactly 6 cards.** This is a deliberate representative sample — enough for
  anyone viewing the file to understand the concept. Do NOT populate the whole
  screen or add more cards.
- **Ask follow-up questions** whenever a requirement or detail is unclear.
- **Don't create unnecessary files or redundant data.** Reuse the existing
  component; never duplicate node tables that already live in
  `FIGMA-SYNC-PENDING.md`.
- Report progress task by task.

Related skill: `fill-tab-cards-code` (the code counterpart).
