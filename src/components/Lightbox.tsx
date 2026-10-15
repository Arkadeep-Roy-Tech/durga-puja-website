"use client";

import React, { useEffect, useCallback, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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

  // Keyboard navigation: Escape to close, Left/Right arrows to navigate
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
    const minSwipeDistance = 40;

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

  const hasMultipleImages = images.length > 1;

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={currentImage.alt || "Festival Photograph Viewer"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 select-none cursor-pointer"
      >
        {/* Minimal Accessible Close (X) Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close photo viewer (Escape)"
          className="fixed top-3 right-3 sm:top-5 sm:right-5 z-50 p-2.5 sm:p-3 rounded-full bg-charcoal/80 hover:bg-sindoor text-ivory/90 hover:text-white border border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white shadow-xl cursor-pointer"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Subtle Previous Arrow Button (Hidden if only 1 image) */}
        {hasMultipleImages && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous photograph (Left Arrow or Swipe Right)"
            className="fixed left-2 sm:left-5 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3.5 rounded-full bg-charcoal/70 hover:bg-sindoor text-ivory/90 hover:text-white border border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white shadow-xl cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
        )}

        {/* Subtle Next Arrow Button (Hidden if only 1 image) */}
        {hasMultipleImages && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next photograph (Right Arrow or Swipe Left)"
            className="fixed right-2 sm:right-5 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3.5 rounded-full bg-charcoal/70 hover:bg-sindoor text-ivory/90 hover:text-white border border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white shadow-xl cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
        )}

        {/* Full-Screen Photograph Container (Preserves Aspect Ratio, object-fit contain, zero text) */}
        <div
          className="relative max-w-[96vw] max-h-[94vh] flex items-center justify-center cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={currentImage.id}
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-[96vw] max-h-[94vh] w-auto h-auto object-contain select-none shadow-2xl rounded-xs pointer-events-auto transition-opacity duration-200"
            draggable={false}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
