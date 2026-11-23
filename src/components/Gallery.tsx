import Image from "next/image";
import site from "@/content/restaurant.json";

/** Endless, slowly moving strip of photos. Pauses on hover. */
export default function Gallery() {
  const shots = site.gallery;
  // Rendered twice so the -50% translate loops seamlessly
  const loop = [...shots, ...shots];
  return (
    <section id="gallery" className="overflow-hidden bg-soot pb-[clamp(100px,13vw,180px)]">
      <div className="mx-auto mb-12 flex w-[min(1400px,92vw)] items-center gap-6">
        <p className="eyebrow shrink-0 text-glow">Inside Cinder</p>
        <span className="h-px flex-1 bg-wheat/15" />
      </div>
      <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
        {loop.map((s, i) => (
          <div
            key={i}
            aria-hidden={i >= shots.length}
            className={`relative shrink-0 overflow-hidden ${i % 3 === 1 ? "h-[clamp(240px,30vw,420px)] w-[clamp(320px,40vw,560px)]" : "h-[clamp(240px,30vw,420px)] w-[clamp(200px,22vw,320px)]"}`}
          >
            <Image
              src={s.src}
              alt={i >= shots.length ? "" : s.alt}
              fill
              sizes="(max-width: 768px) 60vw, 30vw"
              className="object-cover grayscale-[35%] transition duration-700 hover:scale-105 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
