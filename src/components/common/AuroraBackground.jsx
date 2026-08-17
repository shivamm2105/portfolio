/**
 * Premium Tech Animated Glow + Vignette Linear Grid Background.
 * - Layer 1: Three hardware-accelerated floating ambient glows (emerald, cyan, and mint)
 *            that slowly move and scale for organic visual depth.
 * - Layer 2: High-tech linear-style grid pattern, visible only on tablets/desktop,
 *            with center vignette mask to fade lines near the edges.
 * - Completely optimized: Uses CSS transform animations for GPU acceleration.
 */
function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "#06090E",
        overflow: "hidden",
      }}
    >
      {/* ── Layer 1: Animated GPU-Accelerated Depth Glows ── */}
      {/* Top Left soft emerald ambient glow */}
      <div
        className="animate-float-emerald"
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
          filter: "blur(120px)",
          willChange: "transform",
        }}
      />
      
      {/* Middle Right soft cyan ambient glow */}
      <div
        className="animate-float-cyan"
        style={{
          position: "absolute",
          top: "30%",
          right: "-10%",
          width: "48vw",
          height: "48vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
          willChange: "transform",
        }}
      />

      {/* Bottom Left soft mint ambient glow */}
      <div
        className="animate-float-mint"
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "42vw",
          height: "42vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 245, 160, 0.05) 0%, transparent 70%)",
          filter: "blur(100px)",
          willChange: "transform",
        }}
      />

      {/* ── Layer 2: High-Tech Linear Grid Pattern Overlay with Vignette Fading ── */}
      <div
        className="hidden md:block"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.02) 1px, transparent 1px),
            linear-gradient(to right, rgba(16, 185, 129, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(circle at center, black 30%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 90%)",
          opacity: 0.85,
        }}
      />

      {/* Subtle bottom fade to transition cleanly into the footer */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "15vh",
          background: "linear-gradient(to top, #06090E 0%, transparent 100%)",
        }}
      />
    </div>
  );
}

export default AuroraBackground;
