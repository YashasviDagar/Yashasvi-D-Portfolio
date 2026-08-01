import { useEffect, useRef } from "react";

const TOTAL_LAYERS = 240;

// Fixed scroll-progress readout styled as a slicer's print job status.
const PrintProgress = () => {
  const fillRef = useRef(null);
  const textRef = useRef(null);
  const frame = useRef(null);

  useEffect(() => {
    const paint = () => {
      frame.current = null;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress =
        scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      const layer = Math.max(1, Math.round(progress * TOTAL_LAYERS));

      if (fillRef.current) fillRef.current.style.width = `${progress * 100}%`;
      if (textRef.current) {
        const pct = Math.round(progress * 100);
        textRef.current.textContent = `LAYER ${String(layer).padStart(3, "0")}/${TOTAL_LAYERS} — ${pct}%`;
      }
    };

    const handleScroll = () => {
      if (frame.current === null) frame.current = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-bone/10 bg-ink-950/95 px-4 py-1.5 font-mono text-[10px] tracking-wide text-slate sm:px-8"
    >
      <div className="h-1 flex-1 overflow-hidden rounded-full bg-ink-900">
        <div
          ref={fillRef}
          className="h-full w-0 bg-filament transition-[width] duration-150 ease-out"
        />
      </div>
      <span ref={textRef} className="shrink-0 tabular-nums">
        LAYER 000/{TOTAL_LAYERS} — 0%
      </span>
    </div>
  );
};

export default PrintProgress;
