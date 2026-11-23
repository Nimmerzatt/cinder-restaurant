import Image from "next/image";
import site from "@/content/restaurant.json";

/** Light editorial section: statement left, two overlapping parallax images right. */
export default function Intro() {
  const { intro } = site;
  const [a, b] = intro.images;
  return (
    <section id="story" className="overflow-hidden bg-linen py-[clamp(100px,13vw,190px)] text-ink">
      <div className="mx-auto grid w-[min(1240px,90vw)] items-center gap-16 md:grid-cols-[1fr_1.05fr] md:gap-24">
        <div>
          <p data-reveal className="eyebrow text-ember">{intro.eyebrow}</p>
          <h2
            data-reveal
            style={{ "--d": ".1s" } as React.CSSProperties}
            className="mt-7 font-display text-[clamp(2.4rem,4.6vw,4rem)] font-light leading-[1.08]"
          >
            {intro.title}
          </h2>
          <p data-reveal style={{ "--d": ".2s" } as React.CSSProperties} className="mt-8 max-w-[46ch] text-lg text-stone">
            {intro.text}
          </p>
          <a
            data-reveal
            style={{ "--d": ".3s" } as React.CSSProperties}
            href={intro.link.href}
            className="link-line eyebrow mt-10 text-ink"
          >
            {intro.link.label}
          </a>

          <dl data-reveal className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-ink/15 pt-8">
            {intro.facts.map((f) => (
              <div key={f.label}>
                <dt className="font-display text-3xl font-light">{f.value}</dt>
                <dd className="mt-1 text-sm text-stone">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative h-[clamp(460px,58vw,720px)]">
          <div data-reveal="clip" className="absolute right-0 top-0 h-[78%] w-[72%] overflow-hidden">
            <Image src={a.src} alt={a.alt} fill sizes="(max-width: 768px) 70vw, 36vw" data-parallax="0.08" className="object-cover" />
          </div>
          <div
            data-reveal="clip"
            style={{ "--d": ".25s" } as React.CSSProperties}
            className="absolute bottom-0 left-0 h-[52%] w-[50%] overflow-hidden border-[10px] border-linen"
          >
            <Image src={b.src} alt={b.alt} fill sizes="(max-width: 768px) 50vw, 25vw" data-parallax="0.14" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
