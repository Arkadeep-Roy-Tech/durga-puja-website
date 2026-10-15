import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pooja Schedule & Rituals (15–21 Oct 2026)",
  description:
    "Complete 7-day schedule of Sri Durga Pooja Committee (R), Mangaluru from Durga Panchami to Vijaya Dashami. Timings for Pushpanjali, Sandhi Puja, Anna Daan / Bhog Seva, cultural programs, and immersion procession.",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
