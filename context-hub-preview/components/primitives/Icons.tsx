import type { Category } from "@/lib/types";

type IconProps = { size?: number; className?: string };

/* ============================================================
   All geometry below is exported verbatim from the Figma
   "Secondary icons" / "Navbar Icon Holder" sets. Strokes use
   currentColor so the parent can tint them.
   ============================================================ */

/* ---- Card header icons (Navbar Icon Holder) ---- */
export function RecentlyUpdatedHeaderIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={(size * 24) / 26} viewBox="0 0 26 24" fill="none" aria-hidden>
      <path
        d="M13 15L15 17L19 13M5 16C3.9 16 3 15.1 3 14V4C3 2.9 3.9 2 5 2H15C16.1 2 17 2.9 17 4M11 8H21C22.1046 8 23 8.89543 23 10V20C23 21.1046 22.1046 22 21 22H11C9.89543 22 9 21.1046 9 20V10C9 8.89543 9.89543 8 11 8Z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export function AgendaHeaderIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={(size * 24) / 26} viewBox="0 0 26 24" fill="none" aria-hidden>
      <path
        d="M9 2V6M17 2V6M4 10H22M10 16L12 18L16 14M6 4H20C21.1046 4 22 4.89543 22 6V20C22 21.1046 21.1046 22 20 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4Z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---- Priority flag (solid) ---- */
