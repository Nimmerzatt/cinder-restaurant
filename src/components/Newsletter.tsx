"use client";

import { useState, type FormEvent } from "react";

/** Demo newsletter signup: validates locally, sends nothing. */
export default function Newsletter() {
  const [msg, setMsg] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    setMsg(/^\S+@\S+\.\S+$/.test(email) ? "Thank you. You're on the list for seasonal menus and events." : "Add a valid email address.");
  }

  return (
    <form noValidate onSubmit={onSubmit} className="w-full max-w-md">
      <label htmlFor="nl-email" className="eyebrow block text-[0.68rem] text-glow">
        Seasonal letters
      </label>
      <div className="mt-4 flex border-b border-wheat/30 focus-within:border-glow">
        <input
          id="nl-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Your email"
          className="min-w-0 flex-1 bg-transparent py-3 text-wheat placeholder:text-muted focus:outline-none"
        />
        <button type="submit" className="eyebrow shrink-0 pl-4 text-[0.68rem] text-wheat transition hover:text-glow">
          Subscribe
        </button>
      </div>
      <p role="status" className="mt-3 min-h-6 text-sm text-muted">{msg}</p>
    </form>
  );
}
