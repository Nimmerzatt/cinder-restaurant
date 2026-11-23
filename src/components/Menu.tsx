"use client";

import { useState } from "react";
import site from "@/content/restaurant.json";

type Tab = "carte" | "tasting";

export default function Menu() {
  const [tab, setTab] = useState<Tab>("tasting");
  const { alaCarte, tasting } = site;

  const tabs: { id: Tab; label: string }[] = [
    { id: "tasting", label: "Tasting menu" },
    { id: "carte", label: "À la carte" },
  ];

  return (
    <section id="menu" className="bg-ash py-[clamp(100px,13vw,180px)]">
      <div className="mx-auto w-[min(1000px,90vw)] text-center">
        <p className="eyebrow text-glow">Menu</p>
        <h2 className="mt-6 font-display text-[clamp(2.6rem,5.5vw,4.4rem)] font-light">This season</h2>

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

        <div role="tabpanel" id="panel-tasting" aria-labelledby="tab-tasting" hidden={tab !== "tasting"} className="mt-16">
          <ol className="mx-auto max-w-xl space-y-9">
            {tasting.courses.map((c) => (
              <li key={c.name}>
                <p className="font-display text-[1.7rem] font-light text-wheat">{c.name}</p>
                <p className="mt-1 text-muted">{c.description}</p>
              </li>
            ))}
          </ol>
          <div className="mx-auto mt-16 max-w-xl border-t border-wheat/15 pt-10">
            <p className="font-display text-4xl font-light text-glow">€{tasting.price}</p>
            <p className="mt-2 text-muted">
              per person
              {tasting.pairings.map((p) => ` · ${p.label} €${p.price}`)}
            </p>
            <p className="mx-auto mt-6 max-w-md text-sm text-muted">{tasting.description}</p>
          </div>
        </div>

        <div role="tabpanel" id="panel-carte" aria-labelledby="tab-carte" hidden={tab !== "carte"} className="mt-16">
          <div className="grid gap-14 text-left md:grid-cols-3">
            {alaCarte.map((s) => (
              <div key={s.section}>
                <h3 className="eyebrow mb-6 text-glow">{s.section}</h3>
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

        <p className="mt-16 text-xs text-muted">Prices in euros incl. VAT. Please tell us about allergies when you book.</p>
      </div>
    </section>
  );
}
