import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visitor Information Desk & Contact",
  description:
    "Official visitor guide, verified contact details, venue directions to Hindi Prachar Bhavan in Lalbagh, and devotee guidelines for Sri Durga Pooja Committee (R), Mangaluru.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
