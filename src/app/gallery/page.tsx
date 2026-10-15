"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Camera,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Maximize2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { galleryImages, galleryCategories, GalleryImage } from "@/data/gallery";
import Lightbox from "@/components/Lightbox";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // Filtered images for the main grid
  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  // Compute counts for category tabs
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: galleryImages.length };
    galleryImages.forEach((img) => {
      counts[img.category] = (counts[img.category] || 0) + 1;
    });
    return counts;
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-ivory text-charcoal min-h-screen">
      {/* =========================================================================
          GALLERY HEADING
          ========================================================================= */}
      <section className="relative py-10 sm:py-14 md:py-16 bg-charcoal text-ivory border-b border-gold/30 overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--color-sindoor)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
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

          <div className="flex items-center justify-center gap-6 pt-2 sm:pt-3 text-xs font-mono text-gold-light uppercase tracking-wider">
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
          FESTIVAL-DAY CATEGORIES AND FILTERS (STICKY)
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
          CURATED IMAGES GRID (WITHOUT VISIBLE CAPTIONS)
          ========================================================================= */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
              {activeCategory === "all"
                ? "All Photographs"
                : `${galleryCategories.find((c) => c.id === activeCategory)?.label || ""} Photographs`}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/60 mt-0.5">
              Showing {filteredImages.length} verified original photographs • Tap any image to view in lightbox
            </p>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => {
              return (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => openLightbox(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox(index);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View photograph: ${image.title}`}
                  className="group relative cursor-pointer overflow-hidden rounded-xl border border-hairline-gold bg-ivory-light shadow-xs hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sindoor h-64 sm:h-72 md:h-80"
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

                  {/* Clean hover scrim with expand icon (no visible captions) */}
                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-ivory/90 backdrop-blur-sm flex items-center justify-center text-sindoor shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* =========================================================================
          WORKING INTERACTIVE LIGHTBOX
          ========================================================================= */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={selectedImageIndex}
        images={filteredImages}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
