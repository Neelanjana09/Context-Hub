# Designer Context Hub — Mini PRD

*Source: "Context of the Project" section, Page 1 of the Figma file (`Designer Context Hub`, fileKey `PXC8h6CVxIdW0K38IHcxAZ`). Compiled 2026-08-05.*

## Problem statement

Designers routinely need answers to questions like:
- What did leadership or roadmap discussions imply for UX?
- What feedback patterns showed up — and from whom?
- What did engineering ship that constrains or enables the UI?
- What did I conclude in meetings — and what do I owe as a next step?

Today that knowledge is split across Slack threads, calendars, Docs/Notion, Figma/FigJam artifacts, ticketing systems, repo activity, spreadsheets, transcripts, screenshots, emails, CRM notes, survey exports, interview clips, informal DMs, and individual memory.

## Pain / why it matters now

- **High fragmentation** — finding the quote, link, or decision context takes time.
- **Poor reuse** — onboarding, reviews, critiques, and stakeholder updates repeat the same context-hunting.
- **Lost rationale** — revisiting a decision months later is guesswork.
- **Root cause** — no tool is tasked with designer-oriented sensemaking; existing systems optimize for workflows (tickets), storage (docs), or communication streams (chat) — not longitudinal interpretation.

## What we're building

A personal tool, two desktop screens (1440 wide):
- **List** — filter-first, scannable feed of signals.
- **Detail** — balanced view of raw signal + your interpretation + next steps.
- One extra state: **designer note in editing focus** on the detail screen.

**Use cases driving content** (5 categories total): Meeting capture · Decision log · Engineering motion · Research notes · Feedback log.
*(Customers and Scratch are explicitly out — noise for a personal tool.)*

**Visual direction:** Monochrome with one accent (Notion / Things 3 territory).

## Design system scope — "Token system" text block (⚠️ not authoritative)

> **Correction (2026-08-05):** the block below was pulled from a text layer (node `11:3`, "Token system") in the file, originally treated as the intended target spec. The user has since clarified they don't recall writing it and likely pasted it from somewhere else — **it should not be referred to as spec going forward.** Kept here only as a historical record of what that text said. From Phase 2 onward, the actual measured/built values in the components are the sole source of truth, not this block.

**Components — 8 total**

Atoms (5):
- Button — primary (accent fill) · secondary (border) · ghost
- Input — default, focus
- Filter chip — default, active (accent soft + accent text)
- Category label — dot + text inline
- Tag — small pill, neutral only

Composed (3):
- SignalCard — list item (default + selected) → maps to **Context Card** in the file
- DesignerNoteBlock — note editor with focus state
- ReminderRow — date + label, with overdue variant → maps to **Agenda** component in the file

**Color tokens (as written in the unverified text block — see correction above)**

Neutrals — ~95% of the UI:
| Token | Hex | Use |
|---|---|---|
| bg/page | #FAFAF9 | Page background |
| bg/raised | #FFFFFF | Cards, panels |
| bg/subtle | #F2F1EE | Filter bar, hover, segmented controls |
| bg/inset | #EBEAE6 | Active chip, focus ring container |
| text/primary | #1B1B1A | Headings, primary body |
| text/secondary | #5C5B57 | Supporting text |
| text/tertiary | #8E8C86 | Metadata, timestamps |
| border/subtle | #E5E3DE | Default borders |
| border/strong | #CDCAC2 | Active states, selected |

Accent — the only color:
| Token | Hex | Use |
|---|---|---|
| accent | #2B2B66 (deep indigo, or chosen alt) | Primary buttons, active filter, focus outline, save action |
| accent/soft | #2B2B660D | Active filter background tint |
| accent/ring | #2B2B6633 | Focus ring |

Category dots (only color besides accent, 6×6 dot before the label — label stays monochrome text):
| Category | Color |
|---|---|
| meeting | #5B7FB9 (blue) |
| roadmap | #7B5BB9 (purple) |
| feedback | #B95B5B (rose) |
| research | #5BB99F (teal) |
| engineering | #6FAA6F (green) |

Status (rare): warning #B5651D — overdue indicator only.

**Typography — 4 styles (as written in the unverified text block — not accurate, actual file has 9 styles in Google Sans, see Phase 1 results)**

| Token | Size / Line / Weight | Use |
|---|---|---|
| h1 | 24 / 32 / 600 | Detail screen title |
| h2 | 16 / 22 / 600 | Section headings |
| body | 14 / 22 / 400 | Body text |
| meta | 12 / 16 / 400 | Captions, metadata |

Font: Inter (free) or system. No mono needed.

**Spacing — 5 values (as written in the unverified text block, not used as a target — see Phase 2):** 4 · 8 · 12 · 16 · 24.

**Radius — 3 values (as written in the unverified text block, not used as a target — see Phase 2):** 6 (inputs, buttons) · 10 (cards) · 999 (filter chips).

**Elevation:** none — everything flat, borders do the work.

---

## Current state in the file (as of audit)

- **Variables:** 17 COLOR variables, all in a single collection called "Greys" (a second empty collection, "Collection 2", also exists). Names carry business logic, e.g. `Text Color/Heading 1`, `Priority Color/High`, `Tag Color/Ongoing`, `Accent Color/Regular` — not aligned with the neutrals/accent token spec above. No spacing or radius variables exist yet.
- **Text styles:** 9 local text styles defined (Heading 1/Medium 28/30, Heading 2/Bold 18/20, Sub Heading/Regular 18/20, Body text 1 Bold/Medium/Regular 16px, Body text 2/Regular 14/20, Pill text Medium/Regular 12/20), font family **Google Sans** — this is the real, current typography and is treated as source of truth (see correction note above re: the unverified "Token system" text block).
- **Key components on Page 1:**
  - `Context Card` (COMPONENT_SET, node `429:6162`) — states: Default, Note added, State3, Three dot dropdown. 5 slot properties.
  - `Daily Card` (INSTANCE, nodes `621:1887` / `621:1886`) — "recently updated" daily cards.
  - `Context Sub Card` (COMPONENT, node `645:4422`) — attaches to main Context Card on the detail page.
  - `Agenda` (COMPONENT_SET, node `554:1498`) — confirmed as the "agent card" referenced in planning; states: Normal, Strike through, Hover.
  - Section `Context card anatomy` (node `736:1561`) already contains anatomy breakouts: *Daily cards Anatomy*, *Context card Anatomy*, *Context subcard Anatomy* — starting point for Phase 2's padding/spacing/radius audit.
  - Section `Components and icons` (node `655:5396`) — houses the atom-level pieces (icons, misc frames) referenced by the composed cards.

---

## Phased execution plan

