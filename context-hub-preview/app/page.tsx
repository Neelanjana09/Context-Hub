import HomeApp from "@/components/HomeApp";
import { TAB_KEYS, type TabKey } from "@/lib/types";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  const initialTab: TabKey =
    tab && TAB_KEYS.includes(tab as TabKey) ? (tab as TabKey) : "all-signals";
  return <HomeApp initialTab={initialTab} />;
}
