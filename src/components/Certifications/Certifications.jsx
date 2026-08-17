import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import certifications from "../../data/certifications";
import {
  HiOutlineAcademicCap,
  HiOutlineBadgeCheck,
  HiOutlineExternalLink,
  HiOutlineEye,
  HiX,
  HiOutlineCheckCircle,
  HiOutlineDocumentSearch,
  HiArrowDown,
  HiArrowUp,
} from "react-icons/hi";
import { FaGraduationCap, FaGithub, FaAward } from "react-icons/fa";

const CATEGORIES = [
  "All",
  "Backend & Java",
  "Frontend & Web",
  "Mobile Dev",
  "AI & GenAI",
  "Databases & Core",
  "Career Readiness",
];

function getIssuerIcon(issuer) {
  const i = issuer.toLowerCase();
  if (i.includes("qspiders")) return <FaGraduationCap className="text-emerald-400" size={20} />;
  if (i.includes("girlscript") || i.includes("gssoc")) return <FaGithub className="text-cyan-400" size={20} />;
  return <FaAward className="text-teal-400" size={20} />;
}

function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);
  const [previewCert, setPreviewCert] = useState(null);
  const [imageError, setImageError] = useState({});

  // Filter items
  const filteredCerts =
    selectedCategory === "All"
      ? certifications
      : certifications.filter((c) => c.category === selectedCategory);

  const initialCerts = filteredCerts.slice(0, 3);
  const additionalCerts = filteredCerts.slice(3);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsExpanded(false);
  };

  // Keyboard listener for modal esc key & overflow lock
  useEffect(() => {
    if (!previewCert) return;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setPreviewCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewCert]);

  const handleImageError = (id) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <div className="divider" />

      <section id="certifications" className="section relative overflow-hidden">
        {/* Subtle background ambient glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/3 right-10 w-96 h-96 rounded-full pointer-events-none opacity-5 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
          }}
        />

        <div className="w-full relative z-10">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="section-label">Credentials</p>
            <h2 className="section-title">Certifications & Achievements</h2>
            <p className="section-subtitle">
              Verified domain qualifications, professional training certifications, and open-source recognitions.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-2.5 mb-10"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 select-none cursor-pointer ${
                    active
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                      : "glass border border-white/5 text-[#94A3B8] hover:text-white hover:border-emerald-500/20 hover:bg-white/5"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </motion.div>

          {/* Certifications Main Area (Initial 3 + Expandable Remaining) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              {/* Initial 3 Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {initialCerts.map((cert, index) => {
                  const icon = getIssuerIcon(cert.issuer);

                  return (
                    <motion.article
                      key={cert.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="glass rounded-2xl p-6 border border-white/5 hover:border-emerald-500/30
                                 flex flex-col h-full group relative overflow-hidden transition-all duration-300"
                    >
                      {/* Subtle Top Accent Bar */}
                      <div
                        aria-hidden="true"
                        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity"
                      />

                      {/* Header Row: Issuer Icon + Date */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500/30 group-hover:scale-105 transition-all">
                          {icon}
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                          {cert.date}
                        </span>
                      </div>

                      {/* Title & Issuer */}
                      <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-emerald-300 transition-colors leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-emerald-400/80 font-medium mb-3">
                        {cert.issuer}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-[#94A3B8] leading-relaxed mb-4 flex-grow">
                        {cert.description}
                      </p>

                      {/* Skills Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-[10px] text-[#94A3B8] font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Card Actions Footer */}
                      <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/8 mt-auto">
                        <button
                          type="button"
                          onClick={() => setPreviewCert(cert)}
                          className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold hover:text-emerald-300 transition-colors cursor-pointer"
                        >
                          <HiOutlineEye size={15} />
                          Preview
                        </button>

                        {cert.credentialUrl ? (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
                          >
                            Verify Link
                            <HiOutlineExternalLink size={14} />
                          </a>
                        ) : (
                          <span className="text-[10px] text-[#64748B] flex items-center gap-1">
                            <HiOutlineBadgeCheck className="text-emerald-500" size={14} /> Verified
                          </span>
                        )}
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              {/* Expandable Additional Certificates Grid */}
              <AnimatePresence mode="popLayout">
                {isExpanded && additionalCerts.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch pt-2">
                      {additionalCerts.map((cert, index) => {
                        const icon = getIssuerIcon(cert.issuer);

                        return (
                          <motion.article
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="glass rounded-2xl p-6 border border-white/5 hover:border-emerald-500/30
                                       flex flex-col h-full group relative overflow-hidden transition-all duration-300"
                          >
                            {/* Subtle Top Accent Bar */}
                            <div
                              aria-hidden="true"
                              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity"
                            />

                            {/* Header Row: Issuer Icon + Date */}
                            <div className="flex items-center justify-between gap-3 mb-4">
                              <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500/30 group-hover:scale-105 transition-all">
                                {icon}
                              </div>
                              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                                {cert.date}
                              </span>
                            </div>

                            {/* Title & Issuer */}
                            <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-emerald-300 transition-colors leading-snug">
                              {cert.title}
                            </h3>
                            <p className="text-xs text-emerald-400/80 font-medium mb-3">
                              {cert.issuer}
                            </p>

                            {/* Description */}
                            <p className="text-xs text-[#94A3B8] leading-relaxed mb-4 flex-grow">
                              {cert.description}
                            </p>

                            {/* Skills Pills */}
                            <div className="flex flex-wrap gap-1.5 mb-6">
                              {cert.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-[10px] text-[#94A3B8] font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>

                            {/* Card Actions Footer */}
                            <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/8 mt-auto">
                              <button
                                type="button"
                                onClick={() => setPreviewCert(cert)}
                                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold hover:text-emerald-300 transition-colors cursor-pointer"
                              >
                                <HiOutlineEye size={15} />
                                Preview
                              </button>

                              {cert.credentialUrl ? (
                                <a
                                  href={cert.credentialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
                                >
                                  Verify Link
                                  <HiOutlineExternalLink size={14} />
                                </a>
                              ) : (
                                <span className="text-[10px] text-[#64748B] flex items-center gap-1">
                                  <HiOutlineBadgeCheck className="text-emerald-500" size={14} /> Verified
                                </span>
                              )}
                            </div>
                          </motion.article>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          {/* Toggle Button if there are more than 3 certificates in category */}
          {filteredCerts.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mt-8"
            >
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-[#94A3B8] hover:text-white
                           glass border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]
                           transition-all duration-300 cursor-pointer select-none
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30"
              >
                {isExpanded ? (
                  <>
                    Show Less <HiArrowUp className="w-3.5 h-3.5 text-emerald-400" />
                  </>
                ) : (
                  <>
                    View More Certificates ({additionalCerts.length} More) <HiArrowDown className="w-3.5 h-3.5 text-emerald-400" />
                  </>
                )}
              </button>
            </motion.div>
          )}

        </div>
      </section>

      {/* ─── Certificate Image Preview Modal ─────────────────────────────── */}
      <AnimatePresence>
        {previewCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setPreviewCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-[#06090E]/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Header */}
              <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between gap-4 bg-[#06090E]/80 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl glass border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <HiOutlineAcademicCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {previewCert.title}
                    </h3>
                    <p className="text-xs text-emerald-400 font-medium">
                      {previewCert.issuer} • {previewCert.date}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setPreviewCert(null)}
                  className="w-9 h-9 rounded-full flex items-center justify-center glass border border-white/5 text-[#94A3B8] hover:text-white hover:border-emerald-500/30 transition-all cursor-pointer"
                >
                  <HiX size={18} />
                </button>
              </div>

              {/* Main Image Display / Fallback Showcase */}
              <div className="p-6 sm:p-8 flex flex-col items-center justify-center min-h-[280px] bg-black/40">
                {previewCert.image && !imageError[previewCert.id] ? (
                  <div className="relative w-full max-h-[60vh] flex items-center justify-center overflow-hidden rounded-xl border border-white/10">
                    <img
                      src={previewCert.image}
                      alt={previewCert.title}
                      onError={() => handleImageError(previewCert.id)}
                      className="w-full h-auto max-h-[60vh] object-contain rounded-xl shadow-2xl"
                    />
                  </div>
                ) : (
                  /* Sleek Emerald Certificate Fallback Card when user image is not uploaded yet */
                  <div className="w-full max-w-xl glass rounded-2xl p-8 border border-emerald-500/30 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
                    <div
                      aria-hidden="true"
                      className="absolute -top-20 -right-20 w-48 h-48 rounded-full pointer-events-none opacity-20 blur-2xl bg-emerald-500"
                    />
                    
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 shadow-lg">
                      <HiOutlineBadgeCheck size={36} />
                    </div>

                    <h4 className="text-xl font-black text-white mb-2">
                      {previewCert.title}
                    </h4>

                    <p className="text-sm font-semibold text-emerald-300 mb-4">
                      Issued by {previewCert.issuer} ({previewCert.date})
                    </p>

                    <p className="text-xs text-[#94A3B8] max-w-md leading-relaxed mb-6">
                      {previewCert.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {previewCert.skills.map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-medium">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/8 text-[11px] text-[#64748B] flex items-center gap-2 max-w-md">
                      <HiOutlineDocumentSearch className="text-emerald-400 flex-shrink-0" size={16} />
                      <span>
                        Place your image at <code className="text-emerald-300">public{previewCert.image}</code> to preview your custom certificate file.
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Footer Actions */}
              <div className="p-5 border-t border-white/10 flex items-center justify-between gap-4 bg-[#06090E]">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                  <HiOutlineCheckCircle size={16} />
                  <span>Verified Candidate Record</span>
                </div>

                <div className="flex items-center gap-3">
                  {previewCert.credentialUrl && (
                    <a
                      href={previewCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-xs hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
                    >
                      Verify Online <HiOutlineExternalLink size={14} />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setPreviewCert(null)}
                    className="px-4 py-2 rounded-xl border border-white/10 text-xs text-[#94A3B8] font-semibold hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Certifications;
