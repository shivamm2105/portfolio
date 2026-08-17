import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiSearch,
  HiX,
  HiOutlineUser,
  HiOutlineCode,
  HiOutlineFolder,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineMail,
  HiOutlineDownload,
  HiOutlineClipboardCheck,
  HiOutlineExternalLink,
  HiOutlineSparkles,
} from "react-icons/hi";
import { SiGithub, SiLeetcode, SiCodechef, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

const COMMAND_ITEMS = [
  // Navigation
  { id: "nav-about", label: "Go to About Me", category: "Navigation", icon: <HiOutlineUser className="text-emerald-400" size={18} />, action: () => scrollToSection("about") },
  { id: "nav-skills", label: "Go to Skills & Engineering", category: "Navigation", icon: <HiOutlineCode className="text-cyan-400" size={18} />, action: () => scrollToSection("skills") },
  { id: "nav-projects", label: "Go to Projects", category: "Navigation", icon: <HiOutlineFolder className="text-teal-400" size={18} />, action: () => scrollToSection("projects") },
  { id: "nav-certs", label: "Go to Certifications", category: "Navigation", icon: <HiOutlineAcademicCap className="text-emerald-400" size={18} />, action: () => scrollToSection("certifications") },
  { id: "nav-coding", label: "Go to Coding Profiles", category: "Navigation", icon: <HiOutlineSparkles className="text-amber-400" size={18} />, action: () => scrollToSection("coding-profiles") },
  { id: "nav-exp", label: "Go to Experience", category: "Navigation", icon: <HiOutlineBriefcase className="text-purple-400" size={18} />, action: () => scrollToSection("experience") },
  { id: "nav-contact", label: "Go to Contact", category: "Navigation", icon: <HiOutlineMail className="text-emerald-400" size={18} />, action: () => scrollToSection("contact") },

  // Direct Actions
  { id: "action-resume", label: "Download Resume (PDF)", category: "Quick Actions", icon: <HiOutlineDownload className="text-emerald-400" size={18} />, action: () => downloadResume() },
  { id: "action-copy-email", label: "Copy Email Address", category: "Quick Actions", icon: <HiOutlineClipboardCheck className="text-cyan-400" size={18} />, action: (copyCb) => copyEmail(copyCb) },

  // External Profiles
  { id: "ext-github", label: "Open GitHub (@shivamm2105)", category: "External Profiles", icon: <SiGithub className="text-white" size={18} />, action: () => window.open("https://github.com/shivamm2105", "_blank") },
  { id: "ext-leetcode", label: "Open LeetCode (@Shivamm21)", category: "External Profiles", icon: <SiLeetcode className="text-amber-400" size={18} />, action: () => window.open("https://leetcode.com/u/Shivamm21/", "_blank") },
  { id: "ext-gfg", label: "Open GeeksforGeeks (@shivamm21)", category: "External Profiles", icon: <SiGeeksforgeeks className="text-emerald-500" size={18} />, action: () => window.open("https://www.geeksforgeeks.org/user/shivamm21/", "_blank") },
  { id: "ext-codechef", label: "Open CodeChef (@shivamm21)", category: "External Profiles", icon: <SiCodechef className="text-amber-600" size={18} />, action: () => window.open("https://www.codechef.com/users/shivamm21", "_blank") },
  { id: "ext-codeforces", label: "Open Codeforces (@shivamm21)", category: "External Profiles", icon: <SiCodeforces className="text-blue-400" size={18} />, action: () => window.open("https://codeforces.com/profile/shivamm21", "_blank") },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function downloadResume() {
  const a = document.createElement("a");
  a.href = "/resume.pdf";
  a.download = "Shivam_Chaudhary_Resume.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function copyEmail(setCopied) {
  navigator.clipboard.writeText("shivamchaudhary2105@gmail.com");
  if (setCopied) setCopied(true);
}

function CommandPalette({ isOpen, setIsOpen }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedNotification, setCopiedNotification] = useState(false);
  const inputRef = useRef(null);

  // Filter items
  const filteredItems = COMMAND_ITEMS.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  // Toggle Listener (Ctrl+K or Cmd+K or Esc)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  // Lock body scroll & focus input on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
      setSelectedIndex(0);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Keyboard navigation within list
  const handleKeyDownInInput = (e) => {
    if (filteredItems.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      executeItem(filteredItems[selectedIndex]);
    }
  };

  const executeItem = (item) => {
    if (!item) return;
    if (item.id === "action-copy-email") {
      item.action(setCopiedNotification);
      setTimeout(() => {
        setCopiedNotification(false);
        setIsOpen(false);
      }, 1500);
    } else {
      item.action();
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[200] flex items-start justify-center pt-20 px-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl bg-[#06090E]/95 backdrop-blur-2xl border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden cursor-default flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Search Input Bar */}
            <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-[#06090E]/90">
              <HiSearch className="text-emerald-400 flex-shrink-0" size={22} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDownInInput}
                placeholder="Type a command or search (e.g. Projects, Resume, GitHub)..."
                className="w-full bg-transparent text-white placeholder-[#64748B] text-sm focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="text-[#64748B] hover:text-white transition-colors"
                >
                  <HiX size={16} />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-[#94A3B8] font-mono select-none">
                ESC
              </kbd>
            </div>

            {/* Notification Toast for Copy Action */}
            {copiedNotification && (
              <div className="px-4 py-2 bg-emerald-500/20 border-b border-emerald-500/30 text-emerald-300 text-xs text-center font-semibold flex items-center justify-center gap-2">
                <HiOutlineClipboardCheck size={16} />
                Copied shivamchaudhary2105@gmail.com to clipboard!
              </div>
            )}

            {/* Command Results List */}
            <div className="max-h-[360px] overflow-y-auto p-2">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-xs text-[#64748B]">
                  No matching commands found for "{query}".
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const active = index === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => executeItem(item)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all duration-150 cursor-pointer select-none mb-1 ${
                        active
                          ? "bg-emerald-500/15 border border-emerald-500/30 text-white shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                          : "text-[#94A3B8] hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center glass border ${
                            active ? "border-emerald-500/40" : "border-white/5"
                          }`}
                        >
                          {item.icon}
                        </div>
                        <span className="text-xs font-semibold">{item.label}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-[#64748B] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5">
                          {item.category}
                        </span>
                        {item.category === "External Profiles" && (
                          <HiOutlineExternalLink className="text-[#64748B]" size={14} />
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Modal Bottom Keyboard Shortcuts Guide */}
            <div className="p-3 border-t border-white/10 bg-[#06090E] flex items-center justify-between text-[11px] text-[#64748B] px-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-white font-mono">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-white font-mono">↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-white font-mono">↵</kbd>
                  Select
                </span>
              </div>

              <div className="flex items-center gap-1">
                <HiOutlineSparkles className="text-emerald-400" size={14} />
                <span>Shivam Chaudhary • Portfolio Command Center</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;
