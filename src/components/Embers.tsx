"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number; y: number; r: number;
  vx: number; vy: number;
  life: number; decay: number; flick: number;
};

/** Sparks rising from the bottom of the hero, drifting with the mouse. */
export default function Embers() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, wind = 0, targetWind = 0, running = true, frame = 0;
    let parts: Particle[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const spawn = (y?: number): Particle => ({
      x: Math.random() * w, y: y ?? h + 10,
      r: Math.random() * 2.2 + 0.6,
      vy: -(Math.random() * 1.3 + 0.45),
      vx: (Math.random() - 0.5) * 0.4,
      life: 1, decay: Math.random() * 0.004 + 0.0025,
      flick: Math.random() * Math.PI * 2,
    });
    const count = () => Math.round(Math.min(70, w / 20));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (const p of parts) {
        const a = Math.max(p.life, 0) * (0.6 + 0.4 * Math.sin(p.flick));
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        g.addColorStop(0, `rgba(255,200,120,${a})`);
        g.addColorStop(0.35, `rgba(255,106,43,${a * 0.55})`);
        g.addColorStop(1, "rgba(255,60,20,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    };

    const loop = () => {
      if (!running) return;
      wind += (targetWind - wind) * 0.03;
      parts = parts.map((p) => {
        p.x += p.vx + wind + Math.sin(p.y * 0.012 + p.flick) * 0.35;
        p.y += p.vy; p.life -= p.decay; p.flick += 0.15;
        return p.life <= 0 || p.y < -20 ? spawn() : p;
      });
      while (parts.length < count()) parts.push(spawn());
      draw();
      frame = requestAnimationFrame(loop);
    };

    resize();
    parts = Array.from({ length: count() }, () => spawn(Math.random() * h));

    const onMove = (e: PointerEvent) => { targetWind = (e.clientX / w - 0.5) * 1.6; };
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);

    const io = new IntersectionObserver(([e]) => {
      const wasRunning = running;
      running = e.isIntersecting;
      if (running && !wasRunning && !reduce) loop();
    });
    io.observe(canvas);

    if (reduce) draw(); else loop();

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
