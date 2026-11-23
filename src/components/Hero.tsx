import Image from "next/image";
import Embers from "./Embers";
import site from "@/content/restaurant.json";

export default function Hero() {
  const { hero } = site;
  return (
    <header id="top" className="relative h-svh min-h-[640px] overflow-hidden bg-soot">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="animate-drift object-cover"
      />
      {/* Darken for contrast: strong at top (nav) and bottom, softer in the middle */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,17,15,0.35)_0%,rgba(20,17,15,0.75)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-soot/70 via-transparent to-soot" />
      <Embers />

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="eyebrow after-curtain animate-rise text-glow">{hero.kicker}</p>
        <p
          className="after-curtain mt-8 animate-rise font-display text-xl font-light italic text-wheat/80 sm:text-2xl"
          style={{ "--d": ".15s" } as React.CSSProperties}
        >
          {hero.line}
        </p>
        <h1
          className="after-curtain mt-4 animate-rise font-display text-[clamp(2.7rem,7.4vw,7rem)] font-light leading-[1.02] text-wheat"
          style={{ "--d": ".3s" } as React.CSSProperties}
        >
          {hero.title[0]}
          <br />
          <em className="text-glow">{hero.title[1]}</em>
        </h1>
        <div
          className="after-curtain mt-12 flex animate-rise flex-wrap justify-center gap-4"
          style={{ "--d": ".5s" } as React.CSSProperties}
        >
          <a href="#book" className="eyebrow rounded-full bg-glow px-8 py-4 font-medium text-soot transition hover:bg-wheat">
            Reserve a table
          </a>
          <a href="#menu" className="eyebrow rounded-full border border-wheat/50 px-8 py-4 text-wheat backdrop-blur-sm transition hover:border-wheat hover:bg-wheat hover:text-soot">
            View menu
          </a>
        </div>
      </div>

      <a href="#story" className="eyebrow absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.65rem] text-wheat/70 transition hover:text-wheat">
        Scroll
        <span className="relative mx-auto mt-3 block h-12 w-px overflow-hidden bg-wheat/20" aria-hidden="true">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_2.2s_ease-in-out_infinite] bg-wheat" />
        </span>
      </a>
    </header>
  );
}
