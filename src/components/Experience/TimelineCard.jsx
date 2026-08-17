import { motion } from "framer-motion";

// Type badge config — maps role patterns to display types
function getEntryType(role) {
  const r = role.toLowerCase();
  if (r.includes("lead") || r.includes("developer") || r.includes("engineer")) return "work";
  return "education";
}

const TYPE_STYLES = {
  freelance:   { dot: "#38BDF8", badge: "bg-sky-500/15 text-sky-400 border-sky-500/25",                label: "Freelance Client Work" },
  work:        { dot: "#10B981", badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",     label: "Work" },
  education:   { dot: "#06B6D4", badge: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",             label: "Education" },
  open_source: { dot: "#00F5A0", badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",   label: "Open Source" },
  training:    { dot: "#14B8A6", badge: "bg-teal-500/15 text-teal-400 border-teal-500/25",             label: "Training" },
};

function TimelineCard({ item, index }) {
  const type  = item.type ?? "work";
  const style = TYPE_STYLES[type] ?? TYPE_STYLES.work;

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}       // Small x offset — no overflow risk
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="relative pb-10 last:pb-0"
    >
      {/* Timeline dot — absolutely positioned to sit on the vertical line */}
      <div
        aria-hidden="true"
        className="absolute top-7 w-3 h-3 rounded-full border-2 border-[#06090E] z-10
                   -left-[2.375rem] lg:-left-[2.875rem]"
        style={{
          background: style.dot,
          boxShadow: `0 0 12px ${style.dot}80`,
        }}
      />

      {/* Card */}
      <motion.div
        whileHover={{ x: 4, transition: { duration: 0.2 } }}
        className="glass rounded-2xl p-5 sm:p-7 border border-white/5 hover:border-emerald-500/20
                   transition-colors duration-300 max-w-2xl"
      >
        {/* Top row: duration + type badge */}
        <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
          <p className="text-emerald-400 text-sm font-medium">{item.duration}</p>
          <span
            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${style.badge}`}
          >
            {style.label}
          </span>
        </div>

        {/* Role */}
        <h3 className="text-xl font-bold leading-tight mb-1">{item.role}</h3>

        {/* Company */}
        <p className="text-[#94A3B8] text-sm font-medium mb-5">{item.company}</p>

        {/* Bullet points */}
        <ul className="space-y-2.5">
          {item.description.map((point, i) => (
            <li key={i} className="flex gap-3 items-start text-sm text-[#94A3B8] leading-relaxed">
              <span className="text-emerald-400 mt-0.5 flex-shrink-0">▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default TimelineCard;