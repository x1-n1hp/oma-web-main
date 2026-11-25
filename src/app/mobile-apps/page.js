import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Reveal, Section } from "../components/ui";

export const metadata = {
  title: "Mobile Apps",
  description:
    "Parent and school mobile applications for iPhone and Android from Oma Services.",
};

const features = [
  {
    title: "Instant updates.",
    body: "Attendance alerts, notices and termly reports delivered straight to parents on iOS and Android.",
  },
  {
    title: "Simple fee payments.",
    body: "Clear tuition reminders and straightforward payment records that reduce administrative chase.",
  },
  {
    title: "Designed for busy families.",
    body: "Readable typography and calm layouts with zero confusion.",
  },
];

export default function MobileAppsPage() {
  return (
    <main className="oma-grain flex min-h-screen flex-col bg-oma-bg text-oma-text">
      <Navbar />

      <section className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1200px] px-7">
          <Reveal>
            <p className="mb-4 text-sm text-oma-text3">Tech</p>
            <h1 className="mb-6 min-w-0 break-words text-[clamp(40px,6vw,72px)] font-semibold leading-[1.02] tracking-[-0.04em] text-oma-text">
              Parent mobile apps.
            </h1>
            <p className="mb-8 max-w-[50ch] text-lg leading-relaxed text-oma-text2">
              Keep parents informed and connected with clean iPhone and Android
              applications built for your school.
            </p>
            <Button variant="primary" href="/contact">
              Discuss a mobile app
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
