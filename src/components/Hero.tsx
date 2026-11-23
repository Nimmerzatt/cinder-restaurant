import Image from "next/image";
import Embers from "./Embers";
import site from "@/content/restaurant.json";

export default function Hero() {
  const { hero } = site;
  return (
    <header id="top" className="relative h-svh min-h-[620px] overflow-hidden bg-soot">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="animate-drift object-cover"
      />
      {/* Darken for contrast: strong at top (nav) and bottom, softer in the middle */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,17,15,0.45)_0%,rgba(20,17,15,0.8)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-soot/70 via-transparent to-soot" />
      <Embers />

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="eyebrow animate-rise text-glow">{hero.kicker}</p>
        <h1 className="mt-6 animate-rise font-display text-[clamp(4.5rem,14vw,11rem)] font-light leading-none tracking-[0.12em] text-wheat [animation-delay:.15s]">
          {site.name.toUpperCase()}
        </h1>
        <p className="mt-6 max-w-[30ch] animate-rise font-display text-xl font-light italic text-wheat/90 [animation-delay:.3s] sm:text-2xl">
          {site.tagline}
        </p>
        <div className="mt-12 flex animate-rise flex-wrap justify-center gap-4 [animation-delay:.45s]">
          <a href="#book" className="eyebrow rounded-full bg-glow px-8 py-4 font-medium text-soot transition hover:bg-wheat">
            Reserve a table
          </a>
          <a href="#menu" className="eyebrow rounded-full border border-wheat/50 px-8 py-4 text-wheat transition hover:border-wheat hover:bg-wheat hover:text-soot">
            View menu
          </a>
        </div>
      </div>

      <a href="#story" className="eyebrow absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.65rem] text-wheat/70 transition hover:text-wheat">
        Scroll
        <span className="mx-auto mt-3 block h-10 w-px bg-wheat/40" aria-hidden="true" />
      </a>
    </header>
  );
}
