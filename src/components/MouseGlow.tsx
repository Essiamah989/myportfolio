"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

export function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 200, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset position by half the orb size (e.g. 150px) to center it on the cursor
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Primary Lavender Glowing Orb */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-[#E879F9]/10 blur-[120px] glow-orb"
        style={{
          x: glowX,
          y: glowY,
        }}
      />
      {/* Secondary Soft Purple Glow */}
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full bg-[#C084FC]/8 blur-[100px] glow-orb"
        style={{
          x: glowX,
          y: glowY,
        }}
      />
    </div>
  );
}
