import type { RecentlyUpdatedItem } from "@/lib/types";
import SourceIcon from "@/components/primitives/SourceIcon";
import CitationPill from "@/components/primitives/CitationPill";
import TimeLabel from "@/components/primitives/TimeLabel";
import styles from "@/components/cards/cards.module.css";

export default function RecentlyUpdatedRow({ item }: { item: RecentlyUpdatedItem }) {
  return (
    <div className={styles.ruRow}>
      <SourceIcon source={item.source} />
      <span className={`type-body2 ${styles.ruTitle}`}>{item.title}</span>
      <div className={styles.ruTail}>
        <CitationPill category={item.category} />
        <TimeLabel time={item.time} className={`type-body2 ${styles.ruTime}`} />
      </div>
    </div>
  );
}
