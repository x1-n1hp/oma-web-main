import Image from "next/image";
import Link from "next/link";
import { Reveal, Section } from "../ui";

export default function Featured() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-oma border border-oma-line bg-oma-s2">
            <Image
              src="/images/school.png"
              alt="A UK secondary classroom"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mb-4 text-sm text-oma-text3">New</p>
          <h2 className="mb-4 min-w-0 break-words text-[clamp(32px,4vw,52px)] font-semibold leading-[1.05] tracking-[-0.035em] text-oma-text">
            UK supply teaching.
          </h2>
          <p className="mb-8 max-w-[52ch] text-lg leading-relaxed text-oma-text2">
            Qualified, vetted teachers for secondary and FE schools. Reliable
            cover, matched to your subjects.
          </p>
          <Link
            href="/teaching"
            className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-oma-text"
          >
            <span>Request a teacher</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-150 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
