import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { projects, type Project } from "../data/projects";
import { useIsDesktop } from "../hooks/useIsDesktop";
import { useMousePosition } from "../hooks/useMousePosition";
import CareerSphereVisual from "../components/visuals/CareerSphereVisual";
import CropPulseVisual from "../components/visuals/CropPulseVisual";
import FoodWasteVisual from "../components/visuals/FoodWasteVisual";
import TrafficVisual from "../components/visuals/TrafficVisual";
import ProjectCaseStudy from "../components/ProjectCaseStudy";
import "./work.css";

const VISUALS: Record<string, React.ComponentType> = {
  careersphere: CareerSphereVisual,
  croppulse: CropPulseVisual,
  "food-waste": FoodWasteVisual,
  "traffic-lights": TrafficVisual,
};

export default function Work() {
  const isDesktop = useIsDesktop();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="section work">
      <div className="container work-header">
        <span className="eyebrow">Selected Work</span>
        <h2 className="work-title">Four ideas, built out.</h2>
        <p className="work-sub">
          Concept products designed and built end-to-end as interactive
          interfaces — not screenshots.
        </p>
      </div>

      {isDesktop ? (
        <ProjectStage onOpen={setActiveProject} />
      ) : (
        <ProjectStack onOpen={setActiveProject} />
      )}

      <ProjectCaseStudy project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}

function ProjectStage({ onOpen }: { onOpen: (p: Project) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { x, y } = useMousePosition();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const n = projects.length;

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(n - 1, Math.max(0, Math.floor(v * n)));
    setActiveIndex(idx);
  });

  const relX = typeof window !== "undefined" ? x / window.innerWidth - 0.5 : 0;
  const relY = typeof window !== "undefined" ? y / window.innerHeight - 0.5 : 0;

  return (
    <div ref={containerRef} className="work-stage-container">
      <div
        className="work-stage-sticky"
        style={{
          transform: `perspective(1400px) rotateY(${relX * 4}deg) rotateX(${-relY * 3}deg)`,
        }}
      >
        <div className="work-stage-counter">
          <span className="work-stage-counter-active">0{activeIndex + 1}</span>
          <span className="work-stage-counter-total"> / 0{n}</span>
        </div>

        {projects.map((project, i) => (
          <ProjectPanel
            key={project.id}
            project={project}
            index={i}
            total={n}
            progress={scrollYProgress}
            isActive={i === activeIndex}
            onOpen={onOpen}
          />
        ))}

        <div className="work-stage-hint">Scroll to move through the gallery</div>
      </div>
    </div>
  );
}

function ProjectPanel({
  project,
  index,
  total,
  progress,
  isActive,
  onOpen,
}: {
  project: Project;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  isActive: boolean;
  onOpen: (p: Project) => void;
}) {
  const seg = 1 / total;
  const center = index * seg + seg / 2;
  const range = [
    Math.max(0, center - seg),
    center - seg * 0.35,
    center,
    center + seg * 0.35,
    Math.min(1, center + seg),
  ];

  const opacity = useTransform(progress, range, [0, 1, 1, 1, 0]);
  const scale = useTransform(progress, range, [0.82, 0.98, 1, 0.98, 0.82]);
  const rotateY = useTransform(progress, range, [10, 3, 0, -3, -10]);
  const blur = useTransform(progress, range, [6, 0, 0, 0, 6]);
  const z = useTransform(progress, range, [-120, -20, 0, -20, -120]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  const Visual = VISUALS[project.id];

  return (
    <motion.article
      className="work-panel"
      style={{
        opacity,
        scale,
        rotateY,
        filter,
        translateZ: z,
        pointerEvents: isActive ? "auto" : "none",
      }}
    >
      <div className="work-panel-grid">
        <div className="work-panel-copy">
          <span className="work-panel-number">{project.number}</span>
          <span className="eyebrow">{project.category}</span>
          <h3>{project.name}</h3>
          <p className="work-panel-desc">{project.description}</p>
          <div className="work-panel-tech">
            {project.technologies.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <button
            className="work-panel-cta"
            data-cursor="button"
            onClick={() => onOpen(project)}
          >
            Explore project →
          </button>
        </div>

        <div className="work-panel-visual" data-cursor="project" onClick={() => onOpen(project)}>
          <Visual />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectStack({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <div className="work-stack container">
      {projects.map((project) => {
        const Visual = VISUALS[project.id];
        return (
          <motion.article
            key={project.id}
            className="work-stack-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="work-panel-number">{project.number}</span>
            <span className="eyebrow">{project.category}</span>
            <h3>{project.name}</h3>
            <div className="work-stack-visual">
              <Visual />
            </div>
            <p className="work-panel-desc">{project.description}</p>
            <div className="work-panel-tech">
              {project.technologies.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <button className="work-panel-cta" onClick={() => onOpen(project)}>
              Explore project →
            </button>
          </motion.article>
        );
      })}
    </div>
  );
}
