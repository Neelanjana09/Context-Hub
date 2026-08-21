import type { Priority } from "@/lib/types";
import { PRIORITY_LABEL } from "@/lib/types";
import { FlagIcon } from "./Icons";
import styles from "./primitives.module.css";

export default function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <span className={styles.priority} data-level={priority}>
      <span className={styles.priorityFlag}>
        <FlagIcon />
      </span>
      <span className={`type-body2 ${styles.priorityLabel}`}>{PRIORITY_LABEL[priority]}</span>
    </span>
  );
}
