"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Reveal, Section } from "../components/ui";

const prizes = [
  { place: "Grand Champion", amount: "₦50,000", note: "Championship Cup & Display Glory" },
  { place: "1st Runner-Up", amount: "₦30,000", note: "Silver Medal & Parent Ovation" },
  { place: "2nd Runner-Up", amount: "₦20,000", note: "Bronze Medal & Commendation" },
];

export default function RegistrationHome() {
  return (
    <div className="oma-grain bg-oma-bg text-oma-text">
      <section className="py-24 md:py-32">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 px-7 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <Reveal>
            <p className="mb-4 text-sm text-oma-text3">9th Annual Edition • Silverbird Galleria, Victoria Island</p>
            <h1 className="mb-6 min-w-0 break-words text-[clamp(36px,5.5vw,64px)] font-semibold leading-[1.03] tracking-[-0.04em] text-oma-text">
              The 2024 OMA Diction Awards.
            </h1>
            <p className="mb-8 max-w-[50ch] text-lg leading-relaxed text-oma-text2">
              Give your pupils the stage of a lifetime. Pupils compete under
              stage lights for cash prizes, medals and lasting confidence. Entry: ₦7,000.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" href="/registration/register/recitation">
                Register for Recitation
              </Button>
              <Button variant="outline" href="/registration/register/mispronounced">
                Register for W.O.M
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-oma border border-oma-line bg-oma-s1 p-4">
              <Image
                src="/images/oma-awards-2024.jpg"
                alt="2024 OMA Diction Awards Poster"
                width={520}
                height={620}
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal>
          <p className="mb-4 text-sm text-oma-text3">Prizes per category</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {prizes.map((p) => (
              <div
                key={p.place}
                className="rounded-oma border border-oma-line bg-oma-s1 p-7"
              >
                <p className="text-sm text-oma-text3">{p.place}</p>
                <p className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-oma-text">
                  {p.amount}
                </p>
                <p className="mt-2 text-sm text-oma-text2">{p.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <p className="mb-4 text-sm text-oma-text3">Categories</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col justify-between gap-6 rounded-oma border border-oma-line bg-oma-s1 p-8">
              <div>
                <p className="mb-2 text-sm text-oma-text3">Category A</p>
                <h2 className="mb-3 text-2xl font-semibold tracking-[-0.02em] text-oma-text">
                  Poetry Recitation
                </h2>
                <p className="text-[15px] leading-relaxed text-oma-text2">
                  Evaluates vocal power, heartfelt emotion and clear British
                  pronunciation on stage.
                </p>
              </div>
              <Button variant="primary" href="/registration/register/recitation">
                Register for Recitation
              </Button>
            </div>

            <div className="flex flex-col justify-between gap-6 rounded-oma border border-oma-line bg-oma-s1 p-8">
              <div>
                <p className="mb-2 text-sm text-oma-text3">Category B</p>
                <h2 className="mb-3 text-2xl font-semibold tracking-[-0.02em] text-oma-text">
                  Words Often Mispronounced
                </h2>
                <p className="text-[15px] leading-relaxed text-oma-text2">
                  Tests confidence with silent letters, deceptive spellings and
                  stress patterns.
                </p>
              </div>
              <Button variant="outline" href="/registration/register/mispronounced">
                Register for W.O.M
              </Button>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/registration/register"
              className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-oma-text"
            >
              <span>View full category directory</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-150 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
