import { Reveal, Section } from "../ui";

const statements = [
  {
    title: "Child first.",
    body: "Every programme starts with patience and care for the learner.",
  },
  {
    title: "School focused.",
    body: "We measure success by your pupils, staff and reputation.",
  },
  {
    title: "Built to last.",
    body: "Skills and systems that keep working long after we leave.",
  },
];

export default function Approach() {
  return (
    <Section>
      <Reveal>
        <p className="mb-4 text-sm text-oma-text3">Approach</p>
      </Reveal>
      <div>
        {statements.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="grid grid-cols-1 items-baseline gap-3 border-t border-oma-line py-10 last:border-b md:grid-cols-2 md:gap-8">
              <h3 className="text-[clamp(28px,3.4vw,44px)] font-semibold leading-[1.08] tracking-[-0.03em] text-oma-text">
                {item.title}
              </h3>
              <p className="max-w-[44ch] text-[17px] leading-relaxed text-oma-text2">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
