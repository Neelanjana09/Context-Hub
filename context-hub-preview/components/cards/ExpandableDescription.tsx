"use client";

import { useState } from "react";
import styles from "./cards.module.css";

export default function ExpandableDescription({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <p
      className={`type-body2 ${styles.ctxDesc} ${expanded ? "" : styles.ctxDescClamp}`}
      onClick={() => setExpanded((e) => !e)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setExpanded((v) => !v);
        }
      }}
      title={expanded ? "Click to collapse" : "Click to see full details"}
    >
      {text}
    </p>
  );
}
