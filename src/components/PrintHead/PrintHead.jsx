import { useEffect, useRef, useState } from "react";

const TOTAL_LAYERS = 240;

// Each section gets its own motion character — different amplitude and
// frequency pair — so the path visibly changes as you move down the
// page instead of reading as one fixed loop repeating under different
// content. Frequencies are in rad/s; periods below are 2*PI/freq.
const SECTION_MOTION = {
  hero: { ampX: 0.34, ampY: 0.28, freqXa: 0.1, freqXb: 0.037, freqYa: 0.075, freqYb: 0.028 },
  work: { ampX: 0.42, ampY: 0.24, freqXa: 0.13, freqXb: 0.05, freqYa: 0.06, freqYb: 0.022 },
  stack: { ampX: 0.2, ampY: 0.36, freqXa: 0.16, freqXb: 0.065, freqYa: 0.09, freqYb: 0.035 },
  education: { ampX: 0.16, ampY: 0.14, freqXa: 0.08, freqXb: 0.03, freqYa: 0.05, freqYb: 0.019 },
  contact: { ampX: 0.38, ampY: 0.32, freqXa: 0.18, freqXb: 0.07, freqYa: 0.1, freqYb: 0.04 },
};
const SECTION_IDS = Object.keys(SECTION_MOTION);
const DEFAULT_MOTION = SECTION_MOTION.hero;

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

  // Phase is accumulated explicitly (phase += freq * dt) rather than
  // computed as sin(freq * absoluteTime) — with a freq that itself
  // glides toward a new section's target every frame, sin(freq(t)*t)
  // would pick up a d/dt[freq(t)]*t term that grows with how long the
  // page has been open, causing a visible jolt on transition. Explicit
  // integration keeps the transition smooth regardless of session length.
  const phase = useRef({ xa: 0, xb: 0, ya: 0, yb: 0 });
  const lastFrameTime = useRef(null);
  const motion = useRef({ ...DEFAULT_MOTION });
  const targetMotion = useRef({ ...DEFAULT_MOTION });

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

  // Whichever section's midpoint is closest to the viewport's center
  // wins. Tried "contains the center pixel" and "most visible area"
  // first — both let a short section sandwiched between taller ones
  // (education) get skipped over entirely, since it can lose the area
  // contest to a neighbor even while fully on screen. Nearest-midpoint
  // depends only on position, not height, so every section gets a real
  // window as you scroll past it, confirmed by scanning scroll
  // positions across education's own range and seeing its config
  // actually win there.
  const activeSectionMotion = () => {
    const viewportCenter = window.innerHeight / 2;
    let bestId = null;
    let bestDist = Infinity;
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const dist = Math.abs(rect.top + rect.height / 2 - viewportCenter);
      if (dist < bestDist) {
        bestDist = dist;
        bestId = id;
      }
    }
    return bestId ? SECTION_MOTION[bestId] : DEFAULT_MOTION;
  };

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
      targetMotion.current = activeSectionMotion();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const paint = (t) => {
      const now = t / 1000;
      const dt = lastFrameTime.current === null ? 0 : Math.min(0.1, now - lastFrameTime.current);
      lastFrameTime.current = now;

      scrollState.current.kick *= 0.94;
      const { progress, kick } = scrollState.current;

      // Glide current motion params toward the active section's target
      // every frame — no snapping when a section boundary is crossed.
      const m = motion.current;
      const tgt = targetMotion.current;
      const EASE = 0.03;
      for (const key of Object.keys(m)) {
        m[key] += (tgt[key] - m[key]) * EASE;
      }

      phase.current.xa += m.freqXa * dt;
      phase.current.xb += m.freqXb * dt;
      phase.current.ya += m.freqYa * dt;
      phase.current.yb += m.freqYb * dt;

      const { x: centerX, y: centerY } = homeCenter();
      const ampX = window.innerWidth * m.ampX;
      const ampY = window.innerHeight * m.ampY;

      const driftX =
        Math.sin(phase.current.xa) * 0.55 * ampX +
        Math.sin(phase.current.xb + 2.1) * 0.45 * ampX;
      const driftY =
        Math.cos(phase.current.ya) * 0.55 * ampY +
        Math.sin(phase.current.yb + 0.7) * 0.45 * ampY;

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
