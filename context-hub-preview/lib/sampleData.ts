import type {
  AgendaItem,
  Category,
  ContextCardData,
  ContextDetail,
  RecentlyUpdatedItem,
  SubCard,
} from "./types";
import { TAB_LABELS, tabHref } from "./types";

export const recentlyUpdatedSample: RecentlyUpdatedItem[] = [
  { id: "r1", source: "gmail", title: "Approve updated workflow for Operations Insight Board by EOD", category: "meeting-notes", time: "12:30 pm" },
  { id: "r2", source: "jira", title: "JIRA-2143 · Align contract renewal workflow for Q3 in Ops Insight Board", category: "project-notes", time: "12 pm" },
  { id: "r3", source: "gmeet", title: "Sprint Review – Operations Insight Board: Achievements, challenges", category: "project-notes", time: "11:30 am" },
  { id: "r4", source: "slack", title: "#ops-insight-board – Stakeholder feedback on latest dashboard iteration", category: "engineering-release", time: "11 am" },
  { id: "r5", source: "notion", title: "AI coding session · Refactor alert handlers for SLA breach detection", category: "project-notes", time: "10:30 am" },
  { id: "r6", source: "github", title: "PR #87 · Refactor SLA breach alert handlers for Operations Insight Board", category: "engineering-release", time: "10 am" },
  { id: "r7", source: "notion", title: "Project doc · Operations Insight Board – 4D Matrix Web App roadmap", category: "project-notes", time: "9:30 am" },
];

export const agendaSample: AgendaItem[] = [
  { id: "a1", task: "Review current sprint objectives, design goals, and key UX metrics.", time: "10 am" },
  { id: "a2", task: "Walk through recent design updates, open usability questions, and open feedback threads.", time: "11:30 am" },
  { id: "a3", task: "Sync on Jira tickets tied to design work: in-progress, blockers, and dependencies.", time: "2:30 pm" },
  { id: "a4", task: "Confirm design decisions made in the last review and any follow-up experiments.", time: "4 pm" },
  { id: "a5", task: "Align on upcoming design milestones, handoff dates, and stakeholder reviews.", time: "5:30 pm" },
  { id: "a6", task: "Plan the next 24 hours of design, research, and collaboration across PM and eng.", time: "6 pm" },
  { id: "a7", task: "Review current sprint objectives, design goals, and key UX metrics.", time: "6:30 pm" },
];

export const contextCardSample: ContextCardData = {
  id: "operations-insight-board",
  title: "Operations Insight Board - 4D Matrix Web App",
  priority: "medium",
  status: "ongoing",
  meta: { time: "10:30 am", date: "25/6/2026", team: "Teams", extra: 1 },
  description:
    "Project is on track: emails confirm scope and timelines are aligned, Jira shows new work in progress with no critical blockers, Figma comments note only minor UX tweaks, and the last meeting confirmed we're set for this sprint's milestones.",
  sources: [
    { source: "gmail", title: "Review feedback: Operations Insight Board" },
    { source: "gmeet", title: "Stakeholder review: Operations Insight Board" },
    { source: "jira", title: "JIRA-2143 · Workflow alignment" },
    { source: "figma", title: "4D Matrix Web App | Dashboard" },
  ],
  note: "Follow up with PM on the contract renewal timeline before Friday.",
  state: "default",
};

export const contextCardsSample: ContextCardData[] = [
  contextCardSample,
  {
    title: "Cross-Team Product Ops Hub",
    priority: "high",
    status: "ongoing",
    meta: { time: "10:30 am", date: "25/6/2026", team: "Teams", extra: 2 },
    description:
      "Updates to Signalboard – Cross-Team Product Ops Hub, focused on what's user-facing: a new Release Timeline view, in-product links to Figma design specs, and a single weekly digest replacing noisy change notifications.",
    sources: [
      { source: "jira", title: "JIRA-5842 · Signalboard | Release Timeline view" },
      { source: "figma", title: "Signalboard | Release surfaces v1.4" },
      { source: "gmail", title: "JIRA-2143 · Workflow alignment" },
      { source: "gmeet", title: "Design review – Signalboard v1.4" },
    ],
    state: "default",
  },
  {
    title: "Northstar-console Description · PR-5914",
    priority: "high",
    status: "ongoing",
    meta: { time: "10:30 am", date: "25/6/2026", team: "Teams" },
    description:
      "Merged the workflow sync and dashboard refresh, improving the UX by making status updates clearer and reducing the manual steps needed to review progress.",
    sources: [
      { source: "github", title: "PR-5914 · Workflow sync" },
      { source: "firebase", title: "northstar-console" },
      { source: "cursor", title: "Engineering release" },
    ],
    state: "default",
  },
];

