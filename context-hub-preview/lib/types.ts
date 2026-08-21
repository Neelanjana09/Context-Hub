export type Priority = "high" | "medium" | "low";

export type Status = "ongoing" | "paused" | "archived" | "default";

export type Category =
  | "meeting-notes"
  | "project-notes"
  | "product-release"
  | "company-news"
  | "engineering-release";

export type Source =
  | "gmail"
  | "jira"
  | "gmeet"
  | "slack"
  | "github"
  | "notion"
  | "figma"
  | "firebase"
  | "cursor";

export const PRIORITY_LABEL: Record<Priority, string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
};

export const STATUS_LABEL: Record<Status, string> = {
  ongoing: "Ongoing",
  paused: "Paused",
  archived: "Archived",
  default: "Default",
};

export const CATEGORY_LABEL: Record<Category, string> = {
  "meeting-notes": "Meeting notes",
  "project-notes": "Project notes",
  "product-release": "Product Release",
  "company-news": "Company news",
  "engineering-release": "Eng Release",
};

/* Sidebar tabs = All Signals + the categories. Defined here (a plain,
   server-safe module) so BOTH server components and client components can read
   them — importing these from a "use client" module fails across the boundary. */
export type TabKey = "all-signals" | Category;

export const TAB_LABELS: Record<TabKey, string> = {
  "all-signals": "All Signals",
  "meeting-notes": "Meeting notes",
  "project-notes": "Project notes",
  "product-release": "Product release",
  "engineering-release": "Engineering release",
  "company-news": "Company news",
};

export const TAB_KEYS: TabKey[] = Object.keys(TAB_LABELS) as TabKey[];

export const tabHref = (key: TabKey): string =>
  key === "all-signals" ? "/" : `/?tab=${key}`;

export const SOURCE_LABEL: Record<Source, string> = {
  gmail: "Gmail",
  jira: "Jira",
  gmeet: "Google Meet",
  slack: "Slack",
  github: "GitHub",
  notion: "Notion",
  figma: "Figma",
  firebase: "Firebase",
  cursor: "Cursor",
};

export interface RecentlyUpdatedItem {
  id: string;
  source: Source;
  title: string;
  category: Category;
  time: string;
}

export type AgendaRowState = "normal" | "hover" | "strikethrough";

export interface AgendaItem {
  id: string;
  task: string;
  time: string;
  state?: AgendaRowState;
}

export type ContextCardState = "default" | "note-added" | "menu-open" | "hover";

export interface ContextCardData {
  id?: string;
  title: string;
  priority: Priority;
  status: Status;
  meta: { time: string; date: string; team: string; extra?: number };
  description: string;
  sources: SourceCitation[]; // per-source app-icon pills (Figma design)
  note?: string;
  state?: ContextCardState;
}

/* ---- Detail screen (2nd screen) ---- */

/* A cited source rendered as an app-icon pill on the detail card. */
export interface SourceCitation {
  source: Source;
  title: string;
}

export type SubMetaIcon = "date" | "clock" | "person" | "people" | "exchange";

export interface SubMeta {
  icon: SubMetaIcon;
  text: string;
}

/* A related-signal card in the detail screen's right column. */
export interface SubCard {
  id: string;
  source: Source;
  title: string;
  metas: SubMeta[];
  description: string;
}

export interface ContextDetail {
  card: ContextCardData;
  breadcrumb: string[];
  /* Href for the breadcrumb back-link — the tab this card belongs to. */
  backHref: string;
  pills: SourceCitation[];
  /* Full related-signal list; the first few show, the rest reveal via "+N more". */
  subCards: SubCard[];
}
