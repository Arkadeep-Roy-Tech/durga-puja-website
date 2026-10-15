"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Compass,
  Plane,
  Train,
  Bus,
  ExternalLink,
  Sparkles,
  Phone,
  Clock,
  Heart,
  Navigation,
  Globe,
  Info,
} from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";
import {
  EditorialDivider,
  CornerBrackets,
  AlpanaLotus,
} from "@/components/AlpanaOrnament";
import {
  VENUE_NAME,
  VENUE_ADDRESS,
  IMMERSION_VENUE,
  KEY_OFFICE_BEARERS,
  BHOG_SEVA_SCHEDULE,
} from "@/data/events";

export default function ContactPage() {
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    `${VENUE_NAME}, ${VENUE_ADDRESS}`
  )}`;

  return (
    <div className="bg-ivory text-charcoal min-h-screen">
      {/* =========================================================================
          PAGE HEADER
          ========================================================================= */}
      <section className="relative py-10 sm:py-14 md:py-16 bg-charcoal text-ivory border-b border-gold/30 overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--color-sindoor)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs uppercase tracking-[0.24em] font-sans">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visitor Information Desk</span>
          </div>

          {/* Tasteful Bengali Subtitle */}
          <div className="pt-1">
            <span className="font-bengali text-2xl sm:text-3xl text-gold-light tracking-wide font-bold">
              দর্শনার্থী ও যোগাযোগ কেন্দ্র
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ivory">
            Visiting <span className="italic text-gold">Sri Durga Pooja Committee</span>
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            All essential details to plan your visit to {VENUE_NAME}, Lalbagh, Mangaluru.
            We warmly welcome devotees, families, and guests from all communities.
          </p>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTACT & VISITOR DESK SECTION
          ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Official Venue & Leadership Contacts */}
            <div className="lg:col-span-6 relative p-8 rounded-xl bg-ivory-light border border-hairline-gold shadow-sm">
              <CornerBrackets />

              <div className="flex items-center gap-3 text-sindoor mb-6">
                <MapPin className="w-5 h-5 text-gold-dark" />
                <h2 className="font-serif text-2xl font-bold text-charcoal">
                  Official Venue & Contacts
                </h2>
              </div>

              <div className="space-y-4 text-sm font-sans">
                {/* Primary Venue Card */}
                <div className="p-5 rounded-lg bg-ivory border border-gold/30 space-y-3">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-sindoor block mb-1">
                      Pooja & Cultural Stage Venue
                    </span>
                    <p className="text-charcoal font-serif font-bold text-2xl">
                      {VENUE_NAME}
                    </p>
                    <p className="text-xs sm:text-sm text-charcoal/75 mt-0.5">
                      {VENUE_ADDRESS}
                    </p>
                    <p className="text-xs text-gold-dark mt-2 font-medium">
                      Central location in Lalbagh with convenient access from city transit
                      points.
                    </p>
                  </div>

                  {/* Google Maps Action */}
                  <div className="pt-2 border-t border-gold/20">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-sindoor hover:bg-sindoor-dark text-ivory text-xs font-semibold uppercase tracking-wider rounded transition-colors duration-200 shadow-xs"
                    >
                      <Navigation className="w-3.5 h-3.5 text-gold-light" />
                      <span>Get Google Maps Directions</span>
                      <ExternalLink className="w-3 h-3 text-gold-light" />
                    </a>
                  </div>
                </div>

                {/* Immersion Point */}
                <div className="p-4 rounded-lg bg-ivory border border-gold/30">
                  <span className="text-xs uppercase tracking-wider font-bold text-sindoor block mb-1">
                    Immersion Ghat (Bisarjan)
                  </span>
                  <p className="text-charcoal font-serif font-bold text-lg">
                    {IMMERSION_VENUE}
                  </p>
                  <p className="text-xs text-charcoal/75 mt-0.5">
                    The final ceremonial farewell procession terminates here on Vijaya
                    Dashami evening.
                  </p>
                </div>

                {/* Verified Committee Leadership Contacts */}
                <div className="p-5 rounded-lg bg-ivory border border-gold/30">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider font-bold text-sindoor block">
                      Official Committee Leadership Contacts
                    </span>
                    <Phone className="w-3.5 h-3.5 text-gold" />
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    {KEY_OFFICE_BEARERS.map((bearer) => (
                      <div
                        key={bearer.name}
                        className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gold/15 pb-2 last:border-b-0 last:pb-0 gap-1"
                      >
                        <div>
                          <strong className="text-charcoal font-serif text-sm">
                            {bearer.name}
                          </strong>
                          <span className="text-charcoal/60 text-xs ml-1.5">
                            ({bearer.role})
                          </span>
                        </div>
                        <a
                          href={`tel:${bearer.phone}`}
                          className="font-mono text-xs sm:text-sm text-sindoor hover:underline font-bold"
                        >
                          {bearer.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Official Domain */}
                <div className="p-4 rounded-lg bg-ivory border border-gold/30 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-sindoor block">
                      Official Website
                    </span>
                    <a
                      href="https://www.sridurgapoojacommitteemangaluru.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-sindoor hover:underline break-all inline-flex items-center gap-1 mt-0.5"
                    >
                      <span>https://www.sridurgapoojacommitteemangaluru.org/</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <Globe className="w-4 h-4 text-gold shrink-0 ml-2" />
                </div>
              </div>
            </div>

            {/* Right Column: Travel & Connectivity & Devotee Guidelines */}
            <div className="lg:col-span-6 space-y-6">
              {/* Getting to Hindi Prachar Bhavan Card */}
              <div className="p-8 rounded-xl bg-ivory-light border border-hairline-gold shadow-sm relative">
                <CornerBrackets />

                <div className="flex items-center gap-3 text-sindoor mb-6">
                  <Compass className="w-5 h-5 text-gold-dark" />
                  <h2 className="font-serif text-2xl font-bold text-charcoal">
                    Getting to Hindi Prachar Bhavan
                  </h2>
                </div>

                <div className="space-y-5 text-xs sm:text-sm font-sans">
                  {/* By Air */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-gold/15 text-sindoor shrink-0 mt-0.5">
                      <Plane className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-charcoal font-serif text-sm sm:text-base">
                        By Air:
                      </strong>
                      <span className="text-charcoal/75 leading-relaxed block mt-0.5">
                        Mangaluru International Airport (IXE) at Bajpe is approx. 12 km from
                        Lalbagh. Taxis and airport buses are readily available.
                      </span>
                    </div>
                  </div>

                  {/* By Rail */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-gold/15 text-sindoor shrink-0 mt-0.5">
                      <Train className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-charcoal font-serif text-sm sm:text-base">
                        By Rail:
                      </strong>
                      <span className="text-charcoal/75 leading-relaxed block mt-0.5">
                        Mangaluru Central (MAQ) is approx. 3.5 km away; Mangaluru Junction
                        (MAJN) is approx. 6 km away. Auto-rickshaws connect directly to
                        Lalbagh.
                      </span>
                    </div>
                  </div>

                  {/* By Road */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-gold/15 text-sindoor shrink-0 mt-0.5">
                      <Bus className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-charcoal font-serif text-sm sm:text-base">
                        By Road:
                      </strong>
                      <span className="text-charcoal/75 leading-relaxed block mt-0.5">
                        Located close to Lalbagh Circle and the Mangalore City Corporation.
                        City buses stopping at Lalbagh/KSRTC bus stand provide immediate
                        access.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Devotee Guidelines Card */}
              <div className="p-6 rounded-xl bg-charcoal text-ivory border border-gold/30 shadow-sm space-y-2 relative overflow-hidden">
                <div className="flex items-center gap-2 text-gold">
                  <Sparkles className="w-4 h-4 text-gold-light" />
                  <h3 className="font-serif font-bold text-base">
                    Devotee Guidelines
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-ivory/80 font-sans leading-relaxed">
                  Traditional Indian ethnic attire is warmly encouraged for sanctum
                  pushpanjali. Free parking assistance and volunteer help are available on
                  site at Hindi Prachar Bhavan.
                </p>
              </div>

              {/* Daily Bhog Seva Timing Note */}
              <div className="p-6 rounded-xl bg-ivory-light border border-hairline-gold space-y-3">
                <div className="flex items-center gap-2 text-sindoor">
                  <Clock className="w-4 h-4 text-gold-dark" />
                  <h3 className="font-serif font-bold text-base text-charcoal">
                    Daily Bhog Seva / Anna Daan Timings
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-ivory rounded border border-gold/20">
                    <span className="text-[10px] uppercase font-bold text-sindoor tracking-wider block">
                      Afternoon Bhog Seva
                    </span>
                    <span className="font-serif font-bold text-sm text-charcoal">
                      {BHOG_SEVA_SCHEDULE.dayTime}
                    </span>
                    <p className="text-charcoal/70 text-[11px] mt-0.5">
                      Served daily after completion of morning rituals at {BHOG_SEVA_SCHEDULE.venue}.
                    </p>
                  </div>
                  <div className="p-3 bg-ivory rounded border border-gold/20">
                    <span className="text-[10px] uppercase font-bold text-sindoor tracking-wider block">
                      Night Mahaprasad
                    </span>
                    <span className="font-serif font-bold text-sm text-charcoal">
                      {BHOG_SEVA_SCHEDULE.nightTime}
                    </span>
                    <p className="text-charcoal/70 text-[11px] mt-0.5">
                      Served daily after evening Sandhya Arati and cultural programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <EditorialDivider className="max-w-4xl mx-auto my-12" />

        {/* Welcoming Sarbojanin Note */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <AlpanaLotus className="w-8 h-8 text-gold mx-auto opacity-70" />
          <p className="font-serif text-lg text-charcoal italic">
            &ldquo;Everyone, irrespective of caste or creed, is warmly welcome to
            participate with an open heart.&rdquo;
          </p>
          <span className="text-xs uppercase tracking-widest text-sindoor font-semibold block">
            Sri Durga Pooja Committee (R), Mangaluru
          </span>
        </div>
      </section>
    </div>
  );
}
