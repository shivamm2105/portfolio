import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiTerminal, HiSparkles } from "react-icons/hi";

const COMMAND_MAP = {
  help: [
    "Available Commands:",
    "  • skills    - View core engineering stack & tools",
    "  • projects  - Jump to featured full-stack projects",
    "  • freelance - View real client projects & commercial apps 🚀",
    "  • certs     - View 21+ verified domain certifications",
    "  • contact   - Get direct email & social links",
    "  • sudo hire - Unlock priority candidate contact mode 🚀",
    "  • whoami    - Display visitor session identity",
    "  • clear     - Clear terminal buffer",
  ],
  skills: [
    "⚡ Shivam's Engineering Tech Stack:",
    "  [Backend]  : Core Java, Spring Boot, REST APIs, Microservices, Node.js, Express.js",
    "  [Frontend] : React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS",
    "  [Database] : MongoDB, MySQL, Relational Database Design",
    "  [Tools]    : Git, GitHub, VS Code, Antigravity, Postman",
  ],
  freelance: [
    "🚀 Shivam's Commercial Client Work & Projects (Jan 2026 - Present):",
    "  • Restaurant Management System with Custom Admin Panel & Menu Control",
    "  • E-Scooty Showroom & Inventory Management Platform for EV Sellers",
    "  • Digital Community Library Management System for Cataloging & Loans",
  ],
  whoami: [
    "👤 Hello Guest Visitor / Engineering Recruiter!",
    "Welcome to Shivam Chaudhary's interactive portfolio terminal.",
    "Status: Prep for Govt MCA | Freelance Full-Stack Developer",
  ],
  contact: [
    "📬 Contact Coordinates:",
    "  • Email    : shivamchaudhary2105@gmail.com",
    "  • Phone    : +91 6306925215",
    "  • GitHub   : https://github.com/shivamm2105",
    "  • LinkedIn : https://www.linkedin.com/in/shivamch21/",
    "  • Location : Lucknow, Uttar Pradesh, India",
  ],
};

const MATRIX_STREAMS = [
  "01001000 01000001 01000011 01001011 ⚡ JAVA_V21_CORE",
  "SPRING_BOOT_MICROSERVICES_API_ROUTER_ACTIVE",
  "01010011 01001000 01001001 01010110 01000001 01001101",
  "REACT_V18_HOOKS_TAILWIND_SHADCN_AURORA_GLOW",
  "MONGODB_CLUSTER_CONNECTED_REDIS_CACHE_READY",
  "01000011 01001111 01000100 01000101 ⚡ SHIVAM_DEV_OS",
];

