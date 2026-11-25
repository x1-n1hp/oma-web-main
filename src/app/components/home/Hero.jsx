import { Button, HeroGlow, Reveal } from "../ui";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-72px)] items-center overflow-x-clip py-20 pb-28">
      <HeroGlow />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-7">
        <Reveal>
          <h1 className="mb-6 max-w-[12ch] min-w-0 break-words text-[clamp(52px,8vw,96px)] font-semibold leading-[0.98] tracking-[-0.045em] text-oma-text">
            Clear voices. Strong schools.
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mb-10 max-w-[40ch] text-xl leading-relaxed text-oma-text2">
            Teaching, articulation and technology that help pupils and schools
            rise.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" href="/contact">
              Book consultation
            </Button>
            <Button variant="outline" href="/services">
              Explore services
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
