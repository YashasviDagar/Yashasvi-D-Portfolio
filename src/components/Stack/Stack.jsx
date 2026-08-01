const SHIPPED = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite", "Git", "GitHub"];

const LEARNING = [
  "Node.js",
  "Express",
  "PostgreSQL",
  "WebSockets",
  "JWT",
  "bcrypt",
  "TypeScript",
];

const Column = ({ label, items, accent = false }) => (
  <div>
    <h2 className="font-mono text-sm text-slate">{label}</h2>
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full border px-3 py-1.5 font-mono text-sm text-bone ${
            accent ? "border-filament/40" : "border-bone/15"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Stack = () => {
  return (
    <section id="stack" className="mx-auto max-w-4xl px-4 py-24 sm:px-8">
      <div className="grid gap-12 sm:grid-cols-2">
        <Column label="shipped with" items={SHIPPED} />
        <Column label="learning" items={LEARNING} accent />
      </div>
    </section>
  );
};

export default Stack;