### Phase 1 — Variable cleanup: color & typography naming
Audit existing Figma variables (currently 17 color variables under "Greys," business-logic-named) and text styles (9 styles, Google Sans — the font is Google Sans, not Inter; the 9 styles at node `581:1733` are the real source of truth, not the PRD's earlier 4-style placeholder spec). Reorganize colors into clean, purely descriptive tokens with **no business logic in the names** — split raw color values into two explicit sections: **Neutrals** and **Accent colors**.

**Decided scope for this pass:**
- Category dot colors (meeting/roadmap/feedback/research/engineering) are **skipped for now** — left untouched, revisit in a later phase.
- Typography: **rename only**, keep all 9 existing styles as-is (no consolidation, no font change) — clean structural naming applied to what's actually there.

### Phase 2 — Spacing, padding & radius tokens on core components (expanded scope)
Review **Context Card**, **Daily Card**, and **Agenda** (the confirmed "agent card") plus their child atoms. Measure actual padding, item-spacing, and corner-radius values in use. Create spacing/radius variables from what's *actually* found — the "4·8·12·16·24 spacing / 6·10·999 radius" text in the Token system block turned out to be an unverified, likely-pasted-from-elsewhere reference (see correction above), not a real target, so it is **not** used for reconciliation. The actual measured values in the components are the sole source of truth. Apply the new variables to all three components **and** to the underlying atom master components they're built from (buttons, tags, chips, inputs, etc., in the "Components and icons" section) so the tokens propagate rather than staying local to one card.

**Scope expanded (2026-08-05):** a binding audit showed Phase 1's renamed color/typography variables are barely wired into these components — see results below. Since Phase 2 already walks the same 3 components + atoms, **binding hardcoded fills/text to the matching Phase 1 variables is now folded into Phase 2**, done in the same pass as the spacing/radius work rather than as a separate phase.

**Binding audit results (pre-Phase 2):**

| Component | Fills bound to variables | Text bound to styles | Corner radius bound |
|---|---|---|---|
| Context Card (State=Default) | 10 / 23 (43%) | 2 / 11 (18%) | 0 / 2 (0%) |
| Daily Card | 2 / 37 (5%) | 0 / 21 (0%) | 0 / 9 (0%) |
| Agenda (List item, Normal) | 0 / 3 (0%) | 0 / 2 (0%) | 0 / 1 (0%) |

Most hardcoded hex values already **match** Phase 1's renamed variables exactly (e.g. raw `#2D3539` = `Neutral/700`, `#4D5156` = `Neutral/600`, `#F9F9F9` = `Neutral/100`) — the palette is consistent, just not wired to variables. A handful of hardcoded colors don't match any current variable and will need a decision during Phase 2 (map to nearest token, or treat as intentionally distinct — flag for review): `#AFAFAF`, `#D9D9D9`, `#E9E9E9`, `#181C1F`, `#52555B`.

### Phase 3+ — *(to be defined)*
Placeholder for subsequent phases (e.g., building the prompt-driven "generate card design → paste into Figma" skill workflow, applying tokens to List/Detail screens, atom-level component QA). Will be appended here as scoped.

### Deferred — Semantic / status color tokens
Category dot colors (meeting/roadmap/feedback/research/engineering) and Priority/Tag colors (High/Medium/Low, Ongoing/Paused/Archived/Default — 7 variables, distinct hues: red `#C32C2F`, amber `#FFC43E`, green `#36B37E`, peach `#FFD2C1`, light-blue `#C0DFFF`, pink `#F9C6D7`) are both semantic/status-meaning raw colors — same category, deliberately kept out of Phase 1's neutrals/accent pass. Revisit together in a dedicated phase once the primitive layer (Phase 1) and component tokens (Phase 2) are settled.

---

## Phase 1 — Completed (2026-08-05)

**Color variables renamed** (collection "Greys", `VariableCollectionId:109:1228`) — lightness-ordered numeric scale, Figma `/` grouping:

| New name | Hex | Previous name |
|---|---|---|
| `Neutral/50` | #FFFFFF | Surface Color/Navbar |
| `Neutral/50-2` | #FFFFFF | Text Color/Color *(duplicate value, kept as separate variable per decision — not merged)* |
| `Neutral/100` | #F9F9F9 | Surface Color/Content |
| `Neutral/200` | #EBECF0 | Surface Color/Border color |
| `Neutral/500` | #747474 | Text Color/Sub heading |
| `Neutral/600` | #4D5156 | Text Color/Body text |
| `Neutral/700` | #2D3539 | Text Color/Heading 2 |
| `Neutral/900` | #0A0C10 | Text Color/Heading 1 |
| `Accent/100` | #E6F4FF | Accent Color/Hover |
| `Accent/600` | #2252D3 | Accent Color/Regular |

Priority/Tag colors (7 variables) left **untouched** — deferred, see above.

**Typography audited** — the 9 existing text styles (Google Sans) were already structurally named (scale + weight, not business-logic-laden), so no renaming was needed; kept all 9 as-is, no consolidation, no font change, per decision. One bug caught and fixed during the audit: `Body text 1/Medium` was actually set to Bold weight (identical to `Body text 1/Bold`) — corrected to true Medium weight in Figma.

**Not yet done:** this pass only renamed/organized what already existed; no color values were changed. (Note: an earlier version of this doc compared current values against the "Token system" text block's hex list — that comparison is no longer relevant, see correction above.)

---

## Phase 2 — Completed (2026-08-05)

**Token scale used:** actual measured values only (the "Token system" text block is not authoritative — see correction above). Base-2 scale, odd outliers snapped to nearest even neighbor, one inconsistency corrected at source.

**Spacing/Radius variables created** (new collection "Spacing & Radius", repurposed from the empty "Collection 2"):
`Spacing/0, /2, /4, /6, /8, /12, /16` · `Radius/2, /4, /8`

**Snap decisions applied:**
| Found | Occurrences | Resolution |
|---|---|---|
| `1` | Icon-instance padding (Secondary icons, Dropdown menu) | → `Spacing/2` |
| `3` | Priority pill icon+text gap | → `Spacing/4` |
| `11` | Citation/source block gap, note editor gap | → `Spacing/12` |
| `15` | Meta row (time/date/team) gap | → `Spacing/16` |
| `18` | Daily Card's own bottom padding (inconsistent with its own 16/16/16 siblings) | **Corrected to `16` at the master**, then bound to `Spacing/16` — fix propagated automatically to all instances |
| `28` | Single note-editor icon-row gap | Left as literal, un-tokenized (single use, no inconsistency to fix) |

**Bound to:** master components directly (edits cascade to all instances) — `Context Card` (State=Default, `429:6161`), `Daily Card` master (`Tab Card` / State=Default, `440:7117`), `Agenda` (List item/Normal, `554:1496`), plus all 8 atom master component sets: Secondary icons, Status, Priority, Tick mark, Navbar Icon Holder, Dropdown menu, Note, Citation T.

**Binding totals across all targets:** 432 spacing/padding bindings · 72 corner-radius bindings · 64 color-fill bindings · 33 text-style bindings.

**Post-bind coverage on the 3 core components:**
| Component | Fills bound | Text bound | Radius bound |
|---|---|---|---|
| Context Card | 16 / 23 (70%, up from 43%) | 10 / 11 (91%, up from 18%) | 4 / 4 (100%, up from 0%) |
| Daily Card | 16 / 28 (57%, up from 5%) | 10 / 14 (71%, up from 0%) | 4 / 4 (100%, up from 0%) |
| Agenda | 2 / 3 (67%, up from 0%) | 2 / 2 (100%, up from 0%) | 1 / 1 (100%, up from 0%) |

**Instance-override check:** verified the two Daily Card and three Context Card instances placed in "Card types" — all correctly inherited the master's corrected `16px` padding and variable bindings with no leftover per-instance overrides.

**Remaining gaps, not auto-bound (flagged, not silently forced):**
- *Fills that don't match any current color variable:* `#5F5E5B`, `#D9D9D9` (decorative dot), `#AFAFAF` (placeholder text), `#52555B` / `#181C1F` (text colors), `#3465E0` / `#5F8AFE` (an icon), `#E9E9E9` (Tick mark background) — these are real, distinct colors not covered by Phase 1's Neutral/Accent set. Needs a decision: add as new neutrals, or intentional one-offs.
- *Priority/Tag color fills* (`#C32C2F`, `#F9C6D7`, `#36B37E`, `#FFC43E`, `#FFD2C1`, `#C0DFFF`) — correctly left unbound, per the Phase 1 deferral decision on semantic/status colors.
- *Text styles with no match:* "Citation text comes here" (11px Regular — no style exists at 11px) and "Note(s)" (14px Medium — a 14px style only exists at Regular). Left un-bound rather than guessing.

---

## Phase 2 — Extended to Context Sub Card (2026-08-05)

The **Context Sub Card** component (the card that appears when you click into a specific Context Card's detail view) was identified in the "Card types" section — master component `645:4422`, placed instance `688:2430` (2nd-to-last layer in the section, right before "Action Button"). Annotation on the master: *"sub cards are attached to the Main context cards when the user gets to the details page."*

**Audit result:** same anatomy as Context Card/Daily Card (Frame 95/96 shell + Slot-based content). All padding/spacing/radius values found fell **within the existing Phase 2 scale** — no new outliers, no scale changes needed. Several child atoms (Priority, Status, Citation T, Note) were already showing bound fills/text styles before any new work here, confirming the master-level atom bindings from the main Phase 2 pass cascade correctly into this component too.

**Bound:** 76 spacing bindings, 14 radius bindings, 15 color-fill bindings, 9 text-style bindings, applied directly to the master (`645:4422`).

**Post-bind coverage:**
| | Bound |
|---|---|
| Fills | 16 / 25 (64%) |
| Text styles | 9 / 12 (75%) |
| Corner radius | 4 / 4 (100%) |

Verified the placed instance (`688:2430`) correctly resolves to this master and inherited the bindings with no overrides to fix.

**New gaps flagged (not forced):**
- Two additional text styles with no match in the current 9-style set: "Title of the Subject" (18px Medium — only 18/Bold and 18/Regular exist) and "View Details" (14px Medium — only 14/Regular exists).
- Same recurring unmatched-color set as the rest of Phase 2 (`#D9D9D9`, `#5F5E5B`, `#52555B`, `#AFAFAF`) plus the deferred Priority/Tag colors (`#C32C2F`, `#F9C6D7`).

---

## Component architecture fix — Tab Card (2026-08-06)

**Root cause identified by user:** `Tab Card` (the component behind Daily Card) was originally built by copy-pasting Context Card's slot-based structure, which is why it carried Priority/Status elements that don't belong on daily-update rows, and why its internal SLOT nodes were fundamentally un-editable via the plugin API (Figma protects SLOT-typed nodes from removal even after the owning component property is deleted). Multiple attempts to clean up the old master in place failed for this reason.

**Correct architecture (per user):** `Tab Card` is one component with exactly **2 variants at the card level** — `Type=Recently Updated` and `Type=Agenda` — each variant being a full card (heading + a stacked list of row items), not a single row. Two real, fully-designed versions of these cards already existed live in the file (in a section called "Tab cards", `774:3631`, and duplicated on the main screen under `Contexthub_Main Screens`) — real content, never something that needed to be fabricated.

**Fix applied:**
1. Duplicated the two live card instances as a safety backup before touching anything.
2. Detached the duplicates (`detachInstance()`) and converted each to a standalone component (`createComponentFromNode()`), preserving their exact real content pixel-for-pixel.
3. Combined the two into a new, clean `Tab Card` component set (`775:4136`) with a single `Type` property (`Recently Updated` / `Agenda`) — no shared slots or Context Card lineage.
4. Created fresh instances of the new set in the "Tab cards" section, replacing the old ones.
5. Extended Phase 2 token binding to the Agenda row's two previously-untouched states — **Hover** (reveals a check icon + delete icon, replacing the time field) and **Strike-through** — both confirmed matching the documented 3-state interaction (Normal / Strike-through / Hover) exactly as described.

**Deliberately left in place, per explicit instruction:** the old broken `Tab Card` master and the two original main-screen instances (`695:3715`, `695:3733`) that still point to it — **not yet deleted/swapped**, pending confirmation.

**New known gaps (consistent with earlier Phase 2 pattern):**
- `#E9E9E9` (Tick mark background) — same unmatched neutral gap as before.
- `#36B37E`, `#E0FFF2` — semantic/status greens (checked-state tints), correctly left unbound per the deferred-semantic-colors decision from Phase 1.

**Note on tooling reliability:** during this fix, `figma.combineAsVariants` / cross-set `appendChild` calls twice produced transient corruption (an emptied component, a stray property-name revert, a wildly mis-positioned variant) that only became visible on a *subsequent* read, not at the point of the call that caused it. Every step in this section was re-verified with a fresh read and a screenshot after the fact — worth the same caution on any future structural (non-token) edits to this file via script.

### ⏸️ Paused here (2026-08-06) — resume point for next session

Work stopped mid-way through the Tab Card fix. **Status quo when paused:**
- New clean `Tab Card` component set (`775:4136`, variants `774:4134`="Type=Recently Updated" / `774:4135`="Type=Agenda") is built and verified correct.
- "Tab cards" section (`774:3631`) instances (`775:4444`, `775:4555`) already point to the new clean set.
- **Old broken `Tab Card` master (`440:7116` / `440:7117`) deliberately left in place, not deleted** — user said more correction is still needed on it, to be picked up next session.
- **Main-screen instances (`695:3715` "Recently Updated", `695:3733` "Agenda", under `Contexthub_Main Screens > ... > Daily Card section`) still point to the old broken master** — not yet swapped, per explicit instruction not to touch further today.
- User indicated **further correction is still needed in the Tab Card component** beyond what's been fixed — specifics not yet stated, to be defined at the start of the next session.

**To resume:** ask the user what correction they have in mind for Tab Card before taking any action — do not assume it means finishing the swap/cleanup above.

---

## Agenda list item fix (2026-08-07)

User fixed the Agenda row/list-item component directly in Figma (previously the broken master `554:1496`, which had literally empty children — matching the SLOT-corruption pattern noted above). Rebuilt version landed at component set `786:1699` (originally named "Tab Card", 3 variants: `Property 1=Agenda` × `Property 2=Hover/Normal/Strikethrough`).

**Applied:** swapped the 6 row instances inside the `Type=Agenda` variant of the `775:4136` Tab Card master (nodes `774:4053`–`774:4058`) from old master `554:1496` → new master `786:1696` (`Normal` state) via `instance.swapComponent()`. Edit made at the master level so it cascades to anything already pointing at `775:4136` (e.g. "Tab cards" section instances `775:4444`/`775:4555`). Verified via screenshot — real content (tick mark, task copy, time) now shows correctly, no leftover overrides. **Does not** affect the two main-screen instances (`695:3715`, `695:3733`) — those still point to the old broken `440:7116`/`440:7117` master, swap still pending as noted above.

### ⏸️ Paused here (2026-08-07) — resume point for next session

User: *"I need to make changes to the tab component as a whole, since it's not working properly... previous variants were not working and it was a mess, so now I have made it correct."* — i.e. `775:4136` (and possibly the whole Tab Card approach) is being superseded by a fresh rebuild, done directly in Figma by the user.

**New structure found at [node `778:4862`](https://www.figma.com/design/PXC8h6CVxIdW0K38IHcxAZ/Designer-Context-Hub?node-id=778-4862), section "Daily cards":**
- `Agenda list view` (`786:1699`) — the already-fixed list item from above, renamed from "Tab Card" to "Agenda list view".
- **`Daily cards`** (`793:2297`) — new component set, not seen before this session. Two properties:
  - `Property 1`: `Recently Updated` / `Agenda`
  - `Property 2`: `Recently Updated` variant uses value `Dailycard` (no space); `Agenda` variant uses value `Daily card` (with space) — **flagged as likely typo/inconsistency**, not a deliberate second axis. Worth fixing since mismatched variant property values are a plausible cause of the "not working" complaint (breaks default-value resolution / instance swap matching).
  - Variants: `Recently Updated + Dailycard` (`793:2295`), `Agenda + Daily card` (`793:2296`).

**Status when paused:** user is still actively editing this new `Daily cards` set themselves ("I have to fix the tab card component" — in progress). No action taken on it yet — just reviewed and logged. Old `775:4136` Tab Card master and the still-unswapped main-screen instances (`695:3715`, `695:3733`) are untouched.

---

## Daily Card / List item — ✅ Complete (2026-08-07)

User declared this line of work done. Final state, for reference:

**`Daily Card`** (final id `806:3965`, section "Daily cards" `778:4862`) — two properties:
- `Type`: `Recently Updated` / `Agenda`
- `State`: `Default` / `Hover`
- 4 variants total. Hover adds a border bound to `Accent/600` (same token `Context Card`'s hover state `State3` uses — confirmed by inspection, not guessed) — no other visual change.
- Journey to get here: started as messy `Property 1`/`Property 2` with mismatched values (`793:2297`) → collapsed to single `State` property (`798:2866`) → renamed that to `Type` and added a real `State` (Default/Hover) axis on top (`806:3965`). Each structural step done via extract-components-out-of-set → rename → `figma.combineAsVariants` recombine (variant properties can't be renamed/deleted in-place via the plugin API — confirmed repeatedly). Backed up before every structural edit (`Daily cards (backup pre-property-fix)`, `Daily Card (backup pre-hover-add)`, etc.) — all left untouched on the page.

**`List item`** (id `800:3619`, same section) — the row/list-item component, merged from two previously-separate things:
- `Type`: `Recently updated card` / `Agenda card`
- `State`: `Normal` / `Hover` / `Strikethrough` — **not a full 2×3 matrix**, only 4 variants exist (`Recently updated card` only needs `Normal`; `Agenda card` has all 3) — Figma component sets support partial matrices, confirmed working.
- The `Recently updated card` variant's content was pulled from real hand-built row content (never fabricated), same pixel-for-pixel principle as earlier fixes.

**`Citation pill`** (id `804:3807`, section "Card types" `592:1867`) — built by the user (not by Claude) as a proper component set: `Type` = `Meeting notes` / `Project notes` / `Product Release` / `Company news` / `Engineering Release`. Wired into `List item`'s citation area as a real instance (replacing an earlier Claude-made "just rename the frame to Slot" attempt that the user correctly rejected as not a real functional slot). One typo fixed post-hoc: `Engineerinng Release` → `Engineering Release` (existing instances unaffected — same node ID preserved through the rename).

**Recently Updated rows**: all 7 hand-built frames converted to real `List item` instances (title, time, left-hand app icon, and citation category all copied exactly from the originals — icon via fill/imageHash copy, citation via the pill's own `Type` property, not manual reconstruction). Two trailing-space artifacts in source time text found and trimmed as a side effect.

**Time format**: standardized file-wide (not just Daily Card) — 26 text nodes normalized from mixed `.`/`:` separators to one consistent `H:MM am/pm` format; a stray `4. pm` (no minute value) normalized to `4 pm`. Backup-clone text left untouched on purpose.

**Left as-is, not yet addressed:** the loose `Daily Card` instance (`798:3367`) sitting directly in the "Daily cards" section — still points at a pre-hover version of the component, not yet swapped to `806:3965`. Also still open from earlier: main-screen instances (`695:3715`, `695:3733`) still point at the original old broken `440:7116`/`440:7117` master, never swapped to any of the new work above.

---

## Phase 3 — Content Wrapper main-screen swap — ✅ Complete (2026-08-07)

User: *"I have to work on the content slot that I had created when I had placed the templates of context help in another section. I need to fix that."*

Identified via [node `701:4592`](https://www.figma.com/design/PXC8h6CVxIdW0K38IHcxAZ/Designer-Context-Hub?node-id=701-4592): **`Content Wrapper`** (COMPONENT_SET, master lives inside `Contexthub_Main Screens` section, id `701:4592`) — a real component with genuine SLOT-type properties (`Content#701:2`, `Content Block#701:3`) plus a `State` variant (`Default`/`2nd screen`/`Blank`). Annotated "Content for the screens." This is a second, separate real-slot component in the file besides `Context Card`'s 5 slots.

**Root cause found:** the `Content Block` slot's `Daily Card section` (inside `State=Default`) still held the two long-pending old-broken-master instances (`695:3715`, `695:3733`, `componentId 440:7117`) — the exact swap flagged as pending since the very first Tab Card session. Visually this produced two bugs: a stray gray empty-placeholder box under each card, and a duplicated/overlapping checkbox icon glitching over two Agenda rows.

**Fix applied:** `instance.swapComponent()` — `695:3715` → `793:2295` (`Type=Recently Updated, State=Default`), `695:3733` → `793:2296` (`Type=Agenda, State=Default`), both on the final `Daily Card` master `806:3965`. Verified via screenshot — both glitches gone, cards render real content correctly.

**Confirmed intentionally out of scope:** the empty `Context Card section` sitting right below the cards in the same `Content Block` slot (frames `695:3887`/`695:3908`, no content) — user confirmed this should stay blank, not a bug.

This closes out the last dangling piece from the original Tab Card fix — main-screen instances now match the fully-rebuilt `Daily Card` everywhere.

**Gap between the two Daily Card instances — resolved by user (2026-08-09):** stale fixed-height overrides (566px / 359px vs the master's real 368px), left behind because `swapComponent()` preserves an instance's own fixed size. User fixed it directly by rebuilding `Daily Card section` as a fresh auto-layout frame with new instances `812:1839` (Recently Updated → `793:2295`) and `812:1924` (Agenda → `793:2296`), both `368px`. Verified: cards bottom-align, no gap. Old `695:3715`/`695:3733` no longer exist.

**Context card frame placed into the Content Wrapper slot (2026-08-11):** the previously-blank `Context Card section` was filled with a new vertical-scroll `Context card frame` (`826:4138`, rows of 3 context cards each). Kept the `Category/Date/Priority/Status` filter bar (`Frame 108`), replaced the old static single row (`Frame 119`). Sized to show 2 rows + a peek (660px); `Context Card section` + `Content Block` set to HUG so the wrapper grows rather than clipping. (Parent-component grow check was interrupted mid-verification — worth a re-check that `701:4591` didn't clip.)

---

## Phase 4 — Semantic color token layer — ✅ Core complete (2026-08-11)

User: *"Semantic color tokens haven't been named appropriately… colours aren't linked to text style usage. Heading should use 1 color, border is not linked with the color… every color in the variable is linked to its usage, just not its value."*

**Interpretation (confirmed with user):** the existing tokens are value-named primitives (`Neutral/900`, `Accent/600`) holding raw hex. Build a **second semantic tier** that aliases them — usage-named tokens that *link to* a value rather than *hold* one. Two-tier, industry-standard. Decisions taken: keep **two** heading colors (H1/H2 non-destructive, recommended and accepted); put semantics in a **separate collection**; **create tokens AND rebind components** in the same pass.

**Primitives (unchanged), collection "Color Variables" `109:1228`:** `Neutral/900 #0a0c10`, `/700 #2d3539`, `/600 #4d5156`, `/500 #747474`, `/200 #ebecf0`, `/100 #f9f9f9`, `/50 #ffffff`, `Accent/600 #2252d3`, `/100 #e6f4ff`. (Note: collection renamed from "Greys" → "Color Variables" at some point; the old `Neutral/50-2` duplicate is gone.)

**New collection "Semantic Tokens" `834:2251`** — 10 alias tokens, each scoped to its usage:
| Token | aliases | scope |
|---|---|---|
| `text/heading-1` | Neutral/900 | TEXT_FILL |
| `text/heading-2` | Neutral/700 | TEXT_FILL |
| `text/subheading` | Neutral/500 | TEXT_FILL |
| `text/body` | Neutral/600 | TEXT_FILL |
| `text/inverse` | Neutral/50 | TEXT_FILL |
| `surface/page` | Neutral/100 | FRAME/SHAPE_FILL |
| `surface/raised` | Neutral/50 | FRAME/SHAPE_FILL |
| `border/default` | Neutral/200 | STROKE_COLOR |
| `accent/default` | Accent/600 | ALL |
| `accent/hover` | Accent/100 | ALL |

`text/inverse` was added mid-pass to catch the dual-use of white `Neutral/50` (185 surface fills vs 24 white-text fills) — the white *text* must not be named "surface".

**Rebind:** one idempotent document-wide pass re-pointed ~500 fill/stroke bindings from primitives → the matching semantic token, keyed on (primitive + node type + fill/stroke) so dual-use primitives resolved correctly. Masters rebound → instances inherit automatically (so per-token counts look lower than the raw audit; that's expected). Verified: re-audit shows **only the 6 intentionally-skipped nodes** still on primitives, and a screenshot of `Context Card` (`429:6161`) is pixel-identical (every alias = same primitive value, so zero visual change).

**Final 6 edge nodes — resolved (2026-08-11, user approved):** two more semantic tokens added and rebound:
- `border/strong` (`837:2654`) → Neutral/700, scope STROKE_COLOR — the input active/focus border (`633:2676`/`633:2681`) + divider `Line 17` (`633:2686`).
- `icon/default` (`837:2655`) → Neutral/600, scope SHAPE_FILL — the Priority flag icon (`386:1069`, instances inherit).

**Final state: a full re-audit returns ZERO raw-primitive bindings anywhere in the file** — every color binding now resolves through the 12-token semantic layer. Goal met end-to-end ("every color linked to its usage, not its value"). Total semantic tokens: 12 (`text/heading-1`, `text/heading-2`, `text/subheading`, `text/body`, `text/inverse`, `surface/page`, `surface/raised`, `border/default`, `border/strong`, `icon/default`, `accent/default`, `accent/hover`).

**Not touched at this point (done next, see Phase 5):** the Priority/Tag status colors.

---

## Phase 5 — Status/Priority color tokens — ✅ Complete (2026-08-11)

Folded the last 7 raw-value status colors into the same two-tier system. Usage found: Priority = **icon tint** (Vector fill; text already `text/heading-2`); Status = **pill background** (text already `text/inverse` on Ongoing, `text/heading-1` on the light Paused/Archived/Default — contrast fine, no bug). All pills were **raw hex, unbound** at the master; plus 2 stray nodes (`I722:11471;5:1124`, `I721:11467;5:1124`) were bound to the old vars.

**6 new hue primitives** (collection "Color Variables"): `Red/500 #c32c2f`, `Amber/400 #ffc43e`, `Green/500 #36b37e`, `Peach/200 #ffd2c1`, `Sky/200 #c0dfff`, `Pink/200 #f9c6d7`. (Representative scale stops chosen — no full ramps exist. `Sky` used for the light blue to avoid confusion with the `Accent` blue brand family.)

**7 new semantic tokens** (collection "Semantic Tokens"), aliasing those primitives:
- `priority/high`→Red/500, `priority/medium`→Amber/400, `priority/low`→Green/500 (scope SHAPE_FILL)
- `status/ongoing`→Green/500, `status/paused`→Peach/200, `status/archived`→Sky/200 (typo fixed), `status/default`→Pink/200 (scope FRAME/SHAPE_FILL)
- **The shared `#36b37e`** (Priority/Low + Status/Ongoing) now resolves to one `Green/500` primitive via two aliases — the dedup we'd flagged since Phase 1.

**Bound** the 3 priority icon vectors + 4 status pill backgrounds at the masters → new tokens (hex unchanged, verified by screenshot); rebound the 2 stray nodes; then **deleted the old 7 `Priority Color/*` / `Tag Color/*` vars** after confirming zero remaining bindings.

### Design system — final state (2026-08-11)
Full two-tier color system, **zero direct node→primitive bindings anywhere** (final audit clean):
- **15 primitives** (value-named, "Color Variables"): Neutral/50·100·200·500·600·700·900, Accent/100·600, Red/500, Amber/400, Green/500, Peach/200, Sky/200, Pink/200.
- **19 semantic tokens** (usage-named aliases, "Semantic Tokens"): text/{heading-1, heading-2, subheading, body, inverse}, surface/{page, raised}, border/{default, strong}, icon/default, accent/{default, hover}, priority/{high, medium, low}, status/{ongoing, paused, archived, default}.
- Spacing & Radius variables (FLOAT) from Phase 2 unchanged.

---

## Phase 6 — Code implementation (Next.js preview) — 🧠 Spec written, build pending (2026-08-11)

User: *"Build the Context card component, Recently updated card and Agenda cards, with the hard coded filters (for now) in code and a preview website… Create global tokens that match Figma → Use those Global tokens to create the component in code → Read the annotations/ card anatomy → Create a Next.js project."*

Decided to **do the brain work now, implement tomorrow with a fresh mind.** Full spec written to [`IMPLEMENTATION_PLAN.md`](IMPLEMENTATION_PLAN.md) — contains: final token→CSS-variable map (all 15 primitives + 19 semantics + spacing/radius + 9 type styles, verified against the file), tech decisions (Next.js App Router + TS, CSS custom-property token layer, CSS Modules, Google Sans→Inter fallback), project structure, per-component API + anatomy (Context Card, Recently Updated Card, Agenda Card + atoms), preview-site plan, and a build order.

**Anatomy rules captured** (from "Context card anatomy" section `736:1561`): Recently Updated row = [source icon][title+desc][citation pill][time]; Agenda row = [tick][task][time]; Context Card = [title][priority][status][⋮ menu][meta time·date·team][description][sources w/ 1+ citation pills][note]. Time rule: `h:mm am/pm`, or "N hrs ago" if yesterday.

**To resume tomorrow:** confirm §1 open questions (font substitution, styling approach, source-icon strategy, sub-card deferral), pull the §7 fresh measurements (Context Card per-element padding/gap/type — today's read hit a symbol-serialization error, retry with plain values), then execute the §6 build order.

### ✅ Built (2026-08-11) — `context-hub-preview/` Next.js app

Full build done in one session. Stack: **Next.js 16 (App Router, Turbopack) + React 19 + TypeScript**, CSS custom-property token layer + CSS Modules, **Inter** as the Google Sans fallback (swappable via `--font-family`). Location: `context-hub-preview/` (its own git repo, created by create-next-app).

**Files:** `app/tokens.css` (the two-tier token layer — 15 primitives + 19 semantics + spacing/radius, verbatim from Figma), `app/globals.css` (reset + the 9 type utility classes), `lib/types.ts` + `lib/sampleData.ts`, atoms in `components/primitives/` (SourceIcon monograms, CitationPill, PriorityBadge, StatusBadge, TickMark, TimeLabel, IconButton menu, Icons.tsx SVG set), `components/rows/` (RecentlyUpdatedRow, AgendaRow), `components/cards/` (ContextCard, RecentlyUpdatedCard, AgendaCard), `components/filters/FilterBar.tsx` (hard-coded), and `app/page.tsx` = the preview playground (tab switch + live controls per component).

**Verified in-browser** (`npm run dev`, localhost:3000): all 3 cards render and closely match the Figma designs; every control is live — Context Card (title/priority/status/state/description/sources), Recently Updated (hover + row count), Agenda (hover, row count, per-row normal/hover/strikethrough). No console errors.

**Still open / next pass:** (a) **pixel-diff against Figma** was not possible this session — the Desktop Bridge was disconnected during the build; do a side-by-side and nudge spacing/type to exact once it's back, plus pull the §7 fine measurements. (b) Source icons are **placeholder monograms** — swap for real brand SVGs. (c) Context **sub-card** still out of scope. (d) Filters remain non-functional by design.

**Run it:**
```
cd context-hub-preview && npm run dev   # → http://localhost:3000
```

### Phase 6 continued — corrections & full-dashboard build (2026-08-12 → 08-13)

The playground was reworked into a **faithful full-dashboard replica** of the Figma first-screen (`Context hub_1st screen`, node `859:4892`; Content Wrapper `859:4973`). Reference read via the **official Figma MCP** (`get_screenshot` / `get_design_context` / `get_metadata`) after the figma-console Desktop Bridge kept dropping — either works; Bridge gives exact values via `figma_execute`, the official MCP gives screenshots + CSS.

**Real icons extracted from Figma "Secondary icons" set (`388:1111`) & others — replaced all placeholders:**
- Source/merchant logos are **real PNGs** exported from Figma image-fills, in `public/icons/` (gmail, jira, gmeet, slack, github, notion). NOTE: gmeet first exported **transparent/blank** — re-exported from the inner image rect (`398:531`); watch for this on any image-fill icon.
- Citation-pill category icons, card-header icons (`Navbar Icon Holder` Update/Agenda = copy+check / calendar+check), priority flag, tick mark, clock/calendar meta icons — all **exact Figma SVG geometry** hardcoded in `components/primitives/Icons.tsx`.
- Agenda **tick mark** = check-circle on rounded-square holder (`862:6650`): Default gray `#E9E9E9`, Selected green tint `#E0FFF2` + green check.

**Layout now = Content Wrapper replica** (`app/page.tsx`, no more playground/controls panel): app shell = `Sidebar` + (`TopBar` over scrolling canvas). Greeting → RecentlyUpdated+Agenda (side by side) → FilterBar → Context grid.
- **Sidebar** (`components/nav/Sidebar.tsx`, 264px): Context Hub logo, All Signals (active), Notes (Meeting/Project notes), Releases & News (Product/Engineering release, Company news). *(Figma sidebar is 328px — using 264; not yet matched.)*
- **TopBar** (`components/nav/TopBar.tsx`): All Signals title, search, +Create, help, bell, avatar. **Height 65px** (reduced ~10% from 72).
- **Context grid**: 2 rows × 3 cards; each row `overflow-x` (3rd card cut → horizontal scroll); grid `max-height:400`, `overflow-y` with rows `flex-shrink:0` so row 1 fully visible + row 2 peeks (vertical scroll).

**Spacing/type matched to Figma:** content padding **24px top / 32px sides**; section gap **24px**; daily-card gap 24; context grid row gap + card gap **24**; greeting title **24px Bold** (`#0a0c10`), subtitle 18px `#4d5156`. `canvasInner` max-width **1592** (Figma Content Wrapper). Daily cards use `minmax(0,1fr)` (responsive, ~572px @1512) NOT Figma's fixed 750 — needed so it **fits MacBook Pro 14" (1512px)** with no horizontal overflow.

**Interactions built:**
- Recently Updated rows: citation pill + time right-aligned as a pair (time fixed 68px so pills right-edge align), 4px gap. "Engineering Release" pill shortened to "Eng Release".
- **Agenda** (`AgendaCard` now client, stateful): hover reveals check+delete; click check → strikethrough (+green tick); click delete → row removed.
- **Context card title**: single-line ellipsis (`ctxTitle` nowrap/overflow/ellipsis).
- **Context card description**: clamped to **3 lines** (`-webkit-line-clamp:3`), **click to expand/collapse** (`ExpandableDescription.tsx`).
- **Note interaction** (`NoteInput.tsx`): "Write a Note" input, underline darkens on focus (`border/strong`); press **Enter** → note saved into a **"Note(s)"** section (text + timestamp), input clears, notes stack — matches Figma "Note added" state (`633:2941`) and typing states (`633:2675`).

**⚠️ Recurring gotcha:** Turbopack dev cache goes stale after edits (phantom "X is not defined" / changes not taking effect). Fix: `pkill -f "next dev"; rm -rf .next; npm run dev`. Also the automated browser pane can't hold OS window focus, so CSS `:focus` / programmatic `.focus()` don't reliably fire there — verify focus-dependent styles by toggling the class directly.

**Still OPEN / next up:**
- **Context card Sources** still render **category pills** (Meeting notes/Project notes). Figma shows **per-source app-icon pills** (`[app icon] [source title]`, e.g. `📧 Review feedback…`, `🔷 JIRA-2143…`, `🐙 PR-5914…`). User flagged this (old comment 11 + noted again 08-13). **This is the next change to make** — needs a `SourceCitation` type, source pills, per-source icons (some like Figma/flag/fire not yet exported), and sample-data updates.
- Sidebar width 264 vs Figma 328 (not yet matched).
- Context card width still 460 vs Figma 587 (left as-is; user's spacing pass was gap/padding only).
- Filters non-functional by design.

**Resume in a new chat:** `cd context-hub-preview && npm run dev` (localhost:3000). Read this section + `IMPLEMENTATION_PLAN.md`. Reference Figma node `859:4892` (fileKey `PXC8h6CVxIdW0K38IHcxAZ`). Next task = Context card **Sources → app-icon source pills**.

### Context card hover state + detail screen (2nd screen) — ✅ (2026-08-13)

**Hover state** (Figma `883:7765`, updated spec `894:8719`): the accent border already existed as a forced `data-hover` state but never fired on real mouse hover. Wired `.ctxCard:hover` → accent border, scoped to the Context card only (the `.card` shell is shared with the Daily cards) via a new `ctxCard` class. **Updated 2026-08-15** per detached hover node `894:8719`: outline thickened **1px → 1.5px** `--accent-default` (`#2252d3`) and a **layered drop shadow** added (`0 12px 13.5px /.10`, `0 50px 25px /.09`, `0 112px 33.5px /.05`, `0 200px 40px /.01`); `box-sizing:border-box` keeps the outer size stable so the thicker border doesn't shift the grid; transition covers border + shadow. Files: `components/cards/cards.module.css`, `components/cards/ContextCard.tsx`.

**Detail screen** (Figma `Context hub_2nd screen`, node `883:6663`; Content Wrapper `883:6704`): the first context card now **links to a detail route**. Clicking anywhere on the first card → `/context/operations-insight-board`.
- **Route:** `app/context/[id]/page.tsx` (async server component, awaits `params`). Reuses the app shell (`Sidebar` + `TopBar` + scrolling `canvas`) + a sticky Cancel/Save footer. `notFound()` for unknown ids.
- **Link mechanism:** `ContextCard` gained an optional `href` → renders a full-card `<Link>` **overlay** (`.cardOverlay`, `z-index:1`) so the whole card is clickable, while the ⋮ menu and note input are raised above it (`z-index:2`) to stay usable. Passed from the dashboard only for cards with an `id`.
- **Left = `DetailContextCard`** (`components/detail/`): same card anatomy but full (un-clamped) description + **app-icon source pills** (`SourceCitationPill` = `[app icon][source title]`, one truncating row via `.detailPills` flex:1). This is the first place the **Sources → app-icon pills** change landed (dashboard cards still show category pills — see OPEN below).
- **Right = `ContextSubCard` list** (related signals): `[app icon] title` + meta chips (date / assignee / reporter / duration / participants / email-exchange — new `PersonIcon`/`PeopleIcon`/`ExchangeIcon` in `Icons.tsx`) + 3-line-clamped description + **View Details** link, then a **+N more** card. Breadcrumb `All Signals › Project Notes › <title>` (last crumb accent, new `ChevronRight` icon).
- **Data:** new `SourceCitation` / `SubMeta` / `SubCard` / `ContextDetail` types + `contextDetails` record in `sampleData.ts`, keyed by card id.
- **Verified in-browser** @1512: dashboard → click first card → detail → Cancel → back. No console errors. Note: left column is `1fr` (~563px @1512) vs Figma's fixed 860 — responsive tradeoff consistent with the earlier 460-vs-587 decision.

**Connector joint redesign (2026-08-15):** the joints are NOT grey blocks — in Figma (`883:6704`) the connector shapes are **white** (`#ffffff`) rectangles that bridge the gaps and open each card's border in the centre, so adjacent cards read as *linked* through a white throat with the outline flowing continuously. Rebuilt `.connector`/`.connectorBar` and `.subCardFirst::before` as a **white neck** (`--surface-raised`) that overlaps ~1px into both cards (covering the border centre) with grey side/edge walls (`--border-default`) continuing the outline; `z-index:2` so the throat paints above the cards. Replaced the earlier flat grey `--connector` bar.

**Refinement (2026-08-15) — column widths + connector blocks:** the detail two-column body was corrected to the Figma slot component (`883:6704`). (a) **Main card now wider than the sub-cards** — `.columns` grid changed from `1fr / 589px` to the Figma ratio `860fr / 589fr` (gap 32). (b) **Connector blocks** join the cards (Figma Rects 37–40): a horizontal 32×10 block bridges the main card → first sub-card (`.subCardFirst::before`, reaches into the 32px column gap), and vertical 10×24 blocks sit in each gap chaining sub-card→sub-card→+more (`.connector`/`.connectorBar`, interleaved in JSX; `.subCards` gap set to 0 so connectors own the spacing). New `--connector: #d7dae0` token. Note: adding `Fragment` usage before its import produced a *stale* Turbopack console error that survived reloads — cleared with the standard `pkill next dev; rm -rf .next; npm run dev` (server log then shows 0 occurrences; the browser pane's console history keeps the old entry, so trust the server log).

### Body text → 14px, synced code ↔ Figma (2026-08-15)

User standardized **all body text to 14px** across the 1st screen. Compared Figma vs code first: daily-card list items (Recently Updated title/time, Agenda task/time) were `type-body2` (14px) in code but **16px** in Figma (`Body text 1/Regular`); context card description + meta were 16px in Figma, 14px-ish in code. Decision: everything body-level → **14px** (`Body text 2/Regular` = 14/20).
- **Code:** `RecentlyUpdatedRow` + `AgendaRow` title/task and time → `type-body1`→`type-body2`; `ExpandableDescription` (context card desc) → `type-body2`. (Context card meta was already `type-body2`.)
- **Figma sync** (via figma-console Desktop Bridge — must be open; reassigned the **`Body text 2/Regular`** style, did *not* resize tokens): updated the **List item** (`800:3619`) and **Context Card** (`429:6162`) masters, but on-canvas cards had **per-instance style overrides**, so a second pass reassigned every `Body text 1/Regular` node (66) + raw-16px meta inside Context Card instances (87) to `Body text 2/Regular`. Preserved titles (`Heading 2/Bold`), `Source(s)` (`Body text 1/Medium`), and 12px pills. **Gotcha:** editing component masters does NOT propagate to instances that override that text style — must reassign the instances too.

### Context card component re-sync (2026-08-17)

User updated the **Context Card** main component (`429:6161`) and asked to propagate to all context cards. Verified every value against the **figma-console Bridge** (`itemSpacing`/padding are authoritative — the official MCP `get_design_context` returned a stale `gap-16` for the Slot↔Slot2 that the Bridge showed as 12, so trust the Bridge for live values). Synced in `cards.module.css` (shared by dashboard `ContextCard` + `DetailContextCard`; also wrapped title-row + meta-row in a new `.ctxTitleMeta` group in both TSX):
- Card **vertical padding 16 → 12px** (sides 16) — on `.ctxCard` + `.detailCard` only (daily cards keep 16).
- **Heading ↔ metadata** row gap **8px** (`.ctxTitleMeta`).
- **Title ↔ badges** `.ctxHeader` 8 → **12px**.
- **Priority/Status/⋮ group** `.ctxHeaderMeta` 12 → **4px** (most visible change).
- **Source(s) ↔ pills** `.ctxSources` 8 → **12px**. (`.ctxMeta` already 12 ✓.)
- **Title color** heading-1 (`#0a0c10`) → **heading-2 `#2d3539`** (`.ctxTitle`).
Gotcha: verifying via `document.querySelector('[class*="ctxTitle"]')` matches `.ctxTitleMeta` first (substring collision) — target the `h2` element instead.

### Dashboard source pills → app-icon pills (2026-08-17)
Dashboard context cards were still rendering **category pills** (Meeting notes/Project notes) instead of the design's **per-source app-icon pills**. Ported to match Figma (`919:3230` = Operations Insight card): `ContextCardData.sources` type changed `Category[]` → `SourceCitation[]`; `ContextCard` now renders `SourceCitationPill` (was `CitationPill`); `.ctxPills` → single-row truncating (`nowrap` + `flex:1` children) like `.detailPills`. Sample sources: card 1 & 2 from the design/screenshot; **card 3 (Northstar)** confirmed from Figma (Bridge screenshot) = GitHub + **Firebase** (flame) + **Cursor** (dark cube). Exported 3 new source icons from the **Secondary icons** set (`388:1111`) as 18×17 PNGs → `public/icons/`: `firebase.png` (`398:517`), `cursor.png` (`398:513`), `figma.png` (`398:525`); added `firebase`/`cursor` to the `Source` union + `SOURCE_LABEL`, and all three to `SourceIcon` `HAS_PNG` — so **no more "F" monogram fallback**; every pill icon is now a real logo (verified 0 fallbacks). NOTE: exports are 1× (18px) vs the older icons' 2× (36px) — Figma renders these small symbols at natural size; fine at 18px display, slightly soft on retina. Code matches Figma → no pending-sync entry.

**Still OPEN after this pass:**
- ~~Dashboard Context cards render category pills~~ ✅ done 2026-08-17 (app-icon pills) — port the `SourceCitationPill` there too (data + per-card source lists). Figma/flag/fire brand icons still not exported (Figma pill falls back to an "F" monogram).
- Sub-card avatar for "Assignee: You" is a plain person icon (Figma shows a tiny avatar).
- `+N more` and `View Details` are non-functional (prototype).

---

*This document is a living reference — update it in place (`PRD.md`) as phases complete or scope changes, rather than creating parallel copies.*

### Detail-screen interactions wired up — View Details + "+N more" (2026-08-17)

Made the two non-functional prototype controls on the detail screen (`/context/operations-insight-board`) real, client-side:
- **View Details** (per related-signal sub-card) → toggles the 3-line-clamped description open/closed; label flips to **"Hide details"** when open. `ContextSubCard` is now a `"use client"` component with local `expanded` state; new `.subDescOpen` un-clamps the `.subDesc` box. The `<a>` became a `<button>` (native chrome stripped in `.viewDetails`).
- **+N more** → reveals the hidden related-signal cards (with their connector necks) and flips to **"Show less"**. Extracted the right column into a client `SubCardList` (`components/detail/SubCardList.tsx`) that owns the reveal state and the connector interleaving; `INITIAL_VISIBLE = 3`. The `<a>` became a `<button>` (`.moreLink` reset).
- **Data:** added 2 more sub-cards (`s4` GitHub PR #87, `s5` Slack #ops-insight-board) so "+2 more" reveals real content. Removed the now-redundant `moreCount` field from `ContextDetail` (`lib/types.ts`) — the count derives from `subCards.length - INITIAL_VISIBLE`.
- `page.tsx` slimmed: dropped the inline sub-card mapping + `Fragment`/`cards` imports; now just `<SubCardList subCards={detail.subCards} />`.
- **Verified in-browser** @1280: 3 cards → "+2 more" reveals s4/s5 + "Show less"; View Details expands the Sprint Review card fully. `tsc --noEmit` clean, 0 console errors. These are prototype-only interactions (no Figma static-design counterpart) — **no FIGMA-SYNC-PENDING entry needed**.

**Still open (unchanged):** dynamic nav-bar title (needs interactive sidebar), re-export firebase/cursor/figma at 2×, the batch Figma sync, note-divider padding decision.

### Batch Figma sync — code → Figma (2026-08-18)

Pushed the entire `FIGMA-SYNC-PENDING.md` backlog into Figma via the figma-console Desktop Bridge (which was healthy this session — the `execute` timeouts from 2026-08-17 did not recur). All writes screenshot-verified against 1st screen `859:4892` and 2nd screen `883:6663`.

**Applied:**
- **Dashboard spacing:** Content Block `695:3638` 32→16 (was actually 32, not the 24 the notes guessed); Context Card section `695:3886` 24→12; Rows `819:3408`/`829:4423`/`829:4507` 24→16; Context card frame `826:4138` 24→16; Daily Card section `695:3639` 24→16.
- **Context Card component (all 4 states):** Slot (title↔desc) 12→8, Frame 95 (desc↔sources) 12→8, Slot 2 (sources↔pills) 12/11→8, Frame 96 (note divider) paddingTop 12/16→8. State IDs logged in the sync doc.
- **Instances:** swept all **44** Context Card instances across every page — **0 overrides** found, so all inherited the master/state changes automatically (welcome contrast to the body-text sync, which needed 150+ per-instance edits).
- **Nav height 72→62:** Frame 63 `921:4053` is auto-layout HUG, so resize won't take — reduced vertical padding 12/12→7/7 (48px content + 7 + 7 = 62). Confirmed the user wants Figma at 62 (matches code; the earlier "keep 62 as a code divergence" is now resolved by bringing Figma down).
- **Detail footer:** `Frame 67` `visible=false` at master `701:5370` (component `701:4593`) **and** instance `I883:6704;701:5370`.
- **Note-divider decision resolved → 8px** in both code (`.ctxNote` + `.ctxNotes` `padding-top` 12→8, `cards.module.css`) and Figma (above). Normalized the 3 non-default states' note frames from 16 down to 8 for uniformity with code.

**Gotchas this session:**
- Returning a node's `strokeWeight` from `figma_execute` throws `Cannot unwrap symbol` when it's `figma.mixed` (per-side weights) — coerce symbols to strings before returning. The write half of that script had already run, so re-read to confirm rather than blindly re-applying.
- `633:2990` is named "Frame 95" but is a saved-note row (text + timestamp), **not** the desc↔sources frame — excluded from the 12→8 sweep (its `.noteRow` code gap is 16).

**FIGMA-SYNC-PENDING.md is now empty** — code and Figma are in sync. Remaining open items (unchanged): dynamic nav-bar title (needs interactive sidebar), re-export firebase/cursor/figma at 2×.

### Interactive tabs, per-tab detail screens & UI polish (2026-08-19)

A large day of CODE work (no Figma writes) making the preview demo-ready — no dead ends — ahead of a GitHub/portfolio wrap-up. Built partly by executing the new project skills (`fill-tab-cards-code`, `navbar-tab-state`, `create-detail-screen` — see `.claude/skills/`).

**Interactive tabs + per-tab content.** The sidebar tabs are now real: `HomeApp` holds `tab` state, `Sidebar` gained `activeTab`/`onSelect`, and each category renders its own view (`CategoryView`). Each tab is populated with **6 context cards** (2×3) of realistic, tab-themed content in `tabCards` (`lib/sampleData.ts`) — a deliberate representative sample, not full population.

**Tab-aware Category filter.** `FilterBar` takes a `categoryValue`; on a category tab it shows e.g. "Category: Meeting notes" instead of "All" (`components/filters/FilterBar.tsx`).

**Per-tab detail screens** (via `create-detail-screen` skill). The **first card of each tab** now has a stable `id` + links to `/context/[id]`. Added 5 `contextDetails` entries built by a DRY `detailFromFirstCard(category, subCards)` helper that derives the main card / breadcrumb / pills from the tab's first card; each has **exactly 3 sub-cards** (the "+N more" reveal is static/not needed here, so no hidden cards). The original `operations-insight-board` keeps its 5 sub-cards + working "+2 more".

**Layout fixes (all verified with a temp x=296 reference line):**
- Context cards were inset 4px from the heading — `.contextGrid { margin-left: -4px }` (cancels the row's shadow-room padding).
- Category filter text was inset 8px — `.bar { margin-left: -8px }` (cancels the first filter button's padding).
- Category tabs showed both card rows fully — new `.contextGridFull` modifier (`max-height:none; overflow-y:visible`) applied only in `CategoryView`, leaving the dashboard's peek-and-scroll intact.
- Cards in a row now equal height — `.contextCell { display:flex }` + child `flex:1`, and `.ctxNote { margin-top:auto }` pins the "Write a Note" footer to the bottom so footers align (no-op on the detail card's non-flex `.detailNote` wrapper).

**Navbar interactivity on the detail screen.** The detail page rendered `<Sidebar />` with no handlers → dead tabs + wrong "All Signals" highlight. Fixed: `Sidebar` gained a `linkMode` (tabs render as `<Link>` to `/?tab=<key>`); the detail page passes `linkMode` + the card's own tab (derived from id prefix); `app/page.tsx` reads `?tab` server-side and opens the dashboard on that tab (`HomeApp` gained `initialTab`).

**Breadcrumb → tab name.** The detail back-crumb now shows the card's tab (e.g. "Meeting notes" → `/?tab=meeting-notes`) instead of "All Signals" → `/` (dashboard card still "All Signals"). Added `backHref` to `ContextDetail`.

**⚠️ Recurring client-boundary bug (hit twice, now fixed).** `TabKey`/`TAB_LABELS`/`tabHref` originally lived in the `"use client"` `Sidebar` — importing those **values** into a server component silently fails across the boundary (`tab in TAB_LABELS` returned `false`; the whole `?tab` feature defaulted to All Signals). **Fix + rule:** tab labels/keys/hrefs now live in the server-safe `lib/types.ts` (`TabKey`, `TAB_LABELS`, `TAB_KEYS`, `tabHref`); server components must import shared values from a plain module, never from a `"use client"` one.

**UI polish (2026-08-19, latest):**
- **Removed the TopBar title** ("All Signals") on every screen — redundant now that each tab has its own heading; the **search bar shifts flush-left** to where the title was (aligns at x=296 with the page content). `TopBar` no longer takes a `title` prop; `.topTitle` CSS removed.
- **Daily cards (Recently Updated / Agenda) now hover** — same accent-border + layered-shadow treatment as the context cards (`.dailyCard` class + added to the hover rule). Note: strong shadow; can soften if desired.
- **Navbar tab labels → font-weight 500 (medium)**, were 400 (regular) (`.navItem`).

**Gotchas this session:** the Turbopack dev cache went stale repeatedly after edits (phantom `NOTES is not defined`, stale `tabHref` duplicate, stale HMR CSS) — cleared each time with `pkill -f "next dev"; rm -rf .next; npm run dev`; trust `tsc --noEmit` + a fresh tab over the browser's accumulated console. Running `npm run build` while `next dev` is live **corrupts** the shared `.next` — don't. The automated browser pane can't fire real `:hover` — verify hover styles via the forced `data-hover="true"` state (same CSS rule).

**Still open:** priority↔status 8px gap not yet pushed to Figma (parked); optionally soften the daily-card hover; GitHub wrap-up (README + deploy check + repo hygiene).
