import Image from "next/image";
import site from "@/content/restaurant.json";

/** Full-bleed parallax image with a statement about the hearth. */
export default function Fire() {
  const { fire } = site;
  return (
    <section className="relative flex min-h-[95svh] items-end overflow-hidden">
      <Image src={fire.image} alt={fire.imageAlt} fill sizes="100vw" data-parallax="0.12" className="object-cover object-[50%_40%]" />
      <div className="absolute inset-0 bg-gradient-to-t from-soot via-soot/40 to-soot/30" />
      <div className="relative mx-auto w-[min(1240px,90vw)] pb-[clamp(70px,10vw,140px)]">
        <p data-reveal className="eyebrow text-glow">{fire.eyebrow}</p>
        <h2
          data-reveal
          style={{ "--d": ".1s" } as React.CSSProperties}
          className="mt-6 max-w-[14ch] font-display text-[clamp(2.6rem,6.4vw,5.6rem)] font-light leading-[1.02]"
        >
          {fire.title}
        </h2>
        <p data-reveal style={{ "--d": ".2s" } as React.CSSProperties} className="mt-7 max-w-md text-lg text-wheat/80">
          {fire.text}
        </p>
      </div>
    </section>
  );
}
