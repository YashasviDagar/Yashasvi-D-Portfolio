import { useEffect, useRef, useState } from "react";

const FRAMES = {
  idleOpen: "/sprite/idle-0.png",
  idleBlink: "/sprite/idle-1.png",
  left: "/sprite/look-left.png",
  right: "/sprite/look-right.png",
  up: "/sprite/look-up.png",
  down: "/sprite/look-down.png",
};

const BLINK_INTERVAL_MS = 600;
const DEAD_ZONE_PX = 70;

// Hand-authored 64x64 pixel-art sprite. Idle blink/bob loop runs on a
// timer; look-direction is a discrete snap (never smooth rotation) driven
// by pointer position relative to the sprite's own center.
const Sprite = () => {
  const wrapRef = useRef(null);
  const frame = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });
  // Lazy initializer runs once on mount, synchronously — no extra render.
  const [animated] = useState(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    return !coarsePointer && !reducedMotion;
  });
  const [direction, setDirection] = useState("center");
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    if (!animated) return undefined;
    const id = setInterval(() => setBlinking((v) => !v), BLINK_INTERVAL_MS);
    return () => clearInterval(id);
  }, [animated]);

  useEffect(() => {
    if (!animated) return undefined;

    // Rect is re-measured fresh on every snap rather than cached, since a
    // cached center would go stale across font-load reflows or the bob
    // animation's transform — this stays cheap because it's already
    // gated to at most once per animation frame. Pointer position is read
    // from a ref at execution time (not captured in the scheduling
    // closure), so a burst of events before one frame paints still ends
    // up using the latest position rather than the first.
    const snap = () => {
      frame.current = null;
      const rect = wrapRef.current?.getBoundingClientRect();
      if (!rect) return;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = pointer.current.x - centerX;
      const dy = pointer.current.y - centerY;
      if (Math.abs(dx) < DEAD_ZONE_PX && Math.abs(dy) < DEAD_ZONE_PX) {
        setDirection("center");
      } else if (Math.abs(dx) >= Math.abs(dy)) {
        setDirection(dx < 0 ? "left" : "right");
      } else {
        setDirection(dy < 0 ? "up" : "down");
      }
    };

    const handleMove = (event) => {
      pointer.current = { x: event.clientX, y: event.clientY };
      if (frame.current === null) {
        frame.current = requestAnimationFrame(snap);
      }
    };

    window.addEventListener("pointermove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [animated]);

  let src = FRAMES.idleOpen;
  if (animated) {
    if (direction === "left") src = FRAMES.left;
    else if (direction === "right") src = FRAMES.right;
    else if (direction === "up") src = FRAMES.up;
    else if (direction === "down") src = FRAMES.down;
    else src = blinking ? FRAMES.idleBlink : FRAMES.idleOpen;
  }

  return (
    <div
      ref={wrapRef}
      className={`h-64 w-64 shrink-0 sm:h-80 sm:w-80 lg:h-96 lg:w-96 ${
        animated && direction === "center" ? "animate-sprite-bob" : ""
      }`}
    >
      <img
        src={src}
        alt="Pixel-art sprite of Yashasvi Dagar"
        width={64}
        height={64}
        draggable={false}
        fetchPriority="high"
        className="pixelated h-full w-full select-none"
      />
    </div>
  );
};

export default Sprite;
