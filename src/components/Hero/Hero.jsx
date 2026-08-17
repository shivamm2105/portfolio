import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Terminal from "./Terminal";
import { HiArrowRight, HiDownload } from "react-icons/hi";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

function Hero() {
  return (
    <section
      id="home"
      className="section-hero relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
      aria-labelledby="hero-heading"
    >
      {/* ── Ambient glow orbs ─────────────────────────────── */}
      <div
        aria-hidden="true"
        className="glow animate-float-emerald"
        style={{ top: "10%", left: "-5%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="glow glow-cyan animate-float-cyan"
        style={{ top: "35%", right: "-5%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="glow glow-mint animate-float-mint"
        style={{ bottom: "10%", left: "20%", width: "250px", height: "250px", background: "radial-gradient(circle, rgba(0, 245, 160, 0.08) 0%, transparent 70%)" }}
      />

      {/* ── Left column — text ────────────────────────────── */}
      <motion.div
        className="w-full lg:w-[58%] relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="text-emerald-400 text-sm font-medium tracking-[0.2em] uppercase mb-4"
        >
          👋 Hello, I am
        </motion.p>

        {/* Name — sole h1 on page */}
        <motion.h1
          id="hero-heading"
          variants={itemVariants}
          className="text-3xl min-[360px]:text-4.5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight break-words"
        >
          Shivam{" "}
          <span className="gradient-text">Chaudhary</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          variants={itemVariants}
          className="text-2xl lg:text-3xl mt-4 h-12 flex items-center"
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer",   2000,
              "Java & Spring Boot",     2000,
              "Scalable Web Apps",      2000,
              "Problem Solver",         2000,
            ]}
            speed={55}
            repeat={Infinity}
            className="gradient-text font-bold"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-lg text-[#94A3B8] text-base lg:text-lg leading-relaxed"
        >
          Building scalable web applications and modern user experiences
          — from concept to production.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            id="cta-view-projects"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl
                       bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 
                       text-white font-semibold text-sm hover:scale-105 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]
                       transition-all duration-300 cursor-pointer w-full sm:w-auto
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06090E]"
          >
            View Projects
            <HiArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/resume.pdf"
            id="cta-download-resume"
            download="Shivam_Chaudhary_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 glass px-7 py-3.5 rounded-xl
                       text-white font-semibold text-sm
                       hover:bg-white/10 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]
                       transition-all duration-300 cursor-pointer w-full sm:w-auto
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40"
          >
            <HiDownload className="w-4 h-4" />
            Resume
          </a>
        </motion.div>

        {/* Social proof / quick stats */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap gap-6 sm:gap-8"
        >
          {[
            { value: "1+",  label: "Years Experience" },
            { value: "6+",  label: "Projects Built"   },
            { value: "5+",  label: "Tech Domains"     },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-[#94A3B8] mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Right column — Interactive Terminal ─────────── */}
      <div className="w-full lg:w-[42%] relative z-10">
        <Terminal />
      </div>
    </section>
  );
}

export default Hero;
