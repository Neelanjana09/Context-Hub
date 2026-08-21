import { TickIcon } from "./Icons";
import styles from "./primitives.module.css";

export default function TickMark({ checked = false }: { checked?: boolean }) {
  return (
    <span className={styles.tick}>
      <TickIcon checked={checked} />
    </span>
  );
}
