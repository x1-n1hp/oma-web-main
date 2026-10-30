"use client";

import React from "react";
import Link from "next/link";
import { BubbleCard, ShelfCarousel } from "./motion";

const pillars = [
  {
    num: "01",
    department: "01 • Speech Transformation",
    title: "School Diction & Eloquence Academy",
    desc: "Transform hesitant pupils into confident, polished speakers that parents and guests applaud at every event.",
    href: "/diction",
  },
  {
    num: "02",
    department: "02 • School Websites",
    title: "High-Converting School Websites",
    desc: "Beautiful admissions portals with online forms that make parents choose your school over the competition.",
    href: "/web-design",
  },
  {
    num: "03",
    department: "03 • School & Parent Apps",
    title: "Parent Communication & Result Apps",
    desc: "Instant attendance, digital report cards, and automated fee reminders straight to parents' mobile phones.",
    href: "/mobile-apps",
  },
  {
    num: "04",
    department: "04 • School Portals",
    title: "All-in-One School Management SaaS",
    desc: "End the chaos of lost paper records, manual spreadsheets, and fee reconciliation headaches forever.",
    href: "/web-apps",
  },
  {
    num: "05",
    department: "05 • Media & YouTube",
    title: "YouTube & Social Media Fame",
    desc: "Showcase your pupils' debates, speech days, and performances with cinema-quality video parents love sharing.",
    href: "/services",
  },
];

