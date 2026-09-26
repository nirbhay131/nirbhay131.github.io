import "./visuals.css";

const APPROACHES = [
  { dir: "N", density: 62, active: true },
  { dir: "E", density: 30, active: false },
  { dir: "S", density: 48, active: false },
  { dir: "W", density: 20, active: false },
];

export default function TrafficVisual() {
  return (
    <div className="visual visual--traffic">
      <div className="visual-topbar">
        <span>Modern Traffic Lights</span>
        <span className="visual-demo-tag">Concept visualization — demo data</span>
      </div>
      <div className="visual-body visual-body--single visual-body--dark">
        <div className="visual-intersection">
          <div className="intersection-road intersection-road--h" />
          <div className="intersection-road intersection-road--v" />
          {APPROACHES.map((a) => (
            <div key={a.dir} className={`approach approach--${a.dir}`}>
              <span className={`signal ${a.active ? "signal--go" : "signal--stop"}`} />
              <span className="approach-label">{a.dir}</span>
            </div>
          ))}
          <div className="intersection-core" />
        </div>

        <div className="visual-density">
          {APPROACHES.map((a) => (
            <div key={a.dir} className="density-row">
              <span>{a.dir}</span>
              <div className="track">
                <div className="fill" style={{ width: `${a.density}%` }} />
              </div>
              <span className="visual-sub">{a.density}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
