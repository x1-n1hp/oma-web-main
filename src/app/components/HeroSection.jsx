"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { BubbleCard } from "./motion";

const practiceLinks = [
  { label: "I. Professional Diction", href: "/diction" },
  { label: "II. Website Design", href: "/web-design" },
  { label: "III. Mobile App Engineering", href: "/mobile-apps" },
  { label: "IV. Web Applications", href: "/web-apps" },
];

const HeroSection = () => {
  return (
    <section
      className="relative bg-[#FAF8F5] border-b border-[#E2E6F2] overflow-hidden py-16 lg:py-24"
      id="home"
    >
      {/* Subtle Brand Logo Ring & Key Watermark Geometry */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full border-[28px] border-[#B82020]/5"></div>
      <div className="pointer-events-none absolute bottom-10 -left-20 w-80 h-80 rounded-full border-[20px] border-[#202860]/5"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Editorial Column */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Institutional Eyebrow Pill in Brand Crimson (#B82020) */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FDF2F2] border border-[#F3CACA] text-[#B82020] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#B82020]"></span>
              Nigeria&apos;s Premier Communication &amp; Digital Engineering Firm
            </div>

            {/* Editorial Display Headline */}
            <div className="space-y-2">
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#202860] leading-[1.08] tracking-tight">
                Speak with{" "}
                <span className="italic font-normal text-[#B82020] underline decoration-[#B82020]/40 decoration-2 underline-offset-8">
                  authority.
                </span>
                <br />
                Build with{" "}
                <span className="italic font-normal text-[#202860]">
                  precision.
                </span>
              </h1>
              <div className="pt-2 text-sm sm:text-base font-bold uppercase tracking-widest text-[#B82020] min-h-[1.75rem]">
                <TypeAnimation
                  sequence={[
                    "— Executive Elocution & School Diction Mastery",
                    1800,
                    "— Bespoke Website Design & Digital Architecture",
                    1800,
                    "— Native Mobile & Enterprise Web Applications",
                    1800,
                  ]}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                />
              </div>
            </div>

            <p className="text-[#424B78] text-base sm:text-lg leading-relaxed max-w-xl">
              From executive elocution and school-wide diction mastery to
              bespoke websites, mobile apps, and enterprise software — Oma
              Services equips leaders and institutions to command attention.
            </p>

            {/* Dual-Division Switcher Bubble Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 max-w-xl">
              <Link href="/diction" className="block">
                <BubbleCard className="p-4 rounded-xl bg-white border-2 border-[#202860] shadow-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#FDF2F2] text-[#B82020] group-hover:bg-[#B82020] group-hover:text-white flex items-center justify-center font-editorial font-bold text-base shrink-0 border border-[#F3CACA] group-hover:border-[#B82020] transition-colors">
                      I
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#B82020] group-hover:text-[#FF8A8A] transition-colors">
                        Division 01 • The Crimson Ring
                      </div>
                      <div className="text-sm font-bold text-[#202860] group-hover:text-white transition-colors">
                        Professional Diction →
                      </div>
                      <div className="text-xs text-[#5A6494] group-hover:text-slate-200 mt-0.5 transition-colors">
                        Elocution, Phonics &amp; Speech Therapy
                      </div>
                    </div>
                  </div>
                </BubbleCard>
              </Link>

              <Link href="/web-design" className="block">
                <BubbleCard className="p-4 rounded-xl bg-white border border-[#D5DCF0] shadow-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#202860] text-white group-hover:bg-[#B82020] group-hover:text-white flex items-center justify-center font-editorial font-bold text-base shrink-0 transition-colors">
                      II
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#202860] group-hover:text-[#FF8A8A] transition-colors">
                        Division 02 • The Cobalt Key
                      </div>
                      <div className="text-sm font-bold text-[#202860] group-hover:text-white transition-colors">
                        Digital Engineering →
                      </div>
                      <div className="text-xs text-[#5A6494] group-hover:text-slate-200 mt-0.5 transition-colors">
                        Web Design, Mobile &amp; Custom Apps
                      </div>
                    </div>
                  </div>
                </BubbleCard>
              </Link>
            </div>

            {/* Direct Practice Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {practiceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-[#D5DCF0] text-[#202860] text-xs font-semibold hover:bg-[#202860] hover:text-white hover:border-[#202860] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Executive CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="mailto:partnerships@omadiction.pro">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3.5 rounded-xl bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#9E1818] transition shadow-lg shadow-[#B82020]/25"
                >
                  Commission a Project →
                </motion.button>
              </a>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3.5 rounded-xl border-2 border-[#202860] bg-white text-[#202860] text-xs font-bold uppercase tracking-wider hover:bg-[#202860] hover:text-white transition"
                >
                  Explore Capabilities
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Architectural Portrait Frame */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <div className="relative mx-auto max-w-md">
              {/* Decorative Offset Brand Crimson Frame */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-[#B82020]/45 translate-x-3 translate-y-3 pointer-events-none"></div>

              <div className="relative rounded-2xl overflow-hidden bg-[#202860] border-2 border-[#202860] shadow-2xl">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/DSC_6849.JPG"
                    alt="Oma Services Excellence"
                    fill
                    className="object-cover opacity-95"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#202860] via-[#202860]/25 to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <div className="flex items-center justify-between border-t border-white/20 pt-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#FF8A8A] font-bold">
                        The Diction Oracle
                      </p>
                      <p className="font-editorial text-lg font-bold">
                        Excellence in Spoken English &amp; Tech
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#B82020] text-white text-xs font-bold shadow">
                      Est. 10+ Yrs
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Acoustic & Institutional Credential Bubble Card */}
              <BubbleCard
                hoverLift={false}
                className="-mt-6 mx-4 bg-white border border-[#D5DCF0] rounded-xl p-4 shadow-xl relative z-10"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-end gap-1 h-7 px-2.5 py-1.5 bg-[#FDF2F2] rounded-lg border border-[#F3CACA]">
                      <span className="w-1 h-3 bg-[#B82020] wave-bar"></span>
                      <span
                        className="w-1 h-5 bg-[#202860] wave-bar"
                        style={{ animationDelay: "0.2s" }}
                      ></span>
                      <span
                        className="w-1 h-4 bg-[#B82020] wave-bar"
                        style={{ animationDelay: "0.4s" }}
                      ></span>
                      <span
                        className="w-1 h-2.5 bg-[#202860] wave-bar"
                        style={{ animationDelay: "0.6s" }}
                      ></span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#202860] group-hover:text-white transition-colors">
                        10,000+ Scholars &amp; Clients
                      </div>
                      <div className="text-xs text-[#5A6494] group-hover:text-slate-200 transition-colors">
                        Across 50+ Partner Institutions
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#B82020] group-hover:text-[#FF8A8A] shrink-0 transition-colors">
                    4.9★ Rated
                  </span>
                </div>
              </BubbleCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
