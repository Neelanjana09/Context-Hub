import type { AgendaItem } from "@/lib/types";
import TickMark from "@/components/primitives/TickMark";
import TimeLabel from "@/components/primitives/TimeLabel";
import { CheckIcon, TrashIcon } from "@/components/primitives/Icons";
import styles from "@/components/cards/cards.module.css";

export default function AgendaRow({
  item,
  struck = false,
  onToggle,
  onDelete,
}: {
  item: AgendaItem;
  struck?: boolean;
  onToggle?: () => void;
  onDelete?: () => void;
}) {
  return (
    <div className={styles.agRow} data-state={struck ? "strikethrough" : "normal"}>
      <TickMark checked={struck} />
      <span className={`type-body2 ${styles.agTask}`}>{item.task}</span>
      <div className={styles.agRight}>
        <TimeLabel time={item.time} className={`type-body2 ${styles.agTime}`} />
        <div className={styles.agActions}>
          <button
            type="button"
            className={`${styles.agActionBtn} ${styles.agCheck}`}
            aria-label={struck ? "Unmark complete" : "Mark complete"}
            onClick={onToggle}
          >
            <CheckIcon />
          </button>
          <button
            type="button"
            className={`${styles.agActionBtn} ${styles.agDelete}`}
            aria-label="Delete"
            onClick={onDelete}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
