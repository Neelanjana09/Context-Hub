"use client";

import { Fragment, useState } from "react";
import type { SubCard } from "@/lib/types";
import ContextSubCard from "./ContextSubCard";
import cards from "@/components/cards/cards.module.css";
import styles from "./detail.module.css";

/* How many related-signal cards show before the "+N more" reveal. */
const INITIAL_VISIBLE = 3;

export default function SubCardList({ subCards }: { subCards: SubCard[] }) {
  const [showAll, setShowAll] = useState(false);
  const hidden = Math.max(0, subCards.length - INITIAL_VISIBLE);
  const visible = showAll ? subCards : subCards.slice(0, INITIAL_VISIBLE);

  return (
    <div className={styles.subCards}>
      {visible.map((s, i) => (
        <Fragment key={s.id}>
          {i > 0 && (
            <div className={styles.connector} aria-hidden>
              <span className={styles.connectorBar} />
            </div>
          )}
          <ContextSubCard data={s} first={i === 0} />
        </Fragment>
      ))}
      {hidden > 0 && (
        <>
          <div className={styles.connector} aria-hidden>
            <span className={styles.connectorBar} />
          </div>
          <section className={`${cards.card} ${styles.moreCard}`}>
            <button
              type="button"
              className={`type-body2 ${styles.moreLink}`}
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
            >
              {showAll ? "Show less" : `+${hidden} more`}
            </button>
          </section>
        </>
      )}
    </div>
  );
}
