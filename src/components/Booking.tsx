"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import site from "@/content/restaurant.json";

type Status = { type: "ok" | "error"; text: string } | null;

const field =
  "mt-2 block w-full border-0 border-b border-wheat/30 bg-transparent px-0 py-3 text-wheat [color-scheme:dark] focus:border-glow focus:outline-none [&>option]:bg-soot";
const label = "eyebrow mb-8 block text-[0.68rem] text-muted";

export default function Booking() {
  const [status, setStatus] = useState<Status>(null);
  const [sent, setSent] = useState(false);
  const { times, closedWeekdays, maxGuests } = site.booking;
  const dateRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (dateRef.current) dateRef.current.min = new Date().toISOString().split("T")[0];
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const date = String(data.get("date") ?? "");
    const time = String(data.get("time") ?? "");
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const guests = String(data.get("guests"));

    let error = "";
    if (!date) error = "Pick a date for your visit.";
    else if (closedWeekdays.includes(new Date(`${date}T12:00`).getDay()))
      error = "We are closed on Sundays and Mondays. Pick a day from Tuesday to Saturday.";
    else if (!time) error = "Pick a time for your table.";
    else if (!name) error = "Add the name for the booking.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) error = "Add an email address so we can confirm your table.";

    if (error) return setStatus({ type: "error", text: error });

    const day = new Date(`${date}T12:00`).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
    setStatus({ type: "ok", text: `Table requested for ${guests} on ${day} at ${time}. We'll confirm by email.` });
    setSent(true);
  }

  const { contact } = site;

  return (
    <section id="book" className="bg-soot py-[clamp(100px,13vw,180px)]">
      <div className="mx-auto grid w-[min(1240px,90vw)] gap-[clamp(40px,7vw,110px)] md:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow text-glow">Reservations</p>
          <h2 className="mt-6 font-display text-[clamp(2.6rem,5.5vw,4.4rem)] font-light leading-[1.05]">Join us for dinner</h2>
          <p className="mb-12 mt-6 max-w-[34ch] text-muted">
            We confirm every request by email within a few hours. For groups over {maxGuests}, call us.
          </p>
          <div id="visit" className="grid gap-8 border-t border-wheat/15 pt-10 sm:grid-cols-2">
            <Fact title="Open" lines={contact.hours} />
            <Fact title="Kitchen" lines={[contact.lastOrders]} />
            <Fact title="Find us" lines={contact.address} />
            <Fact title="Call" lines={[contact.phone]} />
          </div>
        </div>

        <form noValidate onSubmit={onSubmit} className="border border-wheat/15 p-[clamp(26px,4vw,48px)]">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={label}>Date<input ref={dateRef} type="date" name="date" className={field} /></label>
            <label className={label}>
              Time
              <select name="time" className={field} defaultValue="">
                <option value="">Pick a time</option>
                {times.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={label}>
              Guests
              <select name="guests" className={field} defaultValue="2">
                {Array.from({ length: maxGuests }, (_, i) => <option key={i + 1}>{i + 1}</option>)}
              </select>
            </label>
            <label className={label}>
              Menu
              <select name="menu" className={field}>
                <option>À la carte</option>
                <option>Tasting menu</option>
                <option>Not sure yet</option>
              </select>
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={label}>Name<input type="text" name="name" autoComplete="name" className={field} /></label>
            <label className={label}>Email<input type="email" name="email" autoComplete="email" className={field} /></label>
          </div>
          <label className={label}>
            Allergies or notes
            <textarea name="notes" placeholder="Anniversary, allergies, high chair" className={`${field} min-h-20 resize-y`} />
          </label>
          <button
            type="submit"
            disabled={sent}
            className="eyebrow mt-2 w-full rounded-full bg-glow py-5 font-medium text-soot transition hover:bg-wheat disabled:opacity-60"
          >
            {sent ? "Table requested" : "Request table"}
          </button>
          {status && (
            <p role="status" className={`mt-4 rounded-lg p-4 ${status.type === "ok" ? "bg-[#2b3324] text-[#d5e3bf]" : "bg-[#3a1f17] text-[#f3c3ad]"}`}>
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Fact({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div>
      <h3 className="eyebrow mb-2 text-[0.68rem] text-glow">{title}</h3>
      <p className="font-display text-lg font-light text-wheat">
        {lines.map((l) => (
          <span key={l} className="block">{l}</span>
        ))}
      </p>
    </div>
  );
}
