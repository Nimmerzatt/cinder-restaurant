import Image from "next/image";
import site from "@/content/restaurant.json";

export default function Manifesto() {
  const { manifesto, plates } = site;
  return (
    <section id="story" className="bg-soot py-[clamp(100px,14vw,200px)]">
      {/* Centered statement */}
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow text-glow">Our story</p>
        <h2 className="mt-8 font-display text-[clamp(2rem,4.4vw,3.6rem)] font-light leading-[1.2] text-wheat">
          {manifesto.lead} <em className="text-muted">{manifesto.rest}</em>
        </h2>
      </div>

      {/* Split: image + text */}
      <div className="mx-auto mt-[clamp(90px,12vw,170px)] grid w-[min(1240px,90vw)] items-center gap-12 md:grid-cols-2 md:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image src={plates[1].image} alt={plates[1].alt} fill sizes="(max-width: 768px) 90vw, 45vw" className="object-cover" />
        </div>
        <div className="md:max-w-md">
          <p className="eyebrow text-glow">The kitchen</p>
          <h3 className="mt-6 font-display text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-[1.1]">Vegetables first, fire always.</h3>
          <p className="mt-6 text-muted">
            Our menu starts with what our farmers bring each week. Meat and fish arrive whole from small producers, sauces reduce for hours, and the
            wood fire touches almost every plate.
          </p>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-wheat/15 pt-8">
            {manifesto.facts.map((f) => (
              <div key={f.value}>
                <dt className="font-display text-3xl font-light text-wheat">{f.value}</dt>
                <dd className="mt-1 text-sm text-muted">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
