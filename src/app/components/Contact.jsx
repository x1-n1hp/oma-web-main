"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="bg-[#F5F5F7] py-16 px-6 overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#202860]">
            Direct Concierge.{" "}
            <span className="text-[#5A6494] font-semibold">
              Initiate a conversation with an OMA specialist.
            </span>
          </h2>
        </div>

        <motion.div
          className="rounded-[28px] bg-white border border-[#D5DCF0] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {/* Left Royal Cobalt Indigo & Crimson Concierge Column */}
          <div className="lg:col-span-5 bg-[#202860] text-white p-8 sm:p-10 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-[#B82020]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-[#B82020]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF8A8A]">
                  Direct Concierge
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold leading-tight">
                Initiate a Conversation with Oma Services.
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Thank you for your interest in Oma Services. Whether enrolling
                your school in our Diction Academy, inquiring about the OMA
                Diction Awards, or commissioning a custom website or mobile
                application, our team responds promptly.
              </p>
            </div>

            <div className="space-y-5 pt-8 border-t border-white/15 mt-8 text-xs">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-[#FDF2F2] rounded-xl border border-[#F3CACA] shrink-0">
                  <Image
                    src="/images/mail-icon.png"
                    alt="Email Icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <div className="text-[#FF8A8A] uppercase font-bold tracking-wider text-[11px]">
                    Electronic Mail
                  </div>
                  <a
                    href="mailto:partnerships@omadiction.pro"
                    className="text-sm font-medium text-white hover:text-[#FF8A8A] transition-colors mt-0.5 block"
                  >
                    partnerships@omadiction.pro
                  </a>
                </div>
              </div>

              <div>
                <div className="text-[#FF8A8A] uppercase font-bold tracking-wider text-[11px]">
                  Practice Divisions
                </div>
                <div className="text-slate-200 mt-1 leading-relaxed">
                  Executive Elocution • School Phonics &amp; Diction • Website
                  Design • Mobile &amp; Web Engineering
                </div>
              </div>
            </div>
          </div>

          {/* Right Clean Editorial Form */}
          <div className="lg:col-span-7 p-8 sm:p-10">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B82020]">
                Inquiry Dispatch
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#202860] mt-1">
                Send Us a Message
              </h3>
            </div>

            <form
              action="https://submit-form.com/LvrjBvQzY"
              method="POST"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#202860] mb-1.5"
                  >
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. Adebayo Williams"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#D5DCF0] text-sm text-[#202860] placeholder-[#5A6494] focus:outline-none focus:border-[#B82020] focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#202860] mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@organisation.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#D5DCF0] text-sm text-[#202860] placeholder-[#5A6494] focus:outline-none focus:border-[#B82020] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="inquiry_type"
                  className="block text-xs font-bold uppercase tracking-wider text-[#202860] mb-1.5"
                >
                  Inquiry Pillar
                </label>
                <select
                  id="inquiry_type"
                  name="inquiry_type"
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#D5DCF0] text-sm text-[#202860] focus:outline-none focus:border-[#B82020] focus:bg-white transition-colors"
                >
                  <option value="Website Design & Digital Engineering">
                    Website Design &amp; Digital Engineering
                  </option>
                  <option value="Professional Diction & School Training">
                    Professional Diction &amp; School Training
                  </option>
                  <option value="Mobile App / Custom Software">
                    Mobile App / Custom Web Application
                  </option>
                  <option value="OMA Diction Awards Registration">
                    OMA Diction Awards Competition
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-[#202860] mb-1.5"
                >
                  Your Message or Project Brief
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your timeline, goals, or training requirements..."
                  required
                  className="resize-none w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#D5DCF0] text-sm text-[#202860] placeholder-[#5A6494] focus:outline-none focus:border-[#B82020] focus:bg-white transition-colors"
                ></textarea>
              </div>

              <div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 rounded-xl bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#9E1818] transition shadow-md shadow-[#B82020]/20"
                >
                  Submit Inquiry →
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
