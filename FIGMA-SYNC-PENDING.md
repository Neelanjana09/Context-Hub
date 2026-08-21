# Figma Sync — Pending Batch

Running log of **code changes that are NOT yet reflected in the Figma file**. When we do the batch Figma update, apply each of these to the listed node(s) so the Figma → code sync doesn't revert them. Check items off as they land in Figma.

Fingerprint: fileKey `PXC8h6CVxIdW0K38IHcxAZ`. Context Card component master: `429:6161` (State=Default) in set `429:6162`. Update all 4 states (Default `429:6161`, Three-dot `633:3733`, Hover `633:3048`, Note-added `633:2941`) + on-canvas instances, since instances can override.

---

## ✅ BATCH SYNCED — 2026-08-18 (Desktop Bridge, all items applied & screenshot-verified)

Everything below (Session 2026-08-17 batch + the note-divider decision) was pushed to Figma on 2026-08-18. `execute` was healthy this session (no timeouts). **44 Context Card instances all inherited the master/state changes cleanly — 0 per-instance overrides needed** (contrast with the body-text sync, where instances overrode). Verified against 1st screen `859:4892` + 2nd screen `883:6663`.

Discoveries during the sync (values differed from the notes below):
- Content Block `695:3638` was actually **32** (not 24) → set 16.
- Slot 2 read **11** (not 12) in the Three-dot / Hover / Note-added states → all set to 8.
- Note frame (Frame 96) paddingTop was **16** in the 3 non-default states (12 only in Default) → normalized all four to **8**.
- Excluded `633:2990` — it's named "Frame 95" but is a **saved-note row** (text + timestamp), not the desc↔sources frame; its code counterpart `.noteRow` is 16px, so left untouched.
- Nav height done via **padding 12/12 → 7/7** on Frame 63 `921:4053` (it's auto-layout HUG, so can't resize directly; 48px content + 7 + 7 = 62). Frame 69 `921:4052` now reports 62.
- Detail footer hidden at **both** the master (`701:5370`, inside component `701:4593`) and the instance (`I883:6704;701:5370`).

---

## Session 2026-08-17 → SYNCED 2026-08-18

### Context Card — vertical spacing tightened 12 → 8px
Code: `.ctxCard` / `.detailCard` main gap = 8; `.ctxSources` gap = 8 (`components/cards/cards.module.css`, `components/detail/detail.module.css`).

- [x] **Title-group ↔ description** → **8px** — `Slot` itemSpacing 12→8 (Default `413:5541`, Three-dot `633:3735`, Hover `633:3050`, Note-added `633:2943`)
- [x] **Description ↔ Source(s)** → **8px** — `Frame 95` itemSpacing 12→8 (`413:5543`, `633:3734`, `633:3049`, `633:2942`)
- [x] **Source(s) label ↔ citation pills** → **8px** — `Slot 2` itemSpacing 12/11→8 (`413:5542`, `633:3758`, `633:3073`, `633:2966`)
- (Title-row ↔ meta-row `679:1573` already 8px — no change.)
- [x] **RESOLVED — note-divider padding → 8px** (was the open decision). Code: `.ctxNote` + `.ctxNotes` `padding-top` 12→8. Figma: note frame `Frame 96` paddingTop 12/16→8 (`413:5546`, `633:3761`, `633:3076`, `633:2969`).

### Dashboard — spacing
Code in `app/preview.module.css` (negative-margin nudges).

- [x] **Daily Card section ↔ Context Card section** → **16px** — Content Block `695:3638` itemSpacing 32→16.
- [x] **Categories/filter row ↔ context cards** → **12px** — Context Card section `695:3886` itemSpacing 24→12.
- [x] **Gap between context cards in a row** → **16px** — Rows `819:3408` / `829:4423` / `829:4507` itemSpacing 24→16.
- [x] **Gap between context card rows** → **16px** — Context card frame `826:4138` itemSpacing 24→16.
- [x] **Recently Updated ↔ Agenda** → **16px** — Daily Card section `695:3639` itemSpacing 24→16.

### Top nav bar — height 72 → 62
- [x] **Nav bar height** → **62px** — Frame 63 `921:4053` vertical padding 12/12 → 7/7 (HUG auto-layout; 48 + 7 + 7 = 62). Frame 69 `921:4052` now 62.

### Detail screen (2nd screen `883:6663`) — Cancel/Save footer removed
- [x] **Hide the Cancel/Save bar** — `Frame 67` set `visible = false` at master `701:5370` **and** instance `I883:6704;701:5370`.
- [ ] *(Optional, not done)* "All Signals" breadcrumb prototype back-link in Figma — code already links to `/`; skipped in Figma (prototype-only, no visual sync needed).

---

## Already in sync (no Figma action needed — logged for reference)
These were synced *from* the updated component earlier, so Figma already matches code:
- Card padding 12/16, badge group (priority/status/⋮) gap 4px, title↔badges 12px, meta-row 12px, heading↔metadata 8px, title color `#2d3539`.
- Body text 14px across cards; meta-row gap 12px; "Project Notes" breadcrumb removed (done in code **and** Figma).

---

## Currently pending → Figma: (none)
The detail-screen **View Details / +2 more** interactions wired up on 2026-08-18 are prototype-only (client-side toggles) with no static-design counterpart — no Figma sync needed.
