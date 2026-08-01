// Shared smooth-scroll helper that honors prefers-reduced-motion —
// scrollIntoView's `behavior` option isn't affected by the CSS
// scroll-behavior override, so this has to be checked explicitly.
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
}
