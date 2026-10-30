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
      className="bg-[#F5F5F7] dark:bg-[#0A0E24] border-b border-[#E2E6F2] dark:border-[#232E66] overflow-hidden pt-12 pb-16 transition-colors duration-300"
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDF2F2] dark:bg-[#B82020]/20 border border-[#F3CACA] dark:border-[#B82020]/40 text-[#B82020] dark:text-[#FF8A8A] text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B82020]"></span>
              Transforming Scholars &amp; Elevating School Reputations
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.12]">
              <span className="text-[#202860] dark:text-white transition-colors duration-300">Oma Services.</span>{" "}
              <span className="text-[#5A6494] dark:text-[#94A3D3] font-normal transition-colors duration-300">
                Turn your pupils into articulate leaders and your school into the #1 choice.
              </span>
            </h1>
            <div className="pt-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B82020] dark:text-[#FF8A8A] min-h-[1.5rem]">
              <TypeAnimation
                sequence={[
                  "— Watch Student Confidence Surge from Day One",
                  1800,
                  "— Attract High-Value Families with Impeccable British Diction",
                  1800,
                  "— Custom Portals That Eliminate School Operational Chaos",
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
            <div className="flex items-center gap-3.5 bg-white dark:bg-[#131A3E] px-4 py-3 rounded-2xl border border-[#D5DCF0] dark:border-[#232E66] shadow-sm transition-colors duration-300">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#202860] to-[#B82020] text-white font-editorial font-bold text-sm flex items-center justify-center shrink-0">
                DO
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#131A3E]"></span>
              </div>
              <div className="text-xs">
                <p className="font-bold text-[#202860] dark:text-white">
                  Want to increase your school enrollment?
                </p>
                <Link
                  href="/contact"
                  className="text-[#B82020] dark:text-[#FF8A8A] font-semibold hover:underline"
                >
                  Schedule Head of School Consultation &gt;
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3.5 bg-white dark:bg-[#131A3E] px-4 py-3 rounded-2xl border border-[#D5DCF0] dark:border-[#232E66] shadow-sm transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-[#FDF2F2] dark:bg-[#B82020]/20 border border-[#F3CACA] dark:border-[#B82020]/40 text-[#B82020] dark:text-[#FF8A8A] flex items-center justify-center shrink-0 font-bold text-sm">
                ★
              </div>
              <div className="text-xs">
                <p className="font-bold text-[#202860] dark:text-white">
                  Give Your Students the Stage of a Lifetime
                </p>
                <Link
                  href="/registration"
                  className="text-[#202860] dark:text-slate-300 font-semibold hover:text-[#B82020] dark:hover:text-[#FF8A8A] transition-colors"
                >
                  ₦50,000 Top Prize &amp; Live TV • Secure Slots &gt;
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
            className="group flex flex-col items-center gap-2.5 min-w-[110px] p-3 rounded-2xl hover:bg-white dark:hover:bg-[#131A3E] transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] group-hover:border-[#B82020] dark:group-hover:border-[#FF8A8A] shadow-sm flex items-center justify-center transition-all group-hover:-translate-y-1">
              <div className="flex items-end gap-1 h-7">
                <span className="w-1.5 h-4 bg-[#B82020] rounded-full wave-bar"></span>
                <span
                  className="w-1.5 h-7 bg-[#202860] dark:bg-[#94A3D3] rounded-full wave-bar"
                  style={{ animationDelay: "0.2s" }}
                ></span>
                <span
                  className="w-1.5 h-5 bg-[#B82020] rounded-full wave-bar"
                  style={{ animationDelay: "0.4s" }}
                ></span>
                <span
                  className="w-1.5 h-3 bg-[#202860] dark:bg-[#94A3D3] rounded-full wave-bar"
                  style={{ animationDelay: "0.6s" }}
                ></span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#202860] dark:text-slate-200 group-hover:text-[#B82020] dark:group-hover:text-[#FF8A8A] text-center transition-colors">
              Speech Therapy
            </span>
            <span className="text-[10px] text-[#5A6494] dark:text-[#94A3D3] text-center">
              Unlock Confidence
            </span>
          </Link>

          {/* Category 2: School Diction */}
          <Link
            href="/diction"
            className="group flex flex-col items-center gap-1.5 min-w-[110px] p-3 rounded-2xl hover:bg-white dark:hover:bg-[#131A3E] transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] group-hover:border-[#B82020] dark:group-hover:border-[#FF8A8A] shadow-sm flex items-center justify-center transition-all group-hover:-translate-y-1">
              <span className="font-editorial text-2xl font-bold text-[#202860] dark:text-white group-hover:text-[#B82020] dark:group-hover:text-[#FF8A8A]">
                Aa
              </span>
            </div>
            <span className="text-xs font-bold text-[#202860] dark:text-slate-200 group-hover:text-[#B82020] dark:group-hover:text-[#FF8A8A] text-center transition-colors">
              School Diction
            </span>
            <span className="text-[10px] text-[#5A6494] dark:text-[#94A3D3] text-center">
              Elevate Prestige
            </span>
          </Link>

          {/* Category 3: Phonics Classes */}
          <Link
            href="/diction"
            className="group flex flex-col items-center gap-1.5 min-w-[110px] p-3 rounded-2xl hover:bg-white dark:hover:bg-[#131A3E] transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] group-hover:border-[#B82020] dark:group-hover:border-[#FF8A8A] shadow-sm flex items-center justify-center transition-all group-hover:-translate-y-1">
              <span className="font-mono text-base font-bold text-[#B82020] dark:text-[#FF8A8A]">
                /əˈlɒk/
              </span>
            </div>
            <span className="text-xs font-bold text-[#202860] dark:text-slate-200 group-hover:text-[#B82020] dark:group-hover:text-[#FF8A8A] text-center transition-colors">
              Phonics Classes
            </span>
            <span className="text-[10px] text-[#5A6494] dark:text-[#94A3D3] text-center">
              Turn Strugglers to Readers
            </span>
          </Link>

          {/* Category 4: Website Design */}
          <Link
            href="/web-design"
            className="group flex flex-col items-center gap-1.5 min-w-[110px] p-3 rounded-2xl hover:bg-white dark:hover:bg-[#131A3E] transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] group-hover:border-[#202860] dark:group-hover:border-[#FF8A8A] shadow-sm flex items-center justify-center transition-all group-hover:-translate-y-1">
              <div className="w-9 h-7 rounded-md border-2 border-[#202860] dark:border-[#94A3D3] flex flex-col overflow-hidden">
                <div className="h-1.5 bg-[#B82020] w-full"></div>
                <div className="flex-1 bg-[#EFF2FA] dark:bg-[#18214C]"></div>
              </div>
            </div>
            <span className="text-xs font-bold text-[#202860] dark:text-slate-200 group-hover:text-[#B82020] dark:group-hover:text-[#FF8A8A] text-center transition-colors">
              Website Design
            </span>
            <span className="text-[10px] text-[#5A6494] dark:text-[#94A3D3] text-center">
              Admissions Booster
            </span>
          </Link>

          {/* Category 5: Mobile Apps */}
          <Link
            href="/mobile-apps"
            className="group flex flex-col items-center gap-1.5 min-w-[110px] p-3 rounded-2xl hover:bg-white dark:hover:bg-[#131A3E] transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] group-hover:border-[#202860] dark:group-hover:border-[#FF8A8A] shadow-sm flex items-center justify-center transition-all group-hover:-translate-y-1">
              <div className="w-6 h-10 rounded-lg border-2 border-[#202860] dark:border-[#94A3D3] flex flex-col items-center justify-between p-1">
                <span className="w-2 h-0.5 bg-[#B82020] rounded-full"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B82020]"></span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#202860] dark:text-slate-200 group-hover:text-[#B82020] dark:group-hover:text-[#FF8A8A] text-center transition-colors">
              Mobile Apps
            </span>
            <span className="text-[10px] text-[#5A6494] dark:text-[#94A3D3] text-center">
              Delight Every Parent
            </span>
          </Link>

          {/* Category 6: Custom Web Apps */}
          <Link
            href="/web-apps"
            className="group flex flex-col items-center gap-1.5 min-w-[110px] p-3 rounded-2xl hover:bg-white dark:hover:bg-[#131A3E] transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] group-hover:border-[#202860] dark:group-hover:border-[#FF8A8A] shadow-sm flex items-center justify-center transition-all group-hover:-translate-y-1">
              <span className="font-mono text-sm font-bold text-[#202860] dark:text-white bg-[#EFF2FA] dark:bg-[#18214C] px-2 py-1 rounded border border-[#D5DCF0] dark:border-[#232E66]">
                &lt;/&gt;
              </span>
            </div>
            <span className="text-xs font-bold text-[#202860] dark:text-slate-200 group-hover:text-[#B82020] dark:group-hover:text-[#FF8A8A] text-center transition-colors">
              Custom Web Apps
            </span>
            <span className="text-[10px] text-[#5A6494] dark:text-[#94A3D3] text-center">
              Zero School Chaos
            </span>
          </Link>

          {/* Category 7: 2024 Awards */}
          <Link
            href="/registration"
            className="group flex flex-col items-center gap-1.5 min-w-[110px] p-3 rounded-2xl hover:bg-white dark:hover:bg-[#131A3E] transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#FDF2F2] dark:bg-[#B82020]/20 border border-[#F3CACA] dark:border-[#B82020]/40 group-hover:bg-[#B82020] shadow-sm flex items-center justify-center transition-all group-hover:-translate-y-1">
              <span className="text-xl text-[#B82020] dark:text-[#FF8A8A] group-hover:text-white font-bold">
                ★
              </span>
            </div>
            <span className="text-xs font-bold text-[#B82020] dark:text-[#FF8A8A] text-center">
              2024 Awards
            </span>
            <span className="text-[10px] text-[#B82020]/80 dark:text-[#FF8A8A]/80 text-center">
              Celebrate Stars Live
            </span>
          </Link>
        </div>
      </div>

      {/* =====================================================================
          UPGRADE #3 & #4: HORIZONTAL SNAP-SCROLL SHELF OF TALL 28PX BUBBLE CARDS
          ===================================================================== */}
      <div className="max-w-6xl mx-auto px-6 pt-4">
        <ShelfCarousel
          title="Transformation Stories & Flagship Suites."
          subtitle="See how schools gain an unfair competitive advantage in admissions and parent loyalty."
        >
          {/* Card 1: Tall 28px Apple-Style Card — Division I Diction */}
          <Link href="/diction" className="snap-start shrink-0 block">
            <BubbleCard
              className="w-[310px] sm:w-[365px] h-[470px] rounded-[28px] bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] shadow-md"
              contentClassName="flex flex-col justify-between"
            >
              <div className="p-7 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#B82020] dark:text-[#FF8A8A] group-hover:text-[#FF8A8A] transition-colors">
                  Division I • Speech &amp; Confidence Transformation
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#202860] dark:text-white group-hover:text-white mt-1.5 leading-snug transition-colors">
                  When your students speak at open houses, parents enroll on the spot.
                </h3>
                <p className="text-xs text-[#424B78] dark:text-[#94A3D3] group-hover:text-slate-200 mt-2 leading-relaxed transition-colors">
                  Nothing sells a school faster than articulate pupils. We transform
                  hesitant, timid speakers into polished orators who blow parents away.
                </p>
              </div>

              <div className="mx-4 mb-4 h-56 rounded-[20px] bg-gradient-to-br from-[#202860] via-[#1B2254] to-[#B82020] p-6 text-white flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/15 text-xs font-bold">
                    88% Recommendation Surge
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
              className="w-[310px] sm:w-[365px] h-[470px] rounded-[28px] bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] shadow-md"
              contentClassName="flex flex-col justify-between"
            >
              <div className="p-7 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#202860] dark:text-[#94A3D3] group-hover:text-[#FF8A8A] transition-colors">
                  Division II • High-Impact Web &amp; Admissions Engines
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#202860] dark:text-white group-hover:text-white mt-1.5 leading-snug transition-colors">
                  A modern website that makes parents choose your school over the competition.
                </h3>
                <p className="text-xs text-[#424B78] dark:text-[#94A3D3] group-hover:text-slate-200 mt-2 leading-relaxed transition-colors">
                  Stop losing prospective families to outdated websites. We build
                  breathtaking digital portals with effortless online application forms.
                </p>
              </div>

              <div className="mx-4 mb-4 h-56 rounded-[20px] bg-[#FAF8F5] dark:bg-[#0A0E24]/60 group-hover:bg-white/10 border border-[#E2E6F2] dark:border-[#232E66] group-hover:border-white/15 p-5 flex flex-col justify-between transition-colors">
                <div className="rounded-xl bg-white dark:bg-[#18214C] shadow-md border border-[#D5DCF0] dark:border-[#232E66] p-3">
                  <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-slate-100 dark:border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#B82020]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#202860] dark:bg-[#94A3D3]"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                    <span className="text-xs text-[#5A6494] dark:text-[#94A3D3] ml-2 font-mono">
                      omadiction.pro
                    </span>
                  </div>
                  <div className="h-16 rounded-lg bg-gradient-to-r from-[#202860] to-[#B82020] p-2.5 text-white flex items-end">
                    <span className="text-xs font-bold">
                      Next.js 15 • 3x Admissions Growth
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-[#202860] dark:text-white group-hover:text-white transition-colors">
                  <span>View Admissions Web Suite</span>
                  <span className="w-7 h-7 rounded-full bg-[#202860] dark:bg-[#B82020] text-white group-hover:bg-[#B82020] flex items-center justify-center transition-colors">
                    +
                  </span>
                </div>
              </div>
            </BubbleCard>
          </Link>

          {/* Card 3: Tall 28px Apple-Style Card — 2024 OMA Diction Awards */}
          <Link href="/registration" className="snap-start shrink-0 block">
            <BubbleCard
              className="w-[310px] sm:w-[365px] h-[470px] rounded-[28px] bg-white dark:bg-[#131A3E] border-2 border-[#B82020]/40 dark:border-[#B82020]/60 shadow-md"
              contentClassName="flex flex-col justify-between"
            >
              <div className="p-7 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#B82020] dark:text-[#FF8A8A] group-hover:text-[#FF8A8A] transition-colors">
                  ★ The Ultimate Student Milestone • Lagos
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#202860] dark:text-white group-hover:text-white mt-1.5 leading-snug transition-colors">
                  Watch your pupils stand tall on the Silverbird stage and bring home gold.
                </h3>
                <p className="text-xs text-[#424B78] dark:text-[#94A3D3] group-hover:text-slate-200 mt-2 leading-relaxed transition-colors">
                  The 2024 OMA Diction Awards gives your pupils life-defining recognition,
                  national media fame, and a trophy your school can display with immense pride.
                </p>
              </div>

              <div className="mx-4 mb-4 h-56 rounded-[20px] bg-[#FDF2F2] dark:bg-[#B82020]/15 group-hover:bg-white/10 border border-[#F3CACA] dark:border-[#B82020]/30 group-hover:border-white/15 p-5 flex flex-col justify-between transition-colors">
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-white dark:bg-[#18214C] rounded-xl p-3 border border-[#F3CACA] dark:border-[#B82020]/40">
                    <span className="text-xs font-bold text-[#B82020] dark:text-[#FF8A8A] block">
                      Category A
                    </span>
                    <span className="font-editorial text-sm font-bold text-[#202860] dark:text-white">
                      Poetry Recitation
                    </span>
                  </div>
                  <div className="bg-white dark:bg-[#18214C] rounded-xl p-3 border border-[#D5DCF0] dark:border-[#232E66]">
                    <span className="text-xs font-bold text-[#202860] dark:text-slate-300 block">
                      Category B
                    </span>
                    <span className="font-editorial text-sm font-bold text-[#202860] dark:text-white">
                      Words Mispronounced
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-[#B82020] dark:text-[#FF8A8A] group-hover:text-white transition-colors">
                  <span>Register School Pupils Now</span>
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
              className="w-[310px] sm:w-[365px] h-[470px] rounded-[28px] bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] shadow-md"
              contentClassName="flex flex-col justify-between"
            >
              <div className="p-7 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#202860] dark:text-[#94A3D3] group-hover:text-[#FF8A8A] transition-colors">
                  Divisions III &amp; IV • School Operating Systems
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#202860] dark:text-white group-hover:text-white mt-1.5 leading-snug transition-colors">
                  End tuition payment chases and lost report cards once and for all.
                </h3>
                <p className="text-xs text-[#424B78] dark:text-[#94A3D3] group-hover:text-slate-200 mt-2 leading-relaxed transition-colors">
                  Give parents an app they love using. Automatic fee reminders, digital term reports,
                  and instant attendance notifications right on their phones.
                </p>
              </div>

              <div className="mx-4 mb-4 h-56 rounded-[20px] bg-[#202860] dark:bg-[#0E1538] p-5 text-white flex flex-col justify-between">
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-semibold">
                    100% On-Time Fees
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-semibold">
                    Instant Reports
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#B82020] text-xs font-semibold">
                    Parent App
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-semibold">
                    Attendance
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-[#FF8A8A]">Explore School OS</span>
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
              className="w-[310px] sm:w-[365px] h-[470px] rounded-[28px] bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] shadow-md"
              contentClassName="flex flex-col justify-between"
            >
              <div className="p-7 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#B82020] dark:text-[#FF8A8A] group-hover:text-[#FF8A8A] transition-colors">
                  Founder&apos;s Heart • The Diction Oracle
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#202860] dark:text-white group-hover:text-white mt-1.5 leading-snug transition-colors">
                  A mission born to ensure no Nigerian child is held back by poor diction.
                </h3>
                <p className="text-xs text-[#424B78] dark:text-[#94A3D3] group-hover:text-slate-200 mt-2 leading-relaxed transition-colors">
                  We believe eloquent speech unlocks global scholarships, executive careers,
                  and unshakeable self-worth. Over 10 years of changed lives.
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
                  <span>Our Transformation Story</span>
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
