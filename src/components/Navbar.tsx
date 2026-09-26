import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./navbar.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <a href="#top" className="navbar-mark" data-cursor="button">
        N.P
      </a>

      <nav className="navbar-links" aria-label="Primary">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} data-cursor="button">
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="navbar-cta" data-cursor="button">
        Let&apos;s talk
      </a>

      <button
        className="navbar-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      {open && (
        <div className="navbar-mobile" role="dialog" aria-modal="true">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="navbar-mobile-cta">
            Let&apos;s talk
          </a>
        </div>
      )}
    </motion.header>
  );
}
