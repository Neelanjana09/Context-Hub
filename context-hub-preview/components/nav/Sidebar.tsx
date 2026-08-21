"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import type { Category, TabKey } from "@/lib/types";
import { TAB_LABELS, tabHref } from "@/lib/types";
import { GridIcon, CitationIcon } from "@/components/primitives/Icons";
import styles from "./nav.module.css";

const NOTE_CATS: Category[] = ["meeting-notes", "project-notes"];
const RELEASE_CATS: Category[] = [
  "product-release",
  "engineering-release",
  "company-news",
];

export default function Sidebar({
  activeTab = "all-signals",
  onSelect,
  linkMode = false,
}: {
  activeTab?: TabKey;
  onSelect?: (tab: TabKey) => void;
  /* When true (e.g. on the detail screen, outside HomeApp's state), tabs are
     links that navigate to the dashboard with that tab selected, instead of
     in-page buttons. */
  linkMode?: boolean;
}) {
  const item = (key: TabKey, label: string, icon: ReactNode) => {
    const className = `type-body2 ${styles.navItem} ${
      activeTab === key ? styles.navItemActive : ""
    }`;
    const current = activeTab === key ? "page" : undefined;
    if (linkMode) {
      return (
        <Link key={key} href={tabHref(key)} className={className} aria-current={current}>
          {icon} {label}
        </Link>
      );
    }
    return (
      <button
        key={key}
        type="button"
        className={className}
        aria-current={current}
        onClick={() => onSelect?.(key)}
      >
        {icon} {label}
      </button>
    );
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <span className={styles.logoMark}>C</span>
        <span className={styles.logoText}>Context Hub</span>
      </div>

      <nav className={styles.nav}>
        {item("all-signals", "All Signals", <GridIcon />)}
      </nav>

      <div className={styles.section}>
        <span className={styles.sectionLabel}>Notes</span>
        {NOTE_CATS.map((cat) =>
          item(cat, TAB_LABELS[cat], <CitationIcon category={cat} size={18} />)
        )}
      </div>

      <div className={styles.section}>
        <span className={styles.sectionLabel}>Releases &amp; News</span>
        {RELEASE_CATS.map((cat) =>
          item(cat, TAB_LABELS[cat], <CitationIcon category={cat} size={18} />)
        )}
      </div>
    </aside>
  );
}
