import Sprite from "../Sprite/Sprite";
import { scrollToId } from "../../utils/scroll";

const RESUME_URL =
  "https://drive.google.com/file/d/1rfUudAVnv5Appq8H_bznJQR-GxDdN5I9/view?usp=drive_link";

const scrollToWork = (event) => {
  event.preventDefault();
  scrollToId("work");
};

const Hero = () => {
  return (
    <section id="hero" className="px-4 pt-20 pb-8 sm:px-8 lg:pt-24 lg:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-center gap-4 lg:flex-row lg:gap-6">
        <div className="max-w-3xl text-center lg:text-left">
          <h1 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-bone sm:text-4xl lg:text-6xl">
            i write the
            <br />
            code,
            <br />
            then i ship
            <br />
            to chaos.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
            CSE @ VIT Vellore.
            <br className="hidden sm:block" />
            Turned a 3D printer into a live business. Now building real-time
            applications from scratch.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
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