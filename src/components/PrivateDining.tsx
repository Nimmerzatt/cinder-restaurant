import Image from "next/image";
import site from "@/content/restaurant.json";

export default function PrivateDining() {
  const { privateDining } = site;
  return (
    <section id="private" className="relative flex min-h-[90svh] items-center overflow-hidden">
      <Image src={privateDining.image} alt={privateDining.imageAlt} fill sizes="100vw" data-parallax="0.1" className="object-cover" />
      <div className="absolute inset-0 bg-soot/65" />
      <div className="relative mx-auto max-w-2xl px-6 py-28 text-center">
        <p data-reveal className="eyebrow text-glow">Private dining</p>
        <h2
          data-reveal
          style={{ "--d": ".1s" } as React.CSSProperties}
          className="mt-6 font-display text-[clamp(2.6rem,6vw,4.8rem)] font-light leading-[1.05]"
        >
          {privateDining.title}
        </h2>
        <p data-reveal style={{ "--d": ".2s" } as React.CSSProperties} className="mx-auto mt-6 max-w-md text-lg text-wheat/85">
          {privateDining.text}
        </p>
        <a
          data-reveal
          style={{ "--d": ".3s" } as React.CSSProperties}
          href="#book"
          className="eyebrow mt-10 inline-block rounded-full border border-wheat/60 px-8 py-4 transition hover:bg-wheat hover:text-soot"
        >
          Plan your event
        </a>
      </div>
    </section>
  );
}
