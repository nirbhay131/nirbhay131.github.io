import { motion } from "framer-motion";
import "./buildingToward.css";

const CONCEPTS = ["DSA", "Full Stack", "Product Development", "Problem Solving", "Startups"];

export default function BuildingToward() {
  return (
    <section className="section building-toward">
      <div className="container building-toward-inner">
        <span className="eyebrow">Building toward</span>
        <motion.h2
          className="building-toward-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Software Engineer.
        </motion.h2>

        <div className="building-toward-concepts">
          {CONCEPTS.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
