import { useEffect, useRef, useState } from "react";
import { scrollToId } from "../../utils/scroll";

const links = [
  { id: "work", label: "work" },
  { id: "stack", label: "stack" },
  { id: "contact", label: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const observerRef = useRef(null);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observerRef.current.observe(section));
    return () => observerRef.current?.disconnect();
  }, []);

  const handleClick = (id) => (event) => {
    event.preventDefault();
    scrollToId(id);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-bone/10 bg-ink-950/95">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-4 sm:px-8"
      >
        <a
          href="#top"
          onClick={handleClick("top")}
          className="flex shrink-0 items-baseline gap-2 opacity-90 transition-opacity hover:opacity-100"
        >
          <img
            src="/sprite/head-icon.png"
            alt=""
            width={24}
            height={24}
            className="pixelated h-12 w-12"
          />
          <span className="font-mono text-sm tracking-tight text-bone">
            yashasvi<span className="hidden sm:inline"> dagar</span>
          </span>
        </a>

        <ul className="flex min-w-0 gap-5 overflow-x-auto scrollbar-none font-mono text-sm text-slate">
          {links.map((link) => (
            <li key={link.id} className="shrink-0">
              <a
                href={`#${link.id}`}
                onClick={handleClick(link.id)}
                aria-current={active === link.id ? "true" : undefined}
                className={`transition-colors hover:text-filament ${
                  active === link.id ? "text-filament" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
