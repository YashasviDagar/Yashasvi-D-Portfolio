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
              className="flex items-baseline justify-between gap-4 py-1 font-mono text-sm text-bone"
            >
              <span>{entry.name}</span>
              <span className="text-right text-slate">{entry.meta}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
