import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./journey.css";

const MILESTONES = [
  {
    year: "2024",
    title: "Chandigarh University",
    detail: "Began B.Tech in Computer Science Engineering.",
  },
  {
    year: "2025",
    title: "Core foundations",
    detail: "Data structures, algorithms and object-oriented programming.",
  },
  {
    year: "2026",
    title: "3rd year · 5th semester",
    detail: "CGPA 7.51. Focused on full-stack development and DSA depth.",
  },
];

const FOCUS = ["DSA", "Development", "Software Engineering", "Data Analytics"];

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="section journey">
      <div className="container">
        <div className="journey-header">
          <span className="eyebrow">Education</span>
          <h2 className="journey-title">The journey so far.</h2>
        </div>

        <div ref={ref} className="journey-timeline">
          <div className="journey-line-track" />
          <motion.div className="journey-line-fill" style={{ height: lineHeight }} />

          {MILESTONES.map((m) => (
            <div key={m.year} className="journey-item">
              <span className="journey-dot" />
              <span className="journey-year">{m.year}</span>
              <div>
                <h3>{m.title}</h3>
                <p>{m.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="journey-focus">
          <span className="eyebrow">Academic focus</span>
          <div className="journey-focus-list">
            {FOCUS.map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
