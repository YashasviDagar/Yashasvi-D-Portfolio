const ENTRIES = [
  { name: "VIT Vellore — B.Tech CSE (Information Security)", meta: "2024–2028 · 8.68 CGPA" },
  { name: "Class XII (CBSE)", meta: "2022–2024 · 85.2%" },
];

const Education = () => {
  return (
    <section id="education" className="border-t border-bone/10 px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-mono text-2xl font-medium tracking-tight text-bone sm:text-3xl">
          education
        </h2>
        <ul className="mt-8">
          {ENTRIES.map((entry) => (
            <li
              key={entry.name}
              className="flex items-baseline gap-2 py-1 font-mono text-sm text-bone"
            >
              <span className="shrink-0">{entry.name}</span>
              <span
                aria-hidden="true"
                className="mb-0.75 flex-1 border-b border-dotted border-bone/25"
              />
              <span className="shrink-0 text-right text-slate">{entry.meta}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
