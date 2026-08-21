import type { Category } from "@/lib/types";
import { CATEGORY_LABEL } from "@/lib/types";
import { CitationIcon } from "./Icons";
import styles from "./primitives.module.css";

export default function CitationPill({ category }: { category: Category }) {
  return (
    <span className={styles.citationPill}>
      <span className={styles.citationIcon}>
        <CitationIcon category={category} />
      </span>
      <span className="type-pill">{CATEGORY_LABEL[category]}</span>
    </span>
  );
}
