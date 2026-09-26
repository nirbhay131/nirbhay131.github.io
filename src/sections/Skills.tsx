import { motion } from "framer-motion";
import SkillConstellation from "../components/SkillConstellation";
import { skillCategories } from "../data/skills";
import "./skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills-header">
          <span className="eyebrow">Technical Identity</span>
          <h2 className="skills-title">What I build with.</h2>
          <p className="skills-sub">
            Hover a category to see what sits inside it. Depth here means
            range across languages, tooling and fundamentals — not a
            proficiency score.
          </p>
        </div>

        <SkillConstellation />

        <div className="skills-breakdown">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              className="skills-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="skills-row-index">0{i + 1}</span>
              <span className="skills-row-label">{cat.label}</span>
              <div className="skills-row-chips">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skills-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
