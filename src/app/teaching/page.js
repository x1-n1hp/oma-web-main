import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Reveal, Section } from "../components/ui";

export const metadata = {
  title: "UK Supply Teaching",
  description:
    "Qualified, vetted supply teachers for UK secondary and FE schools from Oma Services.",
};

const highlights = [
  {
    title: "UK secondary schools.",
    body: "Subject-specialist cover for short-term absences, long-term placements and exam periods.",
  },
  {
    title: "Further education (FE).",
    body: "Experienced lecturers and tutors ready to step into college classrooms with confidence.",
  },
  {
    title: "Vetted and ready.",
    body: "Reliable educators matched directly to your timetable, department and safeguarding standards.",
  },
];

export default function TeachingPage() {
  return (
    <main className="oma-grain flex min-h-screen flex-col bg-oma-bg text-oma-text">
      <Navbar />

      <section className="py-24 md:py-32">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 px-7 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)]">
          <Reveal>
            <p className="mb-4 text-sm text-oma-text3">Teaching</p>
            <h1 className="mb-6 min-w-0 break-words text-[clamp(40px,6vw,72px)] font-semibold leading-[1.02] tracking-[-0.04em] text-oma-text">
              UK supply teaching.
            </h1>
            <p className="mb-8 max-w-[46ch] text-lg leading-relaxed text-oma-text2">
              We supply qualified, vetted teachers to UK secondary and FE
              schools, keeping classrooms calm and learning on track.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" href="/contact">
                Request a teacher
              </Button>
              <Button variant="outline" href="tel:07391285441">
                Call 07391285441
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-oma border border-oma-line bg-oma-s2">
              <Image
                src="/images/school.png"
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
        <div>
          {highlights.map((item, i) => (
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

      <Footer />
    </main>
  );
}
