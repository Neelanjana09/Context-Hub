import { SearchIcon, BellIcon, HelpIcon } from "@/components/primitives/Icons";
import styles from "./nav.module.css";

export default function TopBar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.search}>
        <SearchIcon />
        <input placeholder="Search by title or keyword" />
      </div>
      <div className={styles.topActions}>
        <button type="button" className={styles.iconBtn} aria-label="Help">
          <HelpIcon />
        </button>
        <button type="button" className={styles.iconBtn} aria-label="Notifications">
          <BellIcon />
        </button>
        <span className={styles.avatar} aria-hidden />
      </div>
    </header>
  );
}
