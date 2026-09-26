import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface RevealParagraphProps {
  text: string;
  className?: string;
}

export default function RevealParagraph({ text, className = "" }: RevealParagraphProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });

  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} start={start} end={end}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  progress,
  start,
  end,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  return (
    <motion.span style={{ opacity, display: "inline-block", marginRight: "0.28em" }}>
      {children}
    </motion.span>
  );
}
