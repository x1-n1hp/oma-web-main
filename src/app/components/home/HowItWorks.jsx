import { Reveal, Section } from "../ui";

const steps = [
  {
    num: "01",
    title: "Share your need",
    body: "Tell us what your school requires—supply cover, diction training, speaking, consulting or digital systems.",
  },
  {
    num: "02",
    title: "Tailored match",
    body: "We pair you with the right educator, trainer or engineering plan built around your timetable and goals.",
  },
  {
    num: "03",
    title: "Seamless delivery",
    body: "Reliable classroom support, measurable pupil progress and direct communication from day one.",
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <Reveal>
        <p className="mb-4 text-sm text-oma-text3">Process</p>
        <h2 className="mb-12 min-w-0 break-words text-[clamp(32px,4vw,52px)] font-semibold leading-[1.05] tracking-[-0.035em] text-oma-text">
          How we work with schools.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.num} delay={i * 0.08}>
            <div className="flex h-full flex-col justify-between gap-8 rounded-oma border border-oma-line bg-oma-s1 p-7">
              <span className="text-sm font-medium text-oma-text3">
                {step.num}
              </span>
              <div>
                <h3 className="mb-2 text-2xl font-semibold tracking-[-0.02em] text-oma-text">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-oma-text2">
                  {step.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
