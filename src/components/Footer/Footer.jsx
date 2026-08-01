import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { scrollToId } from "../../utils/scroll";

const navLinks = [
  { id: "now", label: "now" },
  { id: "work", label: "work" },
  { id: "stack", label: "stack" },
  { id: "contact", label: "contact" },
];

const socialLinks = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/YashasviDagar" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yashasvidagar/",
  },
  {
    icon: FaInstagram,
    label: "iykykprints on Instagram",
    href: "https://www.instagram.com/iykykprints/",
  },
];

const handleScroll = (id) => (event) => {
  event.preventDefault();
  scrollToId(id);
};

const Footer = () => {
  return (
    <footer className="border-t border-bone/10 px-4 py-10 sm:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleScroll(link.id)}
              className="font-mono text-sm text-slate transition-colors hover:text-filament"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-5">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-lg text-slate transition-colors hover:text-filament"
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-slate">
          © {new Date().getFullYear()} Yashasvi Dagar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
