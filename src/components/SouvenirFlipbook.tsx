"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize,
  Minimize,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  BookOpen,
  Layers,
  FileText,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  ScrollText,
  Eye,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { SOUVENIR_METADATA, SOUVENIR_PAGES, SouvenirPage } from "@/data/souvenir";

type ViewMode = "flipbook" | "scroll" | "native";

export default function SouvenirFlipbook() {
  const [currentPage, setCurrentPage] = useState<number>(1); // 1-indexed (1 to 66)
  const [isTwoPageView, setIsTwoPageView] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showThumbnails, setShowThumbnails] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<"forward" | "backward">("forward");
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<ViewMode>("flipbook");
  const [pageLoadingErrors, setPageLoadingErrors] = useState<Record<number, boolean>>({});

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const touchEndYRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const totalPages = SOUVENIR_METADATA.totalPages;

  // Responsive mode: Two facing pages on desktop (>= 768px), single page on mobile (< 768px)
  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768;
      setIsTwoPageView(isDesktop);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine current active pages for 2-page spread
  // Page 1 is the single front cover on right.
  // Spread 1: Page 2 (Left) & Page 3 (Right)
  // Spread 2: Page 4 (Left) & Page 5 (Right), ...
  // Last page (Page 66) is the back cover on left.
  let leftPageNum: number | null = null;
  let rightPageNum: number | null = null;

  if (isTwoPageView) {
    if (currentPage === 1) {
      leftPageNum = null;
      rightPageNum = 1;
    } else if (currentPage >= totalPages) {
      leftPageNum = totalPages;
      rightPageNum = null;
    } else {
      leftPageNum = currentPage % 2 === 0 ? currentPage : currentPage - 1;
      rightPageNum = leftPageNum + 1 <= totalPages ? leftPageNum + 1 : null;
    }
  } else {
    // Single page mode (Mobile: 320px, 375px, 390px, 430px)
    leftPageNum = null;
    rightPageNum = currentPage;
  }

  // Preload next upcoming page spread in background without blocking
  const nextPreloadPageNum = isTwoPageView
    ? (rightPageNum ? rightPageNum + 1 : null)
    : currentPage + 1 <= totalPages ? currentPage + 1 : null;

  // Navigation handlers
  const goToNext = useCallback(() => {
    if (isFlipping) return;
    setFlipDirection("forward");

    if (isTwoPageView) {
      if (currentPage === 1) {
        setIsFlipping(true);
        setCurrentPage(2);
      } else if (currentPage + 2 <= totalPages) {
        setIsFlipping(true);
        const nextLeft = (currentPage % 2 === 0 ? currentPage : currentPage - 1) + 2;
        setCurrentPage(nextLeft);
      } else if (currentPage < totalPages) {
        setIsFlipping(true);
        setCurrentPage(totalPages);
      }
    } else {
      if (currentPage < totalPages) {
        setIsFlipping(true);
        setCurrentPage((prev) => prev + 1);
      }
    }

    setTimeout(() => setIsFlipping(false), prefersReducedMotion ? 40 : 380);
  }, [currentPage, isTwoPageView, totalPages, isFlipping, prefersReducedMotion]);

  const goToPrev = useCallback(() => {
    if (isFlipping) return;
    setFlipDirection("backward");

    if (isTwoPageView) {
      if (currentPage <= 2) {
        setIsFlipping(true);
        setCurrentPage(1);
      } else if (currentPage === totalPages) {
        setIsFlipping(true);
        setCurrentPage(totalPages - 2);
      } else {
        setIsFlipping(true);
        const prevLeft = (currentPage % 2 === 0 ? currentPage : currentPage - 1) - 2;
        setCurrentPage(Math.max(1, prevLeft));
      }
    } else {
      if (currentPage > 1) {
        setIsFlipping(true);
        setCurrentPage((prev) => prev - 1);
      }
    }

    setTimeout(() => setIsFlipping(false), prefersReducedMotion ? 40 : 380);
  }, [currentPage, isTwoPageView, isFlipping, prefersReducedMotion]);

  const goToPage = (pageNum: number) => {
    if (pageNum < 1 || pageNum > totalPages) return;
    setFlipDirection(pageNum > currentPage ? "forward" : "backward");
    setCurrentPage(pageNum);
    setShowThumbnails(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== "flipbook") return;
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        goToNext();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        goToPrev();
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, isFullscreen, viewMode]);

  // Non-blocking Touch swipe support (preserves vertical page scrolling)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchStartYRef.current = e.targetTouches[0].clientY;
    touchEndXRef.current = null;
    touchEndYRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
    touchEndYRef.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (
      touchStartXRef.current === null ||
      touchEndXRef.current === null ||
      touchStartYRef.current === null ||
      touchEndYRef.current === null
    ) {
      return;
    }

    const deltaX = touchStartXRef.current - touchEndXRef.current;
    const deltaY = touchStartYRef.current - touchEndYRef.current;

    // Only trigger horizontal flip if horizontal swipe dominates vertical motion
    // This strictly ensures vertical document scrolling is never blocked!
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
    touchStartYRef.current = null;
    touchEndYRef.current = null;
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(() => {});
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  // Zoom handlers (supports mobile small text reading)
  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.25));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.8));
  const resetZoom = () => setZoomLevel(1);

  // Helper to get page object
  const getPage = (num: number | null): SouvenirPage | null => {
    if (!num) return null;
    return SOUVENIR_PAGES[num - 1] || null;
  };

  const leftPage = getPage(leftPageNum);
  const rightPage = getPage(rightPageNum);
  const preloadPage = getPage(nextPreloadPageNum);

  // Compute label for page counter
  let pageDisplayLabel = `Page ${currentPage} of ${totalPages}`;
  if (isTwoPageView) {
    if (currentPage === 1) {
      pageDisplayLabel = `Front Cover (Page 1 of ${totalPages})`;
    } else if (currentPage >= totalPages) {
      pageDisplayLabel = `Back Cover (Page ${totalPages} of ${totalPages})`;
    } else if (leftPageNum && rightPageNum) {
      pageDisplayLabel = `Pages ${leftPageNum}–${rightPageNum} of ${totalPages}`;
    }
  }

  const handleImageError = (pageNum: number) => {
    setPageLoadingErrors((prev) => ({ ...prev, [pageNum]: true }));
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-2xl bg-charcoal text-ivory border border-gold/30 shadow-2xl overflow-hidden transition-all duration-300 ${
        isFullscreen
          ? "fixed inset-0 z-50 rounded-none h-screen p-2 sm:p-4 flex flex-col justify-between bg-charcoal"
          : ""
      }`}
    >
      {/* Background Preloader for Next Spread (Zero Lag on Page Turns) */}
      {preloadPage && (
        <div className="hidden" aria-hidden="true">
          <Image
            src={preloadPage.src}
            alt=""
            width={preloadPage.width}
            height={preloadPage.height}
            priority={false}
          />
        </div>
      )}

      {/* =========================================================================
          TOP CONTROL TOOLBAR (Responsive across 320px, 375px, 430px, Desktop)
          ========================================================================= */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 px-3 sm:px-6 py-3 bg-charcoal/95 border-b border-gold/25 backdrop-blur-md">
        {/* Left: Book Title & Active Spread Badge */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 text-gold">
            <BookOpen className="w-4 h-4 text-gold-light" />
            <span className="font-serif font-bold text-xs sm:text-sm tracking-wide text-ivory hidden xs:inline">
              Sharodiya Smaranika
            </span>
          </div>
          <span className="text-ivory/30 hidden sm:inline">•</span>
          <span className="px-2.5 py-0.5 rounded-full bg-sindoor/30 text-gold-light border border-gold/30 text-[11px] sm:text-xs font-mono font-bold tracking-wider">
            {pageDisplayLabel}
          </span>
        </div>

        {/* Center: View Mode Selector */}
        <div className="flex items-center bg-charcoal-light/80 p-0.5 rounded-lg border border-gold/20 text-xs">
          <button
            type="button"
            onClick={() => setViewMode("flipbook")}
            className={`px-2 py-1 rounded-md transition-colors font-medium flex items-center gap-1 text-[11px] sm:text-xs ${
              viewMode === "flipbook"
                ? "bg-gold text-charcoal font-bold shadow-xs"
                : "text-ivory/70 hover:text-gold"
            }`}
          >
            <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Book</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("scroll")}
            className={`px-2 py-1 rounded-md transition-colors font-medium flex items-center gap-1 text-[11px] sm:text-xs ${
              viewMode === "scroll"
                ? "bg-gold text-charcoal font-bold shadow-xs"
                : "text-ivory/70 hover:text-gold"
            }`}
          >
            <ScrollText className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Scroll</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("native")}
            className={`px-2 py-1 rounded-md transition-colors font-medium flex items-center gap-1 text-[11px] sm:text-xs ${
              viewMode === "native"
                ? "bg-gold text-charcoal font-bold shadow-xs"
                : "text-ivory/70 hover:text-gold"
            }`}
          >
            <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>PDF</span>
          </button>
        </div>

        {/* Right: Actions (Zoom, Thumbnails, Fullscreen, Download) */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {viewMode === "flipbook" && (
            <>
              {/* Zoom Controls (Accessible on Mobile & Desktop for Small Text) */}
              <div className="flex items-center bg-charcoal-light/70 rounded-md border border-gold/20 p-0.5">
                <button
                  type="button"
                  onClick={zoomOut}
                  disabled={zoomLevel <= 0.8}
                  aria-label="Zoom Out"
                  className="p-1 sm:p-1.5 text-ivory/70 hover:text-gold hover:bg-ivory/10 rounded disabled:opacity-30"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] sm:text-[11px] font-mono px-1 text-gold-light">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  onClick={zoomIn}
                  disabled={zoomLevel >= 2.25}
                  aria-label="Zoom In"
                  className="p-1 sm:p-1.5 text-ivory/70 hover:text-gold hover:bg-ivory/10 rounded disabled:opacity-30"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                {zoomLevel !== 1 && (
                  <button
                    type="button"
                    onClick={resetZoom}
                    aria-label="Reset Zoom"
                    className="p-1 text-ivory/70 hover:text-gold hover:bg-ivory/10 rounded hidden sm:inline-block"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Thumbnails Toggle */}
              <button
                type="button"
                onClick={() => setShowThumbnails(!showThumbnails)}
                aria-label="Toggle Thumbnails Grid"
                className={`p-1.5 sm:p-2 rounded-md transition-colors text-xs font-sans flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-gold ${
                  showThumbnails
                    ? "bg-gold text-charcoal font-bold shadow-xs"
                    : "text-ivory/80 hover:bg-ivory/10 hover:text-gold"
                }`}
              >
                <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden md:inline">Grid</span>
              </button>

              {/* Fullscreen Toggle */}
              <button
                type="button"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                className="p-1.5 sm:p-2 rounded-md text-ivory/80 hover:bg-ivory/10 hover:text-gold transition-colors focus:outline-none"
              >
                {isFullscreen ? <Minimize className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Maximize className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              </button>
            </>
          )}

          {/* Download Approved PDF */}
          <a
            href={SOUVENIR_METADATA.pdfDownloadUrl}
            download={SOUVENIR_METADATA.pdfFileName}
            className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-md bg-sindoor hover:bg-sindoor-dark text-ivory text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <Download className="w-3.5 h-3.5 text-gold-light" />
            <span className="hidden sm:inline">Download</span>
            <span className="sm:hidden">PDF</span>
          </a>
        </div>
      </div>

      {/* =========================================================================
          THUMBNAILS DRAWER
          ========================================================================= */}
      <AnimatePresence>
        {showThumbnails && viewMode === "flipbook" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-gold/30 bg-charcoal-light/95 backdrop-blur-md p-3 sm:p-4 overflow-hidden z-20"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-ivory/10">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">
                Jump to Page (All {totalPages} Pages)
              </span>
              <button
                type="button"
                onClick={() => setShowThumbnails(false)}
                className="text-xs text-ivory/60 hover:text-gold"
              >
                Close ✕
              </button>
            </div>
            <div className="flex gap-2.5 overflow-x-auto pb-2 pt-1 no-scrollbar">
              {SOUVENIR_PAGES.map((p) => {
                const isSelected =
                  currentPage === p.pageNumber ||
                  (isTwoPageView && (leftPageNum === p.pageNumber || rightPageNum === p.pageNumber));
                return (
                  <button
                    key={`thumb-${p.pageNumber}`}
                    type="button"
                    onClick={() => goToPage(p.pageNumber)}
                    className={`relative shrink-0 rounded-md overflow-hidden border-2 transition-all p-0.5 focus:outline-none ${
                      isSelected
                        ? "border-sindoor scale-105 shadow-lg ring-2 ring-gold"
                        : "border-gold/30 hover:border-gold opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div className="relative w-14 h-20 sm:w-18 sm:h-26 bg-white overflow-hidden">
                      <Image
                        src={p.src}
                        alt={`Thumbnail Page ${p.pageNumber}`}
                        width={p.width}
                        height={p.height}
                        className="w-full h-auto object-contain block"
                      />
                    </div>
                    <span className="block text-[10px] font-mono text-center text-ivory/80 mt-0.5">
                      {p.pageNumber}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          VIEW MODE 1: FLIPBOOK 3D SPREAD READER
          ========================================================================= */}
      {viewMode === "flipbook" && (
        <>
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative flex-1 min-h-[440px] sm:min-h-[560px] md:min-h-[640px] lg:min-h-[700px] flex items-center justify-center p-2 sm:p-6 md:p-8 overflow-hidden select-none touch-pan-y bg-[radial-gradient(ellipse_at_center,_#231d1b_0%,_#13100f_100%)]"
          >
            {/* Desktop Left Navigation Floating Arrow */}
            <button
              type="button"
              onClick={goToPrev}
              disabled={currentPage <= 1}
              aria-label="Previous Page (Left Arrow or Swipe Right)"
              className="hidden sm:flex absolute left-3 md:left-5 z-20 p-2.5 sm:p-3 rounded-full bg-charcoal/85 hover:bg-sindoor text-ivory border border-gold/40 hover:border-gold transition-all duration-200 disabled:opacity-20 disabled:pointer-events-none shadow-xl focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Desktop Right Navigation Floating Arrow */}
            <button
              type="button"
              onClick={goToNext}
              disabled={currentPage >= totalPages}
              aria-label="Next Page (Right Arrow or Swipe Left)"
              className="hidden sm:flex absolute right-3 md:right-5 z-20 p-2.5 sm:p-3 rounded-full bg-charcoal/85 hover:bg-sindoor text-ivory border border-gold/40 hover:border-gold transition-all duration-200 disabled:opacity-20 disabled:pointer-events-none shadow-xl focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Zoom Transform Wrapper */}
            <div
              style={{
                transform: `scale(${zoomLevel})`,
                transition: "transform 0.2s ease-out",
              }}
              className="w-full flex items-center justify-center max-w-full overflow-x-hidden"
            >
              {/* Realistic Physical Book Outer Container with Shadows */}
              <div
                className={`relative flex items-center justify-center transition-all duration-300 max-w-full ${
                  isTwoPageView && leftPage && rightPage
                    ? "bg-[#181312] p-2 sm:p-3 rounded-lg border-2 border-gold/40 shadow-2xl"
                    : "bg-transparent"
                }`}
                style={{ perspective: 1800 }}
              >
                {/* BOOK SPREAD */}
                <div className="relative flex items-center justify-center max-w-full">
                  {/* LEFT FACING PAGE (Desktop 2-Page Mode) */}
                  {isTwoPageView && leftPage && (
                    <motion.div
                      key={`left-page-${leftPage.pageNumber}`}
                      initial={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : flipDirection === "backward"
                          ? { rotateY: 35, opacity: 0.8 }
                          : { opacity: 1 }
                      }
                      animate={{ rotateY: 0, opacity: 1 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        transformOrigin: "right center",
                        backfaceVisibility: "hidden",
                        transformStyle: "preserve-3d",
                      }}
                      className="relative w-[300px] sm:w-[350px] md:w-[410px] lg:w-[450px] xl:w-[470px] bg-white rounded-l-md shadow-2xl overflow-hidden border-r border-charcoal/30 shrink-0"
                    >
                      {pageLoadingErrors[leftPage.pageNumber] ? (
                        <div className="w-full h-[440px] sm:h-[580px] flex flex-col items-center justify-center p-6 text-charcoal bg-ivory-light text-center">
                          <AlertCircle className="w-8 h-8 text-sindoor mb-2" />
                          <p className="font-serif font-bold text-sm">Failed to load Page {leftPage.pageNumber}</p>
                          <button
                            type="button"
                            onClick={() => setPageLoadingErrors((prev) => ({ ...prev, [leftPage.pageNumber]: false }))}
                            className="mt-3 px-3 py-1 rounded bg-sindoor text-ivory text-xs flex items-center gap-1"
                          >
                            <RefreshCw className="w-3 h-3" />
                            <span>Retry</span>
                          </button>
                        </div>
                      ) : (
                        <div className="relative w-full h-auto bg-white">
                          <Image
                            src={leftPage.src}
                            alt={`Souvenir Page ${leftPage.pageNumber}`}
                            width={leftPage.width}
                            height={leftPage.height}
                            priority
                            onError={() => handleImageError(leftPage.pageNumber)}
                            className="w-full h-auto object-contain block select-none"
                          />
                          {/* Center Spine Shadow Gradient */}
                          <div className="absolute inset-y-0 right-0 w-8 sm:w-12 pointer-events-none bg-gradient-to-l from-black/45 via-black/15 to-transparent" />
                          {/* Page Number Overlay */}
                          <div className="absolute bottom-2 left-3 px-2 py-0.5 rounded bg-black/60 text-ivory font-mono text-[10px]">
                            {leftPage.pageNumber}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* CENTER BOOK SPINE GUTTER */}
                  {isTwoPageView && leftPage && rightPage && (
                    <div className="relative w-4 sm:w-6 h-full z-10 -mx-2 sm:-mx-3 pointer-events-none flex flex-col items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-r from-black/60 via-black/30 to-black/60 shadow-inner" />
                      <div className="absolute inset-y-0 w-[1px] bg-gold/50 shadow-sm" />
                    </div>
                  )}

                  {/* RIGHT FACING PAGE (Desktop) or SINGLE RESPONSIVE PAGE (Mobile: 320px–430px) */}
                  {rightPage && (
                    <motion.div
                      key={`right-page-${rightPage.pageNumber}`}
                      initial={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : flipDirection === "forward"
                          ? { rotateY: -35, opacity: 0.8 }
                          : { opacity: 1 }
                      }
                      animate={{ rotateY: 0, opacity: 1 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        transformOrigin: "left center",
                        backfaceVisibility: "hidden",
                        transformStyle: "preserve-3d",
                      }}
                      className={`relative bg-white shadow-2xl overflow-hidden shrink-0 ${
                        isTwoPageView && leftPage
                          ? "w-[300px] sm:w-[350px] md:w-[410px] lg:w-[450px] xl:w-[470px] rounded-r-md border-l border-charcoal/30"
                          : "w-[280px] xs:w-[320px] sm:w-[380px] md:w-[440px] lg:w-[470px] max-w-[calc(100vw-32px)] rounded-md border-2 border-gold/50"
                      }`}
                    >
                      {pageLoadingErrors[rightPage.pageNumber] ? (
                        <div className="w-full h-[400px] sm:h-[580px] flex flex-col items-center justify-center p-6 text-charcoal bg-ivory-light text-center">
                          <AlertCircle className="w-8 h-8 text-sindoor mb-2" />
                          <p className="font-serif font-bold text-sm">Failed to load Page {rightPage.pageNumber}</p>
                          <button
                            type="button"
                            onClick={() => setPageLoadingErrors((prev) => ({ ...prev, [rightPage.pageNumber]: false }))}
                            className="mt-3 px-3 py-1 rounded bg-sindoor text-ivory text-xs flex items-center gap-1"
                          >
                            <RefreshCw className="w-3 h-3" />
                            <span>Retry</span>
                          </button>
                        </div>
                      ) : (
                        <div className="relative w-full h-auto bg-white">
                          <Image
                            src={rightPage.src}
                            alt={`Souvenir Page ${rightPage.pageNumber}`}
                            width={rightPage.width}
                            height={rightPage.height}
                            priority
                            onError={() => handleImageError(rightPage.pageNumber)}
                            className="w-full h-auto object-contain block select-none"
                          />
                          {/* Right Page Inner Spine Shadow */}
                          {isTwoPageView && leftPage && (
                            <div className="absolute inset-y-0 left-0 w-8 sm:w-12 pointer-events-none bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
                          )}
                          {/* Front Cover Luxury Gold Frame Accent if Cover */}
                          {rightPage.pageNumber === 1 && (
                            <div className="absolute inset-2 border border-gold/40 pointer-events-none rounded" />
                          )}
                          {/* Page Number Overlay */}
                          <div className="absolute bottom-2 right-3 px-2 py-0.5 rounded bg-black/60 text-ivory font-mono text-[10px]">
                            {rightPage.pageNumber}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Dedicated Large Mobile Touch Navigation Bar (< 640px) */}
          <div className="flex sm:hidden items-center justify-between gap-3 px-3 py-2.5 bg-charcoal-light/70 border-t border-gold/20">
            <button
              type="button"
              onClick={goToPrev}
              disabled={currentPage <= 1}
              className="flex-1 min-h-[44px] py-2 px-3 rounded-lg bg-charcoal border border-gold/40 text-ivory text-xs font-semibold flex items-center justify-center gap-1.5 disabled:opacity-25 active:bg-sindoor focus:outline-none"
            >
              <ChevronLeft className="w-4 h-4 text-gold-light" />
              <span>Previous</span>
            </button>
            <span className="text-xs font-mono text-gold-light font-bold shrink-0 px-1">
              {currentPage} / {totalPages}
            </span>
            <button
              type="button"
              onClick={goToNext}
              disabled={currentPage >= totalPages}
              className="flex-1 min-h-[44px] py-2 px-3 rounded-lg bg-sindoor text-ivory text-xs font-semibold flex items-center justify-center gap-1.5 disabled:opacity-25 active:bg-sindoor-dark focus:outline-none"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4 text-gold-light" />
            </button>
          </div>
        </>
      )}

      {/* =========================================================================
          VIEW MODE 2: CONTINUOUS DOCUMENT SCROLL
          ========================================================================= */}
      {viewMode === "scroll" && (
        <div className="relative max-h-[80vh] overflow-y-auto p-3 sm:p-8 bg-[#181413] flex flex-col items-center gap-6">
          <div className="text-center pb-2">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">
              Continuous Document Scroll (66 Pages)
            </span>
          </div>
          {SOUVENIR_PAGES.map((p) => (
            <div
              key={`scroll-page-${p.pageNumber}`}
              id={`scroll-page-${p.pageNumber}`}
              className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden border border-gold/30"
            >
              <Image
                src={p.src}
                alt={`Souvenir Page ${p.pageNumber}`}
                width={p.width}
                height={p.height}
                loading={p.pageNumber <= 2 ? "eager" : "lazy"}
                className="w-full h-auto object-contain block"
              />
              <div className="absolute bottom-2 right-3 px-2 py-0.5 rounded bg-black/70 text-ivory font-mono text-xs">
                Page {p.pageNumber} of {totalPages}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* =========================================================================
          VIEW MODE 3: NATIVE EMBEDDED PDF VIEWER
          ========================================================================= */}
      {viewMode === "native" && (
        <div className="relative w-full h-[75vh] min-h-[480px] bg-charcoal p-2 sm:p-4 flex flex-col">
          <div className="flex items-center justify-between pb-3 text-xs text-ivory/80">
            <span className="font-mono text-gold">Official Commemorative PDF Document</span>
            <a
              href={SOUVENIR_METADATA.pdfDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gold-light hover:underline font-bold"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <iframe
            src={`${SOUVENIR_METADATA.pdfDownloadUrl}#view=FitH`}
            title="Sri Durga Pooja Committee Souvenir PDF"
            className="w-full flex-1 rounded-lg border border-gold/30 bg-white shadow-xl"
          />
        </div>
      )}

      {/* =========================================================================
          BOTTOM QUICK SLIDER & PAGE SELECTOR (Desktop & Tablet)
          ========================================================================= */}
      {viewMode === "flipbook" && (
        <div className="hidden sm:flex flex-row items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-charcoal/95 border-t border-gold/25 text-xs font-sans">
          {/* Fast Page Slider */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-gold shrink-0">
              Page {currentPage}
            </span>
            <input
              type="range"
              min={1}
              max={totalPages}
              value={currentPage}
              onChange={(e) => goToPage(parseInt(e.target.value, 10))}
              aria-label="Seek Souvenir Page Slider"
              className="w-48 md:w-64 h-1.5 bg-ivory/20 rounded-lg appearance-none cursor-pointer accent-sindoor focus:outline-none"
            />
            <span className="text-[11px] font-mono text-ivory/60 shrink-0">
              of {totalPages}
            </span>
          </div>

          {/* Quick Jump Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(1)}
              disabled={currentPage === 1}
              className="px-2.5 py-1 rounded border border-gold/30 hover:border-gold hover:bg-gold/15 text-[11px] font-mono text-ivory/80 disabled:opacity-30"
            >
              Cover
            </button>
            <button
              type="button"
              onClick={() => goToPage(Math.round(totalPages / 2))}
              className="px-2.5 py-1 rounded border border-gold/30 hover:border-gold hover:bg-gold/15 text-[11px] font-mono text-ivory/80"
            >
              Middle
            </button>
            <button
              type="button"
              onClick={() => goToPage(totalPages)}
              disabled={currentPage === totalPages}
              className="px-2.5 py-1 rounded border border-gold/30 hover:border-gold hover:bg-gold/15 text-[11px] font-mono text-ivory/80 disabled:opacity-30"
            >
              Back Cover
            </button>
          </div>

          {/* Navigation Hint */}
          <div className="hidden lg:flex items-center gap-2 text-[11px] text-ivory/50 font-mono">
            <span>Tip: Use ← / → keys or swipe to turn pages</span>
          </div>
        </div>
      )}
    </div>
  );
}
