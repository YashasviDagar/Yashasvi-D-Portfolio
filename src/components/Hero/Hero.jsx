import Sprite from "../Sprite/Sprite";

const RESUME_URL =
  "https://drive.google.com/file/d/1ReRmyQoDxz6imVL8DRog1biIrZpn2tke/view?usp=sharing";

const scrollToWork = (event) => {
  event.preventDefault();
  document.getElementById("iykyk")?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex min-h-[85vh] flex-col-reverse items-center justify-center gap-12 px-4 py-24 sm:px-8 lg:flex-row lg:justify-between lg:gap-16 lg:py-32"
    >
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-bone sm:text-5xl lg:text-6xl">
          i build things, then i print the parts.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate">
          3rd-year CSE at VIT Vellore. Running iykykprints on the side,
          building doodlydoo right now.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
          <a
            href="#iykyk"
            onClick={scrollToWork}
            className="rounded-full border border-filament px-6 py-3 font-mono text-sm text-bone transition-colors hover:bg-filament hover:text-ink-950"
          >
            see the work
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-slate transition-colors hover:text-filament"
          >
            resume ↗
          </a>
        </div>
      </div>

      <Sprite />
    </section>
  );
};

export default Hero;
