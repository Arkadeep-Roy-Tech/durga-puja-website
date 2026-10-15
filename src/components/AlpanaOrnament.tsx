import React from "react";

interface OrnamentProps {
  className?: string;
  color?: string;
  size?: number;
}

/**
 * Editorial divider line featuring a delicate central floral/alpana lozenge
 */
export function EditorialDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 py-6 ${className}`}>
      <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/40 to-gold/80" />
      <div className="flex items-center gap-1.5 text-gold">
        <span className="inline-block w-1 h-1 rotate-45 bg-gold" />
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-sindoor"
        >
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
        <span className="inline-block w-1 h-1 rotate-45 bg-gold" />
      </div>
      <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold/40 to-gold/80" />
    </div>
  );
}

/**
 * Traditional Alpana Lotus Mandala Motif (SVG)
 */
export function AlpanaLotus({ className = "", size = 48, color = "currentColor" }: OrnamentProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central Core */}
      <circle cx="50" cy="50" r="6" stroke={color} strokeWidth="1.5" />
      <circle cx="50" cy="50" r="2" fill={color} />

      {/* 8 Inner Petals */}
      <path
        d="M50 38 C46 42 46 48 50 50 C54 48 54 42 50 38 Z"
        stroke={color}
        strokeWidth="1.2"
      />
      <path
        d="M50 62 C46 58 46 52 50 50 C54 52 54 58 50 62 Z"
        stroke={color}
        strokeWidth="1.2"
      />
      <path
        d="M38 50 C42 46 48 46 50 50 C48 54 42 54 38 50 Z"
        stroke={color}
        strokeWidth="1.2"
      />
      <path
        d="M62 50 C58 46 52 46 50 50 C52 54 58 54 62 50 Z"
        stroke={color}
        strokeWidth="1.2"
      />

      {/* Diagonal Petals */}
      <path
        d="M41.5 41.5 C44.3 47.2 47.2 44.3 50 50 C44.3 47.2 47.2 44.3 41.5 41.5 Z"
        stroke={color}
        strokeWidth="1"
      />
      <path
        d="M58.5 58.5 C55.7 52.8 52.8 55.7 50 50 C55.7 52.8 52.8 55.7 58.5 58.5 Z"
        stroke={color}
        strokeWidth="1"
      />
      <path
        d="M58.5 41.5 C52.8 44.3 55.7 47.2 50 50 C55.7 47.2 52.8 44.3 58.5 41.5 Z"
        stroke={color}
        strokeWidth="1"
      />
      <path
        d="M41.5 58.5 C47.2 55.7 44.3 52.8 50 50 C44.3 52.8 47.2 55.7 41.5 58.5 Z"
        stroke={color}
        strokeWidth="1"
      />

      {/* Outer Radiance Petals */}
      <circle cx="50" cy="50" r="22" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
      
      {/* 8 Outer Teardrops */}
      <path d="M50 18 Q46 28 50 32 Q54 28 50 18" stroke={color} strokeWidth="1.2" />
      <path d="M50 82 Q46 72 50 68 Q54 72 50 82" stroke={color} strokeWidth="1.2" />
      <path d="M18 50 Q28 46 32 50 Q28 54 18 50" stroke={color} strokeWidth="1.2" />
      <path d="M82 50 Q72 46 68 50 Q72 54 82 50" stroke={color} strokeWidth="1.2" />

      {/* Diagonal Accent Dots */}
      <circle cx="27" cy="27" r="2" fill={color} />
      <circle cx="73" cy="27" r="2" fill={color} />
      <circle cx="27" cy="73" r="2" fill={color} />
      <circle cx="73" cy="73" r="2" fill={color} />
    </svg>
  );
}

/**
 * Elegant decorative corner brackets for luxury cards and editorial panels
 */
export function CornerBrackets({ className = "", color = "rgba(212, 166, 92, 0.45)" }: { className?: string; color?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      {/* Top Left */}
      <svg
        className="absolute top-2 left-2 w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
      >
        <path d="M0 8V0H8" />
        <circle cx="4" cy="4" r="1.5" fill={color} />
      </svg>
      {/* Top Right */}
      <svg
        className="absolute top-2 right-2 w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
      >
        <path d="M16 0H24V8" />
        <circle cx="20" cy="4" r="1.5" fill={color} />
      </svg>
      {/* Bottom Left */}
      <svg
        className="absolute bottom-2 left-2 w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
      >
        <path d="M0 16V24H8" />
        <circle cx="4" cy="20" r="1.5" fill={color} />
      </svg>
      {/* Bottom Right */}
      <svg
        className="absolute bottom-2 right-2 w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
      >
        <path d="M16 24H24V16" />
        <circle cx="20" cy="20" r="1.5" fill={color} />
      </svg>
    </div>
  );
}

/**
 * Sacred Trishul (Trident) & Conch (Shankha) Emblems
 */
export function TrishulEmblem({ className = "", size = 28 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 3v26" />
      <path d="M8 8c0 7 8 9 8 9s8-2 8-9V5" />
      <path d="M8 5v3" />
      <path d="M24 5v3" />
      <circle cx="16" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}
