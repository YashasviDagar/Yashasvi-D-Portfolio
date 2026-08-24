const SKILL_GROUPS = [
  {
    label: "languages",
    items: [
      { name: "javascript", used: "stupify, infinity" },
      { name: "typescript", used: "" },
      { name: "c++", used: "competitive programming" },
      { name: "java", used: "competitive programming" },
      { name: "python", used: "competitive programming" },
    ],
  },
  {
    label: "frontend",
    items: [
      { name: "html", used: "" },
      { name: "css", used: "" },
      { name: "react", used: "stupify, infinity, iykykprints" },
      { name: "tailwind css", used: "stupify, infinity, this site" },
      { name: "next.js", used: "" },
    ],
  },
  {
    label: "backend",
    items: [
      { name: "node.js", used: "" },
      { name: "express", used: "" },
      { name: "websockets", used: "doodlydoo" },
      { name: "yjs", used: "doodlydoo" },
      { name: "jwt", used: "" },
      { name: "bcrypt", used: "" },
    ],
  },
  {
    label: "databases / tools",
    items: [
      { name: "postgresql", used: "doodlydoo" },
      { name: "mongodb", used: "" },
      { name: "git", used: "every project" },
      { name: "github", used: "every project" },
      { name: "vite", used: "this site" },
      { name: "vercel", used: "iykykprints, this site" },
    ],
  },
];

const COMPETITIVE = [
  {
    platform: "leetcode",
    detail: "1687 max · 300+ solved",
    href: "https://leetcode.com/u/dagaryashasvi/",
  },
  {
    platform: "codeforces",
    detail: "pupil · 1207 max",
    href: "https://codeforces.com/profile/btech1006320",
  },
];

const SkillRow = ({ name, used }) => (
  <li
    tabIndex={0}
    className="group flex items-baseline justify-between gap-4 py-1 font-mono text-sm text-bone"
  >
    <span>{name}</span>
    <span className="text-right text-slate opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
      {used}
    </span>
  </li>
);

const CompetitiveRow = ({ platform, detail, href }) => {
  const content = (
    <>
      <span>{platform}</span>
      <span className="text-right text-slate">{detail}</span>
    </>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-baseline justify-between gap-4 py-1 font-mono text-sm text-bone transition-colors hover:text-filament"
        >
          {content}
        </a>
      ) : (
        <div className="flex items-baseline justify-between gap-4 py-1 font-mono text-sm text-bone">
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
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-sm text-slate">{group.label}</p>
              <ul className="mt-3">
                {group.items.map((item) => (
                  <SkillRow key={item.name} {...item} />
                ))}
              </ul>
            </div>
          ))}
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
