import Link from "next/link";
import { notFound } from "next/navigation";
import Sidebar from "@/components/nav/Sidebar";
import type { Category, TabKey } from "@/lib/types";
import TopBar from "@/components/nav/TopBar";
import DetailContextCard from "@/components/detail/DetailContextCard";
import SubCardList from "@/components/detail/SubCardList";
import { ChevronRight } from "@/components/primitives/Icons";
import { contextDetails } from "@/lib/sampleData";
import shell from "@/app/preview.module.css";
import styles from "@/components/detail/detail.module.css";

export default async function ContextDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const detail = contextDetails[id];
  if (!detail) notFound();

  // Highlight the tab this card belongs to (derived from its id prefix).
  const CATS: Category[] = [
    "meeting-notes",
    "project-notes",
    "product-release",
    "engineering-release",
    "company-news",
  ];
  const activeTab: TabKey = CATS.find((c) => id.startsWith(`${c}-`)) ?? "all-signals";

  return (
    <div className={shell.shell}>
      <Sidebar linkMode activeTab={activeTab} />
      <div className={shell.mainCol}>
        <TopBar />

        <main className={shell.canvas}>
          <div className={styles.detailInner}>
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              {detail.breadcrumb.map((crumb, i) => {
                const last = i === detail.breadcrumb.length - 1;
                return (
                  <span key={i} className={styles.crumbSep} style={{ gap: "var(--space-6)", alignItems: "center" }}>
                    {last ? (
                      <span className={`type-body2 ${styles.crumbActive}`}>{crumb}</span>
                    ) : (
                      <Link href={detail.backHref} className={`type-body2 ${styles.crumb} ${styles.crumbLink}`}>
                        {crumb}
                      </Link>
                    )}
                    {!last && (
                      <span className={styles.crumbSep} aria-hidden>
                        <ChevronRight size={16} />
                      </span>
                    )}
                  </span>
                );
              })}
            </nav>

            {/* Two columns */}
            <div className={styles.columns}>
              <DetailContextCard card={detail.card} pills={detail.pills} />

              <SubCardList subCards={detail.subCards} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
