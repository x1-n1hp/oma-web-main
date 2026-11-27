"use client";

import React, { useState } from "react";
import { Button, Reveal, Section, Tile } from "../components/ui";

const allServices = [
  {
    cat: "teaching",
    title: "Teaching",
    description: "Qualified, vetted supply teachers for UK secondary and FE schools.",
    href: "/teaching",
  },
  {
    cat: "articulation",
    title: "Articulation",
    description: "Professional diction and elocution for clear, confident speech.",
    href: "/diction",
  },
  {
    cat: "kids",
    title: "Kids development",
    description: "Gentle speech therapy and joyful phonics that build reading confidence.",
    href: "/diction",
  },
  {
    cat: "speaking",
    title: "Speaking",
    description: "Keynotes, staff workshops and live student speaking competitions.",
    href: "/speaking",
  },
  {
    cat: "consulting",
    title: "Consulting",
    description: "Strategic advisory on reputation, admissions and school growth.",
    href: "/about",
  },
  {
    cat: "tech",
    title: "Tech",
    description: "Bespoke school websites, parent mobile apps and custom web platforms.",
    href: "/web-design",
  },
  {
    cat: "media",
    title: "Media",
    description:
      "Social media management, video creation, editing, photography and content production.",
    href: "/media",
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "teaching", label: "Teaching" },
  { id: "articulation", label: "Articulation" },
  { id: "kids", label: "Kids development" },
  { id: "speaking", label: "Speaking" },
  { id: "consulting", label: "Consulting" },
  { id: "tech", label: "Tech" },
  { id: "media", label: "Media" },
];

export default function ServiceHome() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all"
      ? allServices
      : allServices.filter((s) => s.cat === active);

  return (
    <div className="oma-grain bg-oma-bg text-oma-text">
      <section className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1200px] px-7">
          <Reveal>
            <p className="mb-4 text-sm text-oma-text3">Services</p>
            <h1 className="mb-4 min-w-0 break-words text-[clamp(40px,6vw,72px)] font-semibold leading-[1.02] tracking-[-0.04em] text-oma-text">
              Everything we do.
            </h1>
            <p className="mb-12 max-w-[52ch] text-lg leading-relaxed text-oma-text2">
              Seven focused services for schools, educators and families.
            </p>
          </Reveal>

          <div
            className="mb-8 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter services"
          >
            {filters.map((f) => {
              const pressed = active === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={pressed}
                  onClick={() => setActive(f.id)}
                  className={`h-[38px] rounded-oma border px-4 text-sm transition-colors duration-150 ${
                    pressed
                      ? "border-oma-crimson text-oma-text"
                      : "border-oma-line text-oma-text2 hover:border-oma-lineStrong hover:text-oma-text"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((service) => (
              <Tile
                key={service.title}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      <Section>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-oma border border-oma-line bg-oma-s1 p-8 md:flex-row md:items-center md:p-12">
            <div>
              <p className="mb-2 text-sm text-oma-text3">Digital engineering</p>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-oma-text md:text-3xl">
                Explore our technology suites.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outlineSm" href="/web-design">
                Web design
              </Button>
              <Button variant="outlineSm" href="/mobile-apps">
                Mobile apps
              </Button>
              <Button variant="outlineSm" href="/web-apps">
                Custom web apps
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
