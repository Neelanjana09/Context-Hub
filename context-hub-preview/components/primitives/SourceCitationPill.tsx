import type { SourceCitation } from "@/lib/types";
import SourceIcon from "./SourceIcon";
import styles from "./primitives.module.css";

/* Per-source citation pill: [app icon] [source title], truncated. */
export default function SourceCitationPill({ pill }: { pill: SourceCitation }) {
  return (
    <span className={styles.sourcePill} title={pill.title}>
      <SourceIcon source={pill.source} />
      <span className={`type-pill ${styles.sourcePillLabel}`}>{pill.title}</span>
    </span>
  );
}
