"use client";

import { useState } from "react";
import Sidebar from "@/components/nav/Sidebar";
import TopBar from "@/components/nav/TopBar";
import ContextCard from "@/components/cards/ContextCard";
import RecentlyUpdatedCard from "@/components/cards/RecentlyUpdatedCard";
import AgendaCard from "@/components/cards/AgendaCard";
import FilterBar from "@/components/filters/FilterBar";
import {
  agendaSample,
  contextCardsSample,
  recentlyUpdatedSample,
  tabCards,
} from "@/lib/sampleData";
import { TAB_LABELS, type Category, type TabKey } from "@/lib/types";
import styles from "@/app/preview.module.css";

const CONTEXT_ROWS = 2;

function AllSignalsView() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.greeting}>
        <span className={styles.greetingTitle}>Good Afternoon, Neelanjana 🍀</span>
        <span className={styles.greetingSub}>
          Today&apos;s digest is ready, Happy digging 🕵️
        </span>
      </div>

      <div className={styles.dailyRow}>
        <RecentlyUpdatedCard items={recentlyUpdatedSample} />
        <AgendaCard items={agendaSample} />
      </div>

      <FilterBar />

      <div className={styles.contextGrid}>
        {Array.from({ length: CONTEXT_ROWS }, (_, r) => (
          <div className={styles.contextRow} key={r}>
            {contextCardsSample.map((card, c) => (
              <div className={styles.contextCell} key={c}>
                <ContextCard
                  data={card}
                  href={card.id ? `/context/${card.id}` : undefined}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function CategoryView({ category }: { category: Category }) {
  const cards = tabCards[category] ?? [];
  const rows = [cards.slice(0, 3), cards.slice(3, 6)].filter((r) => r.length > 0);
  const label = TAB_LABELS[category];

  return (
    <div className={styles.dashboard}>
      <div className={styles.greeting}>
        <span className={styles.greetingTitle}>{label}</span>
        <span className={styles.greetingSub}>
          {cards.length > 0
            ? `${cards.length} items collected in ${label}`
            : `${label} — nothing here yet`}
        </span>
      </div>

      <FilterBar categoryValue={label} />

      {cards.length === 0 ? (
        <p className="type-body2" style={{ color: "var(--text-subheading)" }}>
          No items in this tab yet.
        </p>
      ) : (
        <div className={`${styles.contextGrid} ${styles.contextGridFull}`}>
          {rows.map((row, r) => (
            <div className={styles.contextRow} key={r}>
              {row.map((card, c) => (
                <div className={styles.contextCell} key={c}>
                  <ContextCard
                    data={card}
                    href={card.id ? `/context/${card.id}` : undefined}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function HomeApp({
  initialTab = "all-signals",
}: {
  initialTab?: TabKey;
}) {
  const [tab, setTab] = useState<TabKey>(initialTab);

  return (
    <div className={styles.shell}>
      <Sidebar activeTab={tab} onSelect={setTab} />
      <div className={styles.mainCol}>
        <TopBar />
        <main className={styles.canvas}>
          <div className={styles.canvasInner}>
            {tab === "all-signals" ? (
              <AllSignalsView />
            ) : (
              <CategoryView category={tab} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
