import "./visuals.css";

const SKILLS = [
  { name: "DSA", value: 72 },
  { name: "Java", value: 80 },
  { name: "JavaScript", value: 68 },
  { name: "React", value: 60 },
  { name: "Problem Solving", value: 76 },
];

const STAGES = ["Foundation", "Skills", "Projects", "DSA", "Interviews"];

export default function CareerSphereVisual() {
  return (
    <div className="visual visual--careersphere">
      <div className="visual-topbar">
        <span>CareerSphere</span>
        <span className="visual-demo-tag">Concept interface — demo data</span>
      </div>
      <div className="visual-body">
        <aside className="visual-sidebar">
          {["Dashboard", "Career Path", "Skill Assessment", "Roadmap", "Opportunities", "Profile"].map(
            (item, i) => (
              <span key={item} className={i === 0 ? "active" : ""}>
                {item}
              </span>
            )
          )}
        </aside>
        <div className="visual-main">
          <div className="visual-readiness">
            <div className="visual-readiness-ring">
              <svg viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="34" className="ring-track" />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  className="ring-fill"
                  style={{ strokeDasharray: 214, strokeDashoffset: 214 * (1 - 0.71) }}
                />
              </svg>
              <span>71%</span>
            </div>
            <div>
              <p className="visual-label">Career Readiness</p>
              <p className="visual-sub">Target role: Software Developer</p>
            </div>
          </div>

          <div className="visual-skillbars">
            {SKILLS.map((s) => (
              <div key={s.name} className="visual-skillbar">
                <span>{s.name}</span>
                <div className="track">
                  <div className="fill" style={{ width: `${s.value}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="visual-roadmap">
            {STAGES.map((stage, i) => (
              <div key={stage} className={`roadmap-node ${i === 1 ? "current" : i < 1 ? "done" : ""}`}>
                <span className="roadmap-dot" />
                <span>{stage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
