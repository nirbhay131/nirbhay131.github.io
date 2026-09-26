import "./visuals.css";

const ENV = [
  { label: "Temperature", value: "28°C" },
  { label: "Humidity", value: "64%" },
  { label: "Soil Condition", value: "Good" },
];

const GROWTH = [20, 34, 48, 58, 70, 82, 87];

export default function CropPulseVisual() {
  return (
    <div className="visual visual--croppulse">
      <div className="visual-topbar">
        <span>CropPulse</span>
        <span className="visual-demo-tag">Concept visualization — demo data</span>
      </div>
      <div className="visual-body visual-body--single">
        <div className="visual-croprow">
          <div className="visual-health">
            <span className="visual-label">Crop Health</span>
            <span className="visual-health-value">87%</span>
            <span className="visual-sub">Field 04 · Wheat</span>
          </div>
          <div className="visual-env-grid">
            {ENV.map((e) => (
              <div key={e.label} className="visual-env-card">
                <span className="visual-sub">{e.label}</span>
                <span className="visual-env-value">{e.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="visual-growth">
          <span className="visual-sub">Growth timeline</span>
          <svg viewBox="0 0 280 70" preserveAspectRatio="none" className="growth-chart">
            <polyline
              fill="none"
              stroke="var(--accent-croppulse)"
              strokeWidth="2"
              points={GROWTH.map((v, i) => `${(i / (GROWTH.length - 1)) * 280},${70 - (v / 100) * 60}`).join(" ")}
            />
          </svg>
        </div>

        <div className="visual-recommend">
          <span className="dot" />
          Soil moisture trending down — recommend irrigation within 2 days.
        </div>
      </div>
    </div>
  );
}
