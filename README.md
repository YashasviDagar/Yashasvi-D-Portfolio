Yashasvi Dagar — Portfolio Website

A modern, responsive personal portfolio website built with React and Tailwind CSS, showcasing my background, skills, projects, and education, with a contact form for direct outreach.



✨ Features

Animated Hero/About Section — typing animation (react-type-animation) cycling through roles, with a 3D tilt profile image (react-parallax-tilt)
Skills Showcase — categorized tech stack (Frontend, Backend, Languages, Tools) with logos, displayed in responsive tilt cards
Projects Section — interactive project cards that open a detailed modal with description, tags, and links to live demo / GitHub repo
Education Timeline — alternating left-right timeline layout with school logos, grades, and descriptions
Contact Form — integrated with EmailJS for direct email submissions, with toast notifications for success/error feedback
Responsive Navbar — sticky navbar with scroll-based styling, smooth scroll navigation, and mobile hamburger menu
Footer — quick navigation links and social media icons (GitHub, LinkedIn, Instagram)
Custom Background Effects — animated blurred blob and grid background for a modern aesthetic


🛠️ Tech Stack

React (Vite)
Tailwind CSS (v4, with custom theme animations & clip-paths)
EmailJS — contact form email delivery
react-toastify — toast notifications
react-type-animation — typing text effect
react-parallax-tilt — 3D tilt hover effects
react-icons — icon library

📁 Project Structure

src/
├── assets/
│   ├── tech_logo/        # Skill icons
│   ├── education_logo/   # School logos
│   ├── work_logo/        # Project images
│   └── profile2.png       # Profile picture
├── components/
│   ├── About/About.jsx
│   ├── Skills/Skills.jsx
│   ├── Experience/Experience.jsx
│   ├── Work/Work.jsx
│   ├── Education/Education.jsx
│   ├── Contact/Contact.jsx
│   ├── Footer/Footer.jsx
│   ├── Navbar/Navbar.jsx
│   └── BlurBlob.jsx
├── constants/             # Skills, education, and project data
├── App.jsx
├── App.css
└── main.jsx

🚀 Getting Started

->Prerequisites
Node.js (v16 or later)
npm


🪛 Installation

bashgit clone <your-repo-url>
cd myportfolio
npm install

🖼️ Environment Setup (EmailJS)

The Contact form uses EmailJS. Update the service ID, template ID, and public key in src/components/Contact/Contact.jsx:

jsemailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")




🏃‍♂️‍➡️ Run Locally

bashnpm run dev

Build for Production

bashnpm run build

📬 Contact


GitHub: YashasviDagar
LinkedIn: yashasvidagar
Instagram: @iykykprints


📄 License

This project is open source and available under the MIT License.