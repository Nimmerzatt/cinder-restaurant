"use client";

import { useEffect } from "react";

/**
 * Page-wide scroll effects:
 * - [data-reveal] elements get `.is-in` once they enter the viewport (fade/slide or clip reveal)
 * - [data-parallax="0.15"] elements drift against the scroll, relative to their parent
 */
export default function ScrollFx() {
  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            reveal.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => reveal.disconnect();

    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const el of items) {
        const box = (el.parentElement ?? el).getBoundingClientRect();
        if (box.bottom < -100 || box.top > vh + 100) continue;
        const speed = Number(el.dataset.parallax) || 0.12;
        const offset = (box.top + box.height / 2 - vh / 2) * -speed;
        el.style.setProperty("--py", `${offset.toFixed(1)}px`);
      }
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      reveal.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
