"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const practiceLinks = [
  { label: "I. Professional Diction", href: "/diction" },
  { label: "II. Website Design", href: "/web-design" },
  { label: "III. Mobile App Engineering", href: "/mobile-apps" },
  { label: "IV. Web Applications", href: "/web-apps" },
];

const HeroSection = () => {
  return (
    <section
      className="bg-[#FAF7F2] border-b border-[#E5DEC9] overflow-hidden py-16 lg:py-24"
      id="home"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Editorial Column */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Institutional Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F2ECE1] border border-[#DFD3BC] text-[#856213] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#C59B27]"></span>
              Nigeria&apos;s Premier Communication &amp; Digital Engineering Firm
            </div>

            {/* Editorial Display Headline */}
            <div className="space-y-2">
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F1729] leading-[1.08] tracking-tight">
                Speak with{" "}
                <span className="italic font-normal text-[#9A7418] underline decoration-[#C59B27]/50 decoration-2 underline-offset-8">
                  authority.
                </span>
                <br />
                Build with{" "}
                <span className="italic font-normal text-[#0F1729]">
                  precision.
                </span>
              </h1>
              <div className="pt-2 text-sm sm:text-base font-semibold uppercase tracking-widest text-[#9A7418] min-h-[1.75rem]">
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

            <p className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-xl">
              From executive elocution and school-wide diction mastery to
              bespoke websites, mobile apps, and enterprise software — Oma
              Services equips leaders and institutions to command attention.
            </p>

            {/* Dual-Division Switcher Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 max-w-xl">
              <Link
                href="/diction"
                className="group p-4 rounded-xl bg-white border border-[#E5DEC9] hover:border-[#C59B27] shadow-sm transition-all flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF4E4] text-[#9A7418] flex items-center justify-center font-editorial font-bold text-base shrink-0 border border-[#E8D7B0]">
                  I
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#9A7418]">
                    Division 01
                  </div>
                  <div className="text-sm font-bold text-[#0F1729] group-hover:text-[#9A7418] transition-colors">
                    Professional Diction →
                  </div>
                  <div className="text-xs text-[#64748B] mt-0.5">
                    Elocution, Phonics &amp; Speech Therapy
                  </div>
                </div>
              </Link>

              <Link
                href="/web-design"
                className="group p-4 rounded-xl bg-white border border-[#E5DEC9] hover:border-[#0F1729] shadow-sm transition-all flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0F1729] text-[#C59B27] flex items-center justify-center font-editorial font-bold text-base shrink-0">
                  II
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                    Division 02
                  </div>
                  <div className="text-sm font-bold text-[#0F1729] group-hover:text-[#9A7418] transition-colors">
                    Digital Engineering →
                  </div>
                  <div className="text-xs text-[#64748B] mt-0.5">
                    Web Design, Mobile &amp; Custom Apps
                  </div>
                </div>
              </Link>
            </div>

            {/* Direct Practice Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {practiceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-[#DFD3BC] text-[#0F1729] text-xs font-semibold hover:bg-[#0F1729] hover:text-[#FAF7F2] hover:border-[#0F1729] transition-colors"
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
                  className="px-7 py-3.5 rounded-xl bg-[#0F1729] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1E293B] transition shadow-md"
                >
                  Commission a Project
                </motion.button>
              </a>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3.5 rounded-xl border border-[#C59B27] bg-[#FAF4E4]/70 text-[#856213] text-xs font-bold uppercase tracking-wider hover:bg-[#C59B27] hover:text-white transition"
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
              {/* Decorative Offset Sovereign Gold Frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#C59B27]/50 translate-x-3 translate-y-3 pointer-events-none"></div>

              <div className="relative rounded-2xl overflow-hidden bg-[#0F1729] border-2 border-[#0F1729] shadow-2xl">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/DSC_6849.JPG"
                    alt="Oma Services Excellence"
                    fill
                    className="object-cover opacity-95"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1729] via-[#0F1729]/25 to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <div className="flex items-center justify-between border-t border-white/20 pt-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#E5C158] font-semibold">
                        The Diction Oracle
                      </p>
                      <p className="font-editorial text-lg font-bold">
                        Excellence in Spoken English &amp; Tech
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold">
                      Est. 10+ Yrs
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Acoustic & Institutional Credential Card */}
              <div className="-mt-6 mx-4 bg-white border border-[#E5DEC9] rounded-xl p-4 shadow-xl relative z-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-end gap-1 h-7 px-2.5 py-1.5 bg-[#FAF4E4] rounded-lg border border-[#E8D7B0]">
                    <span className="w-1 h-3 bg-[#C59B27] wave-bar"></span>
                    <span
                      className="w-1 h-5 bg-[#0F1729] wave-bar"
                      style={{ animationDelay: "0.2s" }}
                    ></span>
                    <span
                      className="w-1 h-4 bg-[#C59B27] wave-bar"
                      style={{ animationDelay: "0.4s" }}
                    ></span>
                    <span
                      className="w-1 h-2.5 bg-[#0F1729] wave-bar"
                      style={{ animationDelay: "0.6s" }}
                    ></span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F1729]">
                      10,000+ Scholars &amp; Clients
                    </div>
                    <div className="text-xs text-[#64748B]">
                      Across 50+ Partner Institutions
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#9A7418] shrink-0">
                  4.9★ Rated
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
