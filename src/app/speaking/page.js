import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, FaqSection, Reveal, Section } from "../components/ui";

const speakingFaqs = [
  {
    q: "What events do you speak at?",
    a: "School assemblies, speech days, parent evenings, educator conferences and leadership workshops.",
  },
  {
    q: "How can schools enter the OMA Diction Awards?",
    a: "Visit our OMA Diction Awards page to view categories (Poetry Recitation and Words Often Mispronounced) and register pupils directly.",
  },
];

export const metadata = {
  title: "Speaking",
  description:
    "Keynotes, staff workshops, and live student speaking competitions from Oma Services.",
};

const offerings = [
  {
    title: "Keynote speaking.",
    body: "Clear, memorable talks for school assemblies, education conferences and leadership events.",
  },
  {
    title: "Staff workshops.",
    body: "Practical sessions helping teachers model confident diction, voice projection and classroom presence.",
  },
  {
    title: "Live student competitions.",
    body: "Annual stage events including the OMA Diction Awards, giving pupils a national platform to shine.",
  },
];

export default function SpeakingPage() {
  return (
    <main className="oma-grain flex min-h-screen flex-col bg-oma-bg text-oma-text">
      <Navbar />

      <section className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1200px] px-7">
          <Reveal>
            <p className="mb-4 text-sm text-oma-text3">Speaking</p>
            <h1 className="mb-6 min-w-0 break-words text-[clamp(40px,6vw,72px)] font-semibold leading-[1.02] tracking-[-0.04em] text-oma-text">
              Voices that command the room.
            </h1>
            <p className="mb-8 max-w-[50ch] text-lg leading-relaxed text-oma-text2">
              Keynotes, staff workshops and live student competitions designed to
              elevate confidence and articulation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" href="/contact">
                Book a speaker
              </Button>
              <Button variant="outline" href="/registration">
                OMA Diction Awards
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

      <FaqSection heading="Speaking & events FAQs." items={speakingFaqs} />

      <Footer />
    </main>
  );
}