const Service = () => {
  return (
    <section
      className="bg-[#F5F5F7] dark:bg-[#0A0E24] border-b border-[#E2E6F2] dark:border-[#232E66] py-16 overflow-hidden transition-colors duration-300"
      id="services"
    >
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* ===================================================================
            HORIZONTAL ENGINEERING & GROWTH SHELF (WITH < / > PADDLES)
            =================================================================== */}
        <ShelfCarousel
          title="Proven School Growth Suites."
          subtitle="Everything your school needs to dominate admissions, delight parents, and inspire pupils."
          scrollAmount={320}
        >
          {pillars.map((item, idx) => (
            <Link
              key={item.num}
              href={item.href}
              className="snap-start shrink-0 block"
            >
              <BubbleCard className="w-[290px] sm:w-[310px] rounded-[28px] bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] p-7 shadow-sm h-full">
                <span
                  className={`text-xs font-bold uppercase tracking-widest group-hover:text-[#FF8A8A] transition-colors ${
                    idx % 2 === 0 ? "text-[#B82020] dark:text-[#FF8A8A]" : "text-[#202860] dark:text-[#94A3D3]"
                  }`}
                >
                  {item.department}
                </span>
                <h3 className="font-editorial text-xl font-bold text-[#202860] dark:text-white group-hover:text-white mt-2 mb-2 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#424B78] dark:text-[#94A3D3] group-hover:text-slate-200 leading-relaxed mb-5 transition-colors">
                  {item.desc}
                </p>
                <span className="text-xs font-bold text-[#B82020] dark:text-[#FF8A8A] group-hover:text-white transition-colors">
                  Learn more &gt;
                </span>
              </BubbleCard>
            </Link>
          ))}
        </ShelfCarousel>

        {/* ===================================================================
            2024 OMA DICTION AWARDS APPLE-STYLE SHOWCASE BANNER & PRIZE SHELF
            =================================================================== */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              <span className="text-[#202860] dark:text-white transition-colors duration-300">2024 OMA Diction Awards.</span>{" "}
              <span className="text-[#5A6494] dark:text-[#94A3D3] font-normal transition-colors duration-300">
                Where future leaders and orators are born.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Wide Billboard Card */}
            <div className="lg:col-span-7 rounded-[28px] bg-[#202860] dark:bg-[#131A3E] text-white p-8 sm:p-10 border-b-4 border-[#B82020] shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full border-[24px] border-[#B82020]/25"></div>
              <div className="relative z-10 space-y-4">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider">
                  9th Annual Edition • Silverbird Galleria, VI
                </span>
                <h3 className="font-editorial text-3xl sm:text-4xl font-bold leading-tight">
                  Watch Your School&apos;s Stars Shine on National Television.
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed max-w-xl">
                  Imagine the immense pride of your school&apos;s parents seeing their children
                  accept championship trophies at Silverbird Galleria. Open to Grades 3 to 6 across{" "}
                  <strong className="text-white">
                    Category A (Poetry Recitation)
                  </strong>{" "}
                  and{" "}
                  <strong className="text-white">
                    Category B (Words Often Mispronounced)
                  </strong>
                  .
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/15">
                <div className="bg-white/10 rounded-2xl p-3.5 text-center">
                  <span className="text-xs text-[#FF8A8A] font-bold block">
                    1st Prize
                  </span>
                  <span className="font-editorial text-xl sm:text-2xl font-bold">
                    ₦50,000
                  </span>
                </div>
                <div className="bg-white/10 rounded-2xl p-3.5 text-center">
                  <span className="text-xs text-slate-300 font-bold block">
                    1st Runner-Up
                  </span>
                  <span className="font-editorial text-xl sm:text-2xl font-bold">
                    ₦30,000
                  </span>
                </div>
                <div className="bg-white/10 rounded-2xl p-3.5 text-center">
                  <span className="text-xs text-slate-300 font-bold block">
                    2nd Runner-Up
                  </span>
                  <span className="font-editorial text-xl sm:text-2xl font-bold">
                    ₦20,000
                  </span>
                </div>
              </div>
            </div>

            {/* Right Stacked Category Selection Bubble Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Link
                href="/registration/register/recitation"
                className="flex-1 flex"
              >
                <BubbleCard
                  className="rounded-[28px] bg-white dark:bg-[#131A3E] border-2 border-[#202860] dark:border-[#B82020] p-7 shadow-md w-full"
                  contentClassName="flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#B82020] dark:text-[#FF8A8A] group-hover:text-[#FF8A8A]">
                        Category A
                      </span>
                      <span className="text-xs font-bold text-[#5A6494] dark:text-[#94A3D3] group-hover:text-slate-200">
                        Entry: ₦7,000
                      </span>
                    </div>
                    <h4 className="font-editorial text-2xl font-bold text-[#202860] dark:text-white group-hover:text-white mt-1">
                      Poetry Recitation
                    </h4>
                    <p className="text-xs text-[#424B78] dark:text-[#94A3D3] group-hover:text-slate-200 mt-1.5 leading-relaxed">
                      Inspiring verses, stage charisma, and standing ovations
                      from hundreds of cheering guests.
                    </p>
                  </div>
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B82020] text-white group-hover:bg-white group-hover:text-[#202860] text-xs font-bold transition-colors">
                      Register for Recitation &gt;
                    </span>
                  </div>
                </BubbleCard>
              </Link>

              <Link
                href="/registration/register/mispronounced"
                className="flex-1 flex"
              >
                <BubbleCard
                  className="rounded-[28px] bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] p-7 shadow-md w-full"
                  contentClassName="flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#202860] dark:text-[#94A3D3] group-hover:text-[#FF8A8A]">
                        Category B
                      </span>
                      <span className="text-xs font-bold text-[#5A6494] dark:text-[#94A3D3] group-hover:text-slate-200">
                        Entry: ₦7,000
                      </span>
                    </div>
                    <h4 className="font-editorial text-2xl font-bold text-[#202860] dark:text-white group-hover:text-white mt-1">
                      Words Often Mispronounced
                    </h4>
                    <p className="text-xs text-[#424B78] dark:text-[#94A3D3] group-hover:text-slate-200 mt-1.5 leading-relaxed">
                      Watch your smartest pupils tackle deceptive English trap words
                      with lightning-fast phonetic precision.
                    </p>
                  </div>
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#202860] dark:bg-[#B82020] text-white group-hover:bg-[#B82020] text-xs font-bold transition-colors">
                      Register for W.O.M &gt;
                    </span>
                  </div>
                </BubbleCard>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
