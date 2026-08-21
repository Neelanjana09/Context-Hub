import { ChevronDown } from "@/components/primitives/Icons";
import styles from "./filters.module.css";

/* Hard-coded filter bar (v1). The Category value reflects the active tab. */
export default function FilterBar({
  categoryValue = "All",
}: {
  categoryValue?: string;
}) {
  const filters: { label: string; value: string }[] = [
    { label: "Category", value: categoryValue },
    { label: "Date", value: "Today" },
    { label: "Priority", value: "All" },
    { label: "Status", value: "All" },
  ];
  return (
    <div className={styles.bar}>
      {filters.map((f) => (
        <button key={f.label} type="button" className={`type-body2 ${styles.filter}`}>
          <span className={styles.filterLabel}>{f.label}:</span>
          <span className={styles.filterValue}>{f.value}</span>
          <ChevronDown />
        </button>
      ))}
    </div>
  );
}
