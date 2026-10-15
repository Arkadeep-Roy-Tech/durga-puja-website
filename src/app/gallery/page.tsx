"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  MapPin,
  Compass,
  Plane,
  Train,
  Bus,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { galleryImages, galleryCategories, GalleryImage } from "@/data/gallery";
import Lightbox from "@/components/Lightbox";
import { FadeIn } from "@/components/MotionWrapper";
import {
  EditorialDivider,
  CornerBrackets,
} from "@/components/AlpanaOrnament";
import {
  VENUE_NAME,
  VENUE_ADDRESS,
  IMMERSION_VENUE,
  KEY_OFFICE_BEARERS,
} from "@/data/events";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxImages, setLightboxImages] = useState<GalleryImage[]>(galleryImages);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // Filtered images for the main grid
  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  // Featured photos for the top showcase
  const featuredImages = useMemo(() => {
    return galleryImages.filter((img) => img.featured);
  }, []);

  // Compute counts for category tabs
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: galleryImages.length };
    galleryImages.forEach((img) => {
      counts[img.category] = (counts[img.category] || 0) + 1;
    });
    return counts;
  }, []);

  const openLightboxFromList = (imagesList: GalleryImage[], index: number) => {
    setLightboxImages(imagesList);
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? lightboxImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-ivory text-charcoal min-h-screen">
      {/* =========================================================================
          PAGE HEADER
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 bg-charcoal text-ivory border-b border-gold/30 overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--color-sindoor)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs uppercase tracking-[0.24em] font-sans">
            <Camera className="w-3.5 h-3.5" />
            <span>43rd Annual Celebration • Visual Archive</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ivory">
            Festival <span className="italic text-gold">Photographs</span> & Archive
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            A curated photographic journey through the sacred rituals, classical cultural
            evenings, and vibrant community fellowship of Sri Durga Pooja Committee, Mangaluru.
          </p>

          <div className="flex items-center justify-center gap-6 pt-4 text-xs font-mono text-gold-light uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
              <span>40 Curated Originals</span>
            </span>
            <span className="text-ivory/20">•</span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-gold" />
              <span>9 Festival Phases</span>
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED HIGHLIGHTS SHOWCASE
          ========================================================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gold/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-sindoor text-xs uppercase tracking-widest font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Curator&apos;s Selection</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
              Featured Festival Moments
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal/70 max-w-md font-sans">
            Standout photographs capturing the spiritual pinnacle, sacred arati, and community unity.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredImages.slice(0, 6).map((img, idx) => (
            <motion.div
              key={`featured-${img.id}`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              onClick={() => openLightboxFromList(featuredImages, idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightboxFromList(featuredImages, idx);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View featured photograph: ${img.title}`}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-hairline-gold bg-ivory-light shadow-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sindoor h-72 sm:h-80"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={idx < 3}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Day Badge */}
              <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-sindoor/90 backdrop-blur-xs text-ivory text-[10px] font-mono uppercase tracking-wider font-bold shadow-md flex items-center gap-1.5 border border-gold/30">
                <Calendar className="w-3 h-3 text-gold" />
                <span>{img.dayLabel}</span>
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent opacity-85 sm:opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-ivory">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold">
                  {img.categoryLabel}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-ivory mt-0.5 line-clamp-1">
                  {img.title}
                </h3>
                <p className="text-xs text-ivory/80 line-clamp-2 mt-1 font-sans">
                  {img.caption}
                </p>
                <div className="mt-2.5 text-[11px] uppercase tracking-wider text-gold-light font-semibold flex items-center gap-1">
                  <span>Open Lightbox</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          CATEGORY FILTER TABS (STICKY)
          ========================================================================= */}
      <section className="sticky top-20 z-30 bg-ivory/95 backdrop-blur-md border-b border-gold/30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start md:justify-center overflow-x-auto py-3 gap-2 no-scrollbar">
            {galleryCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 sm:px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-md transition-all whitespace-nowrap focus:outline-none flex items-center gap-2 ${
                    isActive
                      ? "bg-sindoor text-ivory shadow-xs"
                      : "text-charcoal/80 bg-ivory-light border border-hairline-gold hover:bg-gold/15 hover:text-sindoor"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                      isActive
                        ? "bg-ivory/20 text-ivory"
                        : "bg-charcoal/10 text-charcoal/70"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN GALLERY MASONRY-STYLE GRID
          ========================================================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
              {activeCategory === "all"
                ? "Complete Photographic Collection"
                : `${galleryCategories.find((c) => c.id === activeCategory)?.label || ""} Photographs`}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/60 mt-0.5">
              Showing {filteredImages.length} verified original photographs
            </p>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => {
              // Determine card height based on natural aspect
              const isPortrait = image.aspect === "portrait";
              const heightClass = isPortrait
                ? "h-96 sm:h-[420px]"
                : "h-72 sm:h-80";

              return (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightboxFromList(filteredImages, index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightboxFromList(filteredImages, index);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View photograph: ${image.title}`}
                  className={`group relative cursor-pointer overflow-hidden rounded-xl border border-hairline-gold bg-ivory-light shadow-xs hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sindoor ${heightClass}`}
                >
                  <Image
                    src={image.thumbnail}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Day Tag Top-Left */}
                  <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded-full bg-charcoal/80 backdrop-blur-xs text-gold text-[10px] font-mono uppercase tracking-wider font-semibold border border-gold/30">
                    {image.dayLabel}
                  </div>

                  {/* Gradient Scrim & Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent opacity-85 sm:opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-ivory">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold">
                      {image.categoryLabel}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold mt-0.5 text-ivory line-clamp-2">
                      {image.title}
                    </h3>
                    <p className="text-xs text-ivory/80 line-clamp-2 mt-1 font-sans">
                      {image.caption}
                    </p>
                    <span className="mt-2.5 text-[11px] uppercase tracking-wider text-gold-light font-semibold flex items-center gap-1">
                      <span>View in Lightbox</span>
                      <span>→</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Accessible Touch-Swipe Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={selectedImageIndex}
        images={lightboxImages}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      <EditorialDivider className="max-w-5xl mx-auto my-8" />

      {/* =========================================================================
          VERIFIED VISIT & CONTACT SECTION
          ========================================================================= */}
      <section id="visit" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-sindoor font-semibold font-sans">
              Visitor Information Desk
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
              Visiting Sri Durga Pooja Committee
            </h2>
            <p className="text-sm sm:text-base text-charcoal/70 font-sans">
              All essential details to plan your visit to Hindi Prachar Bhavan, Lalbagh,
              Mangaluru.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Card 1: Official Venue & Verified Contact Desk */}
          <div className="lg:col-span-6 relative p-8 rounded-xl bg-ivory-light border border-hairline-gold shadow-sm">
            <CornerBrackets />
            <div className="flex items-center gap-3 text-sindoor mb-6">
              <MapPin className="w-5 h-5" />
              <h3 className="font-serif text-2xl font-bold text-charcoal">
                Official Venue & Contacts
              </h3>
            </div>

            <div className="space-y-4 text-sm font-sans">
              {/* Venue Item */}
              <div className="p-4 rounded-lg bg-ivory border border-gold/30">
                <span className="text-xs uppercase tracking-wider font-bold text-sindoor block mb-1">
                  Pooja & Cultural Stage Venue
                </span>
                <p className="text-charcoal font-serif font-bold text-xl">
                  {VENUE_NAME}
                </p>
                <p className="text-xs text-charcoal/75 mt-0.5">{VENUE_ADDRESS}</p>
                <p className="text-xs text-gold-dark mt-2 font-medium">
                  Central location in Lalbagh with convenient access from city transit
                  points.
                </p>
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
              <div className="p-4 rounded-lg bg-ivory border border-gold/30">
                <span className="text-xs uppercase tracking-wider font-bold text-sindoor block mb-2">
                  Official Committee Contacts
                </span>
                <div className="space-y-2 text-xs">
                  {KEY_OFFICE_BEARERS.map((bearer) => (
                    <div
                      key={bearer.name}
                      className="flex items-center justify-between border-b border-gold/15 pb-1.5 last:border-b-0 last:pb-0"
                    >
                      <div>
                        <strong className="text-charcoal">{bearer.name}</strong>
                        <span className="text-charcoal/60 ml-1.5">({bearer.role})</span>
                      </div>
                      <a
                        href={`tel:${bearer.phone}`}
                        className="font-mono text-sindoor hover:underline font-bold"
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
              </div>
            </div>
          </div>

          {/* Card 2: Travel & Connectivity */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-xl bg-ivory-light border border-hairline-gold shadow-sm relative">
              <CornerBrackets />
              <div className="flex items-center gap-3 text-sindoor mb-6">
                <Compass className="w-5 h-5" />
                <h3 className="font-serif text-2xl font-bold text-charcoal">
                  Getting to Hindi Prachar Bhavan
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm font-sans">
                <div className="flex items-start gap-3">
                  <Plane className="w-4 h-4 text-gold mt-1 shrink-0" />
                  <div>
                    <strong className="block text-charcoal">By Air:</strong>
                    <span className="text-charcoal/75">
                      Mangaluru International Airport (IXE) at Bajpe is approx. 12 km from
                      Lalbagh. Taxis and airport buses are readily available.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Train className="w-4 h-4 text-gold mt-1 shrink-0" />
                  <div>
                    <strong className="block text-charcoal">By Rail:</strong>
                    <span className="text-charcoal/75">
                      Mangaluru Central (MAQ) is approx. 3.5 km away; Mangaluru Junction
                      (MAJN) is approx. 6 km away. Auto-rickshaws connect directly to
                      Lalbagh.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Bus className="w-4 h-4 text-gold mt-1 shrink-0" />
                  <div>
                    <strong className="block text-charcoal">By Road:</strong>
                    <span className="text-charcoal/75">
                      Located close to Lalbagh Circle and the Mangalore City Corporation.
                      City buses stopping at Lalbagh/KSRTC bus stand provide immediate
                      access.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Devotee Guidelines Card */}
            <div className="p-6 rounded-xl bg-charcoal text-ivory border border-gold/30 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-gold">
                <Sparkles className="w-4 h-4" />
                <h4 className="font-serif font-bold text-base">
                  Devotee Guidelines
                </h4>
              </div>
              <p className="text-xs text-ivory/80 font-sans leading-relaxed">
                Traditional Indian ethnic attire is warmly encouraged for sanctum
                pushpanjali. Free parking assistance and volunteer help are available on
                site at Hindi Prachar Bhavan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