export function FlagIcon({ size = 16 }: IconProps) {
  return (
    <svg width={(size * 14) / 18} height={size} viewBox="0 0 14 18" fill="none" aria-hidden>
      <path
        d="M11.084 6.54102C11.084 6.76957 11.0198 6.99384 10.8984 7.1875C10.7787 7.37854 10.6074 7.53111 10.4053 7.63086L10.4062 7.63184L3.5 11.0869V14.416C3.5 14.8302 3.16421 15.166 2.75 15.166C2.33579 15.166 2 14.8302 2 14.416V3.21582C1.99998 3.0069 2.05384 2.80126 2.15625 2.61914L2.24121 2.48828C2.33446 2.36324 2.45176 2.2572 2.58594 2.17578C2.76477 2.06732 2.96869 2.00676 3.17773 2L3.33398 2.00488C3.48455 2.01947 3.63096 2.06301 3.7666 2.13184L3.76758 2.13086L10.4062 5.4502C10.5573 5.52467 10.6901 5.62895 10.7979 5.75684L10.8984 5.89453L10.9785 6.0459C11.0477 6.20117 11.084 6.36975 11.084 6.54102Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ---- Tick mark (check-circle on a rounded-square holder) ---- */
export function TickIcon({ size = 24, checked = false }: IconProps & { checked?: boolean }) {
  const bg = checked ? "#E0FFF2" : "#E9E9E9";
  const stroke = checked ? "var(--status-ongoing)" : "var(--text-heading-1)";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill={bg} />
      <path
        d="M19.8389 10.4027C20.2043 12.1958 19.9439 14.0599 19.1012 15.6841C18.2585 17.3084 16.8844 18.5948 15.2081 19.3286C13.5318 20.0624 11.6546 20.1993 9.88956 19.7166C8.1245 19.2339 6.57828 18.1606 5.50875 16.6758C4.43921 15.1911 3.91102 13.3845 4.01226 11.5574C4.11349 9.73035 4.83803 7.99319 6.06504 6.63566C7.29206 5.27813 8.94739 4.38227 10.755 4.09749C12.5626 3.81271 14.4131 4.15621 15.9981 5.07072M9.59812 11.2027L11.9981 13.6027L19.9981 5.60272"
        stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---- Utility icons ---- */
export function DotsIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      {[4.5, 10, 15.5].map((cy) => (
        <circle key={cy} cx="10" cy={cy} r="1.5" fill="currentColor" />
      ))}
    </svg>
  );
}

export function ChevronDown({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRight({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8.5l3 3 7-7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TrashIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 4.5h10M6.5 4.5V3.2c0-.4.3-.7.7-.7h1.6c.4 0 .7.3.7.7v1.3M5 4.5l.5 8c0 .5.4.8.8.8h3.4c.4 0 .8-.3.8-.8l.5-8"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LinkIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M6.5 9.5l3-3M7 5l1-1a2.1 2.1 0 013 3l-1 1M9 11l-1 1a2.1 2.1 0 01-3-3l1-1"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ---- Navbar icons ---- */
export function GridIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="2.5" y="2.5" width="5.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="2.5" width="5.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="2.5" y="10" width="5.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="10" width="5.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
export function SearchIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
export function BellIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M10 2.5a5 5 0 00-5 5c0 4-1.5 5.5-1.5 5.5h13S15 11.5 15 7.5a5 5 0 00-5-5ZM8.5 16a1.7 1.7 0 003 0"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function HelpIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7.8a2 2 0 013.8.9c0 1.3-2 1.6-2 3M10 14.2h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---- Context card meta icons (clock / calendar) ---- */
export function MetaTimeIcon({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M9 4.8V9L11.8 10.4M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function MetaDateIcon({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={(size * 17) / 16} viewBox="0 0 16 17" fill="none" aria-hidden>
      <path d="M5.33333 2V4.6M10.6667 2V4.6M2 7.2H14M3.33333 3.3H12.6667C13.403 3.3 14 3.88203 14 4.6V13.7C14 14.418 13.403 15 12.6667 15H3.33333C2.59695 15 2 14.418 2 13.7V4.6C2 3.88203 2.59695 3.3 3.33333 3.3Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---- Sub-card meta icons (person / people / exchange) ---- */
export function PersonIcon({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M13 14v-1.5A2.5 2.5 0 0 0 10.5 10h-5A2.5 2.5 0 0 0 3 12.5V14M8 7.5A2.75 2.75 0 1 0 8 2a2.75 2.75 0 0 0 0 5.5Z"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function PeopleIcon({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 16" fill="none" aria-hidden>
      <path d="M12.5 14v-1.5A2.5 2.5 0 0 0 10 10H4.5A2.5 2.5 0 0 0 2 12.5V14M6.75 7.5A2.75 2.75 0 1 0 6.75 2a2.75 2.75 0 0 0 0 5.5ZM16 14v-1.5a2.5 2.5 0 0 0-1.9-2.42M11.75 2.16a2.75 2.75 0 0 1 0 5.18"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function ExchangeIcon({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M2.5 5.5h9l-2-2M13.5 10.5h-9l2 2"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---- Citation category icons (exact Figma geometry) ---- */
const CITATION_PATHS: Record<Category, { vb: string; d: string }> = {
  "meeting-notes": {
    vb: "0 0 18 18",
    d: "M1.5 2.25H16.5M15.75 2.25V10.5C15.75 10.8978 15.592 11.2794 15.3107 11.5607C15.0294 11.842 14.6478 12 14.25 12H3.75C3.35218 12 2.97064 11.842 2.68934 11.5607C2.40804 11.2794 2.25 10.8978 2.25 10.5V2.25M5.25 15.75L9 12L12.75 15.75",
  },
  "project-notes": {
    vb: "0 0 18 18",
    d: "M6.75 6H12M6 9H10.5M8.25 12H12M3.75 2.25H14.25C15.0784 2.25 15.75 2.92157 15.75 3.75V14.25C15.75 15.0784 15.0784 15.75 14.25 15.75H3.75C2.92157 15.75 2.25 15.0784 2.25 14.25V3.75C2.25 2.92157 2.92157 2.25 3.75 2.25Z",
  },
  "product-release": {
    vb: "0 0 16 16",
    d: "M6.66683 2.66699V5.33366M1.3335 5.33366H14.6668M4.00016 2.66699V5.33366M2.66683 2.66699H13.3335C14.0699 2.66699 14.6668 3.26395 14.6668 4.00033V12.0003C14.6668 12.7367 14.0699 13.3337 13.3335 13.3337H2.66683C1.93045 13.3337 1.3335 12.7367 1.3335 12.0003V4.00033C1.3335 3.26395 1.93045 2.66699 2.66683 2.66699Z",
  },
  "company-news": {
    vb: "0 0 16 16",
    d: "M6.66683 8H9.3335M6.66683 5.33333H9.3335M9.3335 14V12C9.3335 11.6464 9.19302 11.3072 8.94297 11.0572C8.69292 10.8071 8.35378 10.6667 8.00016 10.6667C7.64654 10.6667 7.3074 10.8071 7.05735 11.0572C6.80731 11.3072 6.66683 11.6464 6.66683 12V14M4.00016 6.66667H2.66683C2.31321 6.66667 1.97407 6.80714 1.72402 7.05719C1.47397 7.30724 1.3335 7.64638 1.3335 8V12.6667C1.3335 13.0203 1.47397 13.3594 1.72402 13.6095C1.97407 13.8595 2.31321 14 2.66683 14H13.3335C13.6871 14 14.0263 13.8595 14.2763 13.6095C14.5264 13.3594 14.6668 13.0203 14.6668 12.6667V6C14.6668 5.64638 14.5264 5.30724 14.2763 5.05719C14.0263 4.80714 13.6871 4.66667 13.3335 4.66667H12.0002M4.00016 14V3.33333C4.00016 2.97971 4.14064 2.64057 4.39069 2.39052C4.64074 2.14048 4.97987 2 5.3335 2H10.6668C11.0205 2 11.3596 2.14048 11.6096 2.39052C11.8597 2.64057 12.0002 2.97971 12.0002 3.33333V14",
  },
  "engineering-release": {
    vb: "0 0 18 18",
    d: "M9 12.7495V15.7495M10.7288 5.64704L11.421 5.36054M11.421 3.63854L10.7288 3.35129M12.639 2.42054L12.3517 1.72754M12.639 6.57854L12.3517 7.27079M14.361 2.42054L14.6483 1.72754M14.6475 7.27154L14.361 6.57854M15.579 3.63854L16.272 3.35129M15.579 5.36054L16.272 5.64779M16.5 9.74954V11.2495C16.5 11.6474 16.342 12.0289 16.0607 12.3102C15.7794 12.5915 15.3978 12.7495 15 12.7495H3C2.60218 12.7495 2.22064 12.5915 1.93934 12.3102C1.65804 12.0289 1.5 11.6474 1.5 11.2495V3.74954C1.5 3.35171 1.65804 2.97018 1.93934 2.68888C2.22064 2.40757 2.60218 2.24954 3 2.24954H8.25M6 15.7495H12M15.75 4.49954C15.75 5.74218 14.7426 6.74954 13.5 6.74954C12.2574 6.74954 11.25 5.74218 11.25 4.49954C11.25 3.2569 12.2574 2.24954 13.5 2.24954C14.7426 2.24954 15.75 3.2569 15.75 4.49954Z",
  },
};

export function CitationIcon({ category, size = 14 }: { category: Category; size?: number }) {
  const { vb, d } = CITATION_PATHS[category];
  return (
    <svg width={size} height={size} viewBox={vb} fill="none" aria-hidden>
      <path d={d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
