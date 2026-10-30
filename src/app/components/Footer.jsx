"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PlayCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <>
      {/* Apple Store-Style "Quick Links" Pill Bar Above Footer */}
      <section className="bg-[#F5F5F7] dark:bg-[#0A0E24] border-t border-[#D5DCF0] dark:border-[#232E66] py-10 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-[#202860] dark:text-white mb-4 tracking-tight">
            Quick Links
          </h2>
          <div className="flex flex-wrap gap-2.5">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] text-xs font-semibold text-[#202860] dark:text-white hover:bg-[#202860] dark:hover:bg-[#B82020] hover:text-white transition-colors shadow-sm"
            >
              <span>How to Increase School Admissions</span>
              <span>↗</span>
            </Link>
            <Link
              href="/registration/register/recitation"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] text-xs font-semibold text-[#202860] dark:text-white hover:bg-[#202860] dark:hover:bg-[#B82020] hover:text-white transition-colors shadow-sm"
            >
              <span>2024 Poetry Recitation Enrollment</span>
              <span>↗</span>
            </Link>
            <Link
              href="/registration/register/mispronounced"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] text-xs font-semibold text-[#202860] dark:text-white hover:bg-[#202860] dark:hover:bg-[#B82020] hover:text-white transition-colors shadow-sm"
            >
              <span>Words Often Mispronounced Enrollment</span>
              <span>↗</span>
            </Link>
            <Link
              href="/diction"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] text-xs font-semibold text-[#202860] dark:text-white hover:bg-[#B82020] hover:text-white hover:border-[#B82020] transition-colors shadow-sm"
            >
              <span>Book Free Campus Speech Audit</span>
              <span>↗</span>
            </Link>
            <Link
              href="/web-design"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] text-xs font-semibold text-[#202860] dark:text-white hover:bg-[#202860] dark:hover:bg-[#B82020] hover:text-white transition-colors shadow-sm"
            >
              <span>Upgrade Your School Website</span>
              <span>↗</span>
            </Link>
            <a
              href="mailto:partnerships@omadiction.pro"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FDF2F2] dark:bg-[#B82020]/20 border border-[#F3CACA] dark:border-[#B82020]/40 text-xs font-semibold text-[#B82020] dark:text-[#FF8A8A] hover:bg-[#B82020] hover:text-white transition-colors shadow-sm"
            >
              <span>Direct Concierge: partnerships@omadiction.pro</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#202860] dark:bg-[#080B1C] text-[#FAF8F5] border-t-4 border-[#B82020] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center">
                <Image
                  src="/images/oma-logo.png"
                  alt="Oma Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-editorial font-bold text-lg tracking-tight text-white block leading-none">
                  OMA SERVICES
                </span>
                <span className="text-[11px] tracking-widest uppercase text-[#FF8A8A] font-semibold block mt-1">
                  Diction &amp; Digital Engineering
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Empowering individuals, schools, and enterprises across Nigeria
              and beyond with world-class elocution training and bespoke digital
              product engineering.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF8A8A]">
              Institution
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#FF8A8A] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#FF8A8A] transition-colors"
                >
                  About Our Heritage
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#FF8A8A] transition-colors"
                >
                  Services Directory
                </Link>
              </li>
              <li>
                <Link
                  href="/registration"
                  className="hover:text-[#FF8A8A] transition-colors"
                >
                  2024 OMA Diction Awards
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#FF8A8A] transition-colors"
                >
                  Contact Concierge
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Divisions Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF8A8A]">
              Practice Divisions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link
                  href="/diction"
                  className="hover:text-[#FF8A8A] transition-colors"
                >
                  I. Professional Diction &amp; Elocution
                </Link>
              </li>
              <li>
                <Link
                  href="/web-design"
                  className="hover:text-[#FF8A8A] transition-colors"
                >
                  II. Bespoke Website Design
                </Link>
              </li>
              <li>
                <Link
                  href="/mobile-apps"
                  className="hover:text-[#FF8A8A] transition-colors"
                >
                  III. Mobile App Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/web-apps"
                  className="hover:text-[#FF8A8A] transition-colors"
                >
                  IV. Custom Web Applications
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            © {new Date().getFullYear()} Oma Services (The Diction Oracle). All
            rights reserved.
          </div>

          <div className="flex items-center space-x-5">
            <motion.a
              whileHover={{ scale: 1.1, y: -1 }}
              href="https://web.facebook.com/dictionandphonicsman"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-slate-300 hover:text-[#FF8A8A] transition-colors"
            >
              <UserGroupIcon aria-hidden="true" className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -1 }}
              href="mailto:partnerships@omadiction.pro"
              aria-label="Email Oma Diction"
              className="text-slate-300 hover:text-[#FF8A8A] transition-colors"
            >
              <EnvelopeIcon aria-hidden="true" className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -1 }}
              href="https://www.youtube.com/@dictionoracle8254"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-slate-300 hover:text-[#FF8A8A] transition-colors"
            >
              <PlayCircleIcon aria-hidden="true" className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;
