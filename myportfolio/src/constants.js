// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's 


// Education Section Logo's
import kvsLogo from "./assets/education_logo/kvs.png";
import vitLogo from "./assets/education_logo/vit.png";
import chandramLogo from "./assets/education_logo/chandram.png";

// Project Section Logo's
import iykykLogo from "./assets/work_logo/iykyklogo_bg.png";
import stupifyLogo from "./assets/work_logo/stupify.png";
import infinityLogo from "./assets/work_logo/logo.png";


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      // { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

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
    desc: "Currently pursuing a Bachelor of Technology in Computer Science and Engineering with a specialization in Information Security at VIT Vellore. My coursework focuses on software development, data structures and algorithms, database management systems, computer networks, operating systems, cybersecurity, and information security. Through academic projects and self-driven learning, I continue to strengthen my problem-solving, programming, and full-stack development skills while exploring entrepreneurship and technology-driven solutions.",
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
    desc: "Completed secondary education under the CBSE curriculum, building a strong academic foundation across mathematics, science, and computer applications. Developed analytical and problem-solving skills through a rigorous academic environment while actively participating in school activities. My time at Kendriya Vidyalaya helped cultivate the discipline, curiosity, and learning mindset that continue to support my academic and professional growth.",
    degree: "CBSE (Class X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "IYKYK Prints",
    description:
      "A Shopify-based e-commerce brand focused on custom 3D-printed products. Responsible for website development, branding, product planning, pricing strategy, and marketing initiatives while preparing for the official launch.",
    image: iykykLogo,
    tags: ["Shopify", "E-commerce", "3D Printing", "Entrepreneurship"],
    github: "",
    webapp: "https://iykykprints.com",
  },

  {
    id: 1,
    title: "Stupify",
    description:
      "An educational platform that combines productivity and learning tools for students, including note-taking, task management, typing speed analysis, and Pomodoro-based study sessions.",
    image: stupifyLogo,
    tags: ["React JS", "Tailwind CSS", "JavaScript", "HTML"],
    github: "https://github.com/YashasviDagar/Stupify",
    webapp: "https://stupify-lilac.vercel.app/",
  },

  {
    id: 2,
    title: "Infinity",
    description:
      "A responsive e-commerce web application featuring product listings, category filtering, shopping cart functionality, and a modern user interface optimized for desktop and mobile devices.",
    image: infinityLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/YashasviDagar/INFINITY",
    webapp: "",
  },
];
