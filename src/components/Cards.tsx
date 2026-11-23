import Image from "next/image";
import site from "@/content/restaurant.json";

/** Four portrait tiles that zoom and reveal their text on hover. */
export default function Cards() {
  return (
    <section className="bg-soot pb-[clamp(100px,13vw,180px)] pt-[clamp(100px,13vw,180px)]">
      <div className="mx-auto w-[min(1400px,92vw)]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 data-reveal className="max-w-[16ch] font-display text-[clamp(2.2rem,4.4vw,3.6rem)] font-light leading-[1.08]">
            More ways to spend an evening.
          </h2>
          <p data-reveal style={{ "--d": ".1s" } as React.CSSProperties} className="max-w-sm text-muted">
            Sit at the pass, stay at the bar, or take over the whole room.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.cards.map((c, i) => (
            <a
              key={c.title}
              href={c.href}
              data-reveal
              style={{ "--d": `${i * 0.1}s` } as React.CSSProperties}
              className="group relative block aspect-[4/5.4] overflow-hidden bg-ash"
            >
              <Image
                src={c.image}
                alt={c.alt}
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 23vw"
                className="object-cover transition duration-[1.2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-soot/95 via-soot/30 to-transparent transition duration-700 group-hover:from-soot" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-display text-[1.9rem] font-light leading-tight">{c.title}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-wheat/80 opacity-0 transition-all duration-700 group-hover:max-h-24 group-hover:opacity-100 [@media(hover:none)]:max-h-24 [@media(hover:none)]:opacity-100">
                  {c.text}
                </p>
                <span className="link-line eyebrow mt-5 text-[0.65rem] text-glow">explore more</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
