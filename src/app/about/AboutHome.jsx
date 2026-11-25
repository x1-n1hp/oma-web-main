"use client";

import React from "react";
import { Button, FaqSection, Reveal, Section } from "../components/ui";

const aboutFaqs = [
  {
    q: "Where is Oma Services based?",
    a: "We are based in Biggleswade, Bedfordshire (14 Britten Place Sullivan Court, SG18 8RE), serving schools across Bedfordshire, Hertfordshire, surrounding counties, and internationally.",
  },
  {
    q: "Can a school combine multiple services?",
    a: "Yes. Many schools partner with us for both supply teaching or diction training alongside website and portal engineering.",
  },
  {
    q: "How do we start a conversation?",
    a: "Book a consultation through our Contact page, call +44 7391 285441, or message us directly on WhatsApp.",
  },
];

const pillars = [
  {
    title: "Our mission.",
    body: "Give every pupil a clear voice and every school the support to thrive.",
  },
  {
    title: "Consulting.",
    body: "Strategic guidance on school reputation, admissions growth and parent trust.",
  },
  {
    title: "How we work.",
    body: "Direct communication, vetted educators and practical tools tailored to each school.",
  },
];

export default function AboutHome() {
  return (
    <div className="oma-grain bg-oma-bg text-oma-text">
      <section className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1200px] px-7">
          <Reveal>
            <p className="mb-4 text-sm text-oma-text3">About</p>
            <h1 className="mb-6 min-w-0 break-words text-[clamp(40px,6vw,72px)] font-semibold leading-[1.02] tracking-[-0.04em] text-oma-text">
              Helping schools and learners rise.
            </h1>
            <p className="max-w-[54ch] text-lg leading-relaxed text-oma-text2">
              Oma Services brings together UK supply teaching, articulation,
              kids development, consulting, speaking and technology under one
              roof.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div>
          {pillars.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="grid grid-cols-1 items-baseline gap-3 border-t border-oma-line py-10 last:border-b md:grid-cols-2 md:gap-8">
                <h2 className="text-[clamp(28px,3.4vw,44px)] font-semibold leading-[1.08] tracking-[-0.03em] text-oma-text">
                  {item.title}
                </h2>
                <p className="max-w-[44ch] text-[17px] leading-relaxed text-oma-text2">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FaqSection heading="About Oma Services." items={aboutFaqs} />

      <Section>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-oma border border-oma-line bg-oma-s1 p-8 md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-oma-text md:text-3xl">
                Ready to partner with us?
              </h2>
              <p className="mt-2 text-oma-text2">
                Speak directly with our team in Biggleswade.
              </p>
            </div>
            <Button variant="primary" href="/contact">
              Book consultation
            </Button>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
