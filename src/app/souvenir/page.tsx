"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Download,
  Calendar,
  Sparkles,
  FileText,
  Award,
  Layers,
  CheckCircle2,
  Share2,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";
import {
  EditorialDivider,
  CornerBrackets,
  AlpanaLotus,
} from "@/components/AlpanaOrnament";
import { SOUVENIR_METADATA } from "@/data/souvenir";

import SouvenirFlipbook from "@/components/SouvenirFlipbook";

export default function SouvenirPage() {
  return (
    <div className="bg-ivory text-charcoal min-h-screen">
      {/* =========================================================================
          PAGE HERO HEADER
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 bg-charcoal text-ivory border-b border-gold/30 overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--color-sindoor)_0%,_transparent_75%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs uppercase tracking-[0.24em] font-sans">
            <BookOpen className="w-3.5 h-3.5" />
            <span>43rd Annual Sharadotsav Commemorative Publication</span>
          </div>

          {/* Bengali Title */}
          <div className="pt-1">
            <span className="font-bengali text-2xl sm:text-3xl md:text-4xl text-gold-light tracking-wide font-bold">
              শারদীয় স্মরণিকা
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ivory">
            Our <span className="italic text-gold">Souvenir</span>
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            A timeless collection of blessings from revered monks, spiritual essays,
            literary works, community reflections, and the 43-year history of
            Sri Durga Pooja Committee, Mangaluru.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-3 text-xs font-mono text-gold-light uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
              <span>Complete 66 Pages</span>
            </span>
            <span className="text-ivory/20">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold" />
              <span>Edition 2026</span>
            </span>
            <span className="text-ivory/20">•</span>
            <a
              href={SOUVENIR_METADATA.pdfDownloadUrl}
              download={SOUVENIR_METADATA.pdfFileName}
              className="inline-flex items-center gap-1.5 text-sindoor-light hover:text-gold transition-colors font-bold underline underline-offset-4"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF ({SOUVENIR_METADATA.pdfFileSizeMB})</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN DIGITAL BOOK READING SECTION
          ========================================================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          {/* Section Introduction */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-sindoor text-xs uppercase tracking-widest font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Interactive Digital Book</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                Read Sharodiya Smaranika Online
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-charcoal/70 max-w-md font-sans">
              Enjoy an authentic two-page facing reader on desktop or a mobile-optimized
              single-page view with touch swipe support.
            </p>
          </div>

          {/* Dynamic Interactive Flipbook Reader */}
          <SouvenirFlipbook />
        </FadeIn>
      </section>

      <EditorialDivider className="max-w-5xl mx-auto my-8" />

      {/* =========================================================================
          EDITORIAL ABOUT THE SOUVENIR
          ========================================================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Magazine Cover Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full p-4 rounded-2xl bg-charcoal border-2 border-gold/40 shadow-2xl">
              <CornerBrackets />
              <div className="relative rounded-lg overflow-hidden shadow-inner border border-gold/30 bg-ivory">
                <Image
                  src={SOUVENIR_METADATA.coverImage}
                  alt="Sri Durga Pooja Committee Mangaluru Souvenir 2026 Cover"
                  width={893}
                  height={1263}
                  priority
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="text-[11px] font-mono uppercase tracking-widest text-gold font-bold block">
                  Official Publication
                </span>
                <h3 className="font-serif text-lg font-bold text-ivory mt-1">
                  Sharodiya Smaranika 2026
                </h3>
                <p className="text-xs text-ivory/70 font-sans mt-0.5">
                  43rd Year Celebration • Mangaluru
                </p>
              </div>
            </div>
          </div>

          {/* Contents & Literary Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-sindoor font-semibold font-sans">
                Literary & Cultural Archive
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
                Inside the 43rd Edition
              </h2>
            </div>

            <p className="text-sm sm:text-base text-charcoal/80 font-sans leading-relaxed">
              Every autumn, Sri Durga Pooja Committee Mangaluru brings forth this sacred
              keepsake. Carefully curated by the editorial committee, the souvenir serves as
              both a spiritual journal and a community chronicle.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-ivory-light border border-hairline-gold">
                <div className="flex items-center gap-2 text-sindoor font-serif font-bold text-base mb-1">
                  <Award className="w-4 h-4 text-gold" />
                  <h4>Monastic Blessings</h4>
                </div>
                <p className="text-xs text-charcoal/70 font-sans leading-relaxed">
                  Benedictions and spiritual messages from Ramakrishna Math and monastic
                  dignitaries blessing the committee and devotees.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-ivory-light border border-hairline-gold">
                <div className="flex items-center gap-2 text-sindoor font-serif font-bold text-base mb-1">
                  <FileText className="w-4 h-4 text-gold" />
                  <h4>Literary & Poetic Works</h4>
                </div>
                <p className="text-xs text-charcoal/70 font-sans leading-relaxed">
                  Devotional poetry, philosophical essays, and Bengali cultural stories
                  authored by esteemed community members and scholars.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-ivory-light border border-hairline-gold">
                <div className="flex items-center gap-2 text-sindoor font-serif font-bold text-base mb-1">
                  <Calendar className="w-4 h-4 text-gold" />
                  <h4>Festival Archives & Report</h4>
                </div>
                <p className="text-xs text-charcoal/70 font-sans leading-relaxed">
                  Detailed ritual schedules, cultural program itineraries, and historical
                  documentation of the 43-year legacy in coastal Karnataka.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-ivory-light border border-hairline-gold">
                <div className="flex items-center gap-2 text-sindoor font-serif font-bold text-base mb-1">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <h4>Community Advertisers</h4>
                </div>
                <p className="text-xs text-charcoal/70 font-sans leading-relaxed">
                  Acknowledging the benevolent patrons, sponsors, and local Mangaluru
                  businesses whose generous support makes this festival grand.
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={SOUVENIR_METADATA.pdfDownloadUrl}
                download={SOUVENIR_METADATA.pdfFileName}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-sindoor hover:bg-sindoor-dark text-ivory text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
              >
                <Download className="w-4 h-4 text-gold-light" />
                <span>Download Complete PDF ({SOUVENIR_METADATA.pdfFileSizeMB})</span>
              </a>

              <Link
                href="/events"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded border border-gold/40 text-charcoal hover:bg-gold/15 text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <span>View 2026 Schedule</span>
                <ChevronRight className="w-3.5 h-3.5 text-sindoor" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
