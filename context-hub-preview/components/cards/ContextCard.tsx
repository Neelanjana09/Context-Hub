import Link from "next/link";
import type { ContextCardData } from "@/lib/types";
import PriorityBadge from "@/components/primitives/PriorityBadge";
import StatusBadge from "@/components/primitives/StatusBadge";
import SourceCitationPill from "@/components/primitives/SourceCitationPill";
import IconButton from "@/components/primitives/IconButton";
import NoteInput from "./NoteInput";
import ExpandableDescription from "./ExpandableDescription";
import { MetaTimeIcon, MetaDateIcon } from "@/components/primitives/Icons";
import styles from "./cards.module.css";

export default function ContextCard({ data, href }: { data: ContextCardData; href?: string }) {
  const { title, priority, status, meta, description, sources, note, state = "default" } = data;
  const hover = state === "hover";
  const menuOpen = state === "menu-open";
  const noteAdded = state === "note-added" && !!note;


  return (
    <section
      className={`${styles.card} ${styles.ctxCard} ${href ? styles.linkable : ""}`}
      data-hover={hover}
    >
      {href && (
        <Link href={href} className={styles.cardOverlay} aria-label={`Open ${title}`} />
      )}
      {/* title/priority/status/menu + meta grouped with an 8px gap */}
      <div className={styles.ctxTitleMeta}>
        {/* [1] title  [2] priority  [3] status  [4] three-dot menu */}
        <header className={styles.ctxHeader}>
          <h2 className={`type-h2 ${styles.ctxTitle}`}>{title}</h2>
          <div className={styles.ctxHeaderMeta}>
            <PriorityBadge priority={priority} />
            <StatusBadge status={status} />
            <IconButton defaultOpen={menuOpen} />
          </div>
        </header>

        {/* [5] meta: time · date */}
        <div className={styles.ctxMeta}>
          <span className={`type-body2 ${styles.metaItem}`}>
            <span className={styles.metaIcon}><MetaTimeIcon /></span>
            {meta.time}
          </span>
          <span className={`type-body2 ${styles.metaItem}`}>
            <span className={styles.metaIcon}><MetaDateIcon /></span>
            {meta.date}
          </span>
        </div>
      </div>

      {/* [6] description — clamped to 3 lines, click to expand */}
      <ExpandableDescription text={description} />

      {/* [7] sources with 1+ citation pills */}
      <div className={styles.ctxSources}>
        <span className={`type-body1-medium ${styles.ctxSourcesLabel}`}>Source(s)</span>
        <div className={styles.ctxPills}>
          {sources.map((s, i) => (
            <SourceCitationPill key={i} pill={s} />
          ))}
        </div>
      </div>

      {/* [8] note — inline editable; adds to a Note(s) list on Enter */}
      <NoteInput initialNote={noteAdded ? note : ""} />
    </section>
  );
}
