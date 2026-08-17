import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiDownload, HiSearch } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";

const NAV_LINKS = [
  { label: "About",          to: "about"          },
  { label: "Skills",         to: "skills"         },
  { label: "Projects",       to: "projects"       },
  { label: "Certifications", to: "certifications" },
  { label: "Experience",     to: "experience"     },
  { label: "Contact",        to: "contact"        },
];

const navVariants = {
  hidden:  { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const linkVariants = {
  hidden:  { opacity: 0, y: -8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

const mobileMenuVariants = {
  hidden:  { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
  exit:    { opacity: 0, height: 0,      transition: { duration: 0.2, ease: "easeIn"  } },
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Increase glass opacity once the user scrolls past 20px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMenuOpen(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 w-full z-50"
      style={{
        background: scrolled
          ? "rgba(6, 9, 14, 0.88)"
          : "rgba(6, 9, 14, 0.45)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid rgba(16,185,129,${scrolled ? "0.12" : "0.06"})`,
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-[72px] flex justify-between items-center">

        {/* Logo — span not h1 (h1 is used in Hero for the name) */}
        <a
          href="#"
          aria-label="Home"
          className="text-2xl font-bold gradient-text tracking-tight select-none cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            closeMobile();
            if (window.location.hash) {
              window.history.replaceState(null, "", window.location.pathname);
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Shivam.dev
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-5">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.to}
              href={`#${link.to}`}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              className="text-sm text-[#94A3B8] hover:text-emerald-400 transition-colors duration-300 relative group"
            >
              {link.label}
              {/* Animated underline */}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px bg-emerald-400
                           group-hover:w-full transition-all duration-300"
              />
            </motion.a>
          ))}

          <motion.a
            href="/resume.pdf"
            download="Shivam_Chaudhary_Resume.pdf"
            custom={NAV_LINKS.length}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            className="text-xs px-3.5 py-2 rounded-lg glass border border-white/10
                       text-white hover:text-emerald-300 hover:border-emerald-500/30
                       transition-all duration-300 cursor-pointer flex items-center gap-1.5"
          >
            <HiDownload size={14} className="text-emerald-400" />
            Resume
          </motion.a>

          <motion.a
            href="#contact"
            custom={NAV_LINKS.length + 1}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            className="text-xs px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30
                       text-emerald-400 hover:bg-emerald-500/25 hover:border-emerald-400
                       transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.1)] font-semibold"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden text-[#94A3B8] hover:text-white transition-colors duration-200 p-1"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(6, 9, 14, 0.95)",
              borderTop: "1px solid rgba(16,185,129,0.1)",
            }}
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {[...NAV_LINKS, { label: "Hire Me", to: "contact" }].map((link) => (
                <ScrollLink
                  key={link.to + link.label}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-90}
                  onClick={closeMobile}
                  className="text-[#94A3B8] hover:text-emerald-400 text-base py-2
                             border-b border-white/5 last:border-0
                             transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
