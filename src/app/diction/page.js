import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, FaqSection, Reveal, Section } from "../components/ui";

const dictionFaqs = [
  {
    q: "Who is diction and phonics training for?",
    a: "We work with primary and secondary pupils, school staff teams, and individual learners seeking clearer pronunciation and stronger reading confidence.",
  },
  {
    q: "Are sessions delivered on campus or online?",
    a: "Both. We run in-school workshops and termly programmes as well as flexible online one-to-one sessions.",
  },
  {
    q: "How do we book a school speech audit?",
    a: "Contact our team via the Consultation page or WhatsApp on +44 7391 285441 to schedule an introductory session.",
  },
];

export const metadata = {
  title: "Articulation & Kids Development",
  description:
    "Professional diction training, gentle speech therapy, and joyful phonics from Oma Services.",
};

const programmes = [
  {
    title: "Gentle speech therapy.",
    body: "Caring one-on-one sessions that help children overcome lisping, stuttering and speech hurdles with patience.",
  },
  {
    title: "School diction.",
    body: "Campus-wide elocution programmes that help pupils speak clearly and confidently.",
  },
  {
    title: "Joyful phonics.",
    body: "Rhythmic phonics drills that turn reluctant readers into enthusiastic, fluent communicators.",
  },
];

export default function DictionPage() {
  return (
    <main className="oma-grain flex min-h-screen flex-col bg-oma-bg text-oma-text">
      <Navbar />

      <section className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1200px] px-7">
          <Reveal>
            <p className="mb-4 text-sm text-oma-text3">Articulation &amp; Kids development</p>
            <h1 className="mb-6 min-w-0 break-words text-[clamp(40px,6vw,72px)] font-semibold leading-[1.02] tracking-[-0.04em] text-oma-text">
              Clear, confident speech.
            </h1>
            <p className="mb-8 max-w-[50ch] text-lg leading-relaxed text-oma-text2">
              Gentle speech therapy, school diction and joyful phonics for
              pupils and educators.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" href="/contact">
                Book a speech audit
              </Button>
              <Button variant="outline" href="/registration">
                Diction Awards
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div>
          {programmes.map((item, i) => (
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

      <FaqSection heading="Diction & phonics FAQs." items={dictionFaqs} />

      <Footer />
    </main>
  );
}
