import Link from "next/link";
import { Reveal, Section, Tile } from "../ui";

const services = [
  {
    title: "Teaching",
    description: "Supply teachers for UK secondary and FE schools.",
    href: "/teaching",
  },
  {
    title: "Articulation",
    description: "Diction and elocution for confident speech.",
    href: "/diction",
  },
  {
    title: "Kids development",
    description: "Gentle speech therapy and joyful phonics.",
    href: "/diction",
  },
  {
    title: "Speaking",
    description: "Keynotes, workshops and student competitions.",
    href: "/registration",
  },
  {
    title: "Consulting",
    description: "Reputation, admissions and school growth.",
    href: "/about",
  },
  {
    title: "Tech",
    description: "School websites, apps and custom platforms.",
    href: "/services",
  },
];

export default function ServicesGrid() {
  return (
    <Section id="services">
      <Reveal>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-sm text-oma-text3">Services</p>
            <h2 className="min-w-0 break-words text-[clamp(32px,4vw,52px)] font-semibold leading-[1.05] tracking-[-0.035em] text-oma-text">
              Six ways we help.
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-oma-text"
          >
            <span>All services</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-150 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.06}>
            <Tile
              title={service.title}
              description={service.description}
              href={service.href}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
