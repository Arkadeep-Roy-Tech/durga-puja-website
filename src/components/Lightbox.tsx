"use client";

import React, { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Calendar, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GalleryImage } from "@/data/gallery";

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  images: GalleryImage[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  isOpen,
  currentIndex,
  images,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const currentImage = images[currentIndex];
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      }
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown, isOpen]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next Image
      onNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Previous Image
      onPrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Photo Lightbox: ${currentImage.title}`}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-charcoal/95 backdrop-blur-md"
        />

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative z-10 max-w-5xl w-full max-h-[94vh] flex flex-col bg-charcoal border border-gold/40 rounded-xl shadow-2xl overflow-hidden text-ivory"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-ivory/10 bg-charcoal/90">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold">
                {currentIndex + 1} of {images.length}
              </span>
              <span className="text-ivory/30 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sindoor/30 text-gold-light border border-gold/30 text-[11px] font-sans font-medium">
                <Calendar className="w-3 h-3 text-gold" />
                <span>{currentImage.dayLabel || currentImage.categoryLabel}</span>
              </span>
              {currentImage.featured && (
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold/20 text-gold text-[10px] font-mono uppercase tracking-wider font-semibold">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Featured</span>
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close Lightbox (Escape)"
                className="p-1.5 sm:p-2 rounded-full hover:bg-ivory/10 text-ivory hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Display Area */}
          <div className="relative flex-1 min-h-[260px] sm:min-h-[420px] md:min-h-[500px] bg-black/60 flex items-center justify-center overflow-hidden">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
              className="object-contain"
            />

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous Image (Left Arrow or Swipe Right)"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-charcoal/80 hover:bg-sindoor text-ivory border border-gold/30 hover:border-gold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next Image (Right Arrow or Swipe Left)"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-charcoal/80 hover:bg-sindoor text-ivory border border-gold/30 hover:border-gold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold shadow-lg"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="p-4 sm:p-6 bg-charcoal border-t border-ivory/10 space-y-1">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-serif text-base sm:text-xl font-bold text-gold-light">
                {currentImage.title}
              </h3>
              <span className="text-[10px] sm:text-xs font-mono text-ivory/50 shrink-0 uppercase tracking-widest hidden sm:inline-block">
                Use ← / → or Swipe
              </span>
            </div>
            <p className="text-xs sm:text-sm text-ivory/80 font-sans leading-relaxed line-clamp-3 sm:line-clamp-2">
              {currentImage.caption}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