/* ---- Per-tab context cards (sidebar categories) ----
   Six cards per tab — a representative sample, not a full population. */
export const tabCards: Record<Category, ContextCardData[]> = {
  "meeting-notes": [
    {
      id: "meeting-notes-q3-roadmap",
      title: "Q3 Roadmap Planning — Operations Insight Board",
      priority: "high",
      status: "ongoing",
      meta: { time: "9:30 am", date: "24/6/2026", team: "Teams", extra: 3 },
      description:
        "Aligned on the Q3 priorities for the Insight Board: contract-renewal workflow first, SLA alerting second. Owners assigned and target dates set; a follow-up doc captures the sequencing and open risks.",
      sources: [
        { source: "gmeet", title: "Q3 roadmap sync — recording" },
        { source: "notion", title: "Q3 planning doc · Insight Board" },
        { source: "jira", title: "JIRA-2143 · Workflow alignment" },
      ],
      state: "default",
    },
    {
      title: "Design Critique — Signalboard v1.4",
      priority: "medium",
      status: "ongoing",
      meta: { time: "11:00 am", date: "24/6/2026", team: "Teams", extra: 2 },
      description:
        "Walked the team through the Release Timeline view and the new digest surface. Consensus to tighten the empty states and reduce the pill density; revised frames to follow before the next review.",
      sources: [
        { source: "gmeet", title: "Design critique — Signalboard v1.4" },
        { source: "figma", title: "Signalboard | Release surfaces v1.4" },
        { source: "slack", title: "#design-crit — follow-up thread" },
      ],
      state: "default",
    },
    {
      title: "Weekly Eng ↔ Design Sync",
      priority: "low",
      status: "ongoing",
      meta: { time: "2:30 pm", date: "23/6/2026", team: "Teams", extra: 4 },
      description:
        "Reviewed in-flight tickets and handoff readiness. Two components are blocked on token updates; agreed to pair on them Thursday so the sprint doesn't slip.",
      sources: [
        { source: "gmeet", title: "Eng ↔ Design weekly — recording" },
        { source: "jira", title: "JIRA-2210 · Token update blockers" },
        { source: "notion", title: "Handoff checklist · Sprint 14" },
      ],
      state: "default",
    },
    {
      title: "Stakeholder Review — Contract Renewal Workflow",
      priority: "high",
      status: "paused",
      meta: { time: "4:00 pm", date: "23/6/2026", team: "Teams", extra: 5 },
      description:
        "Presented the renewal flow to stakeholders. Approval paused pending legal sign-off on the risk-flag copy; parking the build until the wording is confirmed early next week.",
      sources: [
        { source: "gmeet", title: "Stakeholder review — renewal workflow" },
        { source: "gmail", title: "Legal review: risk-flag copy" },
        { source: "jira", title: "JIRA-2143 · Renewal workflow" },
      ],
      state: "default",
    },
    {
      title: "User Research Readout — Onboarding Friction",
      priority: "medium",
      status: "ongoing",
      meta: { time: "10:00 am", date: "22/6/2026", team: "Teams", extra: 6 },
      description:
        "Shared findings from five onboarding sessions: users miss the source-linking step and under-use filters. Prioritised two quick wins and one larger flow change for the next cycle.",
      sources: [
        { source: "gmeet", title: "Research readout — onboarding" },
        { source: "notion", title: "Onboarding study · findings" },
        { source: "figma", title: "Onboarding flow · v2 explorations" },
      ],
      state: "default",
    },
    {
      title: "Sprint Retro — What Slowed Us Down",
      priority: "low",
      status: "archived",
      meta: { time: "5:30 pm", date: "21/6/2026", team: "Teams", extra: 4 },
      description:
        "Retro on Sprint 13: unclear acceptance criteria and late design handoffs were the main drags. Action items logged; archiving the notes now that the follow-ups are ticketed.",
      sources: [
        { source: "gmeet", title: "Sprint 13 retro — recording" },
        { source: "slack", title: "#team-retro — action items" },
        { source: "jira", title: "JIRA-2231 · Retro follow-ups" },
      ],
      state: "default",
    },
  ],
  "project-notes": [
    {
      id: "project-notes-data-model-refactor",
      title: "Insight Board — Data Model Refactor",
      priority: "high",
      status: "ongoing",
      meta: { time: "9:00 am", date: "24/6/2026", team: "Teams", extra: 3 },
      description:
        "Reworking the entity model so signals, sources, and owners are first-class. Migration plan drafted; the tricky part is back-filling historical citations without downtime.",
      sources: [
        { source: "notion", title: "Project doc · Data model refactor" },
        { source: "jira", title: "JIRA-2260 · Entity model v2" },
        { source: "github", title: "PR #101 · Schema scaffolding" },
      ],
      state: "default",
    },
    {
      title: "Signalboard — Release Timeline v1.4",
      priority: "medium",
      status: "ongoing",
      meta: { time: "1:00 pm", date: "23/6/2026", team: "Teams", extra: 2 },
      description:
        "Timeline view is in build with the digest surface behind it. Tracking two open questions on grouping and empty states before we call the milestone done.",
      sources: [
        { source: "figma", title: "Signalboard | Release surfaces v1.4" },
        { source: "jira", title: "JIRA-5842 · Release Timeline view" },
        { source: "notion", title: "Signalboard · scope & status" },
      ],
      state: "default",
    },
    {
      title: "Onboarding Revamp — Phase 2",
      priority: "medium",
      status: "ongoing",
      meta: { time: "3:30 pm", date: "22/6/2026", team: "Teams", extra: 4 },
      description:
        "Phase 2 focuses on the source-linking step users kept missing. New flow is prototyped and in front of research; build starts once the copy is locked.",
      sources: [
        { source: "figma", title: "Onboarding flow · v2" },
        { source: "notion", title: "Onboarding revamp · plan" },
        { source: "slack", title: "#proj-onboarding — decisions" },
      ],
      state: "default",
    },
    {
      title: "Alerting Service — SLA Breach Detection",
      priority: "high",
      status: "paused",
      meta: { time: "11:30 am", date: "22/6/2026", team: "Teams", extra: 5 },
      description:
        "Detection logic is ready but paused pending the data-model refactor it depends on. Resuming once the entity migration lands so thresholds map to the new owners.",
      sources: [
        { source: "jira", title: "JIRA-2231 · SLA breach detection" },
        { source: "github", title: "PR #87 · Alert handlers" },
        { source: "notion", title: "Alerting · design notes" },
      ],
      state: "default",
    },
    {
      title: "Design System — Token Migration",
      priority: "low",
      status: "ongoing",
      meta: { time: "10:15 am", date: "21/6/2026", team: "Teams", extra: 6 },
      description:
        "Migrating components to the new spacing and color tokens. About two-thirds done; the card and nav families are reconciled, releases surfaces are next.",
      sources: [
        { source: "figma", title: "Design system · tokens v2" },
        { source: "github", title: "PR #96 · Token migration" },
        { source: "notion", title: "Token migration · tracker" },
      ],
      state: "default",
    },
    {
      title: "Analytics Dashboard — Q2 Wrap-up",
      priority: "low",
      status: "archived",
      meta: { time: "5:00 pm", date: "20/6/2026", team: "Teams", extra: 2 },
      description:
        "Shipped the Q2 analytics dashboard and closed out the project. Archiving the notes; any follow-ups now live as standalone tickets in the backlog.",
      sources: [
        { source: "notion", title: "Analytics dashboard · retro" },
        { source: "jira", title: "JIRA-2118 · Q2 analytics" },
        { source: "slack", title: "#proj-analytics — wrap-up" },
      ],
      state: "default",
    },
  ],
  "product-release": [
    {
      id: "product-release-timeline-ga",
      title: "Release Timeline View — General Availability",
      priority: "high",
      status: "ongoing",
      meta: { time: "9:00 am", date: "24/6/2026", team: "Teams", extra: 4 },
      description:
        "The Release Timeline view is now GA for all workspaces. Teams can see upcoming releases, owners, and risk flags in one scrollable lane.",
      sources: [
        { source: "notion", title: "Release notes · Timeline GA" },
        { source: "figma", title: "Release Timeline · final" },
        { source: "jira", title: "JIRA-5842 · Timeline GA" },
      ],
      state: "default",
    },
    {
      title: "Weekly Digest — Replacing Change Noise",
      priority: "medium",
      status: "ongoing",
      meta: { time: "11:00 am", date: "23/6/2026", team: "Teams", extra: 3 },
      description:
        "A single weekly digest now replaces the stream of change notifications. Early feedback is strongly positive on the drop in noise.",
      sources: [
        { source: "notion", title: "Release notes · Weekly digest" },
        { source: "figma", title: "Digest surface v1" },
        { source: "gmail", title: "Beta feedback: weekly digest" },
      ],
      state: "default",
    },
    {
      title: "In-Product Figma Links — v1",
      priority: "medium",
      status: "ongoing",
      meta: { time: "2:00 pm", date: "22/6/2026", team: "Teams", extra: 2 },
      description:
        "Cards can now deep-link to the exact Figma frame a signal references. Rolled out to design teams first, with broader access next cycle.",
      sources: [
        { source: "figma", title: "Figma link handoff spec" },
        { source: "jira", title: "JIRA-5901 · In-product links" },
        { source: "slack", title: "#launch-figma-links" },
      ],
      state: "default",
    },
    {
      title: "Saved Filters & Views",
      priority: "low",
      status: "ongoing",
      meta: { time: "10:30 am", date: "21/6/2026", team: "Teams", extra: 5 },
      description:
        "Users can save filter combinations as named views and switch between them. Shipped behind a flag; enabling for everyone after a week of monitoring.",
      sources: [
        { source: "notion", title: "Release notes · Saved views" },
        { source: "figma", title: "Saved views · UI" },
        { source: "jira", title: "JIRA-5877 · Saved filters" },
      ],
      state: "default",
    },
    {
      title: "Renewal Workflow — Beta",
      priority: "high",
      status: "paused",
      meta: { time: "4:30 pm", date: "20/6/2026", team: "Teams", extra: 6 },
      description:
        "The contract-renewal workflow beta is paused for legal sign-off on the risk-flag copy. Re-opening the beta once the wording is approved.",
      sources: [
        { source: "jira", title: "JIRA-2143 · Renewal workflow" },
        { source: "gmail", title: "Legal review: risk-flag copy" },
        { source: "notion", title: "Renewal workflow · beta plan" },
      ],
      state: "default",
    },
    {
      title: "Mobile Read-Only Preview",
      priority: "low",
      status: "archived",
      meta: { time: "1:30 pm", date: "19/6/2026", team: "Teams", extra: 2 },
      description:
        "Shipped a read-only mobile preview so people can scan signals on the go. Scope was intentionally small; archiving now that it's live and stable.",
      sources: [
        { source: "figma", title: "Mobile preview · frames" },
        { source: "notion", title: "Release notes · Mobile preview" },
        { source: "slack", title: "#launch-mobile-preview" },
      ],
      state: "default",
    },
  ],
  "engineering-release": [
    {
      id: "engineering-release-pr87-sla",
      title: "PR #87 — SLA Breach Alert Handlers",
      priority: "high",
      status: "ongoing",
      meta: { time: "9:15 am", date: "24/6/2026", team: "Teams", extra: 3 },
      description:
        "Refactored the SLA breach alert handlers so notifications fire on the right thresholds and route to the correct owners. In review, deploy targeted for this week.",
      sources: [
        { source: "github", title: "PR #87 · SLA alert handlers" },
        { source: "jira", title: "JIRA-2231 · Breach detection" },
        { source: "cursor", title: "AI session · handler refactor" },
      ],
      state: "default",
    },
    {
      title: "Workflow Sync — Northstar Console",
      priority: "high",
      status: "ongoing",
      meta: { time: "12:00 pm", date: "23/6/2026", team: "Teams", extra: 2 },
      description:
        "Merged the workflow sync and dashboard refresh, cutting the manual steps to review progress. Monitoring error rates in Firebase before wider rollout.",
      sources: [
        { source: "github", title: "PR-5914 · Workflow sync" },
        { source: "firebase", title: "northstar-console · metrics" },
        { source: "cursor", title: "AI session · sync module" },
      ],
      state: "default",
    },
    {
      title: "Auth Service — Token Rotation",
      priority: "medium",
      status: "ongoing",
      meta: { time: "2:45 pm", date: "22/6/2026", team: "Teams", extra: 4 },
      description:
        "Added automatic token rotation to the auth service to close a long-standing security gap. Rolling out region by region with a fallback in place.",
      sources: [
        { source: "github", title: "PR #112 · Token rotation" },
        { source: "jira", title: "JIRA-2288 · Auth hardening" },
        { source: "firebase", title: "auth-service · logs" },
      ],
      state: "default",
    },
    {
      title: "CI Pipeline — Build Time −40%",
      priority: "low",
      status: "ongoing",
      meta: { time: "10:45 am", date: "21/6/2026", team: "Teams", extra: 5 },
      description:
        "Reworked caching and parallelised test shards, cutting CI build time by about 40%. Fewer flaky reruns too; watching the numbers over the next week.",
      sources: [
        { source: "github", title: "PR #108 · CI caching" },
        { source: "slack", title: "#eng-infra — build times" },
        { source: "jira", title: "JIRA-2271 · CI speedup" },
      ],
      state: "default",
    },
    {
      title: "DB Migration — Renewals Schema",
      priority: "high",
      status: "paused",
      meta: { time: "4:15 pm", date: "20/6/2026", team: "Teams", extra: 6 },
      description:
        "Schema migration for the renewals data is staged but paused until the data-model refactor is confirmed. Holding to avoid a second migration.",
      sources: [
        { source: "github", title: "PR #99 · Renewals schema" },
        { source: "jira", title: "JIRA-2260 · Entity model v2" },
        { source: "firebase", title: "renewals-db · staging" },
      ],
      state: "default",
    },
    {
      title: "Legacy API — Deprecation v2",
      priority: "low",
      status: "archived",
      meta: { time: "1:00 pm", date: "19/6/2026", team: "Teams", extra: 2 },
      description:
        "Completed the v2 deprecation of the legacy API and removed the shim. Archiving now that all clients are migrated and traffic is at zero.",
      sources: [
        { source: "github", title: "PR #90 · Remove legacy shim" },
        { source: "notion", title: "Legacy API · deprecation plan" },
        { source: "jira", title: "JIRA-2135 · API v2 cutover" },
      ],
      state: "default",
    },
  ],
  "company-news": [
    {
      id: "company-news-q3-all-hands",
      title: "Q3 All-Hands — Strategy & Priorities",
      priority: "high",
      status: "ongoing",
      meta: { time: "10:00 am", date: "24/6/2026", team: "Teams", extra: 4 },
      description:
        "Leadership shared the Q3 strategy and the three company priorities. Recording and slides posted; team-level planning kicks off this week.",
      sources: [
        { source: "gmeet", title: "Q3 All-Hands — recording" },
        { source: "gmail", title: "Q3 priorities — summary" },
        { source: "notion", title: "Q3 strategy · deck" },
      ],
      state: "default",
    },
    {
      title: "New Head of Design Announced",
      priority: "medium",
      status: "ongoing",
      meta: { time: "9:30 am", date: "23/6/2026", team: "Teams", extra: 2 },
      description:
        "Welcomed the new Head of Design, joining from a peer product org. Intro sessions with each squad are being scheduled over the next two weeks.",
      sources: [
        { source: "gmail", title: "Welcoming our new Head of Design" },
        { source: "slack", title: "#announcements — leadership" },
        { source: "notion", title: "Design org · structure" },
      ],
      state: "default",
    },
    {
      title: "Series B Funding Close",
      priority: "high",
      status: "ongoing",
      meta: { time: "8:45 am", date: "22/6/2026", team: "Teams", extra: 5 },
      description:
        "Closed the Series B to accelerate the roadmap and grow the team. Hiring plans and the investment areas will be detailed at the next all-hands.",
      sources: [
        { source: "gmail", title: "We've closed our Series B" },
        { source: "notion", title: "Series B · FAQ" },
        { source: "slack", title: "#announcements — funding" },
      ],
      state: "default",
    },
    {
      title: "Office Reopening — Hybrid Policy",
      priority: "low",
      status: "ongoing",
      meta: { time: "11:15 am", date: "21/6/2026", team: "Teams", extra: 3 },
      description:
        "The office reopens next month under a hybrid policy of three flexible days. Details on desks and team days are in the handbook update.",
      sources: [
        { source: "gmail", title: "Office reopening — what to expect" },
        { source: "slack", title: "#announcements — workplace" },
      ],
      state: "default",
    },
    {
      title: "Customer Milestone — 1,000 Teams",
      priority: "medium",
      status: "archived",
      meta: { time: "3:00 pm", date: "20/6/2026", team: "Teams", extra: 4 },
      description:
        "Crossed 1,000 teams on the platform. Celebrated internally and archived the milestone note; the customer story is moving to marketing.",
      sources: [
        { source: "slack", title: "#wins — 1,000 teams" },
        { source: "notion", title: "Milestone · 1,000 teams" },
        { source: "gmail", title: "Thank you — 1,000 teams" },
      ],
      state: "default",
    },
    {
      title: "Annual Design Week — Save the Date",
      priority: "low",
      status: "ongoing",
      meta: { time: "2:15 pm", date: "19/6/2026", team: "Teams", extra: 6 },
      description:
        "Design Week returns next month with talks, critiques, and a cross-team jam. Save the date; the schedule and sign-ups open next week.",
      sources: [
        { source: "gmail", title: "Save the date: Design Week" },
        { source: "gmeet", title: "Design Week · kickoff" },
        { source: "slack", title: "#design-week" },
      ],
      state: "default",
    },
  ],
};

