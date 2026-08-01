import Sprite from "../Sprite/Sprite";
import { scrollToId } from "../../utils/scroll";

const RESUME_URL =
  "https://drive.google.com/file/d/1ReRmyQoDxz6imVL8DRog1biIrZpn2tke/view?usp=sharing";

const scrollToWork = (event) => {
  event.preventDefault();
  scrollToId("work");
};

const Hero = () => {
  return (
    <section id="hero" className="px-4 pt-28 pb-12 sm:px-8 lg:pt-32 lg:pb-16">
      <div className="mx-auto flex max-w-3xl flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:gap-10">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-bone sm:text-5xl lg:text-6xl">
            i write the code, then i ship to chaos.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            3rd-year CSE at VIT Vellore. Running iykykprints on the side,
            building doodlydoo right now.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            <a
              href="#work"
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
      </div>
    </section>
  );
};

export default Hero;
