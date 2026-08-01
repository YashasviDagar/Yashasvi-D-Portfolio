const SHIPPED = [
  { name: "html", used: "stupify, infinity" },
  { name: "css", used: "stupify, infinity" },
  { name: "javascript", used: "stupify, infinity" },
  { name: "react", used: "stupify, infinity" },
  { name: "tailwind css", used: "stupify, infinity, this site" },
  { name: "vite", used: "this site" },
  { name: "git", used: "every project" },
  { name: "github", used: "every project" },
  { name: "c++", used: "competitive programming" },
  { name: "java", used: "competitive programming" },
  { name: "python", used: "competitive programming" },
];

const LEARNING = [
  "node.js",
  "express",
  "postgresql",
  "websockets",
  "jwt",
  "bcrypt",
  "typescript",
  "next.js",
  "mongodb",
];

const COMPETITIVE = [
  {
    platform: "leetcode",
    detail: "1687 max · 215+ solved",
    href: "https://leetcode.com/u/dagaryashasvi/",
  },
  {
    platform: "codeforces",
    detail: "pupil · 1207 max",
    href: "https://codeforces.com/profile/btech1006320",
  },
];

const Leader = () => (
  <span aria-hidden="true" className="mb-0.75 flex-1 border-b border-dotted border-bone/25" />
);

const ShippedRow = ({ name, used }) => (
  <li
    tabIndex={0}
    className="group flex items-baseline gap-2 py-1 font-mono text-sm text-bone"
  >
    <span className="shrink-0">{name}</span>
    <Leader />
    <span className="shrink-0 text-right text-slate opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
      {used}
    </span>
  </li>
);

const CompetitiveRow = ({ platform, detail, href }) => {
  const content = (
    <>
      <span className="shrink-0">{platform}</span>
      <Leader />
      <span className="shrink-0 text-right text-slate">{detail}</span>
    </>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-baseline gap-2 py-1 font-mono text-sm text-bone transition-colors hover:text-filament"
        >
          {content}
        </a>
      ) : (
        <div className="flex items-baseline gap-2 py-1 font-mono text-sm text-bone">
          {content}
        </div>
      )}
    </li>
  );
};

const Stack = () => {
  return (
    <section id="stack" className="border-t border-bone/10 px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-mono text-2xl font-medium tracking-tight text-bone sm:text-3xl">
          stack
        </h2>

        <div className="mt-10 grid gap-12 sm:grid-cols-2">
          <div>
            <p className="font-mono text-sm text-slate">shipped</p>
            <ul className="mt-3">
              {SHIPPED.map((item) => (
                <ShippedRow key={item.name} {...item} />
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-sm text-slate">learning</p>
            <ul className="mt-3">
              {LEARNING.map((item) => (
                <li key={item} className="py-1 font-mono text-sm text-bone">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14">
          <p className="font-mono text-sm text-slate">competitive programming</p>
          <ul className="mt-3">
            {COMPETITIVE.map((item) => (
              <CompetitiveRow key={item.platform} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Stack;
