"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import site from "@/content/restaurant.json";

const links = [
  { href: "#story", label: "Our story" },
  { href: "#menu", label: "Menu" },
  { href: "#private", label: "Private dining" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
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
        <div className="grid flex-1 items-center gap-10 px-[4vw] md:grid-cols-2">
          <ul className="flex flex-col items-center gap-4 md:items-start md:pl-[6vw]">
            {links.map((l, i) => (
              <li
                key={l.href}
                className={`transition duration-700 ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
                style={{ transitionDelay: open ? `${0.15 + i * 0.06}s` : "0s" }}
              >
                <a
                  href={l.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 font-display text-[clamp(2.2rem,5vw,4.2rem)] font-light italic leading-tight text-wheat transition hover:text-glow"
                >
                  <span className="font-sans text-xs not-italic tracking-[0.2em] text-muted">0{i + 1}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={`relative hidden h-[62vh] overflow-hidden transition duration-1000 md:block ${open ? "opacity-100" : "opacity-0"}`}
          >
            <Image src="/img/bar.jpg" alt="" fill sizes="45vw" className={`object-cover transition duration-[2s] ${open ? "scale-100" : "scale-110"}`} />
          </div>
        </div>
        <p className="pb-10 text-center text-sm text-muted">
          {site.contact.hours.join(", ")} · {site.contact.address.join(", ")}
        </p>
      </div>
    </>
  );
}
