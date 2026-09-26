import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./terminal.css";

interface Line {
  command: string;
  output: string[];
}

const LINES: Line[] = [
  { command: "whoami", output: ["Nirbhay Pandey"] },
  { command: "focus", output: ["Software Development"] },
  { command: "stack", output: ["Java / Python / C++ / JavaScript / React"] },
  { command: "education", output: ["Chandigarh University — B.Tech CSE, 3rd year"] },
  { command: "current --status", output: ["Building projects. Sharpening DSA."] },
];

const TYPE_SPEED = 32;

export default function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [rendered, setRendered] = useState<{ command: string; output: string[]; done: boolean }[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");

  useEffect(() => {
    if (!isInView || lineIndex >= LINES.length) return;
    const target = LINES[lineIndex].command;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTypedCommand(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(interval);
        setTimeout(() => {
          setRendered((prev) => [...prev, { ...LINES[lineIndex], done: true }]);
          setTypedCommand("");
          setLineIndex((prev) => prev + 1);
        }, 220);
      }
    }, TYPE_SPEED);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, lineIndex]);

  return (
    <section className="section terminal-section">
      <div className="container">
        <span className="eyebrow">Interactive demo</span>
        <h2 className="terminal-heading">A terminal, mostly for show.</h2>

        <div ref={ref} className="terminal-window">
          <div className="terminal-bar">
            <span className="terminal-dot terminal-dot--red" />
            <span className="terminal-dot terminal-dot--yellow" />
            <span className="terminal-dot terminal-dot--green" />
            <span className="terminal-path">nirbhay@portfolio: ~</span>
          </div>
          <div className="terminal-body">
            {rendered.map((line, i) => (
              <div key={i} className="terminal-line">
                <p className="terminal-prompt">
                  <span className="terminal-symbol">$</span> {line.command}
                </p>
                {line.output.map((out, j) => (
                  <p key={j} className="terminal-output">
                    {out}
                  </p>
                ))}
              </div>
            ))}

            {lineIndex < LINES.length && (
              <p className="terminal-prompt">
                <span className="terminal-symbol">$</span> {typedCommand}
                <motion.span
                  className="terminal-cursor"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                />
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
