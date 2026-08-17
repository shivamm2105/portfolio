import { useEffect } from "react";
import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function ProjectModal({ project, onClose }) {
  // Prevent background scrolling and attach key listeners
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal Card wrapper */}
      <motion.div
        initial={{ scale: 0.95, y: 15, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 15, opacity: 0 }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-[#06090E]/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle interior radial glow orbs */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 w-64 h-64 rounded-full pointer-events-none opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full pointer-events-none opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          }}
        />

        {/* ─── Top Header ────────────────────────────────────────── */}
        <div className="relative z-10 p-6 sm:p-8 border-b border-white/10 flex items-center justify-between gap-4 flex-shrink-0 bg-[#06090E]/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            {/* Project Icon */}
            <div className="w-10 h-10 rounded-xl glass border border-emerald-500/20 flex items-center justify-center text-xl shadow-lg select-none">
              {project.icon}
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                {project.title}
              </h3>
              <span className="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                {project.badge}
              </span>
            </div>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="w-9 h-9 rounded-full flex items-center justify-center glass border border-white/5 text-[#94A3B8] hover:text-white hover:border-emerald-500/30 transition-all cursor-pointer"
          >
            <HiX size={18} />
          </button>
        </div>

        {/* ─── Middle Content (Scrollable Body) ───────────────────── */}
        <div className="relative z-10 flex-grow overflow-y-auto p-6 sm:p-8 flex flex-col gap-6 custom-scrollbar">
          
          {/* Overview */}
          <div>
            <h4 className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em] mb-2 select-none">
              Project Overview
            </h4>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em] mb-2 select-none">
                Key Features
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-[#94A3B8]">
                {project.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture / Workflow */}
          {project.architecture && (
            <div>
              <h4 className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em] mb-2 select-none">
                System Architecture
              </h4>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em] mb-2 select-none">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-xs text-[#E2E8F0] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges Solved */}
          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h4 className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em] mb-2 select-none">
                Challenges Solved
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-[#94A3B8]">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <div>
              <h4 className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.2em] mb-2 select-none">
                Results / Outcomes
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-[#94A3B8]">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">•</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* ─── Bottom Footer ─────────────────────────────────────── */}
        <div className="relative z-10 p-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0 bg-[#06090E] text-sm">
          
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            {/* GitHub Repo link */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 hover:border-emerald-500/30 transition-all cursor-pointer"
            >
              <FaGithub size={14} />
              GitHub
            </a>

            {/* Live Demo link */}
            {project.live && project.live !== "#" ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-xs hover:scale-[1.02] hover:shadow-[0_4px_15px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
              >
                <FiExternalLink size={14} />
                Live Demo
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[#475569] font-semibold text-xs cursor-not-allowed select-none"
              >
                <FiExternalLink size={14} />
                Coming Soon
              </button>
            )}
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-white/5 text-[#94A3B8] font-semibold text-xs hover:text-white hover:bg-white/5 transition-all cursor-pointer text-center"
          >
            Close
          </button>
        </div>

      </motion.div>
    </motion.div>
  );
}

export default ProjectModal;
