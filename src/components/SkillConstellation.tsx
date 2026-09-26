import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import "./skillConstellation.css";

export default function SkillConstellation() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="constellation" role="list" aria-label="Technical skill categories">
      <div className="constellation-axis" aria-hidden="true" />
      {skillCategories.map((cat, i) => {
        const isActive = active === cat.id;
        const angleSpread = 130;
        const startAngle = -angleSpread / 2;
        const step = cat.skills.length > 1 ? angleSpread / (cat.skills.length - 1) : 0;

        return (
          <div
            key={cat.id}
            role="listitem"
            className={`constellation-hub ${isActive ? "constellation-hub--active" : ""}`}
            onMouseEnter={() => setActive(cat.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(cat.id)}
            onBlur={() => setActive(null)}
            tabIndex={0}
          >
            <span className="constellation-hub-index">0{i + 1}</span>
            <span className="constellation-hub-dot" />
            <span className="constellation-hub-label">{cat.label}</span>
            <p className="constellation-hub-mobile-list">{cat.skills.join(" · ")}</p>

            <AnimatePresence>
              {isActive && (
                <>
                  <motion.p
                    className="constellation-desc"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25 }}
                  >
                    {cat.description}
                  </motion.p>
                  <div className="constellation-satellites">
                    {cat.skills.map((skill, si) => {
                      const angle = startAngle + step * si;
                      return (
                        <motion.span
                          key={skill}
                          className="constellation-satellite"
                          style={{ "--angle": `${angle}deg` } as React.CSSProperties}
                          initial={{ opacity: 0, scale: 0.6 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.6 }}
                          transition={{ duration: 0.3, delay: si * 0.03, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {skill}
                        </motion.span>
                      );
                    })}
                  </div>
                </>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
