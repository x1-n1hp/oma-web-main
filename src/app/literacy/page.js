import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, FaqSection, Reveal, Section } from "../components/ui";

const literacyFaqs = [
  {
    q: "Are classes available both online and in person?",
    a: "Yes. We run live virtual one-to-one and small-group classes for families anywhere, as well as physical in-person sessions in the UK (including Clifton and Bedfordshire).",
  },
  {
    q: "Do you teach children living with autism?",
    a: "Yes. Every child can learn. Our sessions are calm, structured, patient, and adapted to each child's sensory needs, pace, and communication style.",
  },
  {
    q: "Do you provide books and videos for practice at home?",
    a: "Yes. Alongside live classes, families get access to our original children's reading and writing books and instructional videos so progress continues between lessons.",
  },
];

export const metadata = {
  title: "Reading & Writing",
  description:
    "Virtual and in-person reading and writing classes for children, including children living with autism, supported by original books and learning videos.",
};

const offerings = [
  {
    title: "Virtual & physical classes.",
    body: "Flexible one-to-one and small-group reading and writing lessons — available online from anywhere or in person in the UK (Clifton, Bedfordshire & surrounding areas).",
  },
  {
    title: "Inclusive autism support.",
    body: "Patient, structured teaching tailored for children living with autism and diverse learning needs. We meet every child where they are, because every child can learn.",
  },
  {
    title: "Foundational reading & writing.",
    body: "Step-by-step phonics, letter formation, blending, comprehension, and early writing skills that turn hesitant learners into confident readers.",
  },
  {
    title: "Original books & learning videos.",
    body: "Purpose-written children's books and engaging instructional videos designed to reinforce reading and writing practice joyfully at home.",
  },
];

export default function LiteracyPage() {
  return (
    <main className="oma-grain flex min-h-screen flex-col bg-oma-bg text-oma-text">
      <Navbar />

      <section className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1200px] px-7">
          <Reveal>
            <p className="mb-4 text-sm text-oma-text3">
              Reading &amp; writing · Virtual &amp; Physical
            </p>
            <h1 className="mb-6 min-w-0 break-words text-[clamp(40px,6vw,72px)] font-semibold leading-[1.02] tracking-[-0.04em] text-oma-text">
              Every child can learn to read and write.
            </h1>
            <p className="mb-8 max-w-[54ch] text-lg leading-relaxed text-oma-text2">
              Virtual and in-person classes teaching children how to read and
              write — including children living with autism — supported by
              original books and learning videos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" href="/contact">
                Book a class today
              </Button>
              <Button variant="outline" href="tel:+447587337870">
                Call +44 7587 337870
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div>
          {offerings.map((item, i) => (
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

      <FaqSection heading="Reading & writing FAQs." items={literacyFaqs} />

      <Footer />
    </main>
  );
}
