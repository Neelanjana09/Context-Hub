---
name: navbar-tab-state
description: >-
  Make the navbar/sidebar tabs interactive in the Context Hub CODE app and fix
  the selected-vs-hover bug. Fire when the user asks to "fix the navbar tabs",
  "make the tabs interactive/clickable", "fix the tab hover/selected state", or
  "the hover looks like the selected tab". Deliverable is CODE. The tab was
  built so its HOVER state is really what should be the SELECTED (active) state;
  this corrects that and wires tab switching so one tab is active at a time and
  its cards show. Figma (node 945:4683) is a read-only reference only.
---

# Navbar tab state — selected vs hover (in code)

**Deliverable = CODE** (the Next.js preview app). The tab was built with the
wrong state semantics: the **hover** state is really what should be the
**selected** (active) state. Fix it and make the tabs behave correctly.

Correct semantics:
- **Selected** = the persistent active tab whose cards are shown. Only **one**
  tab is selected at a time.
- **Hover** = transient pointer feedback only, shown while hovering, gone on
  leave.

## Before starting — orient
1. **Confirm which nav** is meant (top tabs vs left sidebar) if unclear.
2. If useful, read Figma node `945:4683` (official Figma MCP, read-only) to see
   the intended selected/hover styling — never write to Figma.
3. **Reuse existing code:** the nav/sidebar components in `components/nav/`.

## Steps
Work in small tasks; report each as it completes.
1. Find where the tab renders and how "hover" vs "selected" styling is applied
   today (the bug: hover styling stands in for selected).
2. Separate them: give **selected** its own persistent style (the active tab),
   and make **hover** a true pointer-over style that clears on leave.
3. Wire interactivity: clicking a tab sets it as selected (state), and where
   tabs drive content, shows that tab's cards. Ensure exactly one tab is
   selected at a time.
4. Keep the styling matching the design reference.

## Testing / verification
- Run the dev server; open the app in the browser.
- Exactly **one** tab reads as selected at a time.
- Hover styling appears only on pointer-over and clears on leave — it no longer
  looks like a selection.
- Clicking a tab moves the selected state to it (and switches visible cards if
  tabs drive content). Verify with `read_page` / screenshot; no console errors.

## Rules
- **Ask follow-up questions** whenever a requirement or detail is unclear.
- **Don't create unnecessary files or redundant data.** Reuse existing nav
  components and patterns.
- Report progress task by task.

Related skills: `fill-tab-cards-code` / `fill-tab-cards-figma` (populate a
tab's cards).
