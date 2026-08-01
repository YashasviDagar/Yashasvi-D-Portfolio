import { useEffect, useRef, useState } from "react";

const TOTAL_LAYERS = 240;

// Ambient background detail: ships behind all real content (negative
// z-index), never intercepts pointer events, and never tracks the
// cursor — its only inputs are time (ambient drift) and scroll (a
// damped nudge plus a loose vertical bias toward "higher = further
// through the print"). The reticle in Cursor.jsx is the one thing on
// this page that's sharp and pointer-responsive; this stays quiet.
const PrintHead = () => {
  const wrapRef = useRef(null);
  const labelRef = useRef(null);
  const frame = useRef(null);
  const scrollState = useRef({ progress: 0, kick: 0, lastY: 0 });

  const [isTouch] = useState(() => window.matchMedia("(pointer: coarse)").matches);
  const [reducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const paintLabel = (progress) => {
    if (!labelRef.current) return;
    const layer = Math.max(1, Math.round(progress * TOTAL_LAYERS));
    labelRef.current.textContent = `L${String(layer).padStart(3, "0")} ${Math.round(
      progress * 100
    )}%`;
  };

  // Ambient wander is centered on the viewport and spans most of it in
  // both axes — scroll depth only nudges the vertical center slightly
  // (12% of viewport height across the whole page), it doesn't drive it.
  const homeCenter = () => ({
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.5,
  });

  // Reduced motion (and not touch): one static position, computed once.
  // No rAF loop, no drift, no scroll tracking — genuinely frozen.
  useEffect(() => {
    if (isTouch || !reducedMotion) return;
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    const { x, y } = homeCenter();
    const bias = -window.innerHeight * 0.12 * progress;
    if (wrapRef.current) {
      wrapRef.current.style.transform = `translate3d(${x}px, ${y + bias}px, 0)`;
    }
    paintLabel(progress);
  }, [isTouch, reducedMotion]);

  useEffect(() => {
    if (isTouch || reducedMotion) return undefined;

    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress =
        scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      const dy = window.scrollY - scrollState.current.lastY;
      scrollState.current.lastY = window.scrollY;
      scrollState.current.progress = progress;
      // a damped nudge, not a persistent offset — decays every frame in paint()
      scrollState.current.kick = Math.max(
        -60,
        Math.min(60, scrollState.current.kick + dy * 0.15)
      );
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const paint = (t) => {
      const time = t / 1000;
      scrollState.current.kick *= 0.94;
      const { progress, kick } = scrollState.current;

      // Two sine/cosine pairs per axis at incommensurate, slow
      // frequencies — never repeats on an obvious loop, never linear,
      // never bounces off an edge like a screensaver (there's no
      // velocity/reflection state to bounce). Amplitudes span most of
      // the viewport in both axes so it wanders freely with no
      // dominant direction, rather than sitting anchored near one spot.
      const { x: centerX, y: centerY } = homeCenter();
      const ampX = window.innerWidth * 0.38;
      const ampY = window.innerHeight * 0.32;

      const driftX =
        Math.sin(time * 0.045) * 0.55 * ampX + Math.sin(time * 0.017 + 2.1) * 0.45 * ampX;
      const driftY =
        Math.cos(time * 0.031) * 0.55 * ampY + Math.sin(time * 0.013 + 0.7) * 0.45 * ampY;

      // scroll depth is a gentle long-term bias (rises as the print
      // progresses), not a driver — kept small relative to ampY on purpose
      const scrollBias = -window.innerHeight * 0.12 * progress;

      const x = centerX + driftX;
      const y = centerY + driftY + scrollBias + kick;

      if (wrapRef.current) {
        wrapRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      paintLabel(progress);
      frame.current = requestAnimationFrame(paint);
    };
    frame.current = requestAnimationFrame(paint);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [isTouch, reducedMotion]);

  if (isTouch) return null;

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -z-10 flex items-center gap-2 opacity-25 will-change-transform"
    >
      <img
        src="/print-head/nozzle.png"
        alt=""
        width={24}
        height={24}
        className="pixelated h-[72px] w-[72px]"
      />
      <span ref={labelRef} className="font-mono text-[10px] text-slate">
        L001 0%
      </span>
    </div>
  );
};

export default PrintHead;
