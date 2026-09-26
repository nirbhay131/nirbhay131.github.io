import "./marquee.css";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  variant?: "solid" | "outline";
}

export default function Marquee({ items, direction = "left", variant = "solid" }: MarqueeProps) {
  const content = items.join("   •   ");

  return (
    <div className="marquee" aria-hidden="true">
      <div
        className={`marquee-track marquee-track--${direction} marquee-track--${variant}`}
      >
        <span>{content}&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</span>
        <span>{content}&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>
  );
}
