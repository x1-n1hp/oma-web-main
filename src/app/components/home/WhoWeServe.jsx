import { Reveal, Section } from "../ui";

const audiences = [
  {
    title: "UK secondary schools",
    body: "Reliable short-term and long-term supply cover matched to your subjects.",
  },
  {
    title: "Further education (FE)",
    body: "Experienced college lecturers and tutors ready for post-16 classrooms.",
  },
  {
    title: "Primary schools",
    body: "Diction programmes, joyful phonics and stage confidence for young learners.",
  },
  {
    title: "Families & parents",
    body: "Gentle one-to-one speech therapy and reading support that builds pride.",
  },
];

export default function WhoWeServe() {
  return (
    <Section>
      <Reveal>
        <p className="mb-4 text-sm text-oma-text3">Who we serve</p>
        <h2 className="mb-12 min-w-0 break-words text-[clamp(32px,4vw,52px)] font-semibold leading-[1.05] tracking-[-0.035em] text-oma-text">
          Built for schools and families.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <div className="h-full rounded-oma border border-oma-line bg-oma-s1 p-7">
              <h3 className="mb-2 text-xl font-semibold tracking-[-0.02em] text-oma-text">
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
  );
}
