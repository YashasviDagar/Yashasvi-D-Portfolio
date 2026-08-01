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

  const homePosition = (progress) => ({
    x: window.innerWidth * 0.82,
    y: window.innerHeight * (0.72 - 0.44 * progress),
  });

  // Reduced motion (and not touch): one static position, computed once.
  // No rAF loop, no drift, no scroll tracking — genuinely frozen.
  useEffect(() => {
    if (isTouch || !reducedMotion) return;
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    const { x, y } = homePosition(progress);
    if (wrapRef.current) {
      wrapRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
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

      // two sine/cosine pairs at incommensurate, slow frequencies —
      // never repeats on an obvious loop, never linear, never bounces
      // off an edge like a screensaver.
      const driftX = Math.sin(time * 0.11) * 46 + Math.sin(time * 0.041 + 1.3) * 22;
      const driftY = Math.cos(time * 0.083) * 34 + Math.sin(time * 0.027 + 0.6) * 18;

      const { x: homeX, y: homeY } = homePosition(progress);
      const x = homeX + driftX;
      const y = homeY + driftY + kick;

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
