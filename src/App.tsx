import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import IntroCover from "./components/IntroCover";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import ImageMarquee from "./components/ImageMarquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackgroundMesh from "./components/BackgroundMesh";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential decelerate
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <BackgroundMesh />
      <Navbar />
      <main>
        <IntroCover />
        <Hero />
        <TechMarquee />
        <ImageMarquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
