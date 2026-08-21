import type { RecentlyUpdatedItem } from "@/lib/types";
import RecentlyUpdatedRow from "@/components/rows/RecentlyUpdatedRow";
import { RecentlyUpdatedHeaderIcon } from "@/components/primitives/Icons";
import styles from "./cards.module.css";

export default function RecentlyUpdatedCard({
  items,
  hover = false,
}: {
  items: RecentlyUpdatedItem[];
  hover?: boolean;
}) {
  return (
    <section className={`${styles.card} ${styles.dailyCard}`} data-hover={hover}>
      <header className={styles.dailyHeader}>
        <span className={styles.headerIcon}><RecentlyUpdatedHeaderIcon /></span>
        <h2 className="type-h2">Recently Updated</h2>
      </header>
      <div className={styles.rowList}>
        {items.map((item) => (
          <RecentlyUpdatedRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
