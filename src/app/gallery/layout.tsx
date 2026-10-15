import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Festival Photography & Visual Archive",
  description:
    "Curated collection of 40 verified original photographs capturing the sacred rituals, classical cultural evenings, and vibrant community spirit of Sri Durga Pooja Committee (R), Mangaluru.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
