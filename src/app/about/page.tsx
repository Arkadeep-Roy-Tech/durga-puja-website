import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Sparkles,
  Flame,
  Music,
  Heart,
  Calendar,
  Compass,
  ArrowRight,
  Award,
  Users,
  BookOpen,
  MapPin,
  CheckCircle2,
  Clock,
  Quote,
  HandHeart,
  Palette,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import {
  EditorialDivider,
  CornerBrackets,
  TrishulEmblem,
} from "@/components/AlpanaOrnament";
import {
  FESTIVAL_EDITION,
  VENUE_NAME,
  VENUE_ADDRESS,
  KEY_OFFICE_BEARERS,
} from "@/data/events";

export const metadata: Metadata = {
  title: "Our 43-Year Journey & Heritage",
  description:
    "Discover the official 43-year journey of Sri Durga Pooja Committee (R), Mangaluru. From our beginnings in 1984 at Palki Hall to our home at Hindi Prachar Bhavan, Lalbagh since 2012.",
};

export default function AboutPage() {
  return (
    <div className="bg-ivory text-charcoal min-h-screen">
      {/* =========================================================================
          PAGE HEADER (Editorial Banner with 43-Year Milestone)
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-charcoal text-ivory overflow-hidden border-b border-gold/30">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mandap-panorama.jpg"
            alt="Durga Mandap Panorama"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/90 to-charcoal" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 text-gold text-xs uppercase tracking-[0.22em] font-sans bg-charcoal/60 backdrop-blur-md">
            <div className="relative w-4 h-4 rounded-full overflow-hidden shrink-0">
              <Image
                src="/images/emblem-43-years.png"
                alt="43 Years"
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
            <span>{FESTIVAL_EDITION} Celebrations (1984 – 2026)</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ivory">
            The Living Spirit of <span className="italic text-gold">Sharadotsav</span>
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Celebrating 43 years of sacred traditions, devotion, and cross-cultural
            togetherness in Mangaluru, Karnataka.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: OUR 43-YEAR JOURNEY (OFFICIAL COMMITTEE CONTENT)
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 bg-gold/10 text-sindoor text-xs uppercase tracking-[0.22em] font-sans font-bold">
              <Clock className="w-3.5 h-3.5 text-gold-dark" />
              <span>Official Committee History</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
              Our 43-Year Journey
            </h2>
            <div className="pt-1">
              <span className="font-bengali text-lg sm:text-xl text-gold-dark font-medium tracking-wide">
                সার্বজনীন দুর্গোৎসবের চার দশকের পবিত্র পদযাত্রা
              </span>
            </div>
            <p className="text-sm sm:text-base text-charcoal/70 font-sans max-w-2xl mx-auto pt-2 leading-relaxed">
              At its heart, our puja is a sincere expression of worship that brings people
              together as one community.
            </p>
          </div>

          {/* HISTORICAL MILESTONES TIMELINE (1984 • 2012 • 2026) */}
          <div className="relative mb-20">
            {/* Connecting Timeline Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-gold/30 via-sindoor/40 to-gold/30 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Milestone 1: 1984 */}
              <div className="relative p-6 sm:p-8 rounded-xl bg-ivory-light border border-hairline-gold shadow-sm hover:shadow-md transition-shadow">
                <CornerBrackets />
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sindoor text-ivory text-xs font-mono font-bold tracking-wider mb-4 shadow-xs">
                  <span>1984</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-3">
                  The Beginning of Our Journey
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/80 font-sans leading-relaxed">
                  Our journey began in 1984, when we started organizing Sri Durga Puja
                  alongside <strong>Sri Laxmi, Sri Kali and Sri Saraswati Mata Puja</strong>{" "}
                  in community halls such as <em>Palki Hall</em> and <em>Scout Hall</em>.
                </p>
              </div>

              {/* Milestone 2: 2012 */}
              <div className="relative p-6 sm:p-8 rounded-xl bg-ivory-light border border-hairline-gold shadow-sm hover:shadow-md transition-shadow">
                <CornerBrackets />
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-dark text-ivory text-xs font-mono font-bold tracking-wider mb-4 shadow-xs">
                  <span>2012</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-3">
                  A Cherished Home in Lalbagh
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/80 font-sans leading-relaxed">
                  Since 2012, <strong>Hindi Prachar Bhavan</strong> in Lalbagh has been our
                  cherished home, providing a central sanctum for daily worship, cultural
                  performances, and sacred bhog seva.
                </p>
              </div>

              {/* Milestone 3: 2026 */}
              <div className="relative p-6 sm:p-8 rounded-xl bg-ivory-light border border-hairline-gold shadow-sm hover:shadow-md transition-shadow">
                <CornerBrackets />
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sindoor text-ivory text-xs font-mono font-bold tracking-wider mb-4 shadow-xs">
                  <span>2026</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-3">
                  Celebrating 43 Glorious Years
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/80 font-sans leading-relaxed">
                  Now, in 2026, we proudly celebrate <strong>43 years</strong> of sacred
                  traditions, devotion, and togetherness, uniting devotees across coastal
                  Karnataka in celebration.
                </p>
              </div>
            </div>
          </div>

          {/* SARBOJANIN PUJA PULLQUOTE (Special Highlight Banner) */}
          <div className="relative p-8 sm:p-12 rounded-2xl bg-charcoal text-ivory border-2 border-gold/40 shadow-xl mb-16 overflow-hidden">
            {/* Subtle decorative glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-sindoor/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-gold mx-auto opacity-70" />

              <p className="font-serif text-lg sm:text-2xl md:text-3xl text-ivory leading-relaxed italic">
                &ldquo;For us, the word &lsquo;we&rsquo; extends far beyond the Bengali
                Samaj. It embraces the enthusiastic participation of people from all
                communities who share the same spirit of devotion.&rdquo;
              </p>

              <div className="pt-3 pb-2">
                <span className="inline-block px-5 py-2 rounded-full bg-sindoor/80 border border-gold/40 text-gold-light font-serif text-sm sm:text-base font-bold tracking-widest uppercase shadow-md">
                  SARBOJANIN PUJA — A Puja for Everyone
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-ivory/80 max-w-2xl mx-auto leading-relaxed">
                Today, we are proud that this ideal is reflected in the true spirit of our
                celebration.
              </p>
            </div>
          </div>

          {/* EDITORIAL NARRATIVE & CORE TENETS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* Left Column: Inclusivity & Cultural Expression */}
            <div className="lg:col-span-6 space-y-6">
              {/* Inclusivity Card */}
              <div className="p-6 sm:p-8 rounded-xl bg-ivory-light border border-hairline-gold space-y-3">
                <div className="flex items-center gap-2.5 text-sindoor">
                  <Heart className="w-5 h-5 text-gold-dark" />
                  <h3 className="font-serif text-xl font-bold text-charcoal">
                    Open Hearts, Warmly Welcomed
                  </h3>
                </div>
                <p className="text-sm text-charcoal/80 font-sans leading-relaxed">
                  Everyone, irrespective of caste or creed, is warmly welcome to
                  participate with an open heart. We invite all to feel that this is their
                  own celebration, while respecting the discipline and guidelines
                  established by the Puja Committee.
                </p>
              </div>

              {/* Cultural Excellence Card */}
              <div className="p-6 sm:p-8 rounded-xl bg-ivory-light border border-hairline-gold space-y-3">
                <div className="flex items-center gap-2.5 text-sindoor">
                  <Palette className="w-5 h-5 text-gold-dark" />
                  <h3 className="font-serif text-xl font-bold text-charcoal">
                    Arts, Heritage & Youth Contests
                  </h3>
                </div>
                <p className="text-sm text-charcoal/80 font-sans leading-relaxed">
                  Alongside traditional worship, we organize cultural programs featuring
                  dance, drama and drawing competitions for schoolchildren, always striving
                  to maintain high artistic and cultural standards.
                </p>
              </div>
            </div>

            {/* Right Column: Community Service & Togetherness */}
            <div className="lg:col-span-6 space-y-6">
              {/* Community Service & Anna Dan Card */}
              <div className="p-6 sm:p-8 rounded-xl bg-ivory-light border border-hairline-gold space-y-3">
                <div className="flex items-center gap-2.5 text-sindoor">
                  <HandHeart className="w-5 h-5 text-gold-dark" />
                  <h3 className="font-serif text-xl font-bold text-charcoal">
                    Anna Dan & Social Worker Felicitation
                  </h3>
                </div>
                <p className="text-sm text-charcoal/80 font-sans leading-relaxed">
                  Our commitment also extends to community service. During the festival, we
                  organize <strong>Anna Dan</strong> for people from all communities and
                  honor dedicated social workers whose quiet contributions make a meaningful
                  difference.
                </p>
              </div>

              {/* Memories & Fellowship Card */}
              <div className="p-6 sm:p-8 rounded-xl bg-ivory-light border border-hairline-gold space-y-3">
                <div className="flex items-center gap-2.5 text-sindoor">
                  <Users className="w-5 h-5 text-gold-dark" />
                  <h3 className="font-serif text-xl font-bold text-charcoal">
                    One Large Family
                  </h3>
                </div>
                <p className="text-sm text-charcoal/80 font-sans leading-relaxed">
                  As the festival draws to a close, we return home with the blessings of the
                  Divine, a deep sense of peace and cherished memories of togetherness. The
                  smiles, shared joy and friendships remind us that we are one large family.
                  No sooner does the celebration end than we begin counting the days until we
                  meet again for the next puja.
                </p>
              </div>
            </div>
          </div>

          {/* GRATITUDE TO MANGALURU BOX */}
          <div className="p-8 sm:p-10 rounded-2xl bg-ivory-light border border-gold/40 shadow-sm relative text-center max-w-4xl mx-auto space-y-4">
            <CornerBrackets />

            <div className="inline-flex items-center gap-2 text-sindoor text-xs uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Heartfelt Gratitude</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
              To the People & Administration of Mangaluru
            </h3>

            <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
              Finally, we extend our heartfelt gratitude to the people and administration of
              Mangaluru. Your continued kindness, cooperation and support make it possible
              for us to celebrate these sacred traditions year after year.
            </p>

            <div className="pt-2">
              <span className="font-serif italic text-lg sm:text-xl text-sindoor font-bold block">
                &ldquo;Thank you for being part of our journey.&rdquo;
              </span>
              <span className="text-xs text-charcoal/60 font-mono uppercase tracking-wider block mt-1">
                — Sri Durga Pooja Committee (R), Mangaluru
              </span>
            </div>
          </div>
        </FadeIn>
      </section>

      <EditorialDivider className="max-w-4xl mx-auto" />

      {/* =========================================================================
          SECTION 2: SACRED RITUALS & ARTISAN CRAFTSMANSHIP
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column: Panoramic Golden Mandap */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="relative h-80 sm:h-[420px] rounded-lg overflow-hidden border border-hairline-gold shadow-md bg-ivory-light">
                <Image
                  src="/images/mandap-panorama.jpg"
                  alt="Full Golden Mandap with the entire celestial pantheon"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <p className="text-xs text-charcoal/70 mt-2 italic text-center">
                The golden carved sanctum sanctorum at Hindi Prachar Bhavan, Lalbagh.
              </p>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-sindoor font-semibold font-sans">
                Sacred Tradition
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal leading-tight">
                Sholar Daak & Ancient Shastric Purity
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans">
                <p>
                  The pratima of Maa Durga stands tall in the classic <em>Ekchala</em> or
                  carved arch style, adorned with handcrafted <em>Sholar Daak</em>—the
                  pristine white pith ornamentation carved with ancestral precision.
                </p>
                <p>
                  Every detail follows Vedic shastras: the nine sacred botanical herbs of
                  Nabapatrika representing nature&apos;s maternal bounty, the solemn offering
                  of 108 fresh lotuses during Sandhi Puja, and the sacred oblation
                  (Havan) invoking universal peace.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-4 rounded bg-ivory-light border border-hairline-gold">
                  <h4 className="font-serif font-bold text-sindoor mb-1">
                    Daily Anna Daan
                  </h4>
                  <p className="text-charcoal/70">
                    Sacred Bhog Prasadam served twice daily (1:30–3:00 PM & 10:00–11:00
                    PM) throughout the festival.
                  </p>
                </div>
                <div className="p-4 rounded bg-ivory-light border border-hairline-gold">
                  <h4 className="font-serif font-bold text-sindoor mb-1">
                    Cultural Contests
                  </h4>
                  <p className="text-charcoal/70">
                    Dhunuchi dance competition, drawing contest for children, and traditional
                    Ulu & Shanka Dhwani competitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* =========================================================================
          SECTION 3: VERIFIED COMMITTEE STRUCTURE & LEADERSHIP
          ========================================================================= */}
      <section className="py-20 bg-ivory-dark/40 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-sindoor font-semibold font-sans">
                Organization & Stewardship
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
                Sri Durga Pooja Committee Structure
              </h2>
              <p className="text-sm sm:text-base text-charcoal/70 font-sans">
                Dedicated office bearers, advisory council, and specialized volunteer teams
                ensuring smooth coordination for the 43rd celebration.
              </p>
            </div>
          </FadeIn>

          {/* Key Office Bearers Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {KEY_OFFICE_BEARERS.map((bearer) => (
              <div
                key={bearer.name}
                className="p-6 rounded-lg bg-ivory-light border border-hairline-gold shadow-xs relative text-center flex flex-col justify-between"
              >
                <CornerBrackets />
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-gold font-bold">
                    {bearer.role}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-charcoal mt-2">
                    {bearer.name}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-gold/20">
                  <a
                    href={`tel:${bearer.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-sindoor hover:underline"
                  >
                    <span>Mob: {bearer.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Departmental Teams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm font-sans">
            <div className="p-6 rounded-lg bg-ivory-light border border-hairline-gold space-y-2">
              <h4 className="font-serif text-base font-bold text-sindoor flex items-center gap-2">
                <Award className="w-4 h-4 text-gold" />
                <span>Advisors & Secretarial</span>
              </h4>
              <p className="text-charcoal/80">
                <strong>Chief Advisors:</strong> Sri Shivkumar Sharma, Sri Yudhister Sharma
              </p>
              <p className="text-charcoal/80">
                <strong>Joint Secretaries:</strong> Dilip Chakraborty, Abhishek Ghosh,
                Rakesh Kole
              </p>
              <p className="text-charcoal/80">
                <strong>Souvenir Editors:</strong> Dr. Pratik Chatterjee, Arkadeep Roy,
                Mahima Biswas
              </p>
            </div>

            <div className="p-6 rounded-lg bg-ivory-light border border-hairline-gold space-y-2">
              <h4 className="font-serif text-base font-bold text-sindoor flex items-center gap-2">
                <Music className="w-4 h-4 text-gold" />
                <span>Culture & Hospitality</span>
              </h4>
              <p className="text-charcoal/80">
                <strong>Cultural Secretary & Team:</strong> Dr. Sourjya Banerjee, Nibedita
                Sarkar, Ranjita Biswas, Tannista Bagchi
              </p>
              <p className="text-charcoal/80">
                <strong>Reception & Hospitality:</strong> Pradip Bakshi, Raja
                Mukhopadhyay, Ahin Nandi, Dr. Anirban Bagchi, Sukumal Biswas, Sukumal
                Nath, Santanu Saha, Biswanath Sarkar, Ramananda Chatterjee
              </p>
            </div>

            <div className="p-6 rounded-lg bg-ivory-light border border-hairline-gold space-y-2">
              <h4 className="font-serif text-base font-bold text-sindoor flex items-center gap-2">
                <Heart className="w-4 h-4 text-gold" />
                <span>Pooja, Bhog & Immersion</span>
              </h4>
              <p className="text-charcoal/80">
                <strong>Bhog Arrangement:</strong> Prabhash Kumar Chakraborty, Subhra
                Chakraborty, Roopa Chakraborty, Barnali Bera, Saswati Chakraborty, Chandra
                Mandal, Uma Maji
              </p>
              <p className="text-charcoal/80">
                <strong>Immersion Team:</strong> Ranjit Mandal, Shyam Sundar Saha,
                Chittyaranjan Saha, Saikat Parui, Panchanan Dwari, Bimal Dolui
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: COMMITTEE PHOTOGRAPH & GUEST OF HONOUR INVITATION
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <FadeIn>
          <div className="relative p-8 sm:p-12 rounded-2xl bg-ivory-light border border-hairline-gold shadow-md">
            <CornerBrackets />

            <div className="relative h-64 sm:h-96 rounded-lg overflow-hidden border border-gold/30 mb-8 shadow-inner">
              <Image
                src="/images/committee-gathering.jpg"
                alt="Committee gathering at the mandap"
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover object-top"
              />
            </div>

            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-sindoor font-semibold font-sans">
                An Open Cultural Invitation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
                Welcome to Our 43rd Sharadotsav
              </h2>
              <p className="text-sm sm:text-base text-charcoal/80 font-sans leading-relaxed">
                Whether you wish to offer pushpanjali at dawn, partake in the sacred
                midday bhog prasadam, participate in the Dhunuchi or Shanka Dhwani
                contests, or join the grand immersion procession along the Gurupura River,
                we warmly welcome you and your family.
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sindoor text-ivory font-sans text-xs uppercase tracking-widest font-semibold rounded hover:bg-sindoor-dark transition-colors"
                >
                  <Calendar className="w-4 h-4 text-gold-light" />
                  <span>View 2026 Schedule</span>
                </Link>
                <Link
                  href="/souvenir"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-gold/40 text-charcoal font-sans text-xs uppercase tracking-widest font-semibold rounded hover:bg-gold/10 transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-sindoor" />
                  <span>Read Souvenir Online</span>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
