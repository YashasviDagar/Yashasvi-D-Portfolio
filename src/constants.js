// Experience Section Logo's


// Education Section Logo's
import kvsLogo from "./assets/education_logo/kvs.png";
import vitLogo from "./assets/education_logo/vit.png";
import chandramLogo from "./assets/education_logo/chandram.png";

// Project Section Logo's
import iykyk from "./assets/work_logo/iykyk.png";
import stupify from "./assets/work_logo/stupify.png";
import infinity from "./assets/work_logo/infinity.png";


export const experiences = [
  // {
  //   id: 0,
  //   img: typeof webverseLogo !== "undefined" ? webverseLogo : null,
  //   role: "Fullstack Developer",
  //   company: "Webverse Digital",
  //   date: "April 2024 - Present",
  //   desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
  //   skills: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "React JS",
  //     "TypeScript",
  //     "Node JS",
  //     "Tailwind CSS",
  //     "MongoDb",
  //     "Redux",
  //     " Next Js",
  //   ],
  // },
];

export const education = [
  {
    id: 0,
    img: vitLogo,
    school: "VIT Vellore",
    date: "July 2024 - May 2028",
    grade: "8.68 CGPA",
    desc: "Currently pursuing a B.Tech in Computer Science and Engineering with a specialization in Information Security at VIT Vellore, maintaining a CGPA of 8.68. My interests span software development, entrepreneurship , full-stack web development, and cybersecurity. As a Senior Core Member of SAE-VIT, I have collaborated with my team to organize and manage events during VIT's flagship festivals, Gravitas and Riviera, strengthening my leadership, teamwork, and event coordination skills. Alongside academics, I am building IYKYK Prints, a startup focused on custom 3D-printed products, where I lead product development, branding, and e-commerce initiatives.",
    degree: "B.Tech Computer Science and Engineering (Information Security)",
  },
  {
    id: 1,
    img: chandramLogo,
    school: "Chand Ram Public Senior Secondary School",
    date: "2022 - 2024",
    grade: "85.2%",
    desc: "Completed Senior Secondary Education (Class XII) with Physics, Chemistry, and Mathematics (PCM). Developed a strong foundation in analytical thinking, problem-solving, and quantitative reasoning through coursework in mathematics and the sciences. Alongside academics, I cultivated an interest in technology and programming, which motivated me to pursue Computer Science and Engineering at the university level.",
    degree: "CBSE (Class XII) - Physics, Chemistry & Mathematics (PCM)",
  },
  {
    id: 2,
    img: kvsLogo,
    school: "Kendriya Vidyalaya Moradabad",
    date: "2018 - 2022",
    grade: "95%",
    desc: "Completed secondary education under the CBSE curriculum with an overall score of 95%, including a perfect score of 100% in Mathematics. Developed strong analytical, logical reasoning, and problem-solving skills through a rigorous academic environment. Actively participated in English and Hindi speech competitions and received recognition for public speaking achievements, while also contributing by hosting multiple school events, enhancing my public speaking, leadership, and event management abilities from an early stage.",
    degree: "CBSE (Class X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "iykyk Prints",
    description:
      "A Shopify-based e-commerce brand focused on custom 3D-printed products. Responsible for website development, branding, product planning, pricing strategy, and marketing initiatives while preparing for the official launch.",
    image: iykyk,
    tags: ["Entrepreneurship", "Shopify", "E-commerce", "3D Printing"],
    github: "",
    webapp: "https://iykykprints.com",
  },

  {
    id: 1,
    title: "Stupify",
    description:
      "An educational platform that combines productivity and learning tools for students, including note-taking, task management, typing speed analysis, and Pomodoro-based study sessions.",
    image: stupify,
    tags: ["React JS", "Tailwind CSS", "JavaScript", "HTML"],
    github: "https://github.com/YashasviDagar/Stupify",
    webapp: "https://stupify-lilac.vercel.app/",
  },

  {
    id: 2,
    title: "Infinity",
    description:
      "A responsive e-commerce web application featuring product listings, category filtering, shopping cart functionality, and a modern user interface optimized for desktop and mobile devices.",
    image: infinity,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/YashasviDagar/INFINITY",
    webapp: "",
  },
];
