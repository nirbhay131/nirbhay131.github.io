import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsDesktop } from "../hooks/useIsDesktop";

type CursorMode = "default" | "project" | "button";

export default function CustomCursor() {
  const isDesktop = useIsDesktop();
  const [mode, setMode] = useState<CursorMode>("default");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!isDesktop) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      const el = target.closest("[data-cursor]") as HTMLElement | null;
      setMode((el?.dataset.cursor as CursorMode) || "default");
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isDesktop, x, y]);

  if (!isDesktop) return null;

  const label = mode === "project" ? "EXPLORE →" : mode === "button" ? "OPEN" : "";
  const isExpanded = mode !== "default";

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x, y, opacity: isExpanded ? 0 : 1 }}
      />
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          width: isExpanded ? (mode === "project" ? 92 : 64) : 36,
          height: isExpanded ? (mode === "project" ? 92 : 64) : 36,
          background: isExpanded ? "rgba(106,99,255,0.12)" : "transparent",
          borderColor: isExpanded ? "rgba(106,99,255,0.5)" : "rgba(245,245,245,0.18)",
        }}
      >
        {label}
      </motion.div>
    </>
  );
}
