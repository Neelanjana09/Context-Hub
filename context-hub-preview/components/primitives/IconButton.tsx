"use client";

import { useEffect, useRef, useState } from "react";
import { DotsIcon, LinkIcon, PlusIcon, TrashIcon } from "./Icons";
import styles from "./primitives.module.css";

export default function IconButton({ defaultOpen = false }: { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div className={styles.iconButtonWrap} ref={wrapRef}>
      <button
        type="button"
        className={styles.iconButton}
        data-open={open}
        aria-label="More actions"
        onClick={() => setOpen((o) => !o)}
      >
        <DotsIcon />
      </button>
      {open && (
        <div className={styles.menu} role="menu">
          <button type="button" className={`type-body2 ${styles.menuItem}`} role="menuitem">
            <LinkIcon /> Link to a card
          </button>
          <button type="button" className={`type-body2 ${styles.menuItem}`} role="menuitem">
            <PlusIcon /> Add to Agenda
          </button>
          <button type="button" className={`type-body2 ${styles.menuItem} ${styles.menuItemDanger}`} role="menuitem">
            <TrashIcon /> Delete
          </button>
        </div>
      )}
    </div>
  );
}
