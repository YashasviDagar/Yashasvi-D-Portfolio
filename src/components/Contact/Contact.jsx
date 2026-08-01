import { useEffect, useRef, useState } from "react";

const EMAIL = "yashasvi2046@gmail.com";
const GITHUB_URL = "https://github.com/YashasviDagar";
const RESUME_URL =
  "https://drive.google.com/file/d/1ReRmyQoDxz6imVL8DRog1biIrZpn2tke/view?usp=sharing";

const HELP_TEXT = "commands: email, resume, github, whoami, clear, help";

// Small hand-written parser — no-arg commands only, on purpose.
function runCommand(command) {
  switch (command) {
    case "email":
      return EMAIL;
    case "resume":
      return RESUME_URL;
    case "github":
      return GITHUB_URL;
    case "whoami":
      return "yashasvi dagar — cse student at vit vellore. builds software, prints parts.";
    case "help":
      return HELP_TEXT;
    case "clear":
      return "__clear__";
    default:
      return `command not found: ${command}. try 'help'.`;
  }
}

const Terminal = () => {
  const [history, setHistory] = useState([
    { command: null, output: "type 'help' to see what this does." },
  ]);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const historyRef = useRef(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const command = value.trim().toLowerCase();
    if (!command) return;

    const output = runCommand(command);
    if (output === "__clear__") {
      setHistory([]);
    } else {
      setHistory((prev) => [...prev, { command, output }]);
    }
    setValue("");
  };

  const focusInput = () => {
    if (window.getSelection()?.toString()) return;
    inputRef.current?.focus();
  };

  return (
    <div
      onClick={focusInput}
      className="border border-bone/15 bg-ink-900 p-4 font-mono text-sm"
    >
      <div
        ref={historyRef}
        aria-live="polite"
        className="max-h-56 space-y-2 overflow-y-auto"
      >
        {history.map((entry, index) => (
          <div key={index}>
            {entry.command !== null && (
              <p className="text-bone">
                <span className="text-filament">visitor@yashasvi:~$</span>{" "}
                {entry.command}
              </p>
            )}
            {entry.output && (
              <p className="whitespace-pre-wrap text-slate">{entry.output}</p>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-2 flex items-center gap-2">
        <span className="text-filament">visitor@yashasvi:~$</span>
        <input
          ref={inputRef}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          autoComplete="off"
          spellCheck={false}
          aria-label="Terminal command input"
          className="flex-1 bg-transparent text-bone outline-none"
        />
      </form>
    </div>
  );
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard API unavailable — nothing to fall back to */
    }
  };

  return (
    <section id="contact" className="border-t border-bone/10 px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-mono text-2xl font-medium tracking-tight text-bone sm:text-3xl">
          contact
        </h2>

        <button
          type="button"
          onClick={handleCopy}
          className="mt-6 block font-mono text-lg text-bone transition-colors hover:text-filament"
        >
          {EMAIL}{" "}
          <span aria-live="polite" className="text-sm text-slate">
            {copied ? "copied" : "[copy]"}
          </span>
        </button>

        <div className="mt-8">
          <Terminal />
        </div>
      </div>
    </section>
  );
};

export default Contact;
