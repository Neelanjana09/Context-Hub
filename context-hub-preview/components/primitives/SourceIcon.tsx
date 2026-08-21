import type { Source } from "@/lib/types";
import { SOURCE_LABEL } from "@/lib/types";
import styles from "./primitives.module.css";

/* Real brand logos exported from the Figma "Secondary icons" set,
   stored as PNGs in /public/icons. */
const HAS_PNG: Source[] = ["gmail", "jira", "gmeet", "slack", "github", "notion", "figma", "firebase", "cursor"];

export default function SourceIcon({ source }: { source: Source }) {
  if (HAS_PNG.includes(source)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img className={styles.sourceIcon} src={`/icons/${source}.png`} alt={SOURCE_LABEL[source]} width={18} height={18} />
    );
  }
  return (
    <span className={styles.sourceIconFallback} title={SOURCE_LABEL[source]}>
      {SOURCE_LABEL[source][0]}
    </span>
  );
}
