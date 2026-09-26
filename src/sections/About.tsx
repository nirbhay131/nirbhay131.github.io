import { motion } from "framer-motion";
import RevealParagraph from "../components/RevealParagraph";
import "./about.css";

const META = [
  { label: "NAME", value: "Nirbhay Pandey" },
  { label: "FIELD", value: "Computer Science" },
  { label: "EDUCATION", value: "Chandigarh University" },
  { label: "FOCUS", value: "Software Development" },
  { label: "STATUS", value: "Building" },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-lead">
          <span className="eyebrow">About</span>
          <h2 className="about-statement">
            I am a Computer Science student focused on turning ideas into
            useful software.
          </h2>
        </div>

        <div className="about-body">
          <RevealParagraph
            className="about-paragraph"
            text="I'm currently in my third year of B.Tech Computer Science Engineering at Chandigarh University, working through the fifth semester. My focus sits at the intersection of software development and data structures & algorithms — I care about writing code that works, and understanding why it works. Outside of coursework, I build practical projects that force me to apply what I'm learning: full-stack applications, data-driven dashboards, and systems that model real problems in agriculture, career planning, food coordination and traffic flow."
          />

          <motion.div
            className="about-meta"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {META.map((item) => (
              <div key={item.label} className="about-meta-row">
                <span className="about-meta-label">{item.label}</span>
                <span className="about-meta-value">{item.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
