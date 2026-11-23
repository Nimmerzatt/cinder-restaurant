import site from "@/content/restaurant.json";
import Newsletter from "./Newsletter";

const links = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#private", label: "Private dining" },
  { href: "#gallery", label: "Gallery" },
  { href: "#book", label: "Reservations" },
];

export default function Footer() {
  const { contact } = site;
  return (
    <footer className="border-t border-wheat/10 bg-soot pt-[clamp(80px,10vw,130px)] text-muted">
      <div className="mx-auto grid w-[min(1240px,90vw)] gap-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <a href="#top" className="font-display text-4xl font-light tracking-[0.35em] text-wheat">
            {site.name.toUpperCase()}
          </a>
          <p className="mt-5 max-w-xs">{site.tagline}</p>
          <div className="mt-10">
            <Newsletter />
          </div>
        </div>
        <div>
          <h3 className="eyebrow mb-5 text-[0.68rem] text-glow">Visit</h3>
          <p className="text-wheat">
            {contact.address.map((l) => <span key={l} className="block">{l}</span>)}
          </p>
          <p className="mt-4">{contact.phone}</p>
          <p className="mt-4">{contact.hours.join(", ")}</p>
        </div>
        <nav aria-label="Footer">
          <h3 className="eyebrow mb-5 text-[0.68rem] text-glow">Explore</h3>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} className="text-wheat transition hover:text-glow">{l.label}</a></li>
            ))}
          </ul>
          <ul className="eyebrow mt-8 flex gap-6 text-[0.65rem]">
            <li><a href="#" className="hover:text-wheat">Instagram</a></li>
            <li><a href="#" className="hover:text-wheat">Imprint</a></li>
            <li><a href="#" className="hover:text-wheat">Privacy</a></li>
          </ul>
        </nav>
      </div>

      {/* Oversized wordmark as a closing graphic */}
      <p aria-hidden="true" className="mt-20 select-none overflow-hidden text-center font-display text-[clamp(4rem,20vw,17rem)] font-light leading-[0.8] tracking-[0.12em] text-wheat/[0.06]">
        {site.name.toUpperCase()}
      </p>

      <p className="mx-auto w-[min(1240px,90vw)] border-t border-wheat/10 py-6 text-xs text-[#6f665a]">
        Concept website built as a portfolio project. {site.name} is a fictional restaurant; address and phone number are
        placeholders. Additional photography via Unsplash.
      </p>
    </footer>
  );
}