/* Build a detail entry from a tab's first card so the main card / breadcrumb /
   pills aren't duplicated — only the related sub-cards are unique per screen. */
function detailFromFirstCard(category: Category, subCards: SubCard[]): ContextDetail {
  const card = tabCards[category][0];
  return {
    card,
    breadcrumb: [TAB_LABELS[category], card.title],
    backHref: tabHref(category),
    pills: card.sources,
    subCards,
  };
}

/* ---- Detail screen (2nd screen) data, keyed by card id ---- */
export const contextDetails: Record<string, ContextDetail> = {
  "operations-insight-board": {
    card: contextCardSample,
    breadcrumb: ["All Signals", contextCardSample.title],
    backHref: "/",
    pills: [
      { source: "gmail", title: "Review feedback: Operations Insight Board" },
      { source: "gmeet", title: "Stakeholder review: Operations Insight Board" },
      { source: "jira", title: "JIRA-2143 · Workflow alignment" },
      { source: "figma", title: "4D Matrix Web App | Dashboard" },
    ],
    subCards: [
      {
        id: "s1",
        source: "jira",
        title: "JIRA-2143 · Align contract renewal workflow for Q3 in Ops Insight Board",
        metas: [
          { icon: "date", text: "25/6/2026" },
          { icon: "person", text: "Assignee: You" },
          { icon: "person", text: "Reporter: Babak Shamman" },
        ],
        description:
          "Standardise the Q3 contract renewal flow inside Operations Insight Board so managers can see upcoming renewals, approval status, and risk flags in one place.",
      },
      {
        id: "s2",
        source: "gmeet",
        title: "Sprint Review – Operations Insight Board: Achievements, challenges",
        metas: [
          { icon: "date", text: "25/6/2026" },
          { icon: "clock", text: "1 hr 10 mins" },
          { icon: "people", text: "Participants : 4" },
        ],
        description:
          "A sprint review to walk through what the team delivered in Operations Insight Board, discuss the main challenges encountered, and agree on the next steps. It gives stakeholders a quick view of progress, open issues, and what's next.",
      },
      {
        id: "s3",
        source: "gmail",
        title: "Approve updated workflow for Operations Insight Board by EOD",
        metas: [
          { icon: "date", text: "25/6/2026" },
          { icon: "exchange", text: "Email exchange : 4" },
        ],
        description:
          "Please review and approve the updated Operations Insight Board workflow by EOD so the team can move forward with the next phase.",
      },
      {
        id: "s4",
        source: "github",
        title: "PR #87 · Refactor SLA breach alert handlers for Operations Insight Board",
        metas: [
          { icon: "date", text: "24/6/2026" },
          { icon: "person", text: "Author: You" },
          { icon: "person", text: "Reviewer: Priya Nair" },
        ],
        description:
          "Rework the SLA breach alert handlers so notifications fire on the correct thresholds and route to the right owners, reducing missed escalations in the Operations Insight Board.",
      },
      {
        id: "s5",
        source: "slack",
        title: "#ops-insight-board – Stakeholder feedback on latest dashboard iteration",
        metas: [
          { icon: "date", text: "24/6/2026" },
          { icon: "people", text: "Participants : 6" },
        ],
        description:
          "Thread capturing stakeholder feedback on the newest dashboard iteration — what resonated, which metrics felt unclear, and the changes requested before the next review.",
      },
    ],
  },

  "meeting-notes-q3-roadmap": detailFromFirstCard("meeting-notes", [
    {
      id: "mn1",
      source: "gmeet",
      title: "Q3 roadmap sync — recording & decisions",
      metas: [
        { icon: "date", text: "24/6/2026" },
        { icon: "clock", text: "48 mins" },
        { icon: "people", text: "Participants : 5" },
      ],
      description:
        "The planning call where Q3 priorities were sequenced: contract-renewal workflow first, SLA alerting second. Owners were named live and target dates agreed before the call closed.",
    },
    {
      id: "mn2",
      source: "notion",
      title: "Q3 planning doc · Insight Board priorities",
      metas: [
        { icon: "date", text: "24/6/2026" },
        { icon: "person", text: "Owner: You" },
      ],
      description:
        "The written follow-up to the sync: priority order, owners, target dates, and the open risks that still need a decision. Kept as the single source of truth for the quarter.",
    },
    {
      id: "mn3",
      source: "jira",
      title: "JIRA-2143 · Contract renewal workflow (Q3)",
      metas: [
        { icon: "date", text: "24/6/2026" },
        { icon: "person", text: "Assignee: You" },
        { icon: "person", text: "Reporter: Babak Shamman" },
      ],
      description:
        "The first priority from the roadmap, ticketed: standardise the Q3 renewal flow so managers see upcoming renewals, approval status, and risk flags in one place.",
    },
  ]),

  "project-notes-data-model-refactor": detailFromFirstCard("project-notes", [
    {
      id: "pn1",
      source: "notion",
      title: "Project doc · Data model refactor plan",
      metas: [
        { icon: "date", text: "24/6/2026" },
        { icon: "person", text: "Owner: You" },
      ],
      description:
        "The migration plan making signals, sources, and owners first-class entities. Lays out the phased cutover and the back-fill strategy for historical citations.",
    },
    {
      id: "pn2",
      source: "jira",
      title: "JIRA-2260 · Entity model v2",
      metas: [
        { icon: "date", text: "23/6/2026" },
        { icon: "person", text: "Assignee: You" },
        { icon: "person", text: "Reporter: Priya Nair" },
      ],
      description:
        "Tracks the schema changes for the new entity model and the order of the migration steps. Blocks the alerting and renewals work that depend on the new owners.",
    },
    {
      id: "pn3",
      source: "github",
      title: "PR #101 · Schema scaffolding",
      metas: [
        { icon: "date", text: "23/6/2026" },
        { icon: "person", text: "Author: You" },
        { icon: "person", text: "Reviewer: Marco Ruiz" },
      ],
      description:
        "First code drop for the refactor: the new tables and relations behind a flag, plus a dry-run of the back-fill so we can measure it before running against production.",
    },
  ]),

  "product-release-timeline-ga": detailFromFirstCard("product-release", [
    {
      id: "pr1",
      source: "notion",
      title: "Release notes · Timeline GA",
      metas: [
        { icon: "date", text: "24/6/2026" },
        { icon: "person", text: "Author: You" },
      ],
      description:
        "The customer-facing notes for the Release Timeline going GA: what shipped, which workspaces get it, and the known limitations we're tracking for the next iteration.",
    },
    {
      id: "pr2",
      source: "figma",
      title: "Release Timeline · final frames",
      metas: [
        { icon: "date", text: "23/6/2026" },
        { icon: "person", text: "Designer: You" },
      ],
      description:
        "The signed-off frames for the GA build — the scrollable lane, risk-flag treatment, and empty states. Matches what shipped so support and eng can reference one source.",
    },
    {
      id: "pr3",
      source: "jira",
      title: "JIRA-5842 · Timeline GA rollout",
      metas: [
        { icon: "date", text: "23/6/2026" },
        { icon: "person", text: "Assignee: You" },
      ],
      description:
        "The rollout ticket: flag flip per workspace tier, the monitoring dashboards to watch, and the rollback plan if error rates spike during the ramp.",
    },
  ]),

  "engineering-release-pr87-sla": detailFromFirstCard("engineering-release", [
    {
      id: "er1",
      source: "github",
      title: "PR #87 · SLA breach alert handlers",
      metas: [
        { icon: "date", text: "24/6/2026" },
        { icon: "person", text: "Author: You" },
        { icon: "person", text: "Reviewer: Priya Nair" },
      ],
      description:
        "The change itself: alert handlers reworked so notifications fire on the right thresholds and route to the correct owners. In review, with the deploy targeted for this week.",
    },
    {
      id: "er2",
      source: "jira",
      title: "JIRA-2231 · Breach detection thresholds",
      metas: [
        { icon: "date", text: "23/6/2026" },
        { icon: "person", text: "Assignee: You" },
      ],
      description:
        "Defines the per-tier SLA thresholds the handlers key off, and the escalation owners. The acceptance criteria this PR is verified against.",
    },
    {
      id: "er3",
      source: "cursor",
      title: "AI session · handler refactor",
      metas: [
        { icon: "date", text: "23/6/2026" },
        { icon: "clock", text: "35 mins" },
      ],
      description:
        "The pairing session that untangled the old handler branching and drafted the routing logic. Notes and the diff summary are attached for reviewers catching up.",
    },
  ]),

  "company-news-q3-all-hands": detailFromFirstCard("company-news", [
    {
      id: "cn1",
      source: "gmeet",
      title: "Q3 All-Hands · recording",
      metas: [
        { icon: "date", text: "24/6/2026" },
        { icon: "clock", text: "52 mins" },
        { icon: "people", text: "Participants : 120+" },
      ],
      description:
        "Leadership walking through the Q3 strategy and the three company priorities, with a live Q&A at the end. Recording is posted for anyone who missed it.",
    },
    {
      id: "cn2",
      source: "notion",
      title: "Q3 strategy · deck",
      metas: [
        { icon: "date", text: "24/6/2026" },
        { icon: "person", text: "Owner: Leadership" },
      ],
      description:
        "The slides from the all-hands: the three priorities, the reasoning behind them, and the targets each team is expected to plan against this quarter.",
    },
    {
      id: "cn3",
      source: "gmail",
      title: "Q3 priorities · summary email",
      metas: [
        { icon: "date", text: "24/6/2026" },
        { icon: "exchange", text: "Email exchange : 3" },
      ],
      description:
        "The written recap sent company-wide after the all-hands, with the priorities, links to the recording and deck, and where to ask follow-up questions.",
    },
  ]),
};
