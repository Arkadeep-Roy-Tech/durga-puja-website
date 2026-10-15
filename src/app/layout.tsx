import type { Metadata } from "next";
import { Cormorant_Garamond, Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sri Durga Pooja Committee, Mangaluru | Sharadotsav Celebrations",
    template: "%s | Sri Durga Pooja Committee, Mangaluru",
  },
  description:
    "Official cultural festival portal of Sri Durga Pooja Committee, Mangaluru. Celebrating timeless Bengali Durga Puja traditions, devotion, art, music, and community spirit in coastal Karnataka.",
  keywords: [
    "Sri Durga Pooja Committee Mangaluru",
    "Durga Puja Mangaluru",
    "Mangaluru Durga Puja",
    "Sharadotsav Mangalore",
    "Bengali Durga Puja Karnataka",
    "Dhaak",
    "Dhunuchi Naach",
    "Sindoor Khela",
  ],
  metadataBase: new URL("https://www.sridurgapoojacommitteemangaluru.org"),
  openGraph: {
    title: "Sri Durga Pooja Committee, Mangaluru",
    description:
      "A celebration of grace, Bengali cultural heritage, and timeless devotion in Mangaluru.",
    url: "https://www.sridurgapoojacommitteemangaluru.org",
    siteName: "Sri Durga Pooja Committee, Mangaluru",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.sridurgapoojacommitteemangaluru.org",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${hindSiliguri.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-ivory text-charcoal antialiased selection:bg-sindoor selection:text-ivory">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
