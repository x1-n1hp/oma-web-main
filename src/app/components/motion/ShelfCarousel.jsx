"use client";

import React, { useRef } from "react";

export default function ShelfCarousel({
  title,
  subtitle,
  eyebrow,
  children,
  scrollAmount = 380,
  className = "",
  shelfClassName = "",
}) {
  const shelfRef = useRef(null);

  const handleScroll = (dir) => {
    if (!shelfRef.current) return;
    shelfRef.current.scrollBy({
      left: dir * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={className}>
      {/* Apple Store Two-Tone Split Heading + Circular < / > Paddles */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="text-xs font-bold uppercase tracking-widest text-[#B82020] block mb-1.5">
              {eyebrow}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug">
            <span className="text-[#202860] dark:text-white transition-colors duration-300">{title}</span>{" "}
            {subtitle && (
              <span className="text-[#5A6494] dark:text-[#94A3D3] font-normal transition-colors duration-300">{subtitle}</span>
            )}
          </h2>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => handleScroll(-1)}
            aria-label="Scroll shelf left"
            className="w-9 h-9 rounded-full bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] text-[#202860] dark:text-white hover:bg-[#202860] dark:hover:bg-[#B82020] hover:text-white hover:border-[#202860] dark:hover:border-[#B82020] flex items-center justify-center font-bold shadow-sm transition-colors"
          >
            &lt;
          </button>
          <button
            type="button"
            onClick={() => handleScroll(1)}
            aria-label="Scroll shelf right"
            className="w-9 h-9 rounded-full bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] text-[#202860] dark:text-white hover:bg-[#202860] dark:hover:bg-[#B82020] hover:text-white hover:border-[#202860] dark:hover:border-[#B82020] flex items-center justify-center font-bold shadow-sm transition-colors"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Horizontal Snap-Scroll Shelf */}
      <div
        ref={shelfRef}
        className={`flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 pt-2 ${shelfClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
