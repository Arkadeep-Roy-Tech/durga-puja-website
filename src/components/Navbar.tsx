"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, Sparkles, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Souvenir", href: "/souvenir" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#F8F3E9]/95 backdrop-blur-md shadow-sm border-b border-gold/35"
            : "bg-[#F8F3E9]/90 backdrop-blur-sm border-b border-gold/25"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Editorial Title */}
            <Link
              href="/"
              className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sindoor rounded-md py-1"
            >
              {/* Official Committee Logo (Untouched, Undistorted) */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold/60 shadow-xs group-hover:border-sindoor transition-colors shrink-0 bg-ivory">
                <Image
                  src="/images/logo.png"
                  alt="Sri Durga Pooja Committee (R) Mangaluru Official Logo"
                  width={48}
                  height={48}
                  priority
                  className="object-contain"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-sindoor font-bold font-sans">
                    43rd Year Celebration
                  </span>
                  <span className="text-gold">•</span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-charcoal/70 font-sans">
                    Mangaluru
                  </span>
                </div>
                <span className="block font-serif text-base sm:text-xl font-bold tracking-tight text-charcoal group-hover:text-sindoor transition-colors duration-200">
                  Sri Durga Pooja Committee (R)
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-sm ${
                      isActive
                        ? "text-sindoor font-bold"
                        : "text-charcoal hover:text-sindoor font-medium"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-sindoor"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}

              {/* Header Action Button */}
              <div className="ml-4 pl-4 border-l border-gold/30">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-sindoor text-ivory hover:bg-sindoor-dark transition-all duration-200 rounded shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-sindoor"
                >
                  <Calendar className="w-3.5 h-3.5 text-gold-light" />
                  <span>2026 Schedule</span>
                </Link>
              </div>
            </nav>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                href="/events"
                aria-label="View 2026 Schedule"
                className="p-2 text-sindoor hover:text-sindoor-dark border border-gold/30 rounded"
              >
                <Calendar className="w-5 h-5" />
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close main menu" : "Open main menu"}
                className="p-2.5 rounded text-charcoal hover:text-sindoor hover:bg-gold/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sindoor transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex flex-col">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 bg-ivory border-b border-gold/30 shadow-2xl p-6 pt-5"
            >
              <div className="flex items-center justify-between pb-4 border-b border-gold/20">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold/60 shrink-0">
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-sindoor font-bold">
                      43rd Year of Durga Pooja
                    </span>
                    <span className="font-serif text-base font-bold text-charcoal">
                      Sri Durga Pooja Committee (R)
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-charcoal hover:text-sindoor rounded focus:outline-none focus:ring-2 focus:ring-sindoor"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="py-6 flex flex-col gap-2" aria-label="Mobile Navigation">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-md text-base font-serif transition-colors ${
                        isActive
                          ? "bg-sindoor text-ivory font-bold shadow-xs"
                          : "text-charcoal hover:bg-gold/15 hover:text-sindoor"
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="text-xs uppercase tracking-widest opacity-60">
                        {link.href === "/" ? "Home" : link.href.replace("/", "")}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-gold/20 flex flex-col gap-3">
                <Link
                  href="/events"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 px-4 bg-sindoor text-ivory text-center font-sans text-xs uppercase tracking-widest font-semibold rounded shadow flex items-center justify-center gap-2 hover:bg-sindoor-dark"
                >
                  <Sparkles className="w-4 h-4 text-gold-light" />
                  <span>View 2026 Festival Schedule</span>
                </Link>
                <Link
                  href="/gallery#visit"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2.5 px-4 bg-transparent border border-gold/40 text-charcoal text-center font-sans text-xs uppercase tracking-widest font-medium rounded flex items-center justify-center gap-2 hover:bg-gold/10"
                >
                  <MapPin className="w-3.5 h-3.5 text-sindoor" />
                  <span>Hindi Prachar Bhavan, Lalbagh</span>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
