import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";
import { useIsDesktop } from "../hooks/useIsDesktop";
import profile from "../assets/profile.jpg";
import "./hero.css";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isDesktop = useIsDesktop();
  const { x, y } = useMousePosition();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const relX = isDesktop && typeof window !== "undefined" ? x / window.innerWidth - 0.5 : 0;
  const relY = isDesktop && typeof window !== "undefined" ? y / window.innerHeight - 0.5 : 0;

  return (
    <section id="top" ref={sectionRef} className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div
        className="hero-glow"
        style={{
          transform: `translate(${relX * 40}px, ${relY * 40}px)`,
        }}
        aria-hidden="true"
      />

      <div className="hero-inner container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <span className="eyebrow">NIRBHAY PANDEY</span>
          <h1 className="hero-headline">
            BUILDING
            <br />
            USEFUL
            <br />
            SOFTWARE.
          </h1>
          <div className="hero-meta">
            <p>COMPUTER SCIENCE ENGINEERING</p>
            <p>SOFTWARE DEVELOPER</p>
            <p>CHANDIGARH UNIVERSITY</p>
          </div>
        </motion.div>

        <motion.div
          className="hero-portrait-wrap"
          style={{ y: scrollY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <div
            className="hero-orbit hero-orbit--1"
            style={{ transform: `translate(${relX * -18}px, ${relY * -18}px)` }}
            aria-hidden="true"
          />
          <div
            className="hero-orbit hero-orbit--2"
            style={{ transform: `translate(${relX * 26}px, ${relY * 26}px)` }}
            aria-hidden="true"
          />
          <div
            className="hero-portrait"
            style={{
              transform: `translate(${relX * -10}px, ${relY * -10}px)`,
            }}
          >
            <img src={profile} alt="Portrait of Nirbhay Pandey" />
            <div className="hero-portrait-scan" aria-hidden="true" />
          </div>
          <div className="hero-portrait-tag">
            <span className="dot" />
            AVAILABLE FOR OPPORTUNITIES
          </div>
        </motion.div>
      </div>

      <motion.div className="hero-scroll" style={{ opacity: scrollOpacity }}>
        <span>SCROLL TO EXPLORE</span>
        <div className="hero-scroll-line">
          <motion.div
            className="hero-scroll-dot"
            animate={{ y: [0, 22, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
