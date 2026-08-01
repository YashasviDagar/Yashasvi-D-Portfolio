import { earlierWork } from "../../constants";

const EarlierWork = () => {
  return (
    <section id="work" className="border-t border-bone/10 px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-mono text-2xl font-medium tracking-tight text-bone sm:text-3xl">
          earlier work
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {earlierWork.map((project) => (
            <article key={project.id} className="border border-bone/10 bg-ink-900">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-mono text-lg text-bone">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-slate">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-5 font-mono text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bone transition-colors hover:text-filament"
                  >
                    code ↗
                  </a>
                  {project.webapp && (
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bone transition-colors hover:text-filament"
                    >
                      live ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarlierWork;
