import { motion } from "framer-motion";
import about from "../../data/about";
import {
  HiServer,
  HiChip,
  HiLightBulb,
  HiCode,
  HiBriefcase,
  HiSparkles,
  HiDatabase,
  HiDownload,
} from "react-icons/hi";

/* ── Static config ────────────────────────────────────────────── */

const STATS = [
  { value: "1+",  label: "Years Experience",  icon: <HiBriefcase size={20} /> },
  { value: "6+",  label: "Projects Built",    icon: <HiCode size={20} />      },
  { value: "5+",  label: "Tech Domains",      icon: <HiDatabase size={20} />  },
  { value: "AI",  label: "Backend Focus",     icon: <HiChip size={20} />      },
];

const DETAIL_ICONS = {
  "Frontend Development": <HiCode size={22} />,
  "Backend Engineering":  <HiServer size={22} />,
  "AI Integration":       <HiChip size={22} />,
  "Problem Solving":      <HiLightBulb size={22} />,
};

// Each interest chip gets a subtly different accent
const CHIP_COLORS = [
  "border-emerald-500/25 text-emerald-300 hover:border-emerald-400/60 hover:bg-emerald-500/10",
  "border-teal-500/25    text-teal-300    hover:border-teal-400/60    hover:bg-teal-500/10",
  "border-cyan-500/25    text-cyan-300    hover:border-cyan-400/60    hover:bg-cyan-500/10",
  "border-emerald-600/25 text-emerald-300 hover:border-emerald-500/60 hover:bg-emerald-600/10",
  "border-teal-600/25    text-teal-300    hover:border-teal-500/60    hover:bg-teal-600/10",
  "border-sky-500/25     text-sky-300     hover:border-sky-400/60     hover:bg-sky-500/10",
];

/* ── Animation variants ───────────────────────────────────────── */

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

const fadeRight = {
  hidden:  { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
  },
};

/* ── Component ────────────────────────────────────────────────── */

