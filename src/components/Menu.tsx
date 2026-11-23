"use client";

import Image from "next/image";
import { useState } from "react";
import site from "@/content/restaurant.json";

type Tab = "carte" | "tasting";

export default function Menu() {
  const [tab, setTab] = useState<Tab>("tasting");
  const { alaCarte, tasting, menuFeature } = site;

  const tabs: { id: Tab; label: string }[] = [
    { id: "tasting", label: "Tasting menu" },
    { id: "carte", label: "À la carte" },
  ];

  return (
    <section id="menu" className="bg-soot py-[clamp(100px,13vw,180px)]">
      {/* Feature: image + statement */}
      <div className="mx-auto grid w-[min(1240px,90vw)] items-center gap-14 md:grid-cols-2 md:gap-24">
        <div data-reveal="clip" className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={menuFeature.image}
            alt={menuFeature.imageAlt}
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            data-parallax="0.08"
            className="object-cover"
          />
        </div>
        <div className="md:max-w-md">
          <p data-reveal className="eyebrow text-glow">{menuFeature.eyebrow}</p>
          <h2
            data-reveal
            style={{ "--d": ".1s" } as React.CSSProperties}
            className="mt-6 font-display text-[clamp(2.4rem,4.4vw,3.8rem)] font-light leading-[1.08]"
          >
            {menuFeature.title}
          </h2>
          <p data-reveal style={{ "--d": ".2s" } as React.CSSProperties} className="mt-7 text-lg text-muted">
            {menuFeature.text}
          </p>
          <a
            data-reveal
            style={{ "--d": ".3s" } as React.CSSProperties}
            href="#menu-card"
            className="eyebrow mt-10 inline-block rounded-full border border-wheat/50 px-8 py-4 text-wheat transition hover:border-glow hover:bg-glow hover:text-soot"
          >
            View full menu
          </a>
        </div>
      </div>

      {/* Menu card with tabs */}
      <div id="menu-card" className="mx-auto mt-[clamp(110px,14vw,190px)] w-[min(1000px,90vw)] scroll-mt-24 border border-wheat/12 bg-ash px-[clamp(22px,5vw,70px)] py-[clamp(60px,8vw,100px)] text-center">
        <p className="eyebrow text-glow">This season</p>
        <h3 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-light">The menu</h3>

        <div role="tablist" aria-label="Menu type" className="mt-10 inline-flex gap-8">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls={`panel-${t.id}`}
              onClick={() => setTab(t.id)}
              className={`eyebrow border-b pb-2 transition ${
                tab === t.id ? "border-glow text-wheat" : "border-transparent text-muted hover:text-wheat"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" id="panel-tasting" aria-labelledby="tab-tasting" hidden={tab !== "tasting"} className="mt-14">
          <ol className="mx-auto max-w-xl space-y-8">
            {tasting.courses.map((c, i) => (
              <li key={c.name}>
                <span className="font-display text-sm italic text-ember">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-display text-[1.6rem] font-light text-wheat">{c.name}</p>
                <p className="mt-1 text-muted">{c.description}</p>
              </li>
            ))}
          </ol>
          <div className="mx-auto mt-14 max-w-xl border-t border-wheat/15 pt-10">
            <p className="font-display text-4xl font-light text-glow">€{tasting.price}</p>
            <p className="mt-2 text-muted">
              per person
              {tasting.pairings.map((p) => ` · ${p.label} €${p.price}`)}
            </p>
            <p className="mx-auto mt-6 max-w-md text-sm text-muted">{tasting.description}</p>
          </div>
        </div>

        <div role="tabpanel" id="panel-carte" aria-labelledby="tab-carte" hidden={tab !== "carte"} className="mt-14">
          <div className="grid gap-14 text-left md:grid-cols-3">
            {alaCarte.map((s) => (
              <div key={s.section}>
                <h4 className="eyebrow mb-6 text-glow">{s.section}</h4>
                <ul className="space-y-6">
                  {s.dishes.map((d) => (
                    <li key={d.name}>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-display text-xl font-light text-wheat">{d.name}</span>
                        <span className="text-muted tabular-nums">{d.price}</span>
                      </div>
                      <p className="mt-1 text-sm text-muted">{d.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 text-xs text-muted">Prices in euros incl. VAT. Please tell us about allergies when you book.</p>
      </div>
    </section>
  );
}
