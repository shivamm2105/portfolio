import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Divide projects into Featured (first 3) and Additional (remaining 3)
  const featuredProjects = projects.slice(0, 3);
  const additionalProjects = projects.slice(3);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="divider" />

      <section id="projects" className="section">
        <div className="w-full flex flex-col gap-12">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Projects</p>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              A collection of full-stack, AI-powered, and modern web applications that demonstrate my expertise in software development, responsive design, APIs, and scalable application architecture.
            </p>
          </motion.div>

          {/* Main Grid & Expandable Area */}
          <div className="flex flex-col gap-8">
            {/* Featured Grid — items-stretch so all cards match the tallest */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch"
            >
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={handleOpenModal}
                />
              ))}
            </motion.div>

            {/* Expandable Grid Container with AnimatePresence */}
            <AnimatePresence mode="popLayout">
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch pt-2 pb-2"
                  >
                    {additionalProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onViewDetails={handleOpenModal}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Center-aligned Toggle Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mt-2"
          >
            <motion.button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.975 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-[#94A3B8] hover:text-white
                         glass border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]
                         transition-all duration-300 cursor-pointer select-none
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30"
            >
              {isExpanded ? (
                <>
                  Show Less <HiArrowUp className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  View More Projects <HiArrowDown className="w-3.5 h-3.5" />
                </>
              )}
            </motion.button>
          </motion.div>

        </div>
      </section>

      {/* Project Detail Modal Portal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Projects;