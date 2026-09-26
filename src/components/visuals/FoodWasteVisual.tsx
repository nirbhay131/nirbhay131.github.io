import "./visuals.css";

const LISTINGS = [
  { source: "Restaurant", food: "Prepared Meals", qty: "25 portions", status: "Available" },
  { source: "Hostel", food: "Rice & Curry", qty: "40 portions", status: "Claimed" },
  { source: "Event", food: "Packed Snacks", qty: "60 packs", status: "Available" },
];

export default function FoodWasteVisual() {
  return (
    <div className="visual visual--foodwaste">
      <div className="visual-topbar">
        <span>Food Waste Management</span>
        <span className="visual-demo-tag">Concept interface — demo data</span>
      </div>
      <div className="visual-body visual-body--single">
        <div className="visual-fw-header">
          <span className="visual-label">Surplus food available</span>
          <span className="visual-sub">3 active listings nearby</span>
        </div>

        <div className="visual-fw-cards">
          {LISTINGS.map((l) => (
            <div key={l.source + l.food} className="visual-fw-card">
              <div className="visual-fw-card-top">
                <span className="visual-fw-source">{l.source}</span>
                <span className={`visual-fw-status ${l.status === "Available" ? "avail" : "claimed"}`}>
                  {l.status}
                </span>
              </div>
              <p className="visual-fw-food">{l.food}</p>
              <p className="visual-sub">{l.qty}</p>
              <div className="visual-fw-actions">
                <span>Claim food</span>
                <span>Request pickup</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
