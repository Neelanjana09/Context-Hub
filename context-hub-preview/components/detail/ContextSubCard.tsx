"use client";

import { useState } from "react";
import type { SubCard, SubMetaIcon } from "@/lib/types";
import SourceIcon from "@/components/primitives/SourceIcon";
import {
  MetaDateIcon,
  MetaTimeIcon,
  PersonIcon,
  PeopleIcon,
  ExchangeIcon,
} from "@/components/primitives/Icons";
import cards from "@/components/cards/cards.module.css";
import styles from "./detail.module.css";

function MetaIcon({ icon }: { icon: SubMetaIcon }) {
  switch (icon) {
    case "date":
      return <MetaDateIcon />;
    case "clock":
      return <MetaTimeIcon />;
    case "people":
      return <PeopleIcon />;
    case "exchange":
      return <ExchangeIcon />;
    case "person":
    default:
      return <PersonIcon />;
  }
}

export default function ContextSubCard({
  data,
  first = false,
}: {
  data: SubCard;
  first?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <section
      className={`${cards.card} ${styles.subCard} ${first ? styles.subCardFirst : ""}`}
    >
      <header className={styles.subHeader}>
        <SourceIcon source={data.source} />
        <span className={`type-body1-medium ${styles.subTitle}`}>{data.title}</span>
      </header>

      <div className={styles.subMetaRow}>
        {data.metas.map((m, i) => (
          <span key={i} className={`type-body2 ${styles.subMeta}`}>
            <span className={styles.subMetaIcon}><MetaIcon icon={m.icon} /></span>
            {m.text}
          </span>
        ))}
      </div>

      <p
        className={`type-body2 ${styles.subDesc} ${expanded ? styles.subDescOpen : ""}`}
      >
        {data.description}
      </p>

      <button
        type="button"
        className={`type-body2 ${styles.viewDetails}`}
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {expanded ? "Hide details" : "View Details"}
      </button>
    </section>
  );
}
