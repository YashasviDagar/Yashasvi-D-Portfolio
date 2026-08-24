// Project Section Logo's
import stupify from "./assets/work_logo/stupify.jpg";
import infinity from "./assets/work_logo/infinity.jpg";
import iykyk from "./assets/work_logo/iykyk.png";

export const earlierWork = [
  {
    id: 0,
    title: "iykykprints",
    description:
      "E-commerce storefront for my 3D printing business. Fixed catalog — customers buy what's listed, no custom order flow.",
    image: iykyk,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
    github: "",
    webapp: "https://iykykprints.vercel.app/",
  },

  {
    id: 1,
    title: "doodlydoo",
    description:
      "Real-time collaborative whiteboard — multiple people draw on the same canvas live. Private invite links gate who can join and edit a board.",
    image: null,
    tags: ["Yjs", "WebSocket", "PostgreSQL"],
    github: "",
    webapp: "",
  },

  {
    id: 2,
    title: "Stupify",
    description:
      "Notes, tasks, a Pomodoro timer, and a typing test — one study dashboard.",
    image: stupify,
    tags: ["React", "Tailwind CSS", "JavaScript", "HTML"],
    github: "https://github.com/YashasviDagar/Stupify",
    webapp: "https://stupify-lilac.vercel.app/",
  },

  {
    id: 3,
    title: "Infinity",
    description:
      "Product listings, category filters, and a cart. Frontend only, no backend.",
    image: infinity,
    tags: ["React", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/YashasviDagar/INFINITY",
    webapp: "",
  },
];
