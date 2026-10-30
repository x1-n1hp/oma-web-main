"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MispronouncedEnrollmentForm() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0E24] text-[#202860] dark:text-white py-16 px-6 transition-colors duration-300">
      <motion.div
        className="max-w-4xl mx-auto bg-white dark:bg-[#131A3E] shadow-xl rounded-3xl p-8 sm:p-12 border border-[#D5DCF0] dark:border-[#232E66]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8 pb-6 border-b border-[#E2E6F2] dark:border-[#232E66]">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#FDF2F2] dark:bg-[#B82020]/20 border border-[#F3CACA] dark:border-[#B82020]/40 text-[#B82020] dark:text-[#FF8A8A] text-xs font-bold uppercase tracking-widest mb-3">
            Category B • The Pronunciation Superstars
          </span>
          <h1 className="font-editorial text-2xl sm:text-4xl font-bold text-[#202860] dark:text-white">
            The 2024 OMA Diction Awards — Words Often Mispronounced Enrollment
          </h1>
        </div>

        {/* Executive Payment Notice Ledger */}
        <div className="bg-[#202860] dark:bg-[#0E1538] text-white p-6 mb-10 rounded-2xl border-l-4 border-[#B82020] grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-7 space-y-1">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A8A]">
              Candidate Registration Fee: ₦7,000 Flat
            </p>
            <p className="text-sm text-slate-200">
              Covers official competition pass, personalized medal, branded gala pack, and refreshments at Silverbird Galleria.
            </p>
          </div>
          <div className="md:col-span-5 bg-white/5 border border-white/10 rounded-xl p-4 text-xs space-y-1">
            <div>
              <span className="text-[#FF8A8A] font-bold">Account Name:</span>{" "}
              Oma Professional Services
            </div>
            <div>
              <span className="text-[#FF8A8A] font-bold">Account Number:</span>{" "}
              0107068307
            </div>
            <div>
              <span className="text-[#FF8A8A] font-bold">Bank:</span> Guaranty Trust Bank (GTBank)
            </div>
          </div>
        </div>

        <form
          action="https://submit-form.com/DN6fnPb9M"
          method="POST"
          className="space-y-8"
        >
          {/* Section I: Student Info */}
          <div className="space-y-4">
            <h2 className="font-editorial text-xl font-bold text-[#202860] dark:text-white border-b border-[#E2E6F2] dark:border-[#232E66] pb-2">
              I. About the Young Champion
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <input
                name="First Name"
                placeholder="First Name of Pupil"
                required
                className="input"
              />
              <input
                name="Middle Name"
                placeholder="Middle Name of Pupil"
                className="input"
              />
              <input
                name="Surname"
                placeholder="Surname of Pupil"
                required
                className="input"
              />
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <input
                name="Grade/Class"
                placeholder="Grade/Class (3 to 6)"
                required
                className="input"
              />
              <input
                name="Age"
                type="number"
                placeholder="Age"
                required
                className="input"
              />
              <select name="Gender" required className="input">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                name="Parent WhatsApp"
                placeholder="Guardian/Parent WhatsApp No"
                required
                className="input"
              />
            </div>
          </div>

          {/* Section II: School Info */}
          <div className="space-y-4">
            <h2 className="font-editorial text-xl font-bold text-[#202860] dark:text-white border-b border-[#E2E6F2] dark:border-[#232E66] pb-2">
              II. Your Proud School
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <input
                name="School Name"
                placeholder="Name of School"
                required
                className="input"
              />
              <input
                name="School Address"
                placeholder="School Address"
                required
                className="input"
              />
              <input
                name="School WhatsApp"
                placeholder="School WhatsApp No"
                className="input"
              />
            </div>
          </div>

          {/* Section III: Recitation Info */}
          <div className="space-y-4">
            <h2 className="font-editorial text-xl font-bold text-[#202860] dark:text-white border-b border-[#E2E6F2] dark:border-[#232E66] pb-2">
              III. Track Specification &amp; Reference Poem
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="Poetry Recitation Choice"
                required
                className="input"
              >
                <option value="">Select a Poem</option>
                <option>The Vultures – David Diop</option>
                <option>Abiku – JP Clark</option>
                <option>The Chaos – Gerard Nolst Trinité</option>
                <option>Yesterday – Godswill Effiong Samuel</option>
                <option>Butterfly – Godswill Effiong Samuel</option>
                <option>Home – Godswill Effiong Samuel</option>
                <option>Evergreen – Godswill Effiong Samuel</option>
                <option>Air – Abiola Matthew Olagunju</option>
              </select>
              <input
                name="Poetry Author"
                placeholder="Author of Poetry Choice"
                required
                className="input"
              />
            </div>
          </div>

          {/* Section IV: Release Section */}
          <div className="space-y-4">
            <h2 className="font-editorial text-xl font-bold text-[#202860] dark:text-white border-b border-[#E2E6F2] dark:border-[#232E66] pb-2">
              IV. Parent&apos;s Blessing &amp; Permission
            </h2>
            <p className="text-xs sm:text-sm text-[#424B78] dark:text-[#94A3D3]">
              I proudly authorize and encourage the pupil named below to take the stage and
              participate in the 2024 OMA Diction Awards Competition:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <input
                name="Released Pupil"
                placeholder="Name of pupil being released"
                className="input"
              />
              <input
                name="Sign"
                placeholder="Guardian/Parent Signature (Full Name)"
                className="input"
              />
              <input name="Date" type="date" required className="input" />
            </div>
          </div>

          {/* Section V: Receipt Upload Link */}
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#B82020] dark:text-[#FF8A8A]">
              V. Proof of Payment Link
            </label>
            <input
              type="url"
              name="Payment Receipt Link"
              placeholder="Paste Google Drive, WhatsApp, or cloud link to your payment receipt"
              required
              className="input"
            />
            <p className="text-xs text-[#5A6494] dark:text-[#94A3D3]">
              Broadcast notice: This unforgettable event will be professionally filmed for national
              television and streamed on the Diction Oracle YouTube Channel.
            </p>
          </div>

          <button
            type="submit"
            className="bg-[#B82020] hover:bg-[#9E1818] text-white text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-xl shadow-lg shadow-[#B82020]/20 w-full transition"
          >
            Submit Candidate &amp; Claim Their Spot →
          </button>
        </form>
      </motion.div>
    </div>
  );
}