function About() {
  return (
    <>
      <div className="divider" />

      <section id="about" className="section">
        <div className="w-full">

          {/* ── Top label ─────────────────────────────────────── */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section-label"
          >
            About
          </motion.p>

          {/* ══════════════════════════════════════════════════════
              TWO-COLUMN LAYOUT
              Left  (58%) — identity card + story
              Right (42%) — stats grid
          ══════════════════════════════════════════════════════ */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-16">

            {/* ── Left column ─────────────────────────────────── */}
            <div className="w-full lg:w-[58%]">

              {/* Heading */}
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                className="section-title mb-6"
              >
                Who I Am
              </motion.h2>

              {/* Identity card */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="relative glass rounded-2xl p-7 border border-emerald-500/10 overflow-hidden"
              >
                {/* Ambient glow inside card */}
                <div
                  aria-hidden="true"
                  className="absolute -top-12 -left-12 w-48 h-48 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
                  }}
                />

                {/* Avatar row */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black
                               select-none flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #10B981, #06B6D4)",
                    }}
                    aria-hidden="true"
                  >
                    SC
                  </div>
                  <div>
                    <p className="font-bold text-white text-base leading-tight">Shivam Chaudhary</p>
                    <p className="text-[#94A3B8] text-sm mt-0.5">
                      Full Stack Developer
                    </p>
                  </div>
                  {/* Available dot */}
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="text-emerald-400 text-xs font-medium hidden sm:block">Available</span>
                  </div>
                </div>

                {/* Story paragraph */}
                <p className="text-[#94A3B8] text-base leading-relaxed relative z-10">
                  {about.intro}
                </p>

                {/* Bottom accent line */}
                <div
                  className="mt-6 h-px w-full relative z-10"
                  style={{
                    background: "linear-gradient(to right, rgba(16,185,129,0.4), rgba(6,182,212,0.4), transparent)",
                  }}
                />
                <div className="mt-4 flex items-center gap-2 relative z-10">
                  <HiSparkles size={14} className="text-emerald-400" />
                  <p className="text-xs text-[#64748B]">
                    Open to full-stack, frontend, and backend engineering roles.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* ── Right column — 2×2 stats grid ───────────────── */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-[42%] grid grid-cols-2 gap-3 sm:gap-4 lg:pt-16"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass rounded-2xl p-5 border border-white/5
                             hover:border-emerald-500/20 transition-colors duration-300
                             flex flex-col gap-3 cursor-default"
                >
                  <span className="text-emerald-400">{stat.icon}</span>
                  <div>
                    <p className="text-3xl font-black text-white tracking-tight">{stat.value}</p>
                    <p className="text-xs text-[#64748B] mt-0.5 leading-tight">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ══════════════════════════════════════════════════════
              THREE SPECIALTY CARDS
          ══════════════════════════════════════════════════════ */}
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {about.details.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative glass rounded-2xl p-7 border border-white/5
                           hover:border-emerald-500/20 group overflow-hidden
                           transition-colors duration-400 cursor-default"
              >
                {/* Gradient border glow on hover — pseudo via absolute inset */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                             transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(6,182,212,0.06) 100%)",
                  }}
                />

                {/* Icon bubble */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5
                             bg-emerald-500/10 border border-emerald-500/15
                             group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30
                             transition-all duration-300 text-emerald-400"
                >
                  {DETAIL_ICONS[item.title]}
                </div>

                <h3 className="text-base font-bold mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ══════════════════════════════════════════════════════
              INTEREST CHIPS
          ══════════════════════════════════════════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="flex flex-wrap gap-3"
          >
            {about.interests.map((interest, index) => (
              <motion.span
                key={interest}
                variants={fadeUp}
                whileHover={{ scale: 1.07, y: -2, transition: { duration: 0.15 } }}
                className={`px-4 py-2 rounded-full glass border text-sm font-medium
                            cursor-default select-none transition-all duration-250
                            ${CHIP_COLORS[index % CHIP_COLORS.length]}`}
              >
                {interest}
              </motion.span>
            ))}
          </motion.div>

          {/* ══════════════════════════════════════════════════════
              CTA CARD
          ══════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="relative mt-16 rounded-2xl p-[1px] group transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(6, 182, 212, 0.25))",
            }}
          >
            {/* Ambient blur glow behind the card on hover */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.15))",
              }}
            />

            {/* Inner glassmorphic card */}
            <div
              className="relative bg-[#06090E]/90 backdrop-blur-xl rounded-[15px] px-8 py-10 md:px-12
                         flex flex-col md:flex-row items-start md:items-center
                         justify-between gap-8 overflow-hidden"
            >
              {/* Ambient glow orbs inside the card */}
              <div
                aria-hidden="true"
                className="absolute -top-16 -left-16 w-64 h-64 rounded-full pointer-events-none
                           group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                style={{
                  background: "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-16 -right-8 w-56 h-56 rounded-full pointer-events-none
                           group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                style={{
                  background: "radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)",
                }}
              />

              {/* Text Content */}
              <div className="relative z-10 max-w-xl">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400 mb-3">
                  Open to Opportunities
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-3">
                  Interested in building{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                    something impactful?
                  </span>
                </h3>
                <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed">
                  I'm actively exploring backend engineering, AI systems, and full-stack
                  opportunities where I can create scalable and intelligent solutions.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 flex flex-col sm:flex-row md:flex-col xl:flex-row gap-3.5 flex-shrink-0 w-full sm:w-auto md:w-auto">
                {/* Primary Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="inline-flex items-center justify-center gap-2
                             px-6 py-3 rounded-xl font-semibold text-sm text-white
                             cursor-pointer select-none transition-all duration-300 w-full sm:w-auto"
                  style={{
                    background: "linear-gradient(135deg, #10B981, #06B6D4)",
                    boxShadow: "0 4px 20px rgba(16, 185, 129, 0.25)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(16, 185, 129, 0.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(16, 185, 129, 0.25)";
                  }}
                >
                  Let's Connect →
                </motion.a>

                {/* Secondary Button */}
                <motion.a
                  href="/resume.pdf"
                  download="Shivam_Chaudhary_Resume.pdf"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="inline-flex items-center justify-center gap-2
                             px-6 py-3 rounded-xl font-semibold text-sm text-white
                             bg-white/5 border border-white/10 backdrop-blur-md
                             hover:border-emerald-500/30 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]
                             transition-all duration-300
                             cursor-pointer select-none w-full sm:w-auto
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40"
                >
                  <HiDownload className="w-4 h-4" />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

export default About;
