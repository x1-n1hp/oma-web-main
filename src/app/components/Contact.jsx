"use client";

import React, { useState } from "react";
import { Button, Reveal } from "./ui";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(
    "Supply Teacher (UK Secondary & FE Schools)"
  );
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const buildText = () =>
    `Hello Oma Services,\n\nName: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`;

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("Please fill in your name, email, and message.");
      return;
    }
    const url = `https://wa.me/447391285441?text=${encodeURIComponent(
      buildText()
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("Opening WhatsApp with your enquiry...");
  };

  const handleEmail = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("Please fill in your name, email, and message.");
      return;
    }
    const subject = encodeURIComponent(`Consultation Enquiry: ${service}`);
    const body = encodeURIComponent(buildText());
    window.location.href = `mailto:partnerships@omadiction.pro?subject=${subject}&body=${body}`;
    setStatus("Opening your email client...");
  };

  return (
    <section
      className="oma-grain bg-oma-bg py-24 text-oma-text md:py-32"
      id="contact"
    >
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-start gap-12 px-7 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
        <Reveal>
          <form
            onSubmit={handleWhatsApp}
            className="rounded-oma border border-oma-line bg-oma-s1 p-8 md:p-12"
          >
            <p className="mb-3 text-sm text-oma-text3">Book a consultation</p>
            <h1 className="mb-8 min-w-0 break-words text-[clamp(32px,4vw,48px)] font-semibold leading-[1.05] tracking-[-0.035em] text-oma-text">
              Tell us what you need.
            </h1>

            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm text-oma-text3">
                  Your full name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Adebayo Williams"
                  required
                  className="w-full rounded-oma border border-oma-line bg-transparent px-4 py-3.5 text-base text-oma-text placeholder:text-oma-text3 focus:border-oma-lineStrong focus:outline-none"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm text-oma-text3">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@organisation.com"
                  required
                  className="w-full rounded-oma border border-oma-line bg-transparent px-4 py-3.5 text-base text-oma-text placeholder:text-oma-text3 focus:border-oma-lineStrong focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-4 grid gap-2">
              <label htmlFor="inquiry_type" className="text-sm text-oma-text3">
                Service
              </label>
              <select
                id="inquiry_type"
                name="inquiry_type"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-oma border border-oma-line bg-oma-bg px-4 py-3.5 text-base text-oma-text focus:border-oma-lineStrong focus:outline-none"
              >
                <option value="Supply Teacher (UK Secondary & FE Schools)">
                  Supply Teacher (UK Secondary &amp; FE Schools)
                </option>
                <option value="Professional Diction & School Training">
                  Articulation &amp; Diction Training
                </option>
                <option value="Kids Development">
                  Kids Development (Speech Therapy &amp; Phonics)
                </option>
                <option value="OMA Diction Awards Registration">
                  Speaking &amp; OMA Diction Awards
                </option>
                <option value="School Growth Consulting">Consulting</option>
                <option value="Website Design & Digital Engineering">
                  Tech (Websites, Mobile &amp; Web Apps)
                </option>
              </select>
            </div>

            <div className="mb-6 grid gap-2">
              <label htmlFor="message" className="text-sm text-oma-text3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us how we can help your school or child"
                required
                className="w-full rounded-oma border border-oma-line bg-transparent px-4 py-3.5 text-base text-oma-text placeholder:text-oma-text3 focus:border-oma-lineStrong focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <Button type="submit" variant="primary">
                Send via WhatsApp
              </Button>
              <Button type="button" variant="outline" onClick={handleEmail}>
                Send via Email
              </Button>
            </div>

            {status && (
              <p className="mt-4 text-sm text-oma-text2" role="status">
                {status}
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-6 lg:pt-4">
            <p className="text-sm text-oma-text3">Direct</p>
            <div className="grid gap-2">
              <a
                href="tel:+447391285441"
                className="break-words text-[clamp(24px,3vw,36px)] font-medium leading-tight tracking-[-0.025em] text-oma-text transition-colors duration-150 hover:text-oma-text2"
              >
                +44 7391 285441 (UK)
              </a>
              <a
                href="mailto:partnerships@omadiction.pro"
                className="break-words text-xl font-medium text-oma-text transition-colors duration-150 hover:text-oma-text2"
              >
                partnerships@omadiction.pro
              </a>
              <p className="mt-3 text-base leading-relaxed text-oma-text2">
                14 Britten Place Sullivan Court, Biggleswade, Bedfordshire SG18 8RE.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
