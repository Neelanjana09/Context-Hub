"use client";

import { useState } from "react";
import type { AgendaItem } from "@/lib/types";
import AgendaRow from "@/components/rows/AgendaRow";
import { AgendaHeaderIcon } from "@/components/primitives/Icons";
import styles from "./cards.module.css";

type Row = AgendaItem & { struck: boolean };

export default function AgendaCard({
  items,
  hover = false,
}: {
  items: AgendaItem[];
  hover?: boolean;
}) {
  const [rows, setRows] = useState<Row[]>(() =>
    items.map((it) => ({ ...it, struck: it.state === "strikethrough" }))
  );

  const toggleStrike = (id: string) =>
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, struck: !r.struck } : r)));

  const remove = (id: string) => setRows((rs) => rs.filter((r) => r.id !== id));

  return (
    <section className={`${styles.card} ${styles.dailyCard}`} data-hover={hover}>
      <header className={styles.dailyHeader}>
        <span className={styles.headerIcon}>
          <AgendaHeaderIcon />
        </span>
        <h2 className="type-h2">Agenda</h2>
      </header>
      <div className={styles.rowList}>
        {rows.map((r) => (
          <AgendaRow
            key={r.id}
            item={r}
            struck={r.struck}
            onToggle={() => toggleStrike(r.id)}
            onDelete={() => remove(r.id)}
          />
        ))}
      </div>
    </section>
  );
}
