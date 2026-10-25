"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OmaRegistrationForm() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0F1729] py-16 px-6">
      <motion.div
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-8 sm:p-12 border border-[#DFD3BC]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8 pb-6 border-b border-[#E5DEC9]">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#FAF4E4] border border-[#E8D7B0] text-[#9A7418] text-xs font-bold uppercase tracking-widest mb-3">
            Category A • Poetry Recitation
          </span>
          <h1 className="font-editorial text-2xl sm:text-4xl font-bold text-[#0F1729]">
            Lagos OMA Diction Awards — Student Recitation Enrollment
          </h1>
        </div>

        {/* Executive Payment Notice Ledger */}
        <div className="bg-[#0F1729] text-white p-6 mb-10 rounded-2xl border border-[#C59B27]/40 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-7 space-y-1">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E5C158]">
              Registration Fee Instructions
            </p>
            <p className="text-sm text-slate-200">
              Please make a payment of{" "}
              <strong className="text-white">₦7,000</strong> per pupil prior to
              submitting this form:
            </p>
          </div>
          <div className="md:col-span-5 bg-white/5 border border-white/10 rounded-xl p-4 text-xs space-y-1">
            <div>
              <span className="text-[#E5C158] font-bold">Account Name:</span>{" "}
              Oma Professional Services
            </div>
            <div>
              <span className="text-[#E5C158] font-bold">Account Number:</span>{" "}
              0107068307
            </div>
            <div>
              <span className="text-[#E5C158] font-bold">Bank:</span> GTBANK
            </div>
          </div>
        </div>

        <form
          action="https://submit-form.com/C9e86jmh5"
          method="POST"
          className="space-y-8"
        >
          {/* Section I: Student Info */}
          <div className="space-y-4">
            <h2 className="font-editorial text-xl font-bold text-[#0F1729] border-b border-[#E5DEC9] pb-2">
              I. Pupil Details
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
            <h2 className="font-editorial text-xl font-bold text-[#0F1729] border-b border-[#E5DEC9] pb-2">
              II. School Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
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
              <input
                name="School Email"
                type="email"
                placeholder="School Email"
                className="input"
              />
            </div>
          </div>

          {/* Section III: Recitation Info */}
          <div className="space-y-4">
            <h2 className="font-editorial text-xl font-bold text-[#0F1729] border-b border-[#E5DEC9] pb-2">
              III. Poetry Recitation Selection
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
            <h2 className="font-editorial text-xl font-bold text-[#0F1729] border-b border-[#E5DEC9] pb-2">
              IV. Guardian / Pronouncer&apos;s Release
            </h2>
            <p className="text-xs sm:text-sm text-[#475569]">
              I hereby authorize and release the pupil named below to attend and
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
            <label className="block text-xs font-bold uppercase tracking-wider text-[#9A7418]">
              V. Payment Receipt Verification Link
            </label>
            <input
              type="url"
              name="Payment Receipt Link"
              placeholder="Paste Google Drive, WhatsApp, or cloud link to your payment receipt"
              required
              className="input"
            />
            <p className="text-xs text-[#64748B]">
              Please note: This event will be broadcast live on TV, online, and
              on the Diction Oracle YouTube Channel.
            </p>
          </div>

          <button
            type="submit"
            className="bg-[#0F1729] hover:bg-[#1E293B] text-white text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-xl shadow-lg w-full transition"
          >
            Submit Candidate Enrollment →
          </button>
        </form>
      </motion.div>
    </div>
  );
}
