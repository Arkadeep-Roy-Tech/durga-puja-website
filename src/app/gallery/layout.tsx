import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Festival Gallery & Visitor Guide",
  description:
    "Curated photographs and comprehensive visitor travel guide for Sri Durga Pooja Committee (R), Mangaluru at Hindi Prachar Bhavan, Lalbagh. Rituals, dhunuchi naach, mandap artistry, and travel directions.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
