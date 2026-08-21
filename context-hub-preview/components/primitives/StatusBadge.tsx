import type { Status } from "@/lib/types";
import { STATUS_LABEL } from "@/lib/types";
import styles from "./primitives.module.css";

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`type-pill-medium ${styles.status}`} data-status={status}>
      {STATUS_LABEL[status]}
    </span>
  );
}
