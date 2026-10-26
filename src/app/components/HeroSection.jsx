"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { BubbleCard, ShelfCarousel } from "./motion";

const HeroSection = () => {
  return (
    <section
      className="bg-[#F5F5F7] border-b border-[#E2E6F2] overflow-hidden pt-12 pb-16"
      id="home"
    >
      {/* =====================================================================
          UPGRADE #1 & #6: APPLE STORE TWO-TONE SPLIT HEADER + LIVE SPECIALIST WIDGET
          ===================================================================== */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          {/* Left: Apple's Signature Inline Split H1 */}
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDF2F2] border border-[#F3CACA] text-[#B82020] text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B82020]"></span>
              Lagos, Nigeria • Speech &amp; Software Flagship
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.12]">
              <span className="text-[#202860]">Oma Services.</span>{" "}
              <span className="text-[#5A6494] font-normal">
                The best way to master spoken English and build world-class
                digital products.
              </span>
            </h1>
            <div className="pt-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B82020] min-h-[1.5rem]">
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
          </motion.div>

          {/* Right: Upgrade #6 — Apple Store "Need Help? Ask a Specialist" Concierge Widget */}
          <motion.div
            className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <div className="flex items-center gap-3.5 bg-white px-4 py-3 rounded-2xl border border-[#D5DCF0] shadow-sm">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#202860] to-[#B82020] text-white font-editorial font-bold text-sm flex items-center justify-center shrink-0">
                DO
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"></span>
              </div>
              <div className="text-xs">
                <p className="font-bold text-[#202860]">
                  Need a custom proposal or school audit?
                </p>
                <Link
                  href="/contact"
                  className="text-[#B82020] font-semibold hover:underline"
                >
                  Ask an OMA Specialist &gt;
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3.5 bg-white px-4 py-3 rounded-2xl border border-[#D5DCF0] shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#FDF2F2] border border-[#F3CACA] text-[#B82020] flex items-center justify-center shrink-0 font-bold text-sm">
                ★
              </div>
              <div className="text-xs">
                <p className="font-bold text-[#202860]">
                  2024 OMA Diction Awards Gala
                </p>
                <Link
                  href="/registration"
                  className="text-[#202860] font-semibold hover:text-[#B82020] transition-colors"
                >
                  Silverbird Galleria, VI Lagos • Enroll &gt;
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================================
          UPGRADE #2: VISUAL CATEGORY ICON DOCK (APPLE PRODUCT STRIP)
          ===================================================================== */}
      <div className="max-w-6xl mx-auto px-6 py-7">
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-2">
          {/* Category 1: Speech Therapy */}
          <Link
            href="/diction"
            className="group flex flex-col items-center gap-2.5 min-w-[110px] p-3 rounded-2xl hover:bg-white transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-[#D5DCF0] group-hover:border-[#B82020] shadow-sm flex items-center justify-center transition-all group-hover:-translate-y-1">
              <div className="flex items-end gap-1 h-7">
                <span className="w-1.5 h-4 bg-[#B82020] rounded-full wave-bar"></span>
                <span
                  className="w-1.5 h-7 bg-[#202860] rounded-full wave-bar"
                  style={{ animationDelay: "0.2s" }}
                ></span>
                <span
                  className="w-1.5 h-5 bg-[#B82020] rounded-full wave-bar"
                  style={{ animationDelay: "0.4s" }}
                ></span>
                <span
                  className="w-1.5 h-3 bg-[#202860] rounded-full wave-bar"
                  style={{ animationDelay: "0.6s" }}
                ></span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#202860] group-hover:text-[#B82020] text-center transition-colors">
              Speech Therapy
            </span>
          </Link>

          {/* Category 2: School Diction */}
          <Link
            href="/diction"
            className="group flex flex-col items-center gap-2.5 min-w-[110px] p-3 rounded-2xl hover:bg-white transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-[#D5DCF0] group-hover:border-[#B82020] shadow-sm flex items-center justify-center transition-all group-hover:-translate-y-1">
              <span className="font-editorial text-2xl font-bold text-[#202860] group-hover:text-[#B82020]">
                Aa
              </span>
            </div>
            <span className="text-xs font-bold text-[#202860] group-hover:text-[#B82020] text-center transition-colors">
              School Diction
            </span>
          </Link>

          {/* Category 3: Phonics Classes */}
          <Link
            href="/diction"
            className="group flex flex-col items-center gap-2.5 min-w-[110px] p-3 rounded-2xl hover:bg-white transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-[#D5DCF0] group-hover:border-[#B82020] shadow-sm flex items-center justify-center transition-all group-hover:-translate-y-1">
              <span className="font-mono text-base font-bold text-[#B82020]">
                /əˈlɒk/
              </span>
            </div>
            <span className="text-xs font-bold text-[#202860] group-hover:text-[#B82020] text-center transition-colors">
              Phonics Classes
            </span>
          </Link>

          {/* Category 4: Website Design */}
          <Link
            href="/web-design"
            className="group flex flex-col items-center gap-2.5 min-w-[110px] p-3 rounded-2xl hover:bg-white transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-[#D5DCF0] group-hover:border-[#202860] shadow-sm flex items-center justify-center transition-all group-hover:-translate-y-1">
              <div className="w-9 h-7 rounded-md border-2 border-[#202860] flex flex-col overflow-hidden">
                <div className="h-1.5 bg-[#B82020] w-full"></div>
                <div className="flex-1 bg-[#EFF2FA]"></div>
              </div>
            </div>
            <span className="text-xs font-bold text-[#202860] group-hover:text-[#B82020] text-center transition-colors">
              Website Design
            </span>
          </Link>

          {/* Category 5: Mobile Apps */}
          <Link
            href="/mobile-apps"
            className="group flex flex-col items-center gap-2.5 min-w-[110px] p-3 rounded-2xl hover:bg-white transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-[#D5DCF0] group-hover:border-[#202860] shadow-sm flex items-center justify-center transition-all group-hover:-translate-y-1">
              <div className="w-6 h-10 rounded-lg border-2 border-[#202860] flex flex-col items-center justify-between p-1">
                <span className="w-2 h-0.5 bg-[#B82020] rounded-full"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B82020]"></span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#202860] group-hover:text-[#B82020] text-center transition-colors">
              Mobile Apps
            </span>
          </Link>

          {/* Category 6: Custom Web Apps */}
          <Link
            href="/web-apps"
            className="group flex flex-col items-center gap-2.5 min-w-[110px] p-3 rounded-2xl hover:bg-white transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-[#D5DCF0] group-hover:border-[#202860] shadow-sm flex items-center justify-center transition-all group-hover:-translate-y-1">
              <span className="font-mono text-sm font-bold text-[#202860] bg-[#EFF2FA] px-2 py-1 rounded border border-[#D5DCF0]">
                &lt;/&gt;
              </span>
            </div>
            <span className="text-xs font-bold text-[#202860] group-hover:text-[#B82020] text-center transition-colors">
              Custom Web Apps
            </span>
          </Link>

          {/* Category 7: 2024 Awards */}
          <Link
            href="/registration"
            className="group flex flex-col items-center gap-2.5 min-w-[110px] p-3 rounded-2xl hover:bg-white transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#FDF2F2] border border-[#F3CACA] group-hover:bg-[#B82020] shadow-sm flex items-center justify-center transition-all group-hover:-translate-y-1">
              <span className="text-xl text-[#B82020] group-hover:text-white font-bold">
                ★
              </span>
            </div>
            <span className="text-xs font-bold text-[#B82020] text-center">
              2024 Awards
            </span>
          </Link>
        </div>
      </div>

      {/* =====================================================================
          UPGRADE #3 & #4: HORIZONTAL SNAP-SCROLL SHELF OF TALL 28PX BUBBLE CARDS
          ===================================================================== */}
      <div className="max-w-6xl mx-auto px-6 pt-4">
        <ShelfCarousel
          title="The Flagship Suites."
          subtitle="Take a look at what’s transforming schools and brands right now."
        >
          {/* Card 1: Tall 28px Apple-Style Card — Division I Diction */}
          <Link href="/diction" className="snap-start shrink-0 block">
            <BubbleCard
              className="w-[310px] sm:w-[365px] h-[470px] rounded-[28px] bg-white border border-[#D5DCF0] shadow-md"
              contentClassName="flex flex-col justify-between"
            >
              <div className="p-7 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#B82020] group-hover:text-[#FF8A8A] transition-colors">
                  Division I • Elocution Academy
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#202860] group-hover:text-white mt-1.5 leading-snug transition-colors">
                  Speak with effortless authority in every room.
                </h3>
                <p className="text-xs text-[#424B78] group-hover:text-slate-200 mt-2 leading-relaxed transition-colors">
                  School-wide diction deployment, phonics literacy, and
                  executive speech refinement across 50+ institutions.
                </p>
              </div>

              <div className="mx-4 mb-4 h-56 rounded-[20px] bg-gradient-to-br from-[#202860] via-[#1B2254] to-[#B82020] p-6 text-white flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/15 text-xs font-bold">
                    10,000+ Scholars
                  </span>
                  <span className="font-editorial text-lg font-bold text-[#FF8A8A]">
                    I
                  </span>
                </div>
                <div>
                  <div className="flex items-end gap-1.5 h-10 mb-3">
                    <span className="w-2 h-5 bg-[#FF8A8A] rounded-full wave-bar"></span>
                    <span
                      className="w-2 h-9 bg-white rounded-full wave-bar"
                      style={{ animationDelay: "0.15s" }}
                    ></span>
                    <span
                      className="w-2 h-7 bg-[#FF8A8A] rounded-full wave-bar"
                      style={{ animationDelay: "0.3s" }}
                    ></span>
                    <span
                      className="w-2 h-10 bg-white rounded-full wave-bar"
                      style={{ animationDelay: "0.45s" }}
                    ></span>
                    <span
                      className="w-2 h-6 bg-[#FF8A8A] rounded-full wave-bar"
                      style={{ animationDelay: "0.6s" }}
                    ></span>
                    <span
                      className="w-2 h-8 bg-white rounded-full wave-bar"
                      style={{ animationDelay: "0.75s" }}
                    ></span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span>Explore Diction Academy</span>
                    <span className="w-7 h-7 rounded-full bg-white text-[#202860] flex items-center justify-center">
                      +
                    </span>
                  </div>
                </div>
              </div>
            </BubbleCard>
          </Link>

          {/* Card 2: Tall 28px Apple-Style Card — Division II Web Architecture */}
          <Link href="/web-design" className="snap-start shrink-0 block">
            <BubbleCard
              className="w-[310px] sm:w-[365px] h-[470px] rounded-[28px] bg-white border border-[#D5DCF0] shadow-md"
              contentClassName="flex flex-col justify-between"
            >
              <div className="p-7 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#202860] group-hover:text-[#FF8A8A] transition-colors">
                  Division II • Web Architecture
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#202860] group-hover:text-white mt-1.5 leading-snug transition-colors">
                  Bespoke websites engineered to convert.
                </h3>
                <p className="text-xs text-[#424B78] group-hover:text-slate-200 mt-2 leading-relaxed transition-colors">
                  Editorial UI/UX, technical SEO, and full lifecycle management
                  — never generic templates.
                </p>
              </div>

              <div className="mx-4 mb-4 h-56 rounded-[20px] bg-[#FAF8F5] group-hover:bg-white/10 border border-[#E2E6F2] group-hover:border-white/15 p-5 flex flex-col justify-between transition-colors">
                <div className="rounded-xl bg-white shadow-md border border-[#D5DCF0] p-3">
                  <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-slate-100">
                    <span className="w-2 h-2 rounded-full bg-[#B82020]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#202860]"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                    <span className="text-xs text-[#5A6494] ml-2 font-mono">
                      omadiction.pro
                    </span>
                  </div>
                  <div className="h-16 rounded-lg bg-gradient-to-r from-[#202860] to-[#B82020] p-2.5 text-white flex items-end">
                    <span className="text-xs font-bold">
                      Next.js 15 • 99.9% Uptime
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-[#202860] group-hover:text-white transition-colors">
                  <span>View Web Engineering Suite</span>
                  <span className="w-7 h-7 rounded-full bg-[#202860] text-white group-hover:bg-[#B82020] flex items-center justify-center transition-colors">
                    +
                  </span>
                </div>
              </div>
            </BubbleCard>
          </Link>

          {/* Card 3: Tall 28px Apple-Style Card — 2024 OMA Diction Awards */}
          <Link href="/registration" className="snap-start shrink-0 block">
            <BubbleCard
              className="w-[310px] sm:w-[365px] h-[470px] rounded-[28px] bg-white border-2 border-[#B82020]/40 shadow-md"
              contentClassName="flex flex-col justify-between"
            >
              <div className="p-7 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#B82020] group-hover:text-[#FF8A8A] transition-colors">
                  ★ 9th Annual Edition • Lagos
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#202860] group-hover:text-white mt-1.5 leading-snug transition-colors">
                  2024 OMA Diction Awards Competition.
                </h3>
                <p className="text-xs text-[#424B78] group-hover:text-slate-200 mt-2 leading-relaxed transition-colors">
                  ₦50,000 1st Prize per category at Silverbird Galleria,
                  Victoria Island. Entry: ₦7,000 per pupil.
                </p>
              </div>

              <div className="mx-4 mb-4 h-56 rounded-[20px] bg-[#FDF2F2] group-hover:bg-white/10 border border-[#F3CACA] group-hover:border-white/15 p-5 flex flex-col justify-between transition-colors">
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-white rounded-xl p-3 border border-[#F3CACA]">
                    <span className="text-xs font-bold text-[#B82020] block">
                      Category A
                    </span>
                    <span className="font-editorial text-sm font-bold text-[#202860]">
                      Poetry Recitation
                    </span>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-[#D5DCF0]">
                    <span className="text-xs font-bold text-[#202860] block">
                      Category B
                    </span>
                    <span className="font-editorial text-sm font-bold text-[#202860]">
                      Words Mispronounced
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-[#B82020] group-hover:text-white transition-colors">
                  <span>Enroll Candidate Now</span>
                  <span className="w-7 h-7 rounded-full bg-[#B82020] text-white flex items-center justify-center">
                    →
                  </span>
                </div>
              </div>
            </BubbleCard>
          </Link>

          {/* Card 4: Tall 28px Apple-Style Card — Mobile & Custom Web Applications */}
          <Link href="/mobile-apps" className="snap-start shrink-0 block">
            <BubbleCard
              className="w-[310px] sm:w-[365px] h-[470px] rounded-[28px] bg-white border border-[#D5DCF0] shadow-md"
              contentClassName="flex flex-col justify-between"
            >
              <div className="p-7 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#202860] group-hover:text-[#FF8A8A] transition-colors">
                  Divisions III &amp; IV • App Engineering
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#202860] group-hover:text-white mt-1.5 leading-snug transition-colors">
                  Native iOS, Android &amp; Custom School Portals.
                </h3>
                <p className="text-xs text-[#424B78] group-hover:text-slate-200 mt-2 leading-relaxed transition-colors">
                  Multi-user dashboards, Paystack/Flutterwave payments, and
                  offline-first mobile architecture.
                </p>
              </div>

              <div className="mx-4 mb-4 h-56 rounded-[20px] bg-[#202860] p-5 text-white flex flex-col justify-between">
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-semibold">
                    iOS &amp; Android
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-semibold">
                    Next.js
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#B82020] text-xs font-semibold">
                    Paystack Ready
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-semibold">
                    PostgreSQL
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-[#FF8A8A]">Scope Your App</span>
                  <span className="w-7 h-7 rounded-full bg-white text-[#202860] flex items-center justify-center">
                    +
                  </span>
                </div>
              </div>
            </BubbleCard>
          </Link>

          {/* Card 5: Tall 28px Apple-Style Card — The Diction Oracle Portrait Showcase */}
          <Link href="/about" className="snap-start shrink-0 block">
            <BubbleCard
              className="w-[310px] sm:w-[365px] h-[470px] rounded-[28px] bg-white border border-[#D5DCF0] shadow-md"
              contentClassName="flex flex-col justify-between"
            >
              <div className="p-7 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#B82020] group-hover:text-[#FF8A8A] transition-colors">
                  The Diction Oracle • Est. 10+ Yrs
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#202860] group-hover:text-white mt-1.5 leading-snug transition-colors">
                  Excellence in Spoken English &amp; Technology.
                </h3>
                <p className="text-xs text-[#424B78] group-hover:text-slate-200 mt-2 leading-relaxed transition-colors">
                  4.9★ rated across 50+ partner institutions with 830+ verified
                  client endorsements.
                </p>
              </div>

              <div className="relative mx-4 mb-4 h-56 rounded-[20px] overflow-hidden bg-[#202860]">
                <Image
                  src="/images/DSC_6849.JPG"
                  alt="Oma Services Excellence"
                  fill
                  className="object-cover opacity-95 group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#202860] via-[#202860]/25 to-transparent"></div>
                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-white text-xs font-bold">
                  <span>Our Institutional Story</span>
                  <span className="px-3 py-1 rounded-full bg-[#B82020] text-white">
                    Read &gt;
                  </span>
                </div>
              </div>
            </BubbleCard>
          </Link>
        </ShelfCarousel>
      </div>
    </section>
  );
};

export default HeroSection;
