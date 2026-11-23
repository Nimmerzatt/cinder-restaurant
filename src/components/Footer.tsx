import site from "@/content/restaurant.json";

export default function Footer() {
  return (
    <footer className="bg-soot pb-10 pt-24 text-center text-muted">
      <a href="#top" className="font-display text-4xl font-light tracking-[0.35em] text-wheat">
        {site.name.toUpperCase()}
      </a>
      <p className="mt-6">{site.contact.address.join(", ")}</p>
      <p>{site.contact.phone}</p>
      <nav className="eyebrow mt-10 flex justify-center gap-8 text-[0.7rem]">
        <a href="#" className="hover:text-wheat">Instagram</a>
        <a href="#" className="hover:text-wheat">Imprint</a>
        <a href="#" className="hover:text-wheat">Privacy</a>
      </nav>
      <p className="mx-auto mt-14 w-[min(1240px,90vw)] border-t border-wheat/10 pt-6 text-xs text-[#6f665a]">
        Concept website built as a portfolio project. {site.name} is a fictional restaurant; address and phone number are placeholders.
      </p>
    </footer>
  );
}
