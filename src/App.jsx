import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/common/Navbar";
import Hero from "./components/Hero/Hero";
import AuroraBackground from "./components/common/AuroraBackground";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import CodingProfiles from "./components/CodingProfiles/CodingProfiles";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/common/Footer";
import LoadingScreen from "./components/common/LoadingScreen";
import CommandPalette from "./components/common/CommandPalette";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    // Reset scroll position to top on page refresh/mount
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    // Simulate load lifecycle corresponding to loader bar fills
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) return;

    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loader" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <AuroraBackground />
          {/* Desktop-only Cursor Glow */}
          <div
            aria-hidden="true"
            className="hidden lg:block pointer-events-none fixed inset-0 z-30"
            style={{
              background: "radial-gradient(550px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), rgba(16, 185, 129, 0.05), rgba(6, 182, 212, 0.04), transparent 80%)",
            }}
          />
          <Navbar />
          <CommandPalette isOpen={isCommandOpen} setIsOpen={setIsCommandOpen} />
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <CodingProfiles />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;