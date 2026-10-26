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
      className={`bubble-card group relative overflow-hidden transition-colors duration-500 hover:border-[#202860] ${className}`}
      {...props}
    >
      {/* Ambient Floating & Hover-Expanding Brand Logo Bubbles Layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] z-0"
      >
        {/* Primary Corner Bubble — floats gently in Royal Cobalt Indigo (#202860) at rest, expands to fill card on hover */}
        <span className="bubble-orb-primary z-0 absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#202860]/[0.07] border border-[#202860]/[0.12] group-hover:bg-[#202860] group-hover:border-transparent" />

        {/* Secondary Brand Crimson (#B82020) Ambient Bubble (Bottom-Left) — glows above the Cobalt Indigo fill on hover */}
        <span className="bubble-orb-gold z-[1] absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-[#B82020]/[0.14] group-hover:bg-[#B82020]/[0.38]" />

        {/* Tertiary Floating Crimson Ring Bubble (Mid-Right) — echoes the split Crimson Ring in the OMA logo */}
        <span className="bubble-orb-ring z-[1] absolute top-1/2 right-6 w-14 h-14 rounded-full border-2 border-[#B82020]/30 bg-[#B82020]/[0.05] group-hover:border-[#FF8A8A]/65 group-hover:bg-[#B82020]/25" />

        {/* Micro Floating Cobalt/Crimson Shimmer Bubble (Top-Left) */}
        <span className="bubble-orb-micro z-[1] absolute top-5 left-1/3 w-7 h-7 rounded-full bg-[#202860]/15 group-hover:bg-[#FF8A8A]/45" />
      </div>

      {/* Card Foreground Content */}
      <div className={`relative z-10 h-full ${contentClassName}`}>
        {children}
      </div>
    </motion.div>
  );
}
