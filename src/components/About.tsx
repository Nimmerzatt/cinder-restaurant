import Image from "next/image";
import site from "@/content/restaurant.json";

/** Light split section about the room and the idea behind it. */
export default function About() {
  const { about } = site;
  return (
    <section id="about" className="bg-linen py-[clamp(100px,13vw,180px)] text-ink">
      <div className="mx-auto grid w-[min(1240px,90vw)] items-center gap-14 md:grid-cols-[1.15fr_1fr] md:gap-24">
        <div data-reveal="clip" className="relative aspect-[3/2] overflow-hidden md:aspect-[5/4]">
          <Image src={about.image} alt={about.imageAlt} fill sizes="(max-width: 768px) 90vw, 50vw" data-parallax="0.08" className="object-cover" />
        </div>
        <div>
          <p data-reveal className="eyebrow text-ember">{about.eyebrow}</p>
          <h2
            data-reveal
            style={{ "--d": ".1s" } as React.CSSProperties}
            className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.6rem)] font-light leading-[1.08]"
          >
            {about.title}
          </h2>
          <p data-reveal style={{ "--d": ".2s" } as React.CSSProperties} className="mt-7 text-lg text-stone">
            {about.text}
          </p>
          <a data-reveal style={{ "--d": ".3s" } as React.CSSProperties} href="#book" className="link-line eyebrow mt-10 text-ink">
            visit us
          </a>
        </div>
      </div>
    </section>
  );
}
