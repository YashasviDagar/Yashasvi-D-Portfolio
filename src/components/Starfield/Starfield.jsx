  import { useEffect, useRef, useState } from "react";

  const PARTICLE_COUNT = 70;
  const BASE_SPEED = 0.15; // ambient drift speed, px/frame
  const SCROLL_FORCE = 0.6; // how strongly scroll velocity pushes particles
  const SCROLL_DECAY = 0.92; // per-frame decay of the scroll "kick"
  const STREAK_THRESHOLD = 4; // |kick| above this switches a dot into a streak

  // Bone/cream matches the site's existing palette; the cool blue/lavender
  // tones borrow the reference image's shooting-star colors without
  // clashing with the ink-dark background.
  const COLORS = ["#EDE6DB", "#8FA8C7", "#C9A6E0", "#6E8CB0"];

  // Ambient background detail: ships behind all real content (negative
  // z-index), never intercepts pointer events, and never tracks the
  // cursor. Idle state is a slow-drifting, twinkling particle field;
  // scroll velocity is the only thing that agitates it, temporarily
  // stretching particles into streaks before decaying back to calm.
  const Starfield = () => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const frame = useRef(null);
    const scrollVel = useRef(0);
    const lastScrollY = useRef(0);
    const size = useRef({ w: 0, h: 0 });

    const [isTouch] = useState(() => window.matchMedia("(pointer: coarse)").matches);
    const [reducedMotion] = useState(
      () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );

    useEffect(() => {
      if (isTouch) return undefined;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        size.current = { w: window.innerWidth, h: window.innerHeight };
        canvas.width = size.current.w * dpr;
        canvas.height = size.current.h * dpr;
        canvas.style.width = `${size.current.w}px`;
        canvas.style.height = `${size.current.h}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };
      resize();
      window.addEventListener("resize", resize);

      particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * size.current.w,
        y: Math.random() * size.current.h,
        vx: (Math.random() - 0.5) * BASE_SPEED,
        vy: (Math.random() - 0.5) * BASE_SPEED,
        r: Math.random() * 1.4 + 0.6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        twinklePhase: Math.random() * Math.PI * 2,
      }));

      // Reduced motion: one static frame, no rAF loop, no scroll listener —
      // genuinely frozen, matching the original Starfield's behavior.
      if (reducedMotion) {
        ctx.clearRect(0, 0, size.current.w, size.current.h);
        particles.current.forEach((p) => {
          ctx.beginPath();
          ctx.fillStyle = p.color;
          ctx.globalAlpha = 0.45;
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.globalAlpha = 1;
        return () => window.removeEventListener("resize", resize);
      }

      const handleScroll = () => {
        const dy = window.scrollY - lastScrollY.current;
        lastScrollY.current = window.scrollY;
        scrollVel.current = Math.max(
          -40,
          Math.min(40, scrollVel.current + dy * SCROLL_FORCE)
        );
      };
      window.addEventListener("scroll", handleScroll, { passive: true });

      let t = 0;
      const paint = () => {
        t += 0.016;
        scrollVel.current *= SCROLL_DECAY;
        const kick = scrollVel.current;
        const { w, h } = size.current;

        ctx.clearRect(0, 0, w, h);

        particles.current.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy + kick * 0.05;

          // wrap around edges so the field never runs dry
          if (p.x < -10) p.x = w + 10;
          if (p.x > w + 10) p.x = -10;
          if (p.y < -10) p.y = h + 10;
          if (p.y > h + 10) p.y = -10;

          const speed = Math.abs(kick);
          const twinkle = 0.5 + 0.5 * Math.sin(t * 2 + p.twinklePhase);

          if (speed > STREAK_THRESHOLD) {
            // Shooting-star streak: length and opacity scale with scroll speed.
            const trail = Math.min(40, speed * 1.5);
            const tailX = p.x - p.vx * trail;
            const tailY = p.y - (p.vy + kick * 0.05) * trail;
            const grad = ctx.createLinearGradient(p.x, p.y, tailX, tailY);
            grad.addColorStop(0, p.color);
            grad.addColorStop(1, "transparent");
            ctx.strokeStyle = grad;
            ctx.lineWidth = p.r;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(tailX, tailY);
            ctx.stroke();
          } else {
            // Calm ambient dot with a gentle twinkle.
            ctx.beginPath();
            ctx.fillStyle = p.color;
            ctx.globalAlpha = 0.25 + twinkle * 0.35;
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
          }
        });

        frame.current = requestAnimationFrame(paint);
      };
      frame.current = requestAnimationFrame(paint);

      return () => {
        window.removeEventListener("resize", resize);
        window.removeEventListener("scroll", handleScroll);
        if (frame.current !== null) cancelAnimationFrame(frame.current);
      };
    }, [isTouch, reducedMotion]);

    if (isTouch) return null;

    return (
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 -z-10 opacity-60"
      />
    );
  };

  export default Starfield;
