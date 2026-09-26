import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../data/projects";
import CareerSphereVisual from "./visuals/CareerSphereVisual";
import CropPulseVisual from "./visuals/CropPulseVisual";
import FoodWasteVisual from "./visuals/FoodWasteVisual";
import TrafficVisual from "./visuals/TrafficVisual";
import "./projectCaseStudy.css";

const VISUALS: Record<string, React.ComponentType> = {
  careersphere: CareerSphereVisual,
  croppulse: CropPulseVisual,
  "food-waste": FoodWasteVisual,
  "traffic-lights": TrafficVisual,
};

interface ProjectCaseStudyProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectCaseStudy({ project, onClose }: ProjectCaseStudyProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const Visual = project ? VISUALS[project.id] : null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="case-study"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} case study`}
          initial={{ clipPath: "circle(0% at 90% 10%)" }}
          animate={{ clipPath: "circle(150% at 90% 10%)" }}
          exit={{ clipPath: "circle(0% at 90% 10%)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="case-study-inner">
            <button className="case-study-close" onClick={onClose} data-cursor="button" aria-label="Close case study">
              Close ✕
            </button>

            <div className="case-study-head">
              <span className="eyebrow">{project.category}</span>
              <h2>{project.name}</h2>
              <p className="case-study-tagline">{project.tagline}</p>
            </div>

            <div className="case-study-grid">
              <div className="case-study-copy">
                <CaseSection title="The idea" body={project.idea} />
                <CaseSection title="The problem" body={project.problem} />
                <CaseSection title="The approach" body={project.approach} />

                <div className="case-study-block">
                  <h3>Key features</h3>
                  <ul>
                    {project.features.map((f) => (
                      <li key={f.title}>
                        <strong>{f.title}.</strong> {f.description}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="case-study-block">
                  <h3>Technology</h3>
                  <div className="case-study-tech">
                    {project.technologies.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                <CaseSection title="What I learned" body={project.learned} />
              </div>

              <div className="case-study-visual">
                <span className="eyebrow">Concept interface</span>
                <div className="case-study-visual-frame">{Visual && <Visual />}</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CaseSection({ title, body }: { title: string; body: string }) {
  return (
    <div className="case-study-block">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
