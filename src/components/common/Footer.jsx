import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaTelegramPlane, FaInstagram, FaWhatsapp } from "react-icons/fa";
import about from "../../data/about";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative bg-[#06090E] py-12 px-6 md:px-8 border-t border-white/5 overflow-hidden">
      {/* Decorative subtle top radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full pointer-events-none opacity-[0.08] blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.8) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ─── Top Row: Logo + Tags vs Social Handles ────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-10 text-center md:text-left"
        >
          {/* Left Column: Logo & Tagline */}
          <div className="flex flex-col gap-2 max-w-sm">
            <a
              href="#"
              className="text-2xl font-bold gradient-text tracking-tight select-none self-center md:self-start"
            >
              Shivam.dev
            </a>
            <p className="text-sm text-[#64748B] leading-relaxed mt-1">
              Building scalable web applications and modern user experiences.
            </p>
          </div>

          {/* Right Column: Interactive Social Icons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            {[
              {
                icon: <FaGithub size={18} />,
                href: about.github || "https://github.com/shivamm2105",
                label: "GitHub Profile",
                borderGlow: "hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400",
              },
              {
                icon: <FaLinkedin size={18} />,
                href: about.linkedin || "https://www.linkedin.com/in/shivamch21/",
                label: "LinkedIn Profile",
                borderGlow: "hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 hover:text-emerald-400",
              },
              {
                icon: <FaInstagram size={18} />,
                href: about.instagram || "https://www.instagram.com/codebyshivam/",
                label: "Instagram CodeByShivam",
                borderGlow: "hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-pink-400",
              },
              {
                icon: <FaWhatsapp size={19} />,
                href: about.whatsapp || "https://wa.me/916306925215?text=Hi%20Shivam,%20I%20visited%20your%20portfolio!",
                label: "WhatsApp Direct",
                borderGlow: "hover:border-green-500/40 hover:bg-green-500/10 hover:text-green-400",
              },
              {
                icon: <HiOutlineMail size={18} />,
                href: `mailto:${about.email || "shivamm2105@gmail.com"}`,
                label: "Email Action",
                borderGlow: "hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400",
              },
              {
                icon: <FaTelegramPlane size={18} />,
                href: about.telegram || "https://t.me/shivamm2105",
                label: "Telegram Account",
                borderGlow: "hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-11 h-11 rounded-xl flex items-center justify-center glass border border-white/5 text-[#94A3B8]
                           transition-all duration-300 ${social.borderGlow}`}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ─── Bottom Row: Divider + Copyright ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {/* Subtle horizontal gradient divider */}
          <div
            aria-hidden="true"
            className="w-full h-px"
            style={{
              background: "linear-gradient(to right, transparent, rgba(16,185,129,0.2) 20%, rgba(6,182,212,0.2) 80%, transparent)",
            }}
          />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-xs text-[#475569] tracking-wide select-none">
              &copy; {currentYear} Shivam Chaudhary. All rights reserved.
            </p>
            <p className="text-xs text-[#475569] font-medium tracking-wider select-none">
              Designed & Engineered with Passion
            </p>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}

export default Footer;
