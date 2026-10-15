"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Info,
  ChevronRight,
  Flame,
  User,
  UtensilsCrossed,
  Award,
  Navigation,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";
import {
  festivalSchedule,
  FESTIVAL_YEAR,
  FESTIVAL_EDITION,
  FESTIVAL_DATES,
  VENUE_NAME,
  VENUE_ADDRESS,
  BHOG_SEVA_SCHEDULE,
  PROCESSION_ROUTE,
  UPCOMING_POOJAS,
  IMMERSION_VENUE,
} from "@/data/events";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import {
  EditorialDivider,
  CornerBrackets,
  TrishulEmblem,
} from "@/components/AlpanaOrnament";

export default function EventsPage() {
  const [selectedDayId, setSelectedDayId] = useState<string>("all");

  const displayedSchedule =
    selectedDayId === "all"
      ? festivalSchedule
      : festivalSchedule.filter((d) => d.id === selectedDayId);

  return (
    <div className="bg-ivory text-charcoal min-h-screen">
      {/* =========================================================================
          PAGE HERO (Verified Schedule Banner)
          ========================================================================= */}
      <section className="relative py-20 bg-charcoal text-ivory border-b border-gold/30">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 text-gold text-xs uppercase tracking-[0.22em] font-sans">
            <Calendar className="w-3.5 h-3.5" />
            <span>Official Festival Calendar & Cultural Roster</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ivory">
            {FESTIVAL_EDITION} Pooja <span className="italic text-gold">Schedule</span>
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Complete verified schedule from <strong>{FESTIVAL_DATES}</strong> at{" "}
            <strong>“{VENUE_NAME}”</strong>, Lalbagh, Mangaluru.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded bg-ivory/10 border border-gold/30 text-xs text-gold-light max-w-md mx-auto">
            <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
            <span>Verified from Official Sri Durga Pooja Committee Announcement</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE DAY SELECTOR TABS
          ========================================================================= */}
      <section className="sticky top-20 z-30 bg-ivory/95 backdrop-blur-md border-b border-gold/30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start md:justify-center overflow-x-auto py-3 gap-2 no-scrollbar">
            {/* "All Days" Tab */}
            <button
              type="button"
              onClick={() => setSelectedDayId("all")}
              className={`relative px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-md transition-colors whitespace-nowrap focus:outline-none ${
                selectedDayId === "all"
                  ? "bg-sindoor text-ivory shadow-xs"
                  : "text-charcoal/80 hover:bg-gold/15 hover:text-sindoor"
              }`}
            >
              All 7 Days
            </button>

            {/* Individual Day Tabs */}
            {festivalSchedule.map((day) => {
              const isActive = selectedDayId === day.id;
              return (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => setSelectedDayId(day.id)}
                  className={`relative px-3.5 py-2 rounded-md transition-colors whitespace-nowrap focus:outline-none text-left flex items-center gap-2 ${
                    isActive
                      ? "bg-sindoor text-ivory shadow-xs"
                      : "text-charcoal/80 hover:bg-gold/15 hover:text-sindoor"
                  }`}
                >
                  <span className="text-xs uppercase tracking-wider font-semibold">
                    {day.dayName}
                  </span>
                  <span
                    className={`font-bengali text-xs ${
                      isActive ? "text-gold-light" : "text-sindoor font-semibold"
                    }`}
                  >
                    ({day.bengaliName})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCHEDULE LISTINGS & TIMELINE
          ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-16">
          {displayedSchedule.map((day) => (
            <motion.div
              key={day.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Day Header Banner */}
              <div className="p-6 rounded-lg bg-ivory-light border border-hairline-gold shadow-xs relative">
                <CornerBrackets />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gold/20 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                        {day.dayNumber}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-sindoor/10 text-sindoor font-mono font-semibold">
                        {day.tithiInfo}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-3 mt-1">
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                        {day.dayName}
                      </h2>
                      <span className="font-bengali text-xl font-bold text-sindoor">
                        {day.bengaliName}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-charcoal/80 bg-ivory px-3.5 py-1.5 rounded border border-gold/30 self-start sm:self-auto font-mono">
                    <Calendar className="w-3.5 h-3.5 text-sindoor" />
                    <span>{day.date}</span>
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="text-sm font-semibold text-sindoor uppercase tracking-wide">
                    {day.subtitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/75 mt-1 font-sans">
                    {day.description}
                  </p>
                </div>
              </div>

              {/* Event Cards inside this Day */}
              <div className="space-y-4 pl-0 sm:pl-4 border-l-0 sm:border-l sm:border-gold/30">
                {day.events.map((event) => (
                  <div
                    key={event.id}
                    className={`relative p-6 rounded-lg transition-all duration-200 border ${
                      event.highlight
                        ? "bg-ivory-light border-gold shadow-sm"
                        : "bg-ivory border-hairline-gold hover:border-gold/50"
                    }`}
                  >
                    {event.highlight && (
                      <span className="absolute -top-2.5 right-6 bg-sindoor text-ivory text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded shadow-xs">
                        Featured Event
                      </span>
                    )}

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal/70 font-sans">
                        <span className="inline-flex items-center gap-1 font-mono font-bold text-sindoor bg-sindoor/10 px-2 py-0.5 rounded">
                          <Clock className="w-3.5 h-3.5" />
                          {event.time}
                        </span>
                        <span className="text-gold">•</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-charcoal/50" />
                          {event.location}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-serif text-lg sm:text-xl font-bold text-charcoal">
                          {event.title}
                        </h4>
                        {event.bengaliTitle && (
                          <p className="font-bengali text-sm text-sindoor/90 font-medium mt-0.5">
                            {event.bengaliTitle}
                          </p>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-sans">
                        {event.description}
                      </p>

                      {event.performer && (
                        <div className="inline-flex items-center gap-1.5 text-xs text-charcoal/80 bg-gold/15 px-2.5 py-1 rounded border border-gold/30 mt-2">
                          <User className="w-3 h-3 text-gold-dark" />
                          <span>{event.performer}</span>
                        </div>
                      )}

                      {event.ritualNotes && (
                        <p className="text-xs text-sindoor italic pt-1">
                          Ritual Note: {event.ritualNotes}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================================================
            BHOG SEVA & ANNA DAAN SCHEDULE CARD
            ========================================================================= */}
        <div className="mt-16 p-8 rounded-xl bg-ivory-light border border-hairline-gold shadow-sm relative">
          <CornerBrackets />
          <div className="flex items-center gap-3 text-sindoor mb-4">
            <UtensilsCrossed className="w-5 h-5" />
            <h3 className="font-serif text-2xl font-bold text-charcoal">
              Bhog Seva / Anna Daan Timings
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-charcoal/80 font-sans leading-relaxed mb-6">
            {BHOG_SEVA_SCHEDULE.duration} — {BHOG_SEVA_SCHEDULE.description}. All
            devotees, visitors, and families are cordially invited to partake in the
            sanctified mahaprasad:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans">
            <div className="p-4 rounded-lg bg-ivory border border-gold/30">
              <span className="text-xs uppercase tracking-wider font-bold text-sindoor block mb-1">
                Day Bhog Distribution
              </span>
              <span className="font-mono text-lg font-bold text-charcoal">
                {BHOG_SEVA_SCHEDULE.dayTime}
              </span>
              <p className="text-xs text-charcoal/60 mt-1">
                Served following completion of morning Pooja and Pushpanjali
              </p>
            </div>

            <div className="p-4 rounded-lg bg-ivory border border-gold/30">
              <span className="text-xs uppercase tracking-wider font-bold text-sindoor block mb-1">
                Night Bhog Distribution
              </span>
              <span className="font-mono text-lg font-bold text-charcoal">
                {BHOG_SEVA_SCHEDULE.nightTime}
              </span>
              <p className="text-xs text-charcoal/60 mt-1">
                Served following completion of Sandhya Arati and Cultural Programs
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            VISARJAN PROCESSION ROUTE CARD
            ========================================================================= */}
        <div className="mt-12 p-8 rounded-xl bg-charcoal text-ivory border border-gold/40 shadow-xl relative">
          <div className="flex items-center gap-3 text-gold mb-4">
            <Navigation className="w-5 h-5" />
            <h3 className="font-serif text-2xl font-bold text-ivory">
              Vijaya Dashami Procession Route (21st October 2026)
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-ivory/80 font-sans mb-6">
            Departure at <strong>06:30 PM</strong> from Hindi Prachar Bhavan to Gurupura
            River, Sultan Bathery Ghat, with expected return at 11:30 PM:
          </p>

          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            {PROCESSION_ROUTE.map((point, idx) => (
              <React.Fragment key={`${point}-${idx}`}>
                <span className="px-3 py-1.5 rounded bg-ivory/10 border border-gold/30 text-gold-light">
                  {point}
                </span>
                {idx < PROCESSION_ROUTE.length - 1 && (
                  <span className="text-sindoor font-bold">→</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-ivory/10 text-xs text-ivory/70 font-sans">
            <strong>Immersion Point:</strong> {IMMERSION_VENUE}
          </div>
        </div>

        {/* =========================================================================
            UPCOMING POOJAS ANNOUNCEMENT
            ========================================================================= */}
        <div className="mt-12 p-8 rounded-xl bg-ivory-light border border-hairline-gold shadow-sm relative">
          <CornerBrackets />
          <div className="flex items-center gap-3 text-sindoor mb-4">
            <Sparkles className="w-5 h-5" />
            <h3 className="font-serif text-2xl font-bold text-charcoal">
              Upcoming Poojas at Hindi Prachar Bhavan
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {UPCOMING_POOJAS.map((pooja) => (
              <div
                key={pooja.title}
                className="p-4 rounded-lg bg-ivory border border-gold/30 space-y-1 font-sans"
              >
                <span className="text-[11px] font-mono uppercase tracking-wider text-sindoor font-bold block">
                  {pooja.date}
                </span>
                <h4 className="font-serif text-base font-bold text-charcoal">
                  {pooja.title}
                </h4>
                <div className="text-xs text-charcoal/70 flex items-center gap-1.5 pt-1">
                  <Clock className="w-3.5 h-3.5 text-gold-dark" />
                  <span>{pooja.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
