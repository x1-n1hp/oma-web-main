"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BubbleCard({
  children,
  className = "",
  contentClassName = "",
  hoverLift = true,
  ...props
}) {
  return (
    <motion.div
      whileHover={hoverLift ? { y: -6 } : undefined}
      transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`bubble-card group relative overflow-hidden transition-colors duration-500 hover:border-[#C59B27] ${className}`}
      {...props}
    >
      {/* Ambient Floating & Hover-Expanding Bubbles Layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] z-0"
      >
        {/* Primary Corner Bubble — floats gently at rest, expands to fill card with Deep Oxford Navy (#0F1729) on hover */}
        <span className="bubble-orb-primary z-0 absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#0F1729]/[0.05] border border-[#0F1729]/[0.08] group-hover:bg-[#0F1729] group-hover:border-transparent" />

        {/* Secondary Sovereign Gold Ambient Bubble (Bottom-Left) — stays visible above the navy fill */}
        <span className="bubble-orb-gold z-[1] absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-[#C59B27]/[0.14] group-hover:bg-[#C59B27]/[0.22]" />

        {/* Tertiary Floating Gold Ring Bubble (Mid-Right) */}
        <span className="bubble-orb-ring z-[1] absolute top-1/2 right-6 w-14 h-14 rounded-full border border-[#C59B27]/30 bg-[#C59B27]/[0.06] group-hover:border-[#E5C158]/45 group-hover:bg-[#E5C158]/15" />

        {/* Micro Floating Shimmer Bubble (Top-Left) */}
        <span className="bubble-orb-micro z-[1] absolute top-5 left-1/3 w-7 h-7 rounded-full bg-[#C59B27]/15 group-hover:bg-[#E5C158]/25" />
      </div>

      {/* Card Foreground Content */}
      <div className={`relative z-10 h-full ${contentClassName}`}>
        {children}
      </div>
    </motion.div>
  );
}
