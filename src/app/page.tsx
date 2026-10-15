import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Sparkles,
  Flame,
  Music,
  HeartHandshake,
  Clock,
  MapPin,
  ChevronRight,
  UtensilsCrossed,
  Award,
} from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HeroScaleEntrance,
} from "@/components/MotionWrapper";
import {
  EditorialDivider,
  AlpanaLotus,
  CornerBrackets,
  TrishulEmblem,
} from "@/components/AlpanaOrnament";
import {
  FESTIVAL_YEAR,
  FESTIVAL_EDITION,
  FESTIVAL_DATES,
  VENUE_NAME,
  VENUE_ADDRESS,
  INAUGURATION_DETAILS,
  DEVI_ASTROLOGICAL_SIGN,
  BHOG_SEVA_SCHEDULE,
} from "@/data/events";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-ivory">
      {/* =========================================================================
          HERO SECTION (Cinematic Editorial Durga Puja Hero with Verified Maa Durga)
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center text-ivory px-4 sm:px-6 lg:px-8 py-20 bg-charcoal overflow-hidden">
        {/* Cinematic Background Image using Actual Maa Durga Pratima */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/maa-durga-portrait.jpg"
            alt="Actual Sri Sri Durga Pratima of Sri Durga Pooja Committee Mangaluru"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-30 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/50" />
          <div className="absolute inset-0 bg-radial from-transparent via-charcoal/40 to-charcoal/90" />
        </div>

        {/* Subtle Background Alpana Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10 text-gold">
          <AlpanaLotus size={640} />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <HeroScaleEntrance>
            {/* Top Ornamental Milestone Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/40 bg-charcoal/70 backdrop-blur-md text-gold text-xs uppercase tracking-[0.25em] font-sans">
              <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/images/emblem-43-years.png"
                  alt="43 Years"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <span className="font-semibold text-gold-light">
                {FESTIVAL_EDITION} of Durga Pooja in Mangaluru (1984 – {FESTIVAL_YEAR})
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-sindoor-light" />
            </div>

            {/* Sacred Bengali Heading */}
            <h1 className="mt-6 font-bengali text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide text-gold-light drop-shadow-md">
              শুভ দুর্গাপূজা
            </h1>

            {/* Refined English Headline */}
            <div className="mt-4 space-y-2">
              <p className="text-xs sm:text-sm md:text-base font-sans tracking-[0.28em] uppercase text-ivory/85 font-semibold">
                Sri Durga Pooja Committee (R), Mangaluru
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ivory max-w-4xl mx-auto leading-tight">
                A 43-Year Legacy of <span className="italic font-normal text-gold">Devotion</span>,
                Culture & Divine Grace
              </h2>
            </div>

            {/* Welcoming Subtitle with Verified Venue and Dates */}
            <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-ivory/85 font-sans font-light leading-relaxed">
              We cordially invite you, your family and friends to celebrate Sri Sri Durga
              Pooja from <strong className="text-gold font-normal">{FESTIVAL_DATES}</strong> at{" "}
              <strong className="text-gold font-normal">“{VENUE_NAME}”</strong>, Lalbagh, Mangaluru.
            </p>

            {/* Working Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2">
              <Link
                href="/events"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-sindoor text-ivory font-sans text-xs uppercase tracking-[0.18em] font-semibold rounded hover:bg-sindoor-light transition-all duration-300 shadow-lg hover:shadow-sindoor/30 focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <Calendar className="w-4 h-4 text-gold-light" />
                <span>2026 Festival Schedule</span>
              </Link>

              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-transparent text-ivory font-sans text-xs uppercase tracking-[0.18em] font-medium rounded border border-gold/50 hover:bg-gold/15 hover:border-gold transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <span>43 Years of Heritage</span>
                <ArrowRight className="w-4 h-4 text-gold-light" />
              </Link>
            </div>

            {/* Verified Information Ribbon */}
            <div className="mt-14 pt-8 border-t border-gold/20 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans text-ivory/80">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-gold shrink-0" />
                <span>15th – 21st October 2026</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>Hindi Prachar Bhavan, Lalbagh</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Award className="w-4 h-4 text-gold shrink-0" />
                <span>Inauguration: 16th Oct at 7:30 PM</span>
              </div>
            </div>
          </HeroScaleEntrance>
        </div>
      </section>

      {/* =========================================================================
          VERIFIED INAUGURAL FUNCTION HIGHLIGHT CARD
          ========================================================================= */}
      <section className="relative -mt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="bg-ivory-light border border-hairline-gold rounded-xl p-6 sm:p-8 shadow-xl relative">
          <CornerBrackets />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sindoor">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Solemn Inaugural Function</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal">
                Inauguration of Sharodiya Durga Pooja 2026
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/80 font-sans">
                <strong>{INAUGURATION_DETAILS.date} at {INAUGURATION_DETAILS.time}</strong> at{" "}
                {INAUGURATION_DETAILS.venue}
              </p>
              <div className="pt-2 text-xs text-charcoal/70 space-y-1">
                <p>
                  <strong>Chief Guest:</strong> {INAUGURATION_DETAILS.chiefGuest.name} (
                  {INAUGURATION_DETAILS.chiefGuest.title})
                </p>
                <p>
                  <strong>Guest of Honour:</strong> {INAUGURATION_DETAILS.guestOfHonour.name} (
                  {INAUGURATION_DETAILS.guestOfHonour.title})
                </p>
                <p>
                  <strong>Special Guest:</strong> {INAUGURATION_DETAILS.specialGuest.name} (
                  {INAUGURATION_DETAILS.specialGuest.title})
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center gap-3">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gold shadow-md">
                <Image
                  src="/images/emblem-43-years.png"
                  alt="43 Years of Pooja"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[11px] font-mono text-sindoor font-bold uppercase tracking-wider">
                Mangaluru
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SACRED INVOCATION & DEVI'S TRANSIT
          ========================================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-sindoor font-semibold font-sans">
              Sacred Invocations & Celestial Sign
            </span>
            <h3 className="font-bengali text-2xl sm:text-3xl md:text-4xl text-sindoor font-bold tracking-wide">
              যা দেবী সর্বভূতেষু মাতৃরূপেণ সংস্থিতা।<br className="hidden sm:inline" />
              নমস্তস্যৈ নমস্তস্যৈ নমস্তস্যৈ নমো নমঃ॥
            </h3>
            <p className="font-serif italic text-base sm:text-lg text-charcoal/80 max-w-2xl mx-auto">
              &ldquo;To the Divine Mother who abides in all beings as consciousness,
              compassion, and strength—salutations unto Her, salutations again and again.&rdquo;
            </p>
          </div>

          <EditorialDivider className="my-10" />

          {/* Devi Transit Grid & Anna Daan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-2">
            {/* Devi Agamon & Gomon */}
            <div className="p-6 rounded-lg bg-ivory-light border border-hairline-gold shadow-xs space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                  Panjika Astrological Observation
                </span>
                <h4 className="font-serif text-xl font-bold text-charcoal mt-1">
                  Devi Agamon & Gomon (2026)
                </h4>
                <div className="mt-4 space-y-3 text-xs sm:text-sm font-sans">
                  <div className="p-3 rounded bg-ivory border border-gold/20">
                    <span className="font-bold text-sindoor block">Devi Agamon (Arrival):</span>
                    <span className="text-charcoal font-medium">{DEVI_ASTROLOGICAL_SIGN.agamon.vehicle}</span>
                    <span className="block text-charcoal/70 text-xs italic mt-0.5">
                      Significance: {DEVI_ASTROLOGICAL_SIGN.agamon.significance}
                    </span>
                  </div>
                  <div className="p-3 rounded bg-ivory border border-gold/20">
                    <span className="font-bold text-sindoor block">Devi Gomon (Departure):</span>
                    <span className="text-charcoal font-medium">{DEVI_ASTROLOGICAL_SIGN.gomon.vehicle}</span>
                    <span className="block text-charcoal/70 text-xs italic mt-0.5">
                      Significance: {DEVI_ASTROLOGICAL_SIGN.gomon.significance}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bhog Seva / Anna Daan Highlight */}
            <div className="p-6 rounded-lg bg-ivory-light border border-hairline-gold shadow-xs space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-sindoor">
                  <UtensilsCrossed className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                    Sacred Anna Daan
                  </span>
                </div>
                <h4 className="font-serif text-xl font-bold text-charcoal mt-1">
                  Bhog Seva Distribution (6 Days)
                </h4>
                <p className="text-xs sm:text-sm text-charcoal/75 mt-2 font-sans">
                  From 16th to 21st October 2026, sanctified Bhog Prasadam will be
                  served daily to all devotees and visitors after pooja completion:
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3 text-xs font-sans">
                  <div className="p-3 rounded bg-ivory border border-gold/25">
                    <span className="font-bold text-sindoor block">Day Bhog:</span>
                    <span className="text-charcoal font-mono">{BHOG_SEVA_SCHEDULE.dayTime}</span>
                  </div>
                  <div className="p-3 rounded bg-ivory border border-gold/25">
                    <span className="font-bold text-sindoor block">Night Bhog:</span>
                    <span className="text-charcoal font-mono">{BHOG_SEVA_SCHEDULE.nightTime}</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-charcoal/60 italic">
                * Served with love at Hindi Prachar Bhavan Dining Hall.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* =========================================================================
          THREE FESTIVAL HIGHLIGHTS
          ========================================================================= */}
      <section className="py-20 bg-ivory-dark/40 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-sindoor font-semibold font-sans">
                Signature Celebrations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
                Key Events in the 43rd Celebration
              </h2>
              <p className="text-sm sm:text-base text-charcoal/70 font-sans">
                From sacred Vedic rituals and Sandhi Puja to exhilarating competitions
                and community performances.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <StaggerItem>
              <div className="group relative bg-ivory-light p-8 rounded-lg border border-hairline-gold hover:border-gold/60 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col h-full">
                <CornerBrackets />
                <div className="w-12 h-12 rounded-full bg-sindoor/10 text-sindoor flex items-center justify-center mb-6 group-hover:bg-sindoor group-hover:text-ivory transition-colors duration-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-gold font-semibold mb-1">
                  18th Oct • Maha Ashtami
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-3 group-hover:text-sindoor transition-colors">
                  Ulu & Shanka Dhwani
                </h3>
                <p className="text-sm text-charcoal/75 leading-relaxed font-sans mb-6 flex-1">
                  Experience traditional conch-blowing and auspicious ululation contests,
                  followed by joyful community Garba and Dandiya dance celebrations in the
                  evening.
                </p>
                <div className="pt-4 border-t border-gold/20 flex items-center justify-between text-xs font-semibold text-sindoor">
                  <span>Evening Competitions</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </StaggerItem>

            {/* Card 2 */}
            <StaggerItem>
              <div className="group relative bg-ivory-light p-8 rounded-lg border border-hairline-gold hover:border-gold/60 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col h-full">
                <CornerBrackets />
                <div className="w-12 h-12 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-charcoal transition-colors duration-300">
                  <Flame className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-gold font-semibold mb-1">
                  19th Oct • 9:00 PM
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-3 group-hover:text-sindoor transition-colors">
                  Dhunuchi Dance Contest
                </h3>
                <p className="text-sm text-charcoal/75 leading-relaxed font-sans mb-6 flex-1">
                  The crowning visual spectacle of Sharadotsav. Youth and devotees
                  balance smoking earthen braziers billowing fragrant sal resin, dancing
                  to thunderous dhaak beats.
                </p>
                <div className="pt-4 border-t border-gold/20 flex items-center justify-between text-xs font-semibold text-sindoor">
                  <span>Annual Competition</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </StaggerItem>

            {/* Card 3 */}
            <StaggerItem>
              <div className="group relative bg-ivory-light p-8 rounded-lg border border-hairline-gold hover:border-gold/60 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col h-full">
                <CornerBrackets />
                <div className="w-12 h-12 rounded-full bg-sindoor/10 text-sindoor flex items-center justify-center mb-6 group-hover:bg-sindoor group-hover:text-ivory transition-colors duration-300">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-gold font-semibold mb-1">
                  21st Oct • Vijaya Dashami
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-3 group-hover:text-sindoor transition-colors">
                  Sindur Khela & Shobhayatra
                </h3>
                <p className="text-sm text-charcoal/75 leading-relaxed font-sans mb-6 flex-1">
                  Devi Baran and Sindur Khela (4:00 PM – 6:00 PM), followed by the grand
                  Visarjan Shobhayatra procession to Gurupura River at Sultan Bathery Ghat.
                </p>
                <div className="pt-4 border-t border-gold/20 flex items-center justify-between text-xs font-semibold text-sindoor">
                  <span>Immersion Procession</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================================
          GALLERY PREVIEW WITH ACTUAL COMMITTEE PHOTOGRAPHS
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-sindoor font-semibold font-sans">
                Authentic Photography
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-1">
                Glimpses from Sri Durga Pooja Committee
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-sindoor hover:text-sindoor-dark group"
            >
              <span>Explore All Photographs & Lightbox</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link
              href="/gallery"
              className="group relative h-80 rounded-lg overflow-hidden border border-hairline-gold shadow-sm bg-ivory-light"
            >
              <Image
                src="/images/maa-durga-portrait.jpg"
                alt="Actual Sri Sri Durga Pratima"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs text-gold font-mono uppercase tracking-widest">
                  Pratima
                </span>
                <h4 className="font-serif text-lg font-bold text-ivory">
                  Sri Sri Durga Pratima
                </h4>
              </div>
            </Link>

            <Link
              href="/gallery"
              className="group relative h-80 rounded-lg overflow-hidden border border-hairline-gold shadow-sm bg-ivory-light"
            >
              <Image
                src="/images/mandap-panorama.jpg"
                alt="Golden Mandap Stage at Hindi Prachar Bhavan"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs text-gold font-mono uppercase tracking-widest">
                  Sanctum
                </span>
                <h4 className="font-serif text-lg font-bold text-ivory">
                  Grand Golden Mandap
                </h4>
              </div>
            </Link>

            <Link
              href="/gallery"
              className="group relative h-80 rounded-lg overflow-hidden border border-hairline-gold shadow-sm bg-ivory-light"
            >
              <Image
                src="/images/devi-baran.jpg"
                alt="Devi Baran with Betel Leaf and Vermillion"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs text-gold font-mono uppercase tracking-widest">
                  Rituals
                </span>
                <h4 className="font-serif text-lg font-bold text-ivory">
                  Devi Baran & Sindur Khela
                </h4>
              </div>
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
