import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AlpanaLotus } from "./AlpanaOrnament";
import { MapPin, Phone, Globe, Calendar, Waves } from "lucide-react";
import { KEY_OFFICE_BEARERS, VENUE_NAME, VENUE_ADDRESS, IMMERSION_VENUE } from "@/data/events";

export default function Footer() {
  const currentYear = "2026";

  return (
    <footer className="relative bg-charcoal text-ivory border-t-2 border-gold/40 pt-16 pb-12 overflow-hidden">
      {/* Background Subtle Mandala */}
      <div className="absolute -top-12 -right-12 opacity-5 pointer-events-none text-gold">
        <AlpanaLotus size={320} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-ivory/10">
          {/* Column 1: Organization & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold/60 shrink-0 bg-ivory">
                <Image
                  src="/images/logo.png"
                  alt="Sri Durga Pooja Committee (R) Mangaluru Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/images/emblem-43-years.png"
                  alt="43 Years of Pooja Emblem"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold font-sans font-bold">
                  43rd Year of Durga Pooja
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-ivory">
                  Sri Durga Pooja Committee (R)
                </h3>
                <p className="text-xs text-ivory/70">Mangaluru, Karnataka</p>
              </div>
            </div>

            <p className="text-sm text-ivory/75 leading-relaxed font-sans max-w-md pt-2">
              Celebrating 43 glorious years of Sharodiya Durga Pooja in Mangaluru.
              Uniting devotees through authentic Bengali traditions, soul-stirring rituals,
              daily anna daan / bhog seva, and vibrant cultural festivities.
            </p>

            {/* Sacred Bengali Blessing */}
            <div className="pt-2">
              <span className="font-bengali text-lg text-gold font-semibold tracking-wide block">
                শারদীয় প্রীতি ও শুভেচ্ছা
              </span>
              <span className="text-xs text-ivory/60 italic font-serif">
                Warm Sharodiyo greetings and blessings to all devotees and families.
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link
                  href="/"
                  className="text-ivory/75 hover:text-gold transition-colors inline-block"
                >
                  Home & Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-ivory/75 hover:text-gold transition-colors inline-block"
                >
                  Heritage & 43-Year Journey
                </Link>
              </li>
              <li>
                <Link
                  href="/souvenir"
                  className="text-ivory/75 hover:text-gold transition-colors inline-block"
                >
                  Puja Souvenir (শারদীয় স্মরণিকা)
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-ivory/75 hover:text-gold transition-colors inline-block"
                >
                  Complete 2026 Pooja Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-ivory/75 hover:text-gold transition-colors inline-block"
                >
                  Photographs & Visitor Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Contacts & Location */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Official Venue & Contacts
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-ivory/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div>
                  <span className="block text-ivory/50 text-[10px] uppercase tracking-wider font-semibold">
                    Pooja Venue
                  </span>
                  <span className="font-semibold text-ivory">{VENUE_NAME}</span>
                  <span className="block text-xs text-ivory/70">{VENUE_ADDRESS}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Waves className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div>
                  <span className="block text-ivory/50 text-[10px] uppercase tracking-wider font-semibold">
                    Immersion Ghat (Bisarjan)
                  </span>
                  <span className="text-xs text-ivory/80">{IMMERSION_VENUE}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div>
                  <span className="block text-ivory/50 text-[10px] uppercase tracking-wider font-semibold">
                    Committee Office Bearers
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 mt-1 text-xs">
                    {KEY_OFFICE_BEARERS.map((bearer) => (
                      <div key={bearer.name}>
                        <span className="text-gold-light font-medium">{bearer.role}: </span>
                        <a
                          href={`tel:${bearer.phone}`}
                          className="hover:text-gold hover:underline font-mono"
                        >
                          {bearer.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div>
                  <span className="block text-ivory/50 text-[10px] uppercase tracking-wider font-semibold">
                    Official Website
                  </span>
                  <a
                    href="https://www.sridurgapoojacommitteemangaluru.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-light hover:underline font-mono text-xs break-all"
                  >
                    https://www.sridurgapoojacommitteemangaluru.org/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <p>
            © {currentYear} Sri Durga Pooja Committee (R), Mangaluru. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>43rd Year Sharadotsav</span>
            <span className="text-sindoor-light">♦</span>
            <span>Hindi Prachar Bhavan, Lalbagh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
