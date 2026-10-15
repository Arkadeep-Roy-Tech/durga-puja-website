import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sharodiya Smaranika | 43rd Year Durga Pooja Souvenir",
  description:
    "Read the official 66-page digital souvenir of Sri Durga Pooja Committee, Mangaluru. Featuring sacred blessings, spiritual articles, Bengali literature, and community memories.",
};

export default function SouvenirLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
