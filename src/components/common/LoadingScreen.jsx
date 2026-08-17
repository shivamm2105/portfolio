import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  // Smoothly increment loading progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Snappy increments that slow down near the end (realistic load feeling)
        const increment = Math.max(1, Math.floor((100 - prev) * 0.15));
        return prev + increment;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 w-full h-full bg-[#0A0A0A] z-[9999] flex flex-col items-center justify-center select-none overflow-hidden"
    >
      {/* Dynamic pulsing circular ambient glow */}
      <motion.div
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
        className="absolute w-[350px] h-[350px] rounded-full pointer-events-none blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.25) 0%, rgba(6,182,212,0.18) 50%, transparent 70%)",
        }}
      />

      {/* Main Logo Content */}
      <div className="relative flex flex-col items-center gap-6 z-10">
        
        {/* Pulsing Shivam.dev Logo */}
        <motion.div
          animate={{
            scale: [0.98, 1.02, 0.98],
            filter: ["brightness(0.9)", "brightness(1.1)", "brightness(0.9)"],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-4xl md:text-5xl font-extrabold tracking-tighter gradient-text select-none cursor-default font-sans"
        >
          Shivam.dev
        </motion.div>

        {/* Premium Slim Loading Bar */}
        <div className="w-48 h-[2px] rounded-full bg-white/[0.04] border border-white/5 overflow-hidden relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.1 }}
            className="absolute left-0 top-0 bottom-0 h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #10B981, #00F5A0)",
              boxShadow: "0 0 10px rgba(16,185,129,0.6)",
            }}
          />
        </div>

        {/* Loading text feedback */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.2 }}
          className="text-[10px] text-white tracking-[0.3em] uppercase mt-1 font-semibold"
        >
          Loading Systems
        </motion.p>

      </div>
    </motion.div>
  );
}

export default LoadingScreen;
