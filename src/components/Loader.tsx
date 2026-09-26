import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./loader.css";

interface LoaderProps {
  onDone: () => void;
}

export default function Loader({ onDone }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const duration = 2200;
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setExiting(true), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!exiting) return;
    const t = setTimeout(onDone, 700);
    return () => clearTimeout(t);
  }, [exiting, onDone]);

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="loader"
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="loader-grain" />
          <div className="loader-rings" aria-hidden="true">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
          </div>

          <div className="loader-center">
            <motion.h1
              className="loader-name"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              NIRBHAY
            </motion.h1>

            <div className="loader-progress">
              <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
                <circle cx="60" cy="60" r="54" className="track" />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  className="fill"
                  style={{
                    strokeDasharray: circumference,
                    strokeDashoffset: offset,
                  }}
                />
              </svg>
              <span className="loader-percent">{String(progress).padStart(2, "0")}</span>
            </div>

            <p className="loader-caption">COMPUTER SCIENCE ENGINEERING</p>
          </div>

          <button
            className="loader-skip"
            onClick={() => setExiting(true)}
            aria-label="Skip loading animation"
          >
            SKIP
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
