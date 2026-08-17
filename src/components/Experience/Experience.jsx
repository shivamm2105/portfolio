import { motion } from "framer-motion";
import experience from "../../data/experience";
import TimelineCard from "./TimelineCard";
import { HiCode, HiLightningBolt, HiAcademicCap, HiBriefcase } from "react-icons/hi";
import {
  SiSpringboot,
  SiReact,
  SiHibernate,
  SiMysql,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiGit,
  SiGithub
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

const CORE_SKILLS = [
  { icon: <FaJava size={16} />, label: "Java" },
  { icon: <FaJava size={16} />, label: "Advanced Java" },
  { icon: <SiSpringboot size={16} />, label: "Spring Boot" },
  { icon: <FaDatabase size={16} />, label: "JDBC" },
  { icon: <SiMysql size={16} />, label: "MySQL" },
  { icon: <SiJavascript size={16} />, label: "JavaScript" },
  { icon: <SiReact size={16} />, label: "React" },
  { icon: <SiGit size={16} />, label: "Git" },
  { icon: <SiGithub size={16} />, label: "GitHub" },
];

const QUICK_STATS = [
  { icon: <HiAcademicCap size={18} />, value: "21+", label: "Certifications Earned" },
  { icon: <HiCode size={18} />, value: "150+", label: "DSA Solved (LeetCode/GFG)" },
  { icon: <HiLightningBolt size={18} />, value: "6", label: "Verified Coding Profiles" },
  { icon: <HiBriefcase size={18} />, value: "6+", label: "Full Stack Projects Built" },
];

function Experience() {
  return (
    <>
      <div className="divider" />

      <section id="experience" className="section">
        <div className="w-full">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Experience</p>
            <h2 className="section-title">Career Journey</h2>
            <p className="section-subtitle">
              Building strong foundations in software development through academic learning,
              professional training, and open-source contributions.
            </p>
          </motion.div>

          {/* Two-column layout: Timeline left | Stats panel right */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* ── Left: Vertical timeline ───────────────────────── */}
            <div className="relative flex flex-col gap-0 pl-8 lg:pl-10 flex-1 min-w-0">
              {/* Vertical gradient line */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(16,185,129,0.5) 10%, rgba(16,185,129,0.3) 90%, transparent)",
                }}
              />
              {experience.map((item, index) => (
                <TimelineCard key={item.id} item={item} index={index} />
              ))}
            </div>

            {/* ── Right: Summary panel ──────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-full lg:w-80 xl:w-96 flex-shrink-0 flex flex-col gap-5 lg:sticky lg:top-[88px] lg:self-start"
            >

              {/* Available badge */}
              <div className="glass rounded-2xl p-5 border border-white/5">
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </span>
                  <span className="text-emerald-400 text-sm font-semibold">Available for opportunities</span>
                </div>
                <p className="text-[#94A3B8] text-xs leading-relaxed mt-2">
                  Open to backend, full-stack, and AI-focused roles. Let's build something great.
                </p>
              </div>

              {/* Quick stats grid */}
              <div className="glass rounded-2xl p-5 border border-white/5">
                <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-4">
                  At a Glance
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {QUICK_STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/[0.03] rounded-xl p-3.5 border border-white/5
                                 hover:border-emerald-500/20 transition-colors duration-300"
                    >
                      <div className="text-emerald-400 mb-2">{stat.icon}</div>
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                      <p className="text-[10px] text-[#64748B] mt-0.5 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core skills */}
              <div className="glass rounded-2xl p-5 border border-white/5">
                <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-4">
                  Core Stack
                </p>
                <div className="flex flex-col gap-2">
                  {CORE_SKILLS.map((skill, i) => (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.06, duration: 0.35 }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg
                                 bg-white/[0.03] border border-white/5
                                 hover:border-emerald-500/20 hover:bg-emerald-500/5
                                 transition-all duration-200 group cursor-default"
                    >
                      <span className="text-[#64748B] group-hover:text-emerald-400 transition-colors duration-200">
                        {skill.icon}
                      </span>
                      <span className="text-sm text-[#94A3B8] group-hover:text-white transition-colors duration-200">
                        {skill.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Experience;