import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Reveal, Section } from "../components/ui";

export const metadata = {
  title: "Website Design",
  description:
    "Fast, modern school websites built to strengthen admissions and parent trust.",
};

const features = [
  {
    title: "Built for admissions.",
    body: "Clear navigation, fast mobile performance and direct enquiry flows that convert prospective parents.",
  },
  {
    title: "Reliable hosting.",
    body: "Clean architecture that loads quickly on every device and stays easy to update.",
  },
  {
    title: "Tailored to your brand.",
    body: "Designed around your school's identity, photography and values without template clutter.",
  },
];

export default function WebDesignPage() {
  return (
    <main className="oma-grain flex min-h-screen flex-col bg-oma-bg text-oma-text">
      <Navbar />

      <section className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1200px] px-7">
          <Reveal>
            <p className="mb-4 text-sm text-oma-text3">Tech</p>
            <h1 className="mb-6 min-w-0 break-words text-[clamp(40px,6vw,72px)] font-semibold leading-[1.02] tracking-[-0.04em] text-oma-text">
              School website design.
            </h1>
            <p className="mb-8 max-w-[50ch] text-lg leading-relaxed text-oma-text2">
              A clear, fast digital front door that builds parent confidence and
              supports school growth.
            </p>
            <Button variant="primary" href="/contact">
              Start a website project
            </Button>
          </Reveal>
        </div>
      </section>

      <Section>
        <div>
          {features.map((item, i) => (
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
