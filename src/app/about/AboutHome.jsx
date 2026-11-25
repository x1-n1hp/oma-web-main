"use client";

import React from "react";
import Image from "next/image";
import { Button, FaqSection, Reveal, Section } from "../components/ui";
import FounderSpotlight from "../components/home/FounderSpotlight";
import Gallery from "../components/home/Gallery";

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
    image: "/images/DSC_6546.JPG",
    alt: "Pupils speaking with confidence",
    body: "Give every pupil a clear, confident voice and equip every school with the educators and systems they need to thrive.",
    points: [
      "Child-first speech & phonics development",
      "Reliable UK secondary & FE supply cover",
      "Long-term partnerships with school leaders",
    ],
  },
  {
    title: "Consulting.",
    image: "/images/class.png",
    alt: "UK secondary school classroom",
    body: "Strategic guidance for proprietors and heads of school focused on elevating reputation, strengthening admissions and deepening parent trust.",
    points: [
      "School positioning & parent communication",
      "Admissions growth & digital front-door audits",
      "Campus-wide articulation standards",
    ],
  },
  {
    title: "How we work.",
    image: "/images/DSC_6561.JPG",
    alt: "Oma Services workshop and collaboration",
    body: "Direct communication, vetted educators and practical digital tools tailored to your timetable—without agency friction.",
    points: [
      "Fast response via phone or WhatsApp",
      "Matched to your subjects and school culture",
      "Transparent, ongoing support every term",
    ],
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="group flex h-full flex-col overflow-hidden rounded-oma border border-oma-line bg-oma-s1 transition-[border-color,background-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-oma-lineStrong hover:bg-oma-s2 hover:shadow-[0_14px_32px_rgba(11,15,42,0.12)]">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-oma-s2">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-6 p-7">
                  <div>
                    <h2 className="mb-3 text-2xl font-semibold tracking-[-0.02em] text-oma-text">
                      {item.title}
                    </h2>
                    <p className="text-[15px] leading-relaxed text-oma-text2">
                      {item.body}
                    </p>
                  </div>
                  <ul className="space-y-2 border-t border-oma-line pt-5 text-sm text-oma-text2">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-oma-crimson" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FounderSpotlight />
      <Gallery />
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
