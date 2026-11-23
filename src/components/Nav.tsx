"use client";

import { useEffect, useState } from "react";
import site from "@/content/restaurant.json";

const links = [
  { href: "#story", label: "Our story" },
  { href: "#menu", label: "Menu" },
  { href: "#private", label: "Private dining" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-30 grid grid-cols-3 items-center px-[4vw] transition-all duration-500 ${
          solid ? "bg-soot/90 py-4 backdrop-blur-md" : "py-7"
        }`}
      >
        <button
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="menu-overlay"
          className="eyebrow flex items-center gap-3 justify-self-start text-wheat"
        >
          <span className="flex flex-col gap-[5px]" aria-hidden="true">
            <span className="block h-px w-6 bg-wheat" />
            <span className="block h-px w-6 bg-wheat" />
          </span>
          <span className="hidden sm:inline">Menu</span>
        </button>

        <a href="#top" className="justify-self-center font-display text-2xl font-light tracking-[0.35em] text-wheat sm:text-[1.7rem]">
          {site.name.toUpperCase()}
        </a>

        <a
          href="#book"
          className="eyebrow justify-self-end rounded-full border border-wheat/50 px-4 py-2.5 text-wheat transition hover:border-glow hover:bg-glow hover:text-soot sm:px-6"
        >
          Book<span className="hidden sm:inline"> a table</span>
        </a>
      </nav>

      <div
        id="menu-overlay"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-soot transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-[4vw] py-7">
          <button onClick={() => setOpen(false)} className="eyebrow text-wheat" tabIndex={open ? 0 : -1}>
            Close
          </button>
          <span className="font-display text-2xl font-light tracking-[0.35em]">{site.name.toUpperCase()}</span>
          <span className="w-12" />
        </div>
        <ul className="flex flex-1 flex-col items-center justify-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light italic text-wheat transition hover:text-glow"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="pb-10 text-center text-sm text-muted">
          {site.contact.hours.join(", ")} · {site.contact.address.join(", ")}
        </p>
      </div>
    </>
  );
}