function Terminal() {
  // bootPhase: 'raining' -> 'transitioning' -> 'ready'
  const [bootPhase, setBootPhase] = useState("raining");
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Phase 1 -> Phase 2 -> Phase 3 Boot Sequence Lifecycle
  useEffect(() => {
    // 2.6s: Trigger Cyber Glitch Sweep Transition
    const t1 = setTimeout(() => {
      setBootPhase("transitioning");
    }, 2600);

    // 3.2s: Clear Rain & Init Typewriter Handshake
    const t2 = setTimeout(() => {
      setBootPhase("ready");
      setHistory([
        { type: "sys", text: "shivam@dev:~$ > decrypting_profile..." },
        { type: "success", text: "▶ [MATCH FOUND]: Shivam Chaudhary | Full Stack Engineer 🟢" },
        { type: "info", text: "shivam@dev:~$ echo \"Welcome to my Portfolio! 🚀\"" },
        { type: "sys", text: "Type 'help' or click any command pill below to execute..." },
      ]);
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Internal terminal container scroll (never scrolls browser window)
  useEffect(() => {
    if (terminalBodyRef.current && bootPhase === "ready") {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history, bootPhase]);

  const executeCommand = (cmd) => {
    if (bootPhase !== "ready") return;
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newLogs = [{ type: "cmd", text: `shivam@dev:~$ ${cmd}` }];

    if (trimmed === "clear") {
      setHistory([
        { type: "sys", text: "Terminal buffer cleared." },
        { type: "info", text: "Type 'help' to view available commands." },
      ]);
      setInputVal("");
      return;
    } else if (trimmed === "projects") {
      newLogs.push({ type: "success", text: "Navigating to Projects section..." });
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    } else if (trimmed === "certs" || trimmed === "certifications") {
      newLogs.push({ type: "success", text: "Navigating to Certifications & Achievements..." });
      document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" });
    } else if (trimmed === "sudo hire" || trimmed === "hire") {
      newLogs.push({ type: "highlight", text: "🚀 ACCESS GRANTED: Unlocking candidate priority contact mode!" });
      newLogs.push({ type: "success", text: "Redirecting to Contact form..." });
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 600);
    } else if (COMMAND_MAP[trimmed]) {
      COMMAND_MAP[trimmed].forEach((line) => {
        newLogs.push({ type: "out", text: line });
      });
    } else {
      newLogs.push({
        type: "err",
        text: `zsh: command not found: ${trimmed}. Type 'help' for command list.`,
      });
    }

    setHistory((prev) => [...prev, ...newLogs]);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      if (commandHistory.length === 0) return;
      e.preventDefault();
      const nextIdx = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
      setHistoryIndex(nextIdx);
      setInputVal(commandHistory[commandHistory.length - 1 - nextIdx] || "");
    } else if (e.key === "ArrowDown") {
      if (historyIndex <= 0) {
        setHistoryIndex(-1);
        setInputVal("");
      } else {
        e.preventDefault();
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx] || "");
      }
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto lg:mx-0 glass rounded-2xl border border-emerald-500/30 overflow-hidden shadow-[0_0_35px_rgba(16,185,129,0.15)] flex flex-col relative">
      {/* ── Top Window Bar (Mac Style) ────────────────────────────── */}
      <div className="px-4 py-3 bg-[#06090E]/90 border-b border-white/10 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
        </div>

        <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] font-mono">
          <HiTerminal className="text-emerald-400" size={14} />
          <span>shivam@dev:~ (bash)</span>
        </div>

        <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span>{bootPhase === "ready" ? "ONLINE" : "BOOTING"}</span>
        </div>
      </div>

      {/* ── Terminal Body ────────────────────────────────────────── */}
      <div
        ref={terminalBodyRef}
        className="p-4 sm:p-5 h-72 sm:h-80 overflow-y-auto font-mono text-xs leading-relaxed bg-black/75 flex flex-col gap-1 cursor-text relative overflow-hidden"
        onClick={() => inputRef.current?.focus()}
      >
        {/* 🌧️ PHASE 1: Hacker Matrix Code Rain Effect */}
        {bootPhase !== "ready" && (
          <div className="absolute inset-0 p-4 flex flex-col justify-around bg-black/95 text-emerald-400 font-mono text-[11px] select-none z-10">
            {MATRIX_STREAMS.map((stream, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: [0.3, 0.9, 0.4],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: idx * 0.2,
                }}
                className="tracking-widest whitespace-nowrap overflow-hidden text-emerald-400/80 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
              >
                {stream}
              </motion.div>
            ))}
          </div>
        )}

        {/* ⚡ PHASE 2: Cyber Glitch Sweep Transition Beam */}
        <AnimatePresence>
          {bootPhase === "transitioning" && (
            <motion.div
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute left-0 right-0 h-12 bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent z-20 pointer-events-none border-b-2 border-emerald-300 shadow-[0_0_20px_#10B981]"
            />
          )}
        </AnimatePresence>

        {/* 🚀 PHASE 3: Interactive Terminal Output & Typewriter */}
        {bootPhase === "ready" && (
          <>
            {history.map((log, index) => {
              let textStyle = "text-[#94A3B8]";
              if (log.type === "cmd") textStyle = "text-white font-semibold";
              if (log.type === "sys") textStyle = "text-emerald-400/90 font-medium";
              if (log.type === "info") textStyle = "text-cyan-400";
              if (log.type === "success") textStyle = "text-emerald-300 font-semibold";
              if (log.type === "highlight") textStyle = "text-amber-300 font-bold";
              if (log.type === "err") textStyle = "text-red-400";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={textStyle}
                >
                  {log.text}
                </motion.div>
              );
            })}

            {/* Input Prompt Row */}
            <div className="flex items-center gap-2 pt-1 text-white">
              <span className="text-emerald-400 font-bold select-none">shivam@dev:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow bg-transparent text-white focus:outline-none font-mono text-xs caret-emerald-400"
                autoCapitalize="none"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </>
        )}
      </div>

      {/* ── Quick Command Pills Bar ──────────────────────────────── */}
      <div className="p-3 bg-[#06090E] border-t border-white/10 flex flex-wrap items-center gap-2 z-20">
        <span className="text-[10px] text-[#64748B] font-mono mr-1 select-none flex items-center gap-1">
          <HiSparkles className="text-emerald-400" size={12} /> Quick:
        </span>

        {["help", "skills", "projects", "certs", "sudo hire", "clear"].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => executeCommand(cmd)}
            disabled={bootPhase !== "ready"}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium transition-all cursor-pointer select-none ${
              cmd === "sudo hire"
                ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/35"
                : "glass border border-white/8 text-[#94A3B8] hover:text-white hover:border-emerald-500/30 hover:bg-white/5"
            }`}
          >
            $ {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Terminal;
