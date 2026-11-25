"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Section from "./Section";

export default function FaqSection({
  label = "Questions",
  heading = "Frequently asked.",
  items = [],
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section>
      <Reveal>
        <p className="mb-4 text-sm text-oma-text3">{label}</p>
        <h2 className="mb-10 min-w-0 break-words text-[clamp(32px,4vw,52px)] font-semibold leading-[1.05] tracking-[-0.035em] text-oma-text">
          {heading}
        </h2>
      </Reveal>

      <div className="grid gap-3">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={item.q}
              className="rounded-oma border border-oma-line bg-oma-s1 transition-colors duration-150 hover:border-oma-lineStrong"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-lg font-medium text-oma-text"
              >
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl text-oma-text3"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-oma-line px-6 py-5 text-[15px] leading-relaxed text-oma-text2">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
