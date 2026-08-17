import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

// Static map — defined outside component, never recreated
const PROJECT_ICONS = {
  "🎴": { icon: "🎴", gradient: "from-emerald-600/30 via-teal-600/20 to-cyan-600/25" },
  "🌱": { icon: "🌱", gradient: "from-green-600/30 via-emerald-600/25 to-teal-600/20" },
  "🛍️": { icon: "🛍️", gradient: "from-teal-600/30 via-emerald-600/20 to-cyan-600/25" },
  "🚨": { icon: "🚨", gradient: "from-emerald-700/30 via-teal-600/25 to-cyan-600/20" },
  "📚": { icon: "📚", gradient: "from-cyan-600/30 via-teal-600/25 to-emerald-600/20" },
  "🌦️": { icon: "🌦️", gradient: "from-teal-600/30 via-cyan-600/20 to-emerald-600/25" },
  default:  { icon: "📊", gradient: "from-emerald-600/30 via-teal-600/25 to-cyan-600/20" },
};

function getProjectMeta(icon) {
  return PROJECT_ICONS[icon] || PROJECT_ICONS.default;
}

// Extracted so ProjectCard can receive it from parent stagger
const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

function ProjectCard({ project, onViewDetails }) {
  const meta = getProjectMeta(project.icon);

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
      className="glass rounded-2xl overflow-hidden flex flex-col h-full group
                 border border-white/5 hover:border-emerald-500/30 transition-colors duration-400"
      aria-label={`Project: ${project.title}`}
    >
      {/* Card banner */}
      <div
        className={`h-28 bg-gradient-to-r ${meta.gradient} relative overflow-hidden
                    flex items-center justify-center flex-shrink-0`}
      >
        {/* Floating icon — animation only on this inner div, not the card */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-14 h-14 rounded-xl glass flex items-center justify-center text-2xl shadow-lg border border-emerald-500/15"
          aria-hidden="true"
        >
          {meta.icon}
        </motion.div>

        {/* Stats/Badge — top right */}
        <span
          className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1
                     rounded-full bg-black/60 text-emerald-300 border border-emerald-500/25 backdrop-blur-md"
        >
          {project.badge}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow gap-4">

        {/* Title */}
        <h3 className="text-lg font-bold leading-snug group-hover:text-emerald-300 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#94A3B8] leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full bg-white/5 border border-white/8
                         text-xs text-[#94A3B8] hover:border-emerald-500/30 hover:text-emerald-300
                         transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/8 mt-auto">
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              className="text-[#94A3B8] hover:text-white hover:scale-110 transition-all duration-200 cursor-pointer"
            >
              <FaGithub size={20} />
            </a>

            {project.live && project.live !== "#" ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="text-[#94A3B8] hover:text-white hover:scale-110 transition-all duration-200 cursor-pointer"
              >
                <FiExternalLink size={20} />
              </a>
            ) : (
              <div
                className="text-[#475569] cursor-not-allowed relative group/live flex items-center"
                aria-label="Live demo coming soon"
              >
                <FiExternalLink size={20} />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[10px] font-semibold text-white bg-black/90 rounded border border-white/10 opacity-0 group-hover/live:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg">
                  Coming Soon
                </span>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => onViewDetails(project)}
            className="text-xs text-[#475569] group-hover:text-emerald-400 transition-colors duration-300 font-semibold cursor-pointer focus:outline-none hover:underline"
          >
            View details →
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;