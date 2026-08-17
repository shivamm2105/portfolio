import { motion } from "framer-motion";
import codingProfiles from "../../data/codingProfiles";
import { HiOutlineExternalLink, HiOutlineBadgeCheck } from "react-icons/hi";
import {
  SiGeeksforgeeks,
  SiLeetcode,
  SiGithub,
  SiCodechef,
  SiCodeforces,
  SiHackerrank,
} from "react-icons/si";

function getPlatformIcon(id) {
  if (id === "gfg") return <SiGeeksforgeeks className="text-[#2F8D46]" size={24} />;
  if (id === "leetcode") return <SiLeetcode className="text-[#FFA116]" size={24} />;
  if (id === "codechef") return <SiCodechef className="text-[#A57C00]" size={24} />;
  if (id === "codeforces") return <SiCodeforces className="text-[#3182CE]" size={24} />;
  if (id === "hackerrank") return <SiHackerrank className="text-[#2EC866]" size={24} />;
  return <SiGithub className="text-white" size={24} />;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function CodingProfiles() {
  return (
    <>
      <div className="divider" />

      <section id="coding-profiles" className="section relative overflow-hidden">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full pointer-events-none opacity-5 blur-3xl"
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
            className="mb-12"
          >
            <p className="section-label">Competitive Programming</p>
            <h2 className="section-title">Coding Profiles & Problem Solving</h2>
            <p className="section-subtitle">
              Consistent algorithmic practice, Data Structures mastery, and open-source contributions across coding platforms.
            </p>
          </motion.div>

          {/* Profiles Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-3 gap-6 items-stretch"
          >
            {codingProfiles.map((profile) => {
              const platformIcon = getPlatformIcon(profile.id);

              return (
                <motion.div
                  key={profile.id}
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="glass rounded-2xl p-6 border border-white/5 hover:border-emerald-500/30
                             flex flex-col h-full group relative overflow-hidden transition-all duration-300 shadow-xl"
                >
                  {/* Inner ambient glow on hover */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-16 -right-16 w-36 h-36 rounded-full pointer-events-none opacity-0
                               group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                    style={{ background: profile.glow }}
                  />

                  {/* Header Row */}
                  <div className="flex items-center justify-between gap-3 mb-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all">
                        {platformIcon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {profile.name}
                        </h3>
                        <p className="text-xs text-[#94A3B8] font-mono">
                          {profile.handle}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                      {profile.badge}
                    </span>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 p-3.5 rounded-xl bg-white/4 border border-white/6 mb-5 relative z-10">
                    {profile.stats.map((st) => (
                      <div key={st.label} className="text-center">
                        <span className="block text-sm font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                          {st.value}
                        </span>
                        <span className="text-[10px] text-[#64748B] font-medium leading-tight">
                          {st.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
                    {profile.skills.map((sk) => (
                      <span
                        key={sk}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-[10px] text-[#94A3B8] font-medium"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-white/8 mt-auto flex items-center justify-between relative z-10">
                    <span className="text-[11px] text-[#64748B] flex items-center gap-1">
                      <HiOutlineBadgeCheck className="text-emerald-400" size={15} /> Verified Profile
                    </span>

                    <a
                      href={profile.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold hover:text-emerald-300 transition-colors cursor-pointer"
                    >
                      View Profile
                      <HiOutlineExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>
    </>
  );
}

export default CodingProfiles;
