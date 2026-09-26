import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  cursor?: "button" | "project";
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  cursor = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: relX * 0.3, y: relY * 0.3 });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  const motionProps = {
    animate: { x: offset.x, y: offset.y },
    transition: { type: "spring" as const, stiffness: 200, damping: 15, mass: 0.4 },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className,
    "data-cursor": cursor,
  };

  if (href) {
    return (
      <motion.a ref={ref as React.Ref<HTMLAnchorElement>} href={href} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button ref={ref as React.Ref<HTMLButtonElement>} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
}
