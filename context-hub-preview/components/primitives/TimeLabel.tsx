import styles from "./primitives.module.css";

/*
 * Anatomy rule: show "h:mm am/pm" for today; if the item is from
 * yesterday, show "N hrs ago". The preview passes a preformatted
 * string, so we render it directly; `hoursAgo` overrides when set.
 */
export default function TimeLabel({
  time,
  hoursAgo,
  className = "type-body2",
}: {
  time: string;
  hoursAgo?: number;
  className?: string;
}) {
  const label = hoursAgo != null ? `${hoursAgo} hrs ago` : time;
  return <span className={`${className} ${styles.time}`}>{label}</span>;
}
