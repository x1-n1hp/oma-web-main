import Image from "next/image";
import { Button, HeroGlow, Reveal } from "../ui";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-72px)] items-center overflow-x-clip py-20 pb-24">
      <HeroGlow />
      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 px-7 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <div>
          <Reveal>
            <h1 className="mb-6 max-w-[12ch] min-w-0 break-words text-[clamp(48px,7vw,84px)] font-semibold leading-[0.98] tracking-[-0.045em] text-oma-text">
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

        <Reveal delay={0.12}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-oma border border-oma-line bg-oma-s1">
            <Image
              src="/images/DSC_6538.JPG"
              alt="Pupils and educators with Oma Services"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
