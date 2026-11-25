import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, FaqSection, Reveal, Section } from "../components/ui";

export const metadata = {
  title: "UK Supply Teaching for Schools",
  description:
    "Qualified supply teachers for UK secondary and FE schools across Bedfordshire, Hertfordshire, surrounding counties and UK-wide.",
};

const placements = [
  {
    title: "Daily & short-term cover",
    body: "Fast, dependable classroom cover for unexpected staff absences, training days and exam periods.",
  },
  {
    title: "Long-term placements",
    body: "Consistent subject-specialist teachers who maintain continuity across a full term or academic year.",
  },
  {
    title: "Further education (FE)",
    body: "Experienced college lecturers and tutors ready to support post-16 learners and vocational courses.",
  },
];

const regions = [
  "Bedfordshire (Biggleswade, Bedford, Luton)",
  "Hertfordshire (Letchworth, Hitchin, Stevenage)",
  "Cambridgeshire & surrounding counties",
  "UK-wide placements on request",
];

const faqs = [
  {
    q: "Which schools do you supply teachers to?",
    a: "We supply qualified teachers to UK secondary schools and Further Education (FE) colleges across Bedfordshire, Hertfordshire, surrounding counties, and UK-wide.",
  },
  {
    q: "How quickly can you arrange cover?",
    a: "For urgent cover, call us directly on +44 7391 285441 or message us on WhatsApp. We respond promptly to match an available teacher to your timetable.",
  },
  {
    q: "Can we book the same teacher for ongoing cover?",
    a: "Yes. Wherever possible we prioritise continuity so your pupils see a familiar, trusted educator.",
  },
  {
    q: "How do we request a teacher?",
    a: "Use our consultation form, call +44 7391 285441, or send a WhatsApp message with your school name, subject, and dates.",
  },
];

export default function TeachingPage() {
  return (
    <main className="oma-grain flex min-h-screen flex-col bg-oma-bg text-oma-text">
      <Navbar />

      <section className="py-24 md:py-32">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 px-7 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)]">
          <Reveal>
            <p className="mb-4 text-sm text-oma-text3">
              For Schools • Bedfordshire, Hertfordshire &amp; UK-wide
            </p>
            <h1 className="mb-6 min-w-0 break-words text-[clamp(40px,6vw,72px)] font-semibold leading-[1.02] tracking-[-0.04em] text-oma-text">
              UK supply teaching.
            </h1>
            <p className="mb-8 max-w-[46ch] text-lg leading-relaxed text-oma-text2">
              We supply qualified teachers to UK secondary and FE schools—keeping
              classrooms calm, lessons on track and standards high.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" href="/contact">
                Request a teacher
              </Button>
              <Button variant="outline" href="tel:+447391285441">
                Call +44 7391 285441
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-oma border border-oma-line bg-oma-s2">
              <Image
                src="/images/class.png"
                alt="UK secondary and FE classroom"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal>
          <p className="mb-4 text-sm text-oma-text3">Cover options</p>
          <h2 className="mb-12 min-w-0 break-words text-[clamp(32px,4vw,52px)] font-semibold leading-[1.05] tracking-[-0.035em] text-oma-text">
            Flexible support for your timetable.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {placements.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-oma border border-oma-line bg-oma-s1 p-7">
                <h3 className="mb-3 text-xl font-semibold tracking-[-0.02em] text-oma-text">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-oma-text2">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm text-oma-text3">Regions served</p>
              <h2 className="mb-4 min-w-0 break-words text-[clamp(32px,4vw,48px)] font-semibold leading-[1.05] tracking-[-0.035em] text-oma-text">
                Rooted in Bedfordshire. Ready across the UK.
              </h2>
              <p className="max-w-[46ch] text-base leading-relaxed text-oma-text2">
                Based in Biggleswade, we work closely with schools across
                Bedfordshire, Hertfordshire and surrounding counties, with
                UK-wide reach.
              </p>
            </div>
            <div className="grid gap-3">
              {regions.map((region) => (
                <div
                  key={region}
                  className="rounded-oma border border-oma-line bg-oma-s1 px-6 py-4 text-[15px] font-medium text-oma-text"
                >
                  {region}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <FaqSection heading="Supply teaching FAQs." items={faqs} />

      <Footer />
    </main>
  );
}
