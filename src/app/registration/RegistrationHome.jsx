"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BubbleCard } from "../components/motion";

const RegistrationHome = () => {
  return (
    <section className="py-14 lg:py-20 px-6 bg-[#F5F5F7] text-[#202860] flex-1 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Structured Competition Information & Category Selection */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF2F2] border border-[#F3CACA] text-[#B82020] text-xs font-bold uppercase tracking-wider">
              ★ 9th Annual Edition • Lagos OMA Diction Awards
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#202860] leading-[1.08]">
              2024 Diction Awards.{" "}
              <span className="text-[#5A6494] font-semibold">
                Register for Nigeria&apos;s premier school elocution competition.
              </span>
            </h1>

            <p className="text-[#424B78] text-sm sm:text-base leading-relaxed">
              Welcome to the 9th edition of the Lagos OMA Diction Awards
              Competition — celebrating linguistic mastery, phonetic precision,
              and stage poise among Nigeria&apos;s brightest scholars. Select
              your competition category below to enroll.
            </p>

            {/* Architectural Prize Ledger */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  rank: "1st Prize Winner",
                  amount: "₦50,000",
                  sub: "Per Category + Trophy",
                },
                {
                  rank: "1st Runner-Up",
                  amount: "₦30,000",
                  sub: "Per Category + Medal",
                },
                {
                  rank: "2nd Runner-Up",
                  amount: "₦20,000",
                  sub: "Per Category + Medal",
                },
              ].map((prize, idx) => (
                <BubbleCard
                  key={prize.rank}
                  className="bg-white p-4 rounded-[24px] border border-[#D5DCF0] shadow-sm text-center"
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#B82020] group-hover:text-[#FF8A8A] transition-colors duration-500">
                    {prize.rank}
                  </div>
                  <div
                    className={`font-editorial text-xl sm:text-2xl font-bold group-hover:text-white mt-0.5 transition-colors duration-500 ${
                      idx === 0 ? "text-[#B82020]" : "text-[#202860]"
                    }`}
                  >
                    {prize.amount}
                  </div>
                  <div className="text-xs text-[#5A6494] group-hover:text-slate-200 transition-colors duration-500">
                    {prize.sub}
                  </div>
                </BubbleCard>
              ))}
            </div>

            {/* Two Interactive Registration Category Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <BubbleCard
                className="p-6 rounded-[28px] border-2 border-[#202860] bg-white text-[#202860] shadow-sm"
                contentClassName="flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#B82020] group-hover:text-[#FF8A8A] font-bold transition-colors duration-500">
                    Category A
                  </span>
                  <h2 className="font-editorial text-xl font-bold mt-1 text-[#202860] group-hover:text-white transition-colors duration-500">
                    Poetry Recitation
                  </h2>
                  <p className="text-xs text-[#424B78] group-hover:text-slate-200 mt-1.5 leading-relaxed transition-colors duration-500">
                    Evaluates vocal expression, cadence, phonetic accuracy, and
                    stage command.
                  </p>
                </div>
                <Link
                  href="/registration/register/recitation"
                  className="mt-5 block"
                >
                  <button className="w-full py-3 rounded-xl bg-[#B82020] text-white group-hover:bg-white group-hover:text-[#202860] text-xs font-bold uppercase tracking-wider transition-colors duration-500">
                    Register for Recitation →
                  </button>
                </Link>
              </BubbleCard>

              <BubbleCard
                className="p-6 rounded-[28px] border-2 border-[#D5DCF0] bg-white text-[#202860] shadow-sm"
                contentClassName="flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#202860] group-hover:text-[#FF8A8A] font-bold transition-colors duration-500">
                    Category B
                  </span>
                  <h2 className="font-editorial text-xl font-bold mt-1 text-[#202860] group-hover:text-white transition-colors duration-500">
                    Words Often Mispronounced
                  </h2>
                  <p className="text-xs text-[#424B78] group-hover:text-slate-200 mt-1.5 leading-relaxed transition-colors duration-500">
                    Tests mastery of challenging English vocabulary, stress
                    patterns, and articulation.
                  </p>
                </div>
                <Link
                  href="/registration/register/mispronounced"
                  className="mt-5 block"
                >
                  <button className="w-full py-3 rounded-xl bg-[#202860] text-white group-hover:bg-[#B82020] group-hover:text-white text-xs font-bold uppercase tracking-wider transition-colors duration-500">
                    Register for W.O.M →
                  </button>
                </Link>
              </BubbleCard>
            </div>

            <div className="pt-2">
              <Link
                href="/registration/register"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B82020] hover:text-[#202860] transition-colors"
              >
                <span>View Full Category Selection Directory</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>

          {/* Right: Framed Official Event Poster Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.94, x: 28 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <div className="bg-white p-5 rounded-3xl border-2 border-[#D5DCF0] shadow-xl max-w-sm mx-auto">
              <div className="rounded-2xl overflow-hidden border border-[#E2E6F2] bg-[#202860]">
                <Image
                  src="/images/diction-awards.jpg"
                  alt="2024 OMA Diction Awards Poster"
                  width={420}
                  height={520}
                  className="w-full h-96 object-cover object-top"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs pt-2 border-t border-[#E2E6F2]">
                <div>
                  <span className="font-bold text-[#202860] block">
                    Silverbird Galleria, Hall 4
                  </span>
                  <span className="text-[#5A6494]">
                    Victoria Island, Lagos • Entry: ₦7,000
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#FDF2F2] text-[#B82020] font-bold border border-[#F3CACA]">
                  Official Pass
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationHome;
