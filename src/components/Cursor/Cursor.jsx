import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]';

// Custom slicer-reticle cursor. Position updates are imperative (direct
// style/text mutation via rAF) so tracking the pointer never triggers a
// React re-render — only the low-frequency hover state does.
const Cursor = () => {
  const dotRef = useRef(null);
  const readoutRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const frame = useRef(null);
  // Lazy initializer runs once on mount, synchronously — no extra render
  // and no window access during a (nonexistent, this app has no SSR) server pass.
  const [enabled] = useState(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    return !coarsePointer && !reducedMotion;
  });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!enabled) return undefined;

    const paint = () => {
      frame.current = null;
      const { x, y } = target.current;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (readoutRef.current) {
        const px = String(Math.round(x)).padStart(4, "0");
        const py = String(Math.round(y)).padStart(4, "0");
        readoutRef.current.textContent = `X${px} Y${py}`;
      }
    };

    const handleMove = (event) => {
      target.current = { x: event.clientX, y: event.clientY };
      if (frame.current === null) {
        frame.current = requestAnimationFrame(paint);
      }
    };

    const handleOver = (event) => {
      setHovering(Boolean(event.target.closest?.(INTERACTIVE_SELECTOR)));
    };

    document.body.classList.add("cursor-none-custom");
    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("pointerover", handleOver);

    return () => {
      document.body.classList.remove("cursor-none-custom");
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerover", handleOver);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  const size = hovering ? 34 : 18;
  const stroke = hovering ? "#FF5A18" : "#EDE6DB";

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-100 -translate-x-1/2 -translate-y-1/2 will-change-transform"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        className="transition-[width,height] duration-150 ease-out"
      >
        <line x1="10" y1="0" x2="10" y2="7" stroke={stroke} strokeWidth="1" />
        <line x1="10" y1="13" x2="10" y2="20" stroke={stroke} strokeWidth="1" />
        <line x1="0" y1="10" x2="7" y2="10" stroke={stroke} strokeWidth="1" />
        <line x1="13" y1="10" x2="20" y2="10" stroke={stroke} strokeWidth="1" />
        <circle cx="10" cy="10" r="1" fill={stroke} />
      </svg>
      <span
        ref={readoutRef}
        className="absolute left-4 top-4 whitespace-nowrap font-mono text-[10px] tracking-wide text-bone/70"
      >
        X0000 Y0000
      </span>
    </div>
  );
};

export default Cursor;
