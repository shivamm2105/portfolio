import { motion } from "framer-motion";
import {
  HiOutlineLightningBolt,
  HiOutlineCode,
  HiOutlineAcademicCap,
  HiOutlineLightBulb,
  HiOutlineSparkles,
} from "react-icons/hi";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiSpringboot
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

/* ─── Static Data Config ────────────────────────────────────────── */

const PHILOSOPHIES = [
  {
    title: "Build for Scale",
    description: "Design systems that can grow efficiently without compromising performance.",
    icon: <HiOutlineLightningBolt size={22} />,
    color: "from-emerald-500/20 to-teal-500/10",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    title: "Simplicity First",
    description: "Reduce complexity and create maintainable architectures.",
    icon: <HiOutlineCode size={22} />,
    color: "from-teal-500/20 to-cyan-500/10",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    title: "Learn Continuously",
    description: "Continuously adapt to evolving technologies and industry trends.",
    icon: <HiOutlineAcademicCap size={22} />,
    color: "from-cyan-500/20 to-emerald-500/10",
    glow: "rgba(0,245,160,0.15)",
  },
  {
    title: "Solve Real Problems",
    description: "Focus on practical solutions that create measurable impact.",
    icon: <HiOutlineLightBulb size={22} />,
    color: "from-emerald-600/20 to-teal-600/10",
    glow: "rgba(16,185,129,0.15)",
  },
];

const AntigravityLogo = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="antigravityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="50%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#00F5A0" />
      </linearGradient>
    </defs>
    <path
      d="M12 2.5L3.5 7.5V16.5L12 21.5L20.5 16.5V7.5L12 2.5Z"
      stroke="url(#antigravityGradient)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6.5L7.5 14H16.5L12 6.5Z"
      fill="url(#antigravityGradient)"
      fillOpacity="0.8"
    />
    <circle cx="12" cy="16.5" r="1.5" fill="#00F5A0" />
  </svg>
);

const SKILL_GROUPS = [
  {
    title: "Frontend Engineering",
    description: "Highly interactive and premium user interfaces",
    glow: "rgba(6,182,212,0.12)", // Cyan glow
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS", icon: <SiCss className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    ],
  },
  {
    title: "Backend Engineering",
    description: "Scalable services and robust API architectures",
    glow: "rgba(16,185,129,0.12)", // Emerald glow
    skills: [
      { name: "Java", icon: <FaJava className="text-[#ED8B00]" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
    ],
  },
  {
    title: "Databases",
    description: "High-performance data stores and reliable persistence",
    glow: "rgba(0,245,160,0.12)", // Mint glow
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    ],
  },
  {
    title: "Tools & Editors",
    description: "Modern collaboration and editing environments",
    glow: "rgba(6,182,212,0.12)", // Cyan glow
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
      { name: "Antigravity", icon: <AntigravityLogo className="w-5 h-5" /> },
    ],
  },
];

/* ─── Framer Motion Animation Variants ──────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerSkills = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const skillPillVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/* ─── Component ─────────────────────────────────────────────────── */

function Skills() {
  return (
    <>
      <div className="divider" />

      <section id="skills" className="section">
        <div className="w-full">
          
          {/* ─── Section Header ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-14"
          >
            <p className="section-label">Skills</p>
            <h2 className="section-title">Engineering Philosophy</h2>
            <p className="section-subtitle">
              My approach to building scalable software and intelligent systems.
            </p>
          </motion.div>

          {/* ─── Main Two-Column Layout ────────────────────────────── */}
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-start">
            
            {/* ══════════════════════════════════════════════════════
                LEFT SIDE (40%): Philosophy Cards
            ══════════════════════════════════════════════════════ */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="w-full lg:w-[40%] flex flex-col gap-5"
            >
              {PHILOSOPHIES.map((phi) => (
                <motion.div
                  key={phi.title}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.015 }}
                  className="relative glass rounded-2xl p-6 border border-white/5 overflow-hidden group
                             hover:border-emerald-500/20 hover:bg-white/4 transition-colors duration-300"
                >
                  {/* Subtle inner radial glow on hover */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-12 -left-12 w-32 h-32 rounded-full pointer-events-none opacity-0
                               group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle, ${phi.glow} 0%, transparent 70%)`,
                    }}
                  />

                  <div className="flex gap-4 relative z-10">
                    {/* Icon Bubble */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
                                 bg-gradient-to-br ${phi.color} border border-white/10 text-emerald-400
                                 group-hover:border-emerald-500/30 group-hover:scale-105 transition-all duration-300`}
                    >
                      {phi.icon}
                    </div>

                    {/* Content */}
                    <div>
                      <span className="block text-[10px] tracking-[0.25em] uppercase text-emerald-400/70 font-semibold mb-1">
                        Principle
                      </span>
                      <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-emerald-300 transition-colors">
                        {phi.title}
                      </h3>
                      <p className="text-sm text-[#94A3B8] leading-relaxed">
                        {phi.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* ══════════════════════════════════════════════════════
                RIGHT SIDE (60%): Skills Visualization
            ══════════════════════════════════════════════════════ */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="w-full lg:w-[60%] flex flex-col gap-6"
            >
              {SKILL_GROUPS.map((group) => (
                <motion.div
                  key={group.title}
                  variants={fadeUp}
                  className="glass rounded-2xl p-6 border border-white/5 relative overflow-hidden group
                             hover:border-emerald-500/15 transition-colors duration-300"
                >
                  {/* Subtle ambient glow inside card */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-20 -right-20 w-52 h-52 rounded-full pointer-events-none blur-[80px]"
                    style={{
                      background: `radial-gradient(circle, ${group.glow} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Decorative background accent line */}
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-6 right-6 h-px pointer-events-none"
                    style={{
                      background: "linear-gradient(to right, rgba(16,185,129,0.3), rgba(6,182,212,0.3), transparent)",
                    }}
                  />

                  {/* Header info */}
                  <div className="mb-4 relative z-10">
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {group.title}
                    </h3>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      {group.description}
                    </p>
                  </div>

                  {/* Staggered Skills Flex Area */}
                  <motion.div
                    variants={staggerSkills}
                    className="flex flex-wrap gap-2.5 relative z-10"
                  >
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={skillPillVariants}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl
                                   glass border border-white/5 hover:border-emerald-400/40 hover:bg-emerald-500/10
                                   text-sm text-[#E2E8F0] font-medium select-none cursor-default
                                   transition-all duration-200 group/pill"
                      >
                        <span className="text-lg transition-transform duration-300 group-hover/pill:scale-115 group-hover/pill:rotate-[6deg]">
                          {skill.icon}
                        </span>
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Soft Bottom Section Divider */}
      <div 
        aria-hidden="true" 
        className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent mt-16" 
      />
    </>
  );
}

export default Skills;
