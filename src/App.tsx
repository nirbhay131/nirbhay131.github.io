import { useState } from "react";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import Journey from "./sections/Journey";
import BuildingToward from "./sections/BuildingToward";
import Terminal from "./sections/Terminal";
import Contact from "./sections/Contact";

const PHILOSOPHY_ROW_1 = ["SOFTWARE", "PROBLEM SOLVING", "DSA", "DEVELOPMENT"];
const PHILOSOPHY_ROW_2 = ["BUILD", "LEARN", "SHIP", "REPEAT"];

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <a href="#top" className="skip-link">
        Skip to content
      </a>
      <div className="grain" aria-hidden="true" />
      <CustomCursor />

      {loading && <Loader onDone={() => setLoading(false)} />}

      <Navbar />

      <main>
        <Hero />
        <div className="section" style={{ paddingBlock: "48px" }}>
          <Marquee items={PHILOSOPHY_ROW_1} direction="left" variant="outline" />
          <Marquee items={PHILOSOPHY_ROW_2} direction="right" variant="solid" />
        </div>
        <About />
        <Skills />
        <Work />
        <Journey />
        <BuildingToward />
        <Terminal />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
