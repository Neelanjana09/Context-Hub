import type { ContextCardData, SourceCitation } from "@/lib/types";
import PriorityBadge from "@/components/primitives/PriorityBadge";
import StatusBadge from "@/components/primitives/StatusBadge";
import IconButton from "@/components/primitives/IconButton";
import SourceCitationPill from "@/components/primitives/SourceCitationPill";
import NoteInput from "@/components/cards/NoteInput";
import { MetaTimeIcon, MetaDateIcon } from "@/components/primitives/Icons";
import cards from "@/components/cards/cards.module.css";
import styles from "./detail.module.css";

export default function DetailContextCard({
  card,
  pills,
}: {
  card: ContextCardData;
  pills: SourceCitation[];
}) {
  return (
    <section className={`${cards.card} ${styles.detailCard}`}>
      {/* title/priority/status/menu + meta grouped with an 8px gap */}
      <div className={cards.ctxTitleMeta}>
        {/* title · priority · status · menu */}
        <header className={cards.ctxHeader}>
          <h1 className={`type-h2 ${cards.ctxTitle}`}>{card.title}</h1>
          <div className={cards.ctxHeaderMeta}>
            <PriorityBadge priority={card.priority} />
            <StatusBadge status={card.status} />
            <IconButton />
          </div>
        </header>

        {/* meta: time · date */}
        <div className={cards.ctxMeta}>
          <span className={`type-body2 ${cards.metaItem}`}>
            <span className={cards.metaIcon}><MetaTimeIcon /></span>
            {card.meta.time} (updated 2 mins ago)
          </span>
          <span className={`type-body2 ${cards.metaItem}`}>
            <span className={cards.metaIcon}><MetaDateIcon /></span>
            {card.meta.date}
          </span>
        </div>
      </div>

      {/* full description (no clamp) */}
      <p className={`type-body2 ${styles.detailDesc}`}>{card.description}</p>

      {/* sources → app-icon citation pills */}
      <div className={cards.ctxSources}>
        <span className={`type-body1-medium ${cards.ctxSourcesLabel}`}>Source(s)</span>
        <div className={styles.detailPills}>
          {pills.map((pill, i) => (
            <SourceCitationPill key={i} pill={pill} />
          ))}
        </div>
      </div>

      {/* note */}
      <div className={styles.detailNote}>
        <NoteInput initialNote="" />
      </div>
    </section>
  );
}
